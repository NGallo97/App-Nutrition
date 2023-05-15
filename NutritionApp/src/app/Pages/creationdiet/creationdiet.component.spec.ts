import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationdietComponent } from './creationdiet.component';

describe('CreationdietComponent', () => {
  let component: CreationdietComponent;
  let fixture: ComponentFixture<CreationdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationdietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
