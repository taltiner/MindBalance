import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
  })
}
