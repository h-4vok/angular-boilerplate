import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fcm109',
  templateUrl: './fcm109.component.html',
  styleUrls: ['./fcm109.component.scss']
})
export class Fcm109Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  onblur = false;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required], updateOn: 'blur'
      }),
      lastName: new FormControl('', {
        validators: [Validators.required], updateOn: 'blur'
      })
    });
  }



  get user() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('OK');
  }

}
