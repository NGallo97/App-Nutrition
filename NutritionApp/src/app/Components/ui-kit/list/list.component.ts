import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  authService = inject(AuthService)
  private readonly _router = inject(Router);
  listItem: any = GlobalConfiguration.profile(this).listProfile;
  image = '../../../assets/Images/profile/iconList/Rectangle.svg';
  line = '../../../assets/Images/profile/iconList/Line 5.svg';

  navigateToProfile() {
    this._router.navigate(['modifyProfile']);
  }
  navigateToDiet() {
    this._router.navigate(['modifyDiet']);
  }
  navigateToSettings() {
    this._router.navigate(['settings']);
  }
  navigateToPrivacyPolicy() {
    this._router.navigate(['privacy&policy']);
  }
  logout(context: any) {
    localStorage.removeItem('token');
    this.authService.subject.next(false)
    context._router.navigate(['login']);
  }
}
