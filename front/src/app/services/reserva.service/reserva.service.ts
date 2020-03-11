import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../../interfaces/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }


tablesFoyDay(date: string) {
  return this.http.get('http://localhost:3001/api/reserva/tablesFoyDay/' + date);
}

createReserva( reserva: Reserva) {
 return this.http.post('http://localhost:3001/api/reserva/createReserva', {
  reserva
 });
}

getReservasForDay(date: string) {
  return this.http.get('http://localhost:3001/api/reserva/getReservaForDay/' + date);
}

deleteReserva(id: string) {
  return this.http.delete('http://localhost:3001/api/reserva/deleteReserva/' + id);
 }

}
