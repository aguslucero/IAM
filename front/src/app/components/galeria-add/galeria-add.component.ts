import { GaleriaService } from './../../services/galeria.service';
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


  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
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
 .subscribe(res => console.log(res), err => console.log(err));
return false ;
}
}
