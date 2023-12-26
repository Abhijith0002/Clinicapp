import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  //FormGroup 
  //Collection Fields
  loginForm!:FormGroup; //means this field is not null
  //this variable is used to keepof whether the form has been submitted
  isSubmitted = false;
  error='';
  loginUser:User=new User()
  constructor(private formBuilder:FormBuilder, private router:Router,private authService:AuthService) { }

//lifw cycle hook
  ngOnInit(): void {
    //create a Recative form
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]

    })
    
  }
  //get controls for validation
  //getter is used to easily  access the form controls for validation purposes

  get formControls(){
    return this.loginForm.controls;
  }

  //functionality
  loginCredentials() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.error = 'Please Enter Username and Password!!';
      return;
    }
    if (this.loginForm.valid) {
      this.error = '';
      console.log(this.loginForm.value);
      this.authService.loginVerify(this.loginForm.value)
        .subscribe(
          (response) => {
            console.log(response.username);
            if (response.status === 200) {
  
              // storing the state of user in browser
              // sessionStorage object
              sessionStorage.setItem('USERNAME', response.username);
              sessionStorage.setItem('TOKEN', response.data.Token.toString());
              // Local Storage
              localStorage.setItem('USERNAME', response.username);
              localStorage.setItem('TOKEN', response.data.Token.toString());
  
              // Fetch staff details and check role
              this.authService.listOfStaffs()
                .subscribe(staffs => {
                  const staff = this.authService.getStaffByUsername(response.username);
  
                  if (staff) {
                    // Check the role and redirect accordingly
                    switch (staff.role) {
                      case 'Doctor':
                        this.router.navigate(['doctor/doctordashboard']);
                        break;
                      case 'Lab Technician':
                        this.router.navigate(['labtechnician/labdashboard']);
                        break;
                      case 'Pharmacist':
                        this.router.navigate(['pharmacist/pharmacistdashboard']);
                        break;
                      case 'Receptionist':
                        this.router.navigate(['receptionist/recepdashboard']);
                        break;
                      case 'Admin':
                        this.router.navigate(['admin/admindashboard']);
                        break;
                      default:
                        // Redirect to a default page if the role is not recognized
                        this.router.navigate(['auth/defaultDashboard']);
                    }
                  }  else {
                    // Handle the case when staff details are not found
                    this.error = 'Staff details not found for the logged-in user.';
                  }
                });
            } else {
              this.error = 'Invalid Username and Password';
            }
          },
          (error) => {
            this.error = 'Invalid Username and Password';
            console.error('error logging in:', error);
          });
    }
  }
}