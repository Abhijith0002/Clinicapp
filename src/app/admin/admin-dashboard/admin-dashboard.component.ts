import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }
  
    ngOnInit(): void {
  
    }
  
    logout() {
      const username = localStorage.getItem('USERNAME');
    
      if (username) {
        const userInstance: User = {
          username: username,
          password: '', // Provide an appropriate default or leave it empty
          status: 0,    // Provide an appropriate default or leave it as 0
          message: '',  // Provide an appropriate default or leave it empty
          data: {
            Token: ''    // Provide an appropriate default or leave it empty
          }
        };
    
        this.authService.logout(userInstance).subscribe(
          response => {
            console.log(response);
            localStorage.removeItem('username');
            this.router.navigate(['auth/login']);
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.error('Username is null');
      }
    }
  }
