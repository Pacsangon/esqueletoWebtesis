import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-tablasentirtodojuegosintegracion',
  templateUrl: './tablasentirtodojuegosintegracion.component.html',
  styleUrls: ['./tablasentirtodojuegosintegracion.component.css']
})
export class TablasentirtodojuegosintegracionComponent implements OnInit {

  public data: any[];
  
  public subejercicios1: any[];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "nombre";
  public sortOrder = "asc";

  
  constructor(private _modos: DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.subejercicios1  = this._modos.obtenerDatosec()
    
    
    this.data = this.subejercicios1[0].totalidadejercicios[3].subejercicios
    
    console.log( this.subejercicios1 );
    console.log(this.data);


  }

}
