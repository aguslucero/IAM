import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAddComponent } from './galeria-add.component';

describe('GaleriaAddComponent', () => {
  let component: GaleriaAddComponent;
  let fixture: ComponentFixture<GaleriaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
