import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Foto} from '../interfaces/Foto'

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
URI = 'http://localhost:3001/api/fotos';

  constructor( private http: HttpClient) { }

  crearFoto(title: string, image: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('image', image);
    return this.http.post(this.URI, fd);


  }

  getFotos() {
    return this.http.get<Foto[]>(this.URI);
  }
}
