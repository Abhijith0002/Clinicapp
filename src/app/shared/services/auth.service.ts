import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Staffs } from '../models/staffs';
import { Doctorspec } from '../models/doctorspec';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  staffs : Staffs[] = [];
  doctorSpec : Doctorspec[] = [];

  constructor(private httpClient : HttpClient, private router : Router) { }
    // metthod to verify username and password
    loginVerify(user: User): Observable<any> {
      const requestBody = {
        username: user.username,
        password: user.password
      };
  
      // make a post request to the login endpoint
      return this.httpClient.post(environment.apiUrl + '/api/user/login', requestBody);
      
    }
    
    // listOfStaffs():void{
    //   this.httpClient.get< Staffs[] >(environment.apiUrl + "/api/staff")
    //   .subscribe(response => this.staffs = response);
    // }

    // method to fetch list of staff
    listOfStaffs(): Observable<Staffs[]> {
      return this.httpClient.get<Staffs[]>(environment.apiUrl + "/api/staff")
        .pipe(
          tap(response => this.staffs = response),
          catchError(error => {
            console.error('Error fetching staff details:', error);
            return of([]); // return an empty array in case of an error
          })
        );
    }

    getStaffByUsername(username: string): Staffs | undefined {
      return this.staffs.find(staff => staff.username === username);
    }

    logout(user : User) : Observable<any>{
      return this.httpClient.post(environment.apiUrl + '/api/logout', user);
    }

  //   signUpVerify(user : User) : Observable<any>{
  //     const requestBody = {
  //       username: user.username,
  //       password: user.password
  //     };
  //     return this.httpClient.post(environment.apiUrl + '/api/user/signup', requestBody);
  // }

  // // create method for logout
  // public logOut(){
  //   sessionStorage.removeItem('USERNAME')
  //   sessionStorage.removeItem('TOKEN')

  //   localStorage.removeItem('USERNAME')
  //   localStorage.removeItem('TOKEN')
  //   this.router.navigate(['auth/login'])
  // }

}