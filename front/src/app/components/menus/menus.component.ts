// componenete que muestra los menus ejecutivos disponibles para la venta
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor() { }

  ngOnInit() {
  }

}
