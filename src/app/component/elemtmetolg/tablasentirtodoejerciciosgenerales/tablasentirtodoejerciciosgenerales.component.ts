import { Component, OnInit } from '@angular/core';

import * as datosecService from '../../../services/datosec.service';

@Component({
  selector: 'app-tablasentirtodoejerciciosgenerales',
  templateUrl: './tablasentirtodoejerciciosgenerales.component.html',
  styleUrls: ['./tablasentirtodoejerciciosgenerales.component.css']
})
export class TablasentirtodoejerciciosgeneralesComponent implements OnInit {

  public data: any[];
  
  public subejercicios1: any[];
  public subejercicios2;
  public subejercicios3;
  public subejercicios4;
  public subejercicios5;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "nombre";
  public sortOrder = "asc";

  
  constructor(private _modos: datosecService.DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.subejercicios1  = this._modos.obtenerDatosec()
    
    
    this.data = this.subejercicios1[0].totalidadejercicios[0].subejercicios
    
    console.log( this.subejercicios1 );
    console.log(this.data);


  }

}