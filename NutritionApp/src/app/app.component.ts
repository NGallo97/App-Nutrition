import { FooterConfig } from './interfaces/footer-config.interface';
import { Component, inject, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { GlobalConfiguration } from './global-configuration';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  navigationTo(path: string) {
    this.router.navigate(['home'])
  }
  authservice = inject(AuthService)

  title = 'NutritionApp';
  router = inject(Router);
  configFooter: FooterConfig[] = GlobalConfiguration.footerBar;
}
