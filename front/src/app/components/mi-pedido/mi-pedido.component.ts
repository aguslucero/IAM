import { Menu } from 'src/app/interfaces/Menu';
import { PedidosService } from './../../services/pedidos.service/pedidos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from 'src/app/interfaces/pedido';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-mi-pedido',
  templateUrl: './mi-pedido.component.html',
  styleUrls: ['./mi-pedido.component.css']
})
export class MiPedidoComponent implements OnInit {
  delete = false;
  deleteMenu = '';
  created = false;
  pedido = new Pedido();
  client = new Client();
  total = 0;
  menus = [];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    public dialogRef: MatDialogRef<MiPedidoComponent>,
    private pedidosService: PedidosService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit( ) {
      this.getsMenusSelected();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

//   createPedido() {
//     this.created = true;
//     this.pedido.price = this.data.menu.price;
//     this.pedido.title = this.data.menu.title;
//     this.pedido.state = 'pendiente';
//     this.pedido.description = this.data.menu.description;
//     this.pedido.name = this.client.name;
//     this.pedido.lastName = this.client.lastName;
//     this.pedido.phone = this.client.phone;
//     this.pedido.hour = this.client.hour;
//     this.pedido.email = this.client.email;
//     this.pedidosService.createPedido(this.pedido)
//     .subscribe(
//       res => {
//         console.log(res);
//       },
//       err => console.log(err),
//     );
//   }
getsMenusSelected() {
 this.menus = JSON.parse(localStorage.getItem('menus'));
 for (let menu of this.menus) {
 this.total = this.total + menu.price * menu.cant;
  }
}

deletedSelected() {
  this.delete = true;
}

cancelDelete() {
  this.delete = false;
}

selectDeletedMenu(title: string) {
 this.deleteMenu = title;
}

deletePedido() {
  localStorage.removeItem('menus');
  this.menus = [];
  this.dialogRef.close();
}

cancelDeletedMenu() {
  this.deleteMenu = '';
  console.log(this.deleteMenu);
}

deletedMenu( ) {
 let deletemenu = this.menus.find(menu => menu.title === this.deleteMenu);
 const index = this.menus.indexOf(deletemenu);
 console.log(index);
 this.menus.splice(index, 1);
 localStorage.setItem('menus', JSON.stringify(this.menus));
 deletemenu = '';
 this.getsMenusSelected();

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

