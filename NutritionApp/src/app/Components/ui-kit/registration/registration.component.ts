import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  router = inject(Router)

  navigationTo(path: string) {
    this.router.navigate(['registration']);
  }
}
