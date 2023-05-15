import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footerbutton',
  templateUrl: './footerbutton.component.html',
  styleUrls: ['./footerbutton.component.scss']
})
export class FooterButtonComponent {
  @Input('text') text: string = '';
  @Input('link') link: string = '';

}
