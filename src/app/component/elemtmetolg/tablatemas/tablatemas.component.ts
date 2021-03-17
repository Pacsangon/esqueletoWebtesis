import { Component, OnInit } from '@angular/core';


import { DatostService } from '../../../services/datost.service';

@Component({
  selector: 'app-tablatemas',
  templateUrl: './tablatemas.component.html',
  styleUrls: ['./tablatemas.component.css']
})
export class TablatemasComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "nombre";
  public sortOrder = "asc";


  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()[2].ejercicios
    //console.log(this._datos.obtenerDatos()[2].ejercicios)
  }

}
