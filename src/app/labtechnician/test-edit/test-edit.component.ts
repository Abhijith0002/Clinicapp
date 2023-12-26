import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.scss']
})
export class TestEditComponent implements OnInit {

  constructor(public labTechniciantService:LabtechnicianService ,public router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(
    form:NgForm){
      console.log(form.value)
      this.editTests(form);
    }
    
    editTests(form:NgForm){
      console.log("editing.....")
      this.labTechniciantService.updateTest(form.value)
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
