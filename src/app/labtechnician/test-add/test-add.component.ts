import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.scss']
})
export class TestAddComponent implements OnInit {

  constructor(public labTechniciantService:LabtechnicianService ,public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(
    form:NgForm){
      console.log(form.value)
      this.addTests(form);
    }
    
    addTests(form:NgForm){
      console.log("Inserting.....")
      this.labTechniciantService.insertTest(form.value)
      .subscribe(
        (result=>{
          console.log(result);
          
          this.router.navigate(['labtechnician/lab_list'])
          this.resetForm(form);

        })
      )
    }

    resetForm(form:NgForm){
      if(form!=null){
        form.resetForm();
      }
    }


}
