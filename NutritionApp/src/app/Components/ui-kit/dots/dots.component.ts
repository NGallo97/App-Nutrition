import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss'],
})
export class DotsComponent {
  @Input('dotsLenght') dotsLenght: number = 0;
  rectangle = '../../../assets/Images/slider/Rectangle_1_active.svg';
}
