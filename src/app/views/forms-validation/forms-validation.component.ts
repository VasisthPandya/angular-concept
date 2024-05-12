import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.scss']
})
export class FormsValidationComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get firstName() {return this.registerForm.get('firstName')}
  get lastName() {return this.registerForm.get('lastName')}
  get mobile() {return this.registerForm.get('mobile')}
  get email() {return this.registerForm.get('email')}
  get password() {return this.registerForm.get('password')}
  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Form submitted successfully");
      console.log(this.registerForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
