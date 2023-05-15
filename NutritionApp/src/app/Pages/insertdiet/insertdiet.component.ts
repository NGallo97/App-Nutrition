// import { ShareService } from 'src/app/services/share.service';
// import { Component, inject } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { GlobalConfiguration } from 'src/app/global-configuration';

// @Component({
//   selector: 'app-insertdiet',
//   templateUrl: './insertdiet.component.html',
//   styleUrls: ['./insertdiet.component.scss']
// })
// export class InsertDietPage {
//   shareInfo = inject(ShareService)
//   dietArray: any = []
//   form!: FormGroup;
//   private readonly _fb = inject(FormBuilder);
//   router = inject(Router)
//   button = GlobalConfiguration.buttonConfigInsertDiet;

//   getFormArray(i: number) {

//     return (this.form.get(i.toString()) as FormArray).controls ?? [];

//   }
//   constructor() {
//     this.form = this._fb.group({

//     })
//   }

//   // get description() {
//   //   return this.form.get('description')
//   // }
//   // get quantita() {
//   //   return this.form.get('quantita')
//   // }
//   // get um() {
//   //   return this.form.get('um')
//   // }

//   submit(formValue: any) {

//   }

//   getFormGroup(id: number) {

//   }

//   generateArray(num: any) {
//     for (let i = 0; i < parseInt(num); i++) {
//       this.dietArray.push({ name: i })
//     }
//     this.dietArray.forEach((element: any, index: number) => {
//       this.form.patchValue({
//         [index.toString()]:
//           this._fb.array([
//             this._fb.group(
//               {
//                 'description': ['', [Validators.required]],
//                 'quantita': ['', [Validators.required]],
//                 'um': ['', [Validators.required]]
//               }
//             )
//           ])
//       })

//     });
//   }

//   ngOnInit(): void {
//     if (!this.shareInfo.selectedDiet?.lengthDiet) {
//       this.router.navigate(['creationDiet'])
//     } else {
//       this.generateArray(this.shareInfo.selectedDiet.lengthDiet);
//       console.log(this.form)
//     }
//   }

// }
