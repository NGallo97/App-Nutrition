import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DietType } from 'src/app/enum/diet-type.enum';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {


  @Input('config') config: any;
  @Input('days') days = GlobalConfiguration.switchDay;
  @Output('switchDay')
  switchDay: any = new EventEmitter();
  @Input('currentDay') currentDay!: number;
  dietType = DietType;
  dietConfig = GlobalConfiguration.carDiet;


  toggle(s: any) {
    this.days.forEach((element: any) => {
      if (element.day === s.day) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
    this.emitSwitch(s.day);

  }

  emitSwitch(value: any) {
    this.switchDay.emit(value);
  }
  ngOnInit(): void {
    console.log(this.days);
    console.log(this.config);
  }

}
