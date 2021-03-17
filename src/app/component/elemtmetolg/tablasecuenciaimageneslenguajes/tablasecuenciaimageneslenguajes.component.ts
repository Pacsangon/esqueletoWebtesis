import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-tablasecuenciaimageneslenguajes',
  templateUrl: './tablasecuenciaimageneslenguajes.component.html',
  styleUrls: ['./tablasecuenciaimageneslenguajes.component.css']
})
export class TablasecuenciaimageneslenguajesComponent implements OnInit {

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
    
    this.data = this.subejercicios1[3].totalidadejercicios[2].subejercicio    
  
    console.log( this.subejercicios1 );
    console.log(this.data);
  }


  }
