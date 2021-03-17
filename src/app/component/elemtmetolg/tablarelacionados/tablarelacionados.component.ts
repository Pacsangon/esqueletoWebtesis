import { Component, OnInit } from '@angular/core';

import { DatostService } from '../../../services/datost.service';

@Component({
  selector: 'app-tablarelacionados',
  templateUrl: './tablarelacionados.component.html',
  styleUrls: ['./tablarelacionados.component.css']
})
export class TablarelacionadosComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "nombre";
  public sortOrder = "asc";


  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()[4].ejercicios
    //console.log(this._datos.obtenerDatos()[4].ejercicios)
  }

}
