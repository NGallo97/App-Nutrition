import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifydietComponent } from './modifydiet.component';

describe('ModifydietComponent', () => {
  let component: ModifydietComponent;
  let fixture: ComponentFixture<ModifydietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifydietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifydietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
