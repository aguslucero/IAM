import { Pedido } from 'src/app/interfaces/pedido';
import { PedidosService } from './../../services/pedidos.service/pedidos.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { element } from 'protractor';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pending: Pedido[];
  ready: Pedido[];
  pendingAux: Pedido[];
  readyAux: Pedido[];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.getPedidos();
   }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('a vereee');
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const pedidoId = event.container.data[event.currentIndex]['_id'];
      this.pedidosService.changeState(pedidoId)
      .subscribe(
        res => {
        console.log(res);
          },
        err => console.log(err),
      );
    }
  }

  getPedidos() {
  this.pedidosService.getPendings()
  .subscribe(
    (res: []) => {
    this.pending = res;
    this.pendingAux = res;
      },
    err => console.log(err),
  );
  this.pedidosService.getReady()
  .subscribe(
    (res: []) => {
    this.ready = res;
    this.readyAux = res;
      },
    err => console.log(err),
  );
  }

markAsReady(id: string) {
   this.pedidosService.changeState(id)
      .subscribe(
        res => {
        console.log(res);
          },
         err => console.log(err),
       );
   const  pedido = this.pending.find(element => element._id = id );
   this.ready.push(pedido);
   this.readyAux = this.ready;
   const index = this.pending.findIndex(element => element._id = id );
   this.pending.splice(index, 1);
   this.pendingAux = this.pending;
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(pedido.email)) {
     this.pedidosService.sendEmail(pedido.email, pedido.name, )
     .subscribe(
       res => {
       console.log(res);
         },
        err => console.log(err),
      );
   } else {
     console.log('invalid email');
   }
 }

delivered(id: string) {
  const  pedido = this.ready.find(element => element._id = id );
  const index = this.ready.findIndex(element => element._id = id );
  this.ready.splice(index, 1);
  this.readyAux = this.ready;
  this.pedidosService.delivered(id)
  .subscribe(
    res => {
    console.log(res);
      },
     err => console.log(err),
   );
}

applyFilter(filterValue: string) {
  this.ready = this.readyAux;
  this.ready = this.ready.filter( pedido => pedido.name.includes(filterValue) || pedido.lastName.includes(filterValue) );
 }

 applyFilterPending(filterValue: string) {
  this.pending = this.pendingAux;
  this.pending = this.pending.filter( pedido => pedido.name.includes(filterValue) || pedido.lastName.includes(filterValue) );
 }

 prueba() {
  console.log('pendientes', this.pending);
 }
}



