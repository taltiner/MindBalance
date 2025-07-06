import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdapterService} from "../adapter/adapter.service";
import {Register} from "../models/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent {

  constructor(private _router: Router,
              private adapterService: AdapterService,) {

  }

  registerForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })

  @ViewChildren('firstName, lastName, email, password') inputRefs!: QueryList<ElementRef>;

  onRegister() {
    if(!this.registerForm.valid) {
      console.log('form invalid', this.registerForm);
      this.focusInvalidField();
      return;
    }
    const payload = this.createRegisterPayload();
    console.log('payload', payload);
    this.adapterService.register(payload);
  }

  private focusInvalidField(){
    const controls = this.registerForm.controls;
    const invalidControlKey = Object.keys(controls).find(key => controls[key].invalid);

    const element = this.inputRefs.find(ref =>
      ref.nativeElement.getAttribute('formControlName') === invalidControlKey
    );

    if (element) {
      this.registerForm.markAllAsTouched();
      element.nativeElement.focus();
    }
  }

  private createRegisterPayload(): Register {
    return {
      firstName: this.registerForm.get('firstName')?.value ?? '',
      lastName: this.registerForm.get('lastName')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? ''
    };
  }
}
