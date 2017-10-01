import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './reactive-form.interface';

@Component({
  templateUrl: 'simple-form.component.html'
})
export class SimpleFormComponent implements OnInit {
  userForm: FormGroup;
  isFormValid = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            // tslint:disable-next-line:max-line-length
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', Validators.minLength(15)]
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log(value, valid);
  }
}
