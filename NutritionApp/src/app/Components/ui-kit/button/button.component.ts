import { Component, Input } from '@angular/core';
import { ButtonConfig } from 'src/app/interfaces/slide-config.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('title') title!: any;
  @Input('style') style!: any;
  @Input('icon') icon!: any;
  @Input('type') type: string = 'button';
  @Input('disabled') disabled: boolean = false;
}
