import { Component, Input } from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { FooterConfig } from 'src/app/interfaces/footer-config.interface';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input('config') config!: FooterConfig[];
}
