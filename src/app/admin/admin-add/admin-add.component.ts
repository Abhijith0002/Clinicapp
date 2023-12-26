import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctorspec } from 'src/app/shared/models/doctorspec';
import { AdminService } from 'src/app/shared/services/admin.service';
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
    return age - 1 < 18 || age > 50 ? { age: true } : null;
  }

  return age < 18 || age > 50 ? { age: true } : null;
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
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {
  addForm!: FormGroup;
  roleOptions: { value: string, label: string }[] = []; // Define the roleOptions array

  constructor(public fb : FormBuilder, public adminService : AdminService, public router : Router, private toastr : ToastrService)  { }

  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;

  // ...

  togglePasswordVisibility() {
    const passwordField = this.passwordInput.nativeElement;
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }


  ngOnInit(): void {
    this.roleOptions = [
      { value: 'Doctor', label: 'Doctor' },
      { value: 'Lab Technician', label: 'Lab Technician' },
      { value: 'Pharmacist', label: 'Pharmacist' },
      { value: 'Receptionist', label: 'Receptionist' },
      // Add other roles as needed
    ];
    this.addForm = this.fb.group({

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

  
    // Subscribe to value changes to enable/disable fields based on the selected role
    this.addForm.get('role')?.valueChanges.subscribe((selectedRole) => {
      if (selectedRole === 'Doctor') {
        this.addForm.get('specialization')?.enable();
        this.addForm.get('consultation_fee')?.enable();
      } else {
        this.addForm.get('specialization')?.disable();
        this.addForm.get('consultation_fee')?.disable();
      }
    });

      // Listen for changes in the date_of_birth field
      this.addForm.get('date_of_birth')?.valueChanges.subscribe((dateOfBirth) => {
        if (dateOfBirth) {
          const age = this.calculateAge(dateOfBirth);
          this.addForm.patchValue({ age: age });
        }
      });

  }

  
  onSubmit() {
    if (this.addForm.valid) {
      console.log('Submitting form...');
      console.log(this.addForm.value)
      // Add a delay of 5 seconds before processing the form
      // this.addForm.disable(); // Disable the form during the delay
      console.log(this.addForm.value)
      this.delayedSubmit(this.addForm);
    } else {
      this.markFormGroupTouched(this.addForm);
    }
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

  delayedSubmit(formGroup: FormGroup) {
    // Simulate an asynchronous delay
    setTimeout(() => {
      console.log('Form submitted after delay');
      this.addStaff(formGroup);
    }, 2000); // 5-second delay
  }

  addStaff(formGroup: FormGroup) {
    this.adminService.insertStaff(formGroup.value)
      .subscribe(
        (result => {
          console.log('Staff added successfully:', result);

          // Get the added staff's ID
          const addedStaffId = result.id;

          // Now, add doctor specialization
          if (formGroup.get('role')?.value === 'Doctor') {
            const doctorSpecData = {
              specialization: formGroup.get('specialization')?.value,
              consultation_fee: formGroup.get('consultation_fee')?.value,
              staff: addedStaffId
            };

            // Create a new instance of Doctorspec and assign values
            const newDoctorSpec: Doctorspec = { ...doctorSpecData, doctor_id: 0, doctor_name: '' };

            this.adminService.insertDoctorSpec(newDoctorSpec)
              .subscribe(
                (docSpecResult) => {
                  console.log('Doctor specialization added successfully:', docSpecResult);
                  this.resetForm(formGroup);
                  this.toastr.success('Staff added successfully..');
                  this.router.navigate(['admin/list']);
                },
                (error) => {
                  console.error('Error adding doctor specialization:', error);
                  this.addForm.enable(); // Re-enable the form in case of an error
                }
              );
          } else {
            this.resetForm(formGroup);
            this.toastr.success('Staff added successfully..');
            this.router.navigate(['admin/list']);
          }
        }),
        (error) => {
          console.error('Error adding staff:', error);
          this.addForm.enable(); // Re-enable the form in case of an error
        }
      );
  }


  // ... other methods

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