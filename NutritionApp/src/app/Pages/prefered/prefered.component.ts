import { Component, OnInit, Input } from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-prefered',
  templateUrl: './prefered.component.html',
  styleUrls: ['./prefered.component.scss'],
})
export class PreferedPage implements OnInit {
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
