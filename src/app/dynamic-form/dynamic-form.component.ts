import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DynamicFormFieldModel } from '../dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm!: FormGroup
  dynamicFormFields!: DynamicFormFieldModel[]

  constructor(private formBuilder: FormBuilder, private http: HttpClient){}

  ngOnInit(){
    
    this.dynamicForm =  this.formBuilder.group({})
      
    /*TODO - REQUEST DATA*/
    this.dynamicFormFields = [
      {
          "field": "name",
          "label": "Name",
          "type": "text",
          "hidden": "false",
          "mandatory": true
      },
      {
          "field": "email",
          "label": "Email",
          "type": "text",
          "hidden": "false",
          "mandatory": true
      },
      {
          "field": "confirm",
          "label": "Checkbox with confirmation",
          "type": "check",
          "hidden": "false"       
      },
      {
          "field": "hiddenField",
          "label": "",
          "type": "text",
          "hidden": "true",
          "mandatory": false
      }
  ]
    this.dynamicFormFields.forEach(field => {
      const formControl = this.formBuilder.control(null, field.mandatory ? Validators.required : null)
      this.dynamicForm.addControl(field.field, formControl )
    })
  }
  onSubmit(){
    const isValid = this.dynamicForm.valid
    
    if(isValid){
      console.log(this.dynamicForm.value)
    }
  }
}
