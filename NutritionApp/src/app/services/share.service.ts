import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor() { }

  shareInfo = new BehaviorSubject('');
  selectedDiet!: any
}