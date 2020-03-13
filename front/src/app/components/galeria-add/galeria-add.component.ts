import { GaleriaService } from '../../services/galeria.service/galeria.service';
import { Component, OnInit } from '@angular/core';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-galeria-add',
  templateUrl: './galeria-add.component.html',
  styleUrls: ['./galeria-add.component.css']
})
export class GaleriaAddComponent implements OnInit {
  file: File;
  fotoSeleccionada: string | ArrayBuffer;
  fotos = [];

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.getFotos();
  }


  newPhoto(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoSeleccionada = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
uploadPhoto(): boolean {
this.galeriaService.crearFoto(this.file.name, this.file)
 .subscribe(
   res => {
   console.log(res);
   this.getFotos();
},
   err => console.log(err));
return false;
}

getFotos() {
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

deleteFoto(id: string) {
  this.galeriaService.deleteFoto(id)
    .subscribe(
      res => {
        this.getFotos();
        console.log(res);
      },
      err => console.log(err)
    );

}

pathResolver(fotos) {
  fotos.forEach(function(value) {
    const re = /\\/gi;
    value.imagePath = value.imagePath.replace(re, '/');
});

}
}
