import { ReservaService } from './../../services/reserva.service/reserva.service';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Reserva } from 'src/app/interfaces/reserva';
import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenusAdminComponent } from '../menus-admin/menus-admin.component';

@Component({
  selector: 'app-create-reserva-admin',
  templateUrl: './create-reserva-admin.component.html',
  styleUrls: ['./create-reserva-admin.component.css']
})
export class CreateReservaAdminComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reserva = new Reserva();
  availableHours = [];
  beforeToday = false;
  dia: string;
  created = false;

  constructor(private _formBuilder: FormBuilder, private reservaService: ReservaService,
              public dialogRef: MatDialogRef<MenusAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.reserva.personas = 1;
  }

  createReserva() {
   this.created = true;
   this.reserva.dia = moment(this.reserva.dia).format('DD-MM-YYYY');
   this.reservaService.createReserva(this.reserva)
   .subscribe(
    res => {
    console.log(res);
      },
     err => console.log(err),
   );
  }

  tablesFoyDay() {
    this.availableHours = [];
    this.beforeToday = false;
    const date = moment(this.reserva.dia).format('DD-MM-YYYY');
    this.reservaService.tablesFoyDay(date)
    .subscribe(
      (res: [] ) => {
        if (res) {
      this.availableHours = res;
        } else {
          this.beforeToday = true;
        }
        console.log(this.availableHours, this.beforeToday);
        },
       err => console.log(err),
     );
  }

  setHour( hour: string) {
    this.reserva.hora = hour;
    this.dia = moment(this.reserva.dia).format('DD-MM-YYYY');
  }

  plusPerson() {
    if (this.reserva.personas < 5) {
    this.reserva.personas ++ ;
    }
  }

  subPerson() {
    if (this.reserva.personas > 1) {
    this.reserva.personas --;
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

}
