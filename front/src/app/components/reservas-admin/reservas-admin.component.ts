import { CreateReservaAdminComponent } from './../create-reserva-admin/create-reserva-admin.component';
import { ReservaService } from './../../services/reserva.service/reserva.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Reserva } from 'src/app/interfaces/reserva';
import * as moment from 'moment';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl} from '@angular/forms';




let ELEMENT_DATA: Reserva[] = [ ] ;
interface Horario {
  value: string;
  viewValue: string;
}

interface HorarioGroup {
  disabled?: boolean;
  name: string;
  horario: Horario[];
}



@Component({
  selector: 'app-reservas-admin',
  templateUrl: './reservas-admin.component.html',
  styleUrls: ['./reservas-admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ReservasAdminComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'persons',  'day', 'hour', 'options'];
  expandedElement: Reserva | null;
  loading = true;
  date = moment().format('DD-MM-YYYY');
  daySelected: string ;
  horarioControl = new FormControl();
  horarioGroups: HorarioGroup[] = [
    {
      name: 'Medio Dia',
      horario: [
        {viewValue: '11:00 hs', value: '11'},
        {viewValue: '12:00 hs', value: '12'},
        {viewValue: '13:00 hs', value: '13'},
        {viewValue: '14:00 hs', value: '14'}
      ]
    },
    {
      name: 'noche',
      horario: [
        {viewValue: '20:00 hs', value: '20'},
        {viewValue: '21:00 hs', value: '21'},
        {viewValue: '22:00 hs', value: '22'}
      ]
    }
  ];


  constructor( private reservaService: ReservaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getReservasForToday();
    console.log('datasurse', this.dataSource);
  }

  applyFilterHour(filterValue: string) {
    this.dataSource.filterPredicate = function customFilter(data , filter:string ): boolean {
      return (data.hora.startsWith(filter));
    };
    if(filterValue === 'Todos'){
      this.dataSource.filter = "";
    } else {
    this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    }
   applyFiltername(filterValue: string) {
    this.dataSource.filterPredicate = function customFilter(data , filter:string ): boolean {
      return (data.nombre.startsWith(filter) || data.apellido.startsWith(filter) );
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

  getReservasForToday( ) {
  ELEMENT_DATA = [];
  this.reservaService.getReservasForDay(this.date)
  .subscribe(
    (res: []) => {
    ELEMENT_DATA = res;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.loading = false;
      },
     err => console.log(err),
   );

  }

  getReservasForDay( ) {
    ELEMENT_DATA = [];
    this.date = moment(this.daySelected).format('DD-MM-YYYY');
    const date = moment(this.daySelected).format('DD-MM-YYYY');
    this.reservaService.getReservasForDay(date)
    .subscribe(
      (res: []) => {
      ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.loading = false;
        },
       err => console.log(err),
     );

    }

  cancelReserva(id: string) {
    this.reservaService.deleteReserva(id)
    .subscribe(
      res  => {
      console.log(res);
      this.getReservasForDay();
        },
       err => console.log(err),
     );
  }

  crearReserva(): void {
    const dialogRef = this.dialog.open(CreateReservaAdminComponent, {
      width: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getReservasForDay();
    });
  }


}



