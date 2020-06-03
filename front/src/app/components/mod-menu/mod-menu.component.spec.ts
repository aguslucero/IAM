import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModMenuComponent } from './mod-menu.component';

describe('ModMenuComponent', () => {
  let component: ModMenuComponent;
  let fixture: ComponentFixture<ModMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
