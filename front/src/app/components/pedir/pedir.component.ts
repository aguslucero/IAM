import { Menu } from 'src/app/interfaces/Menu';
import { PedidosService } from './../../services/pedidos.service/pedidos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from 'src/app/interfaces/pedido';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.css']
})
export class PedirComponent implements OnInit {

  created = false;
  pedido = new Pedido();
  client = new Client();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    public dialogRef: MatDialogRef<PedirComponent>,
    private pedidosService: PedidosService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
   console.log(this.data);
  }

   createPedido() {
     this.pedido.menus = JSON.parse(localStorage.getItem('menus'));
     this.pedido.price = this.data.total;
     this.pedido.state = 'pendiente';
     this.pedido.name = this.client.name;
     this.pedido.lastName = this.client.lastName;
     this.pedido.phone = this.client.phone;
     this.pedido.hour = this.client.hour;
     this.pedido.email = this.client.email;
     this.pedidosService.createPedido(this.pedido)
     .subscribe(
      res => {
        localStorage.removeItem('menus');
        this.created = true;
     },
      err => console.log(err),
     );
 }


}

export class Client {
  name: string;
  lastName: string;
  phone: string;
  hour: string;
  email: string;

  constructor() {}
}


export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
