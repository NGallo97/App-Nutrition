import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalConfiguration } from 'src/app/global-configuration';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input('configInput') configInput: any;
  @Input('placeholder') placeholder: any;
  @Input('style') style: any;
  @Input('formInstance') formInstance!: FormGroup;
  @Input('controlName') controlName!: any;
  @Input('error') error!: string;

  errorConfig = GlobalConfiguration.errorConfig

}
