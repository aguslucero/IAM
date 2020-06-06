import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from 'src/app/interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }


getPedidos() {
   return this.http.get('http://localhost:3001/api/pedidos/getPedidos');
 }

createPedido( pedido: Pedido) {
  return this.http.post('http://localhost:3001/api/pedidos/newPedido', {
   pedido
  });
}

getPendings() {
  return this.http.get('http://localhost:3001/api/pedidos/getPendings');
}

getReady() {
  return this.http.get('http://localhost:3001/api/pedidos/getReady');
}

changeState(id: string) {
  return this.http.post('http://localhost:3001/api/pedidos/changeState', {
    id
  }
  );
}

delivered(id: string) {
  return this.http.post('http://localhost:3001/api/pedidos/delivered', {
    id
  }
  );
}

sendEmail(email: string, name: string) {
  return this.http.post('http://localhost:3001/api/nofication/sendEmail', {
    email,
    name,
  }
  );

}

}
