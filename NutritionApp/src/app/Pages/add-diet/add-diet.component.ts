import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-diet',
  templateUrl: './add-diet.component.html',
  styleUrls: ['./add-diet.component.scss']
})
export class AddDietPage {
  create = '../../../assets/Images/createDiet/fluent_add-12-filled.svg';
  router = inject(Router)

  navigateTo(path: string) {
    this.router.navigate(['creationDiet']);
  }
}
