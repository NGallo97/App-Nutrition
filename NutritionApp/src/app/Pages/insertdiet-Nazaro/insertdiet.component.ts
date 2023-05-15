import { ShareService } from 'src/app/services/share.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-insertdiet',
    templateUrl: './insertdiet.component.html',
    styleUrls: ['./insertdiet.component.scss']
})
export class InsertDietPage implements OnInit {
    selectedDiet!: any
    title = 'FormArray Example in Angular Reactive forms';
    dietArray: any = []
    shareInfo = inject(ShareService);


    constructor(private fb: FormBuilder) {
        this.dietForm = this.fb.group({
            name: '',
            days: this.fb.array([]),
        });
    }


    ngOnInit(): void {
        this.selectedDiet = parseInt(this.shareInfo.selectedDiet.lengthDiet)
        this.generateArray(this.selectedDiet);
        console.log(parseInt(this.shareInfo.selectedDiet.lengthDiet));
        for (let i = 0; i < this.selectedDiet; i++) {
            this.addDay()
        }
        this.days.controls.forEach((el: any) => {
            console.log(el)
        })
        console.log(this.days.controls)
        console.log(this.dietForm.value)
    }

    dietForm: FormGroup;
    get days(): FormArray {
        return this.dietForm.get("days") as FormArray
    }
    get colazione() {
        return this.dietForm.get('colazione')
    }
    get spuntinoMattutino() {
        return this.dietForm.get('spuntinoMattutino')
    }
    get pranzo() {
        return this.dietForm.get('pranzo')
    }
    get spuntinoPomeridiano() {
        return this.dietForm.get('spuntinoPomeridiano')
    }
    get cena() {
        return this.dietForm.get('cena')
    }

    generateArray(num: number) {
        this.dietArray = Array(num)
    }

    newDay(): FormGroup {
        return this.fb.group({
            colazione: this.fb.array([]),
            spuntinoMattutino: this.fb.array([]),
            pranzo: this.fb.array([]),
            spuntinoPomeridiano: this.fb.array([]),
            cena: this.fb.array([])
        })
    }

    addDay() {
        this.days.push(this.newDay());
    }
    // removeDays(i: number) {
    //     this.days.removeAt(i);
    // }
    onSubmit() {
        console.log(this.dietForm.value);
    }
}
export class country {
    id: string;
    name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
// newDiet(): FormGroup {
//     return this.fb.group({
//         skill: '',
//         exp: '',
//     })
// }