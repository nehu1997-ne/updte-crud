import { Component, OnInit } from '@angular/core';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-uregistration',
  templateUrl: './uregistration.component.html',
  styleUrls: ['./uregistration.component.css']
})
export class UregistrationComponent implements OnInit {

  Employees=[];
  formdata:FormGroup;
  submitted = false;
  btnText="Submit"
   constructor( private formBuilder:FormBuilder) { 

   }
   ngOnInit(): void {
    if(localStorage.getItem("employees")==null)
    {
    this.Employees=[
      {"id":1,"name":"sumit","dept":"IT","gender":"MALE"},
    
      localStorage.setItem("employees",JSON.stringify(this.Employees)),
    ]
  }
else{
  let data:any;
  data=localStorage.getItem("employees")
  this.Employees=JSON.parse(data)
}


    this.formdata = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
      },);
   }
   get f() {
    return this.formdata.controls;
  }
   submit(){
debugger;
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
     console.log(this.formdata.value)
     
   //  let emp=Object.assign({},this.formdata.value);
    
   let emp={...this.formdata.value}
   if(emp.id=='')
   {
   emp["id"]=this.Employees.length+1
     this.Employees.push(emp)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
   }
   else{
     this.Employees.splice(emp.id-1,1,emp)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
     this.btnText="Submit"
   }
     this.formdata.reset()
   }
 
   DeleteEmployee(id:number){
     event?.preventDefault()
     this.Employees.splice(id-1,1)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
 
   }
 
   EditEmployee(emp:any){
     event?.preventDefault()
     this.formdata.setValue({...emp})
     this.btnText="Update"
   }
 
 }
 