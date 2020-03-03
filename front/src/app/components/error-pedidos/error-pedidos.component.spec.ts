import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPedidosComponent } from './error-pedidos.component';

describe('ErrorPedidosComponent', () => {
  let component: ErrorPedidosComponent;
  let fixture: ComponentFixture<ErrorPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
