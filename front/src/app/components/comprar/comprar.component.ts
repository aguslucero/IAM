import { Menu } from 'src/app/interfaces/Menu';
import { PedidosService } from './../../services/pedidos.service/pedidos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from 'src/app/interfaces/pedido';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  cant = 1;
  menus = [];
  created = false;
  pedido = new Pedido();
  client = new Client();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    public dialogRef: MatDialogRef<ComprarComponent>,
    private pedidosService: PedidosService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit( ) {
      console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarPedido() {
    this.menus = [];
    console.log('entra');
    const menusaux = localStorage.getItem('menus');
    if ( menusaux) {
      this.menus = JSON.parse(menusaux);
    }
    const menu = this.menus.find(menuselected => menuselected.title === this.data.menu.title);
    if ( menu ) {
      const index = this.menus.indexOf(menu);
      let cantidad = +this.menus[index].cant;
      cantidad = cantidad + +this.cant;
      this.menus[index].cant = cantidad;
    } else {
    this.data.menu.cant = this.cant;
    this.menus.push(this.data.menu);
    }
    localStorage.setItem('menus', JSON.stringify(this.menus));
    this.created = true;
    this.pedido.state = 'pendiente';
    this.dialogRef.close();
    // this.pedido.name = this.client.name;
    // this.pedido.lastName = this.client.lastName;
    // this.pedido.phone = this.client.phone;
    // this.pedido.email = this.client.email;
    // this.pedidosService.createPedido(this.pedido)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => console.log(err),
    // );
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
