import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationPage {
  router = inject(Router)

  isActive = false
  config = GlobalConfiguration.registrationPage;
  configFooterButton = GlobalConfiguration.footerButtonConfig;
  form!: FormGroup;
  message = '';
  errorMessage = '';
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);

  constructor() {
    this.form = this._fb.group({
      'name': ['', [Validators.required]],
      'surname': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    })
  }


  submit(formValue: any) {
    let newFormValue = { ...formValue }
    delete newFormValue.confirmPassword;
    this._authService.register(newFormValue).subscribe((res: any) => {
      if (this.confirmPassword === this.password) {
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 5000);
      }
      this.message = 'REGISTRAZIONE AVVENUTA CON SUCCESSO';
    }, (err) => {
      console.log(err.status)
      err.status = "UTENTE GIA' REGISTRATO"
      this.errorMessage = err.status
    });
  }

  navigationTo(path: string) {
    this.router.navigate(['login']);
  }

  get name() {
    return this.form.get('name')
  }
  get surname() {
    return this.form.get('surname')
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
}
