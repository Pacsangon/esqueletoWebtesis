import { Component, OnInit } from '@angular/core';

import { DatostService } from '../../../services/datost.service';

@Component({
  selector: 'app-tablamodo',
  templateUrl: './tablamodo.component.html',
  styleUrls: ['./tablamodo.component.css']
})
export class TablamodoComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "nombre";
  public sortOrder = "asc";


  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()[3].ejercicios
    //console.log(this._datos.obtenerDatos()[3].ejercicios)
  }

}
