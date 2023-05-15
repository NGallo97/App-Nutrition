import { Component, TemplateRef, ViewChild, inject, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CarouselType } from '../../enum/carousel-type.enum';
import { CarouselConfig } from 'src/app/interfaces/carousel-config.interface';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { FooterConfig } from '../../interfaces/footer-config.interface';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home {
  nome = 'Nazaro';

  @ViewChild('carouselItem', { static: true }) carouselItem!: ElementRef<any>;

  constructor() { }

  config = GlobalConfiguration.homeSlidesConfig;

  buttonConfig = GlobalConfiguration.buttons;
  cardConfig: any = GlobalConfiguration.configCard;
  configFooter: FooterConfig[] = GlobalConfiguration.footerBar;

  router = inject(Router);

  ngAfterContentInit(): void {
    this.config = {
      type: CarouselType.HOME_CAROUSEL,
      slides: GlobalConfiguration.homeSlidesConfig(this),
    };
  }
  ngOnInit(): void {

  }

}
