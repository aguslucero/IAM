import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../../interfaces/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  URI = 'http://localhost:3001/api/menus';

  constructor( private http: HttpClient ) { }

  crearMenu(title: string, image: File, description: string, price: number) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('image', image);
    fd.append('description', description);
    fd.append('price', price.toString() );
    return this.http.post(this.URI, fd);


  }

  getMenus() {
    return this.http.get<Menu[]>(this.URI);
  }

  getMenu(id: string) {
    return this.http.get<Menu[]>(`${this.URI}/${id}`);
  }

  deleteMenu(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  itsActived() {
    return this.http.get('http://localhost:3001/api/itsActived');
  }

  activateOrDesactivate() {
    return this.http.get('http://localhost:3001/api/activeOrDesactive');
  }
}
