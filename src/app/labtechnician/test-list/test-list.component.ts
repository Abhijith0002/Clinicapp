import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/shared/models/test';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
 
  p :number=1;


  constructor(public labTechniciantService:LabtechnicianService ,public router:Router) { }

  ngOnInit(): void {
    this.labTechniciantService.testLists();
  }

  updateTests(p:Test){
    console.log(p);
    this.populateTestsData(p);
    this.router.navigate(['labtechnician/lab_edit',p.id])
  }
  populateTestsData(p: Test) {
    this.labTechniciantService.formTestData= Object.assign({},p)
  }

  deleteTest(id: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.labTechniciantService.deleteTest(id).subscribe((response)=>{
        console.log(response);
        this.labTechniciantService.testLists();
      },(error)=>{
        console.log(error);
      })

      }
  }
}