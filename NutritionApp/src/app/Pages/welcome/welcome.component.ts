import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarouselType } from 'src/app/enum/carousel-type.enum';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carouselItem') carouselItem!: TemplateRef<any>;

  constructor() {

  }
  config = GlobalConfiguration.welcomeSlidesConfig;
  configButton = GlobalConfiguration.buttonsWelcome;
  authservice = inject(AuthService);
  router = inject(Router);
  kcal = '../../../assets/Images/kcal.svg';
  ChangeDetectorRef = inject(ChangeDetectorRef);
  type = CarouselType;

  navigationTo(path: string) {
    this.router.navigate(['login']);
    this.authservice.isAuth = true;
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {

  }
  ngAfterViewInit(): void {
    this.config = {
      type: CarouselType.WELCOME_CAROUSEL,
      slides: GlobalConfiguration.welcomeSlidesConfig(this),
    };
  }
}
