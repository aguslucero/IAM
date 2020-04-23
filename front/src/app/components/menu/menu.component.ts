import { MenuService } from 'src/app/services/menu.service/menu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 actived: boolean;
  constructor(public router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.itsActive();

  }

  itsActive() {
  this.menuService.itsActived().subscribe(
    res => {
       if (res) {
         this.actived = true;
      } else {
        this.actived = false;
      }
    },
    err => console.log(err)
  );
  }

 activateOrDesactivate() {
   this.menuService.activateOrDesactivate()
   .subscribe(
    res => {
    console.log(res);
    this.ngOnInit();
   },
   err => console.log(err)
   );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
