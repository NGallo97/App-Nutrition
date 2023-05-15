import { FooterConfig } from './../../interfaces/footer-config.interface';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalConfiguration } from './../../global-configuration';
import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage {
  router = inject(Router)

  config = GlobalConfiguration.loginPage;
  configFooterButton = GlobalConfiguration.footerButtonConfig;
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  constructor() {
    this.form = this._fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    },)
  }
  submit(formValue: any) {
    this._authService.login(formValue).subscribe((res: any) => {
      if (res) {
        this._authService.subject.next(true)
        localStorage.setItem('token', res.token);
        this.router.navigate(['home'])
      }
    }, (error: any) => {
      this.form.setErrors({ userLogin: true })
    }
    );
  }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
}
