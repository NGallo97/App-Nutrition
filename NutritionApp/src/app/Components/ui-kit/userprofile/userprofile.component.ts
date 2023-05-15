import { Component } from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent {
  profile = GlobalConfiguration.profile();
}
