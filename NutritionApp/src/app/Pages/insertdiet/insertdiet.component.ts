import { ShareService } from 'src/app/services/share.service';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-insertdiet',
  templateUrl: './insertdiet.component.html',
  styleUrls: ['./insertdiet.component.scss'],
})
export class InsertDietPage {
  shareInfo = inject(ShareService);
  days: any = [];
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  router = inject(Router);
  button = GlobalConfiguration.buttonConfigInsertDiet;

  getFormGroupInstance(i: number) {
    return (this.form.get(i.toString()) as FormArray).controls[i] as FormGroup;
  }
  getFormArray(i: number) {
    return (this.form.get(i.toString()) as FormArray).controls ?? [];
  }
  addPasto(i: number) {
    const form = (this.form.get(i.toString()) as FormArray).controls;
    form.push(this.createPasto());
  }

  private createPasto(): FormGroup {
    return this._fb.group({
      description: '',
      qta: '',
      um: '',
    });
  }
  convertToString(i: number) {
    return i.toString();
  }
  constructor() {
    this.form = this._fb.group({});
    this.generateArray(this.shareInfo.selectedDiet.lengthDiet);
  }

  // get description() {
  //   return this.form.get('description')
  // }
  // get quantita() {
  //   return this.form.get('quantita')
  // }
  // get um() {
  //   return this.form.get('um')
  // }

  submit(formValue: any) {}

  getFormGroup(id: number) {}

  generateArray(num: any) {
    for (let i = 0; i < parseInt(num); i++) {
      this.days.push({ name: i });
    }
    //ciclo sui giorni e per ogni giorno inserisco all'interno della form un nuovo formArray
    this.days.forEach((element: any, index: number) => {
      // (this.form.get('pasti') as FormArray).push(
      //     this._fb.group({
      //         'description': ['', [Validators.required]],
      //         'quantita': ['', [Validators.required]],
      //         'um': ['', [Validators.required]]
      //       })
      // )
      this.form.patchValue({
        [index.toString()]: this._fb.array([
            {
              description: [''],
              qta: [''],
              um: [''],
            },
          ]),
      });
    });
  }

  ngOnInit(): void {
    if (!this.shareInfo.selectedDiet?.lengthDiet) {
      this.router.navigate(['creationDiet']);
    } else {
      console.log(this.form);
    }
  }
}
