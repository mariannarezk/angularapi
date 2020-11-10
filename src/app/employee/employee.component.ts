import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeform : FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  this.employeeform=this.fb.group({
     Name:[''],
     Email:[''],
     Password:['']

  });
 
  }
  OnSubmit(){
    this.http.post('https://localhost:44334/employee',this.employeeform.value).subscribe(data =>{
      console.log(data);
    })
  }

}
