import { Component, Input } from '@angular/core';
import { GlobalConfiguration } from 'src/app/global-configuration';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('textDescription') textDescription: string = '';
  @Input('style') style: any;
  @Input('isCard') isCard: boolean = false;
  @Input('cards') cards: boolean = false;
  @Input('svg') svg: any;
}
