import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-tablasecuenciajuegosmascarasrituales',
  templateUrl: './tablasecuenciajuegosmascarasrituales.component.html',
  styleUrls: ['./tablasecuenciajuegosmascarasrituales.component.css']
})
export class TablasecuenciajuegosmascarasritualesComponent implements OnInit {

  public data: any[];
  public subejercicios1;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "nombre";
  public sortOrder = "asc";
  

  
  constructor(private _modos: DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.subejercicios1 = this._modos.obtenerDatosec();
    
    this.data = this.subejercicios1[3].totalidadejercicios[3].subejercicio    
  
    console.log( this.subejercicios1 );
    console.log(this.data);
  }


  }
