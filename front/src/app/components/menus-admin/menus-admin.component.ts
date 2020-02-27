import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service/menu.service';

@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.css']
})
export class MenusAdminComponent implements OnInit {

  menus = [];

  constructor(private menuService: MenuService) {  }

  pathResolver(menus) {
    menus.forEach(function(value) {
      const re = /\\/gi;
      value.imagePath = value.imagePath.replace(re, '/');
  });
    console.log(this.menus);
 }

  ngOnInit() {
    this.menuService.getMenus()
    .subscribe(
      res => {
        this.menus = res;
        this.pathResolver(this.menus);
        console.log(this.menus);
      },
      err => console.log(err),
    );
  }

}
