import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { AuthService } from 'src/app/services/auth.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-creationdiet',
  templateUrl: './creationdiet.component.html',
  styleUrls: ['./creationdiet.component.scss']
})
export class CreationDietPage {
  config = GlobalConfiguration.creationDietConfig;
  button = GlobalConfiguration.buttonDietConfig;

  form!: FormGroup
  router = inject(Router)
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _shareService = inject(ShareService);

  constructor() {
    this.form = this._fb.group({
      'date': ['', [Validators.required]],
      'lengthDiet': ['', [Validators.required]]
    })
  }

  get date() {
    return this.form.get('date')
  }
  get lengthDiet() {
    return this.form.get('lengthDiet')
  }

  submit(formValue: any) {
    if (this.form.valid) {
      this._shareService.selectedDiet = formValue;
      this.router.navigate(['insertDiet'])
      console.log(this._shareService.selectedDiet);
    }
  }

  resetForm() {
    this.form.reset()
  }
}
