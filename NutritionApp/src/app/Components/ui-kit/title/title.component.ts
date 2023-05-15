import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input('image') image: any;
  @Input('title') title: any;
  @Input('titlePage') titlePage: string = '';
  @Input('titleSection') titleSection: any;
}
