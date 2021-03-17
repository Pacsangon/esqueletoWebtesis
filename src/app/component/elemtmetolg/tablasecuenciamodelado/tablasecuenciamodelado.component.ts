import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-tablasecuenciamodelado',
  templateUrl: './tablasecuenciamodelado.component.html',
  styleUrls: ['./tablasecuenciamodelado.component.css']
})
export class TablasecuenciamodeladoComponent implements OnInit {

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
    
    this.data = this.subejercicios1[3].totalidadejercicios[1].subejercicio    
  
    console.log( this.subejercicios1 );
    console.log(this.data);
  }


  }

