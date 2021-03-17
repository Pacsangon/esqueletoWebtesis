import { Component, OnInit } from '@angular/core';

import { DatostService } from '../../../services/datost.service';

@Component({
  selector: 'app-tablambos',
  templateUrl: './tablambos.component.html',
  styleUrls: ['./tablambos.component.css']
})
export class TablambosComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "nombre";
  public sortOrder = "asc";


  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()[1].ejercicios
    //console.log(this._datos.obtenerDatos()[1].ejercicios)
  }

}
