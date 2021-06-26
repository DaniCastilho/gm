import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormFieldModel } from './dynamic-form-field.model';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() field!: DynamicFormFieldModel
  @Input() form!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
