import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctorspec } from 'src/app/shared/models/doctorspec';
import { AdminService } from 'src/app/shared/services/admin.service';
import { forkJoin, of, switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

// Custom validator function for age (more than 18 years old)
const ageValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return null; // If no value is provided, let other validators handle the empty field
  }

  const today = new Date();
  const birthDate = new Date(control.value);

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 < 18 ? { age: true } : null;
  }

  return age < 18 ? { age: true } : null;
};

// Custom validator function for date of joining (today or tomorrow only)
const dateOfJoiningValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return null; // If no value is provided, let other validators handle the empty field
  }

  const selectedDate = new Date(control.value);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Set hours, minutes, seconds, and milliseconds to zero for date-only comparison
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  return selectedDate >= today && selectedDate <= tomorrow ? null : { dateOfJoining: true };
};

// Custom validator function for specialization (only letters)
const specializationValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return null; // If no value is provided, let other validators handle the empty field
  }

  return /^[a-zA-Z ]*$/.test(control.value) ? null : { specialization: true };
};

// Custom validator function for consultation fee (only numbers)
const consultationFeeValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return null; // If no value is provided, let other validators handle the empty field
  }

  return /^\d+$/.test(control.value) ? null : { consultationFee: true };
};
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  
  updateForm!: FormGroup;
   roleOptions: { value: string, label: string }[] = []; // Define the roleOptions array
   isDoctor: boolean = false; // Flag to check if the role is Doctor
   @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;

  // ...

  togglePasswordVisibility() {
    const passwordField = this.passwordInput.nativeElement;
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }


   constructor(public fb : FormBuilder, public adminService : AdminService, public router : Router,private toastr:ToastrService) { 

    
    this.roleOptions = [
      { value: 'Doctor', label: 'Doctor' },
      { value: 'Lab Technician', label: 'Lab Technician' },
      { value: 'Pharmacist', label: 'Pharmacist' },
      { value: 'Receptionist', label: 'Receptionist' },
      // Add other roles as needed
    ];
    this.updateForm = this.fb.group({
      id:[''],
      name: [
  '',
  [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50),
    Validators.pattern(/^[a-zA-Z ]*$/),
  ]
],
date_of_birth: ['', [Validators.required, ageValidator]],
age: [''],
gender: ['', Validators.required],
role: ['', Validators.required],
phone_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
date_of_joining: ['', [Validators.required, dateOfJoiningValidator]],
username: [
  '',
  [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^[a-zA-Z0-9._]+$/),
  ]
],
password: [
  '',
  [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
    ),
  ]
],
is_active: [false],
specialization: [{ value: '', disabled: true }, [Validators.required, specializationValidator]],
consultation_fee: [{ value: '', disabled: true }, [Validators.required, consultationFeeValidator]]
});

  // Subscribe to changes in the 'role' control
    this.updateForm.get('role')?.valueChanges.subscribe((role) => {
      this.isDoctor = role === 'Doctor';
    });
    // Listen for changes in the date_of_birth field
    this.updateForm.get('date_of_birth')?.valueChanges.subscribe((dateOfBirth) => {
      if (dateOfBirth) {
        const age = this.calculateAge(dateOfBirth);
        this.updateForm.patchValue({ age: age });
      }
    });

    
  }
  // Calculate age based on the provided date of birth
calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}


  ngOnInit(): void {
    this.roleOptions = [
    { value: 'Doctor', label: 'Doctor' },
    { value: 'Lab Technician', label: 'Lab Technician' },
    { value: 'Pharmacist', label: 'Pharmacist' },
    { value: 'Receptionist', label: 'Receptionist' },
    // Add other roles as needed
  ];
  
  this.updateForm.patchValue(this.adminService.formstaffData)
  // Fetch doctor data based on staff id
  // Fetch doctor data based on staff id
  if (this.isDoctor) {
    const staffId = this.adminService.formstaffData.id;

    this.adminService.bindListDocSpec();

    this.adminService.staffupdate(staffId).pipe(
      switchMap(staffData => this.adminService.getDoctorIdByStaffId(staffId)),
      switchMap(doctorId => {
        const doctorSpec = this.adminService.getDoctorspecByStaffId(staffId);
        return of(doctorSpec); // Wrap the result in an observable
      })
    ).subscribe(
      (doctorSpec: Doctorspec | undefined) => {
        if (doctorSpec) {
          this.updateForm.patchValue({
            specialization: doctorSpec.specialization || '',
            consultation_fee: doctorSpec.consultation_fee || ''
          });
        }
      },
      (error: any) => {
        console.error('Error fetching staff and doctor data:', error);
        // Handle errors here
      }
    );
  }
}

onSubmit() {
  if (this.updateForm.valid) {
    // You can handle form submission here
    console.log(this.updateForm.value);
    this.updateStaff(this.updateForm); // Pass this.addForm, not form  
  } else {
    // Mark all fields as touched to display validation errors
    this.markFormGroupTouched(this.updateForm);
  }
}


updateStaff(formGroup: FormGroup) {
  console.log('updating ......');
  const staffData = formGroup.value;

  // Make an API call to fetch the doctor_id based on staff_id
  this.adminService.getDoctorIdByStaffId(staffData.id).subscribe(
    (doctorId: any) => {
      // Assuming the API response provides the doctor_id

      // Create doctorSpecData using the retrieved doctor_id
      const doctorSpecData: Doctorspec = {
        doctor_id: doctorId,
        doctor_name: staffData.name,
        specialization: staffData.specialization,
        consultation_fee: staffData.consultation_fee,
        staff: staffData.id,
      };

      // Update staff and doctor specialization only if the role is Doctor
      if (staffData.role === 'Doctor') {
        console.log("im in")
        forkJoin({
          staffUpdate: this.adminService.updateStaffs(staffData),
          doctorSpecUpdate: this.adminService.updateDocSpec(doctorSpecData),
        }).subscribe(
          (results) => {
            console.log(results);
            this.resetForm(formGroup);
            this.toastr.success("edited successfully");
            this.router.navigate(['admin/list']);
          },
          (error) => {
            console.error(error);
            this.toastr.success("edited successfully");
            this.router.navigate(['admin/list']);
            // Handle errors here
          }
        );
      } else {
        // If the role is not Doctor, only update staff information
        this.adminService.updateStaffs(staffData).subscribe(
          (result) => {
            console.log(result);
            console.log(this.updateForm.value);

            this.resetForm(formGroup);
            this.router.navigate(['admin/list']);
            this.toastr.success("edited successfully");
          },
          (error) => {
            console.error(error);
            // Handle errors here
          }
        );
      }
    },
    (error) => {
      console.error('Error fetching doctor_id:', error);
      // Handle errors here
    }
  );
}

//reset form after each records
resetForm(formGroup: FormGroup) {
  if (formGroup != null) {
    formGroup.reset();
  }
}

markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}
}