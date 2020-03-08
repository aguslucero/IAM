import { Menu } from 'src/app/interfaces/Menu';
import { PedidosService } from './../../services/pedidos.service/pedidos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  pedido = new Pedido();
  client = new Client();
  selected = -1;
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

  createPedido() {
    this.pedido.price = this.data.menu.price;
    this.pedido.title = this.data.menu.title;
    this.pedido.state = 'pendiente';
    this.pedido.description = this.data.menu.description;
    this.pedido.name = this.client.name;
    this.pedido.lastName = this.client.lastName;
    this.pedido.phone = this.client.phone;
    this.pedido.hour = this.client.hour;
    this.pedidosService.createPedido(this.pedido)
    .subscribe(
      res => {
        console.log(res);
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

  constructor() {}
}
