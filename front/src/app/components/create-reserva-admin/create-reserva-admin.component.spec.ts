import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservaAdminComponent } from './create-reserva-admin.component';

describe('CreateReservaAdminComponent', () => {
  let component: CreateReservaAdminComponent;
  let fixture: ComponentFixture<CreateReservaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
