import { Component, Input } from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input('carouselConfig') carouselConfig = GlobalConfiguration.homeSlidesConfig;
}
