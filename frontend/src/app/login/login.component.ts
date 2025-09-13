import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdapterService} from "../adapter/adapter.service";
import {Login} from "../models/login.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent {

  constructor(private adapterService: AdapterService, private router: Router) {}

  loginForm: FormGroup = new FormGroup ({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  });

  onLogin() {
    if(this.loginForm.invalid) {
      console.log('loginForm invalid', this.loginForm);
      return;
    }
    this.adapterService.login(this.createLoginPayload());
  }

  onClick() {
    this.router.navigate(['/register']);
  }

  private createLoginPayload(): Login {
    return {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }
  }
}
