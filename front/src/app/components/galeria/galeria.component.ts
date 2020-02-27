import { GaleriaService } from '../../services/galeria.service/galeria.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit {
  fotos = [];

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.galeriaService.getFotos()
    .subscribe(
      res => {
        this.fotos = res;
        this.pathResolver(this.fotos);
        console.log(this.fotos);
      },
      err => console.log(err),
    );
  }

  pathResolver(fotos) {
    fotos.forEach(function(value) {
      const re = /\\/gi;
      value.imagePath = value.imagePath.replace(re, '/');
  });

 }

}
