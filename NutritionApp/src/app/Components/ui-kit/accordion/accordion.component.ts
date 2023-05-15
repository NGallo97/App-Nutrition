import { Component, Input, OnInit, inject } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input('title') title!: any;
  arrow = '../../../assets/Images/accordion/arrow.svg';
  isSelected = false;
  shareInfo = inject(ShareService);

  toggleAccordion() {
    this.isSelected = !this.isSelected
  }

  generateArray(num: number) {
    return Array(num);
  }

  ngOnInit(): void {
  }
}
