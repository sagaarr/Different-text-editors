import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.css']
})
export class EditorFormComponent implements OnInit {

  ckEdit:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ckEdit = this.formBuilder.group({
      text:['', Validators.required]
    })
  }

  demo(){
    console.log(this.ckEdit.value);
  }

}
