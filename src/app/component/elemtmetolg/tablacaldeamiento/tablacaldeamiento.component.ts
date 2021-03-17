import { Component, OnInit } from '@angular/core';
//import {Http} from "@angular/http";
import { DatostService } from '../../../services/datost.service';

@Component({
  selector: 'app-tablacaldeamiento',
  templateUrl: './tablacaldeamiento.component.html',
  styleUrls: ['./tablacaldeamiento.component.css']
})
export class TablacaldeamientoComponent implements OnInit {

  /*constructor() { }

  ngOnInit() {
  }*/
//Prueba de componente angular http
  /*public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private _http: Http) { }
 
  ngOnInit(): void {
    this._http.get("assets/datos/data.json")
      .subscribe((data)=> {
          this.data = data.json();
          console.log(this.data);
          console.log(this.data[1]);
          console.log(this.data[1].city);
      });
  }

}*/
public data: any[];
  public filterQuery = "";
  public rowsOnPage = 20;
  public sortBy = "nombre";
  public sortOrder = "asc";


  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()[0].ejercicios
    //console.log(this._datos.obtenerDatos()[0].ejercicios)
  }

}