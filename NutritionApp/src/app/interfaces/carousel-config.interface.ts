import { ElementRef, TemplateRef } from '@angular/core';

export interface CarouselConfig {
  slides: CarouselElement[];
}

export interface CarouselElement {
  component: TemplateRef<any>;
  title: string;
  imgUrl: string;
  description: string;
}
