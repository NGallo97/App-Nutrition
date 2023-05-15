import { Component, TemplateRef, ViewChild, inject, ChangeDetectorRef, ElementRef, Input } from '@angular/core';
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
export class HomePage {
  nome = 'Nazaro';

  selectedDay = GlobalConfiguration.diet;
  @Input('correctDay') correctDay!: number;

  intercettaDato(element: any) {
    console.log(element);
    this.selectedDay = element;
    if (this.selectedDay === 'Domani') {
      this.correctDay = this.currentDay(this.dietConfig.dateStart, this.dietConfig.timeCicle) + 1;
      console.log(this.currentDay(this.dietConfig.dateStart, this.dietConfig.timeCicle) + 1);
    } else {
      this.correctDay = this.currentDay(this.dietConfig.dateStart, this.dietConfig.timeCicle)
    }
  }

  dietConfig = GlobalConfiguration.diet;

  daQuantiGiorniHoIniziato(startDate: Date) {
    var Difference_In_Time = new Date().getTime() - startDate.getTime();

    // To calculate the no. of days between two dates
    return Math.trunc(Difference_In_Time / (1000 * 3600 * 24)) + 1;
  }

  currentDay(day: number, cicle: number) {
    let numberCicle = day / cicle;
    let result = Math.round(cicle * (numberCicle - Math.floor(numberCicle)));
    return result === 0 ? cicle : result;
  }

  ngOnInit(): void {
    this.correctDay = this.currentDay(this.dietConfig.dateStart, this.dietConfig.timeCicle)
  }

}
