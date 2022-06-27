import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputPasswordType = true;
  inputConfPasswordType = true;
  loginForm: any;
  submitted = false;
  cadastro = false;
  validationMessage = [ 'Usuário ou senha incorretos!' ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      conf_senha: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public changeInputTextType(senha: boolean = false): void {
    if (senha) {
      this.inputPasswordType = !this.inputPasswordType;
    } else {
      this.inputConfPasswordType = !this.inputConfPasswordType;
    }
  }


  public onSubmit(): void {
    // this.submitted = true;
    this.router.navigate(['home']);
  }

  public cadastrarUsuario(): void {
    this.cadastro = true;
  }

  public getButtonRegisterType(): string {
    if (this.cadastro) {
      return 'submit';
    } else {
      return 'button';
    }
  }

  public clickVoltar(): void {
    this.cadastro = false;
    this.submitted = false;
  }

}
