import { Component, OnInit } from '@angular/core'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputPasswordType = true;
  loginForm: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public changeInputTextType(): void {
    this.inputPasswordType = !this.inputPasswordType;
  }


  public onSubmit(): void {
    this.submitted = true;
  }

}
