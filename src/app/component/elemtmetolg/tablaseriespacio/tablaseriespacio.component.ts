import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-tablaseriespacio',
  templateUrl: './tablaseriespacio.component.html',
  styleUrls: ['./tablaseriespacio.component.css']
})
export class TablaseriespacioComponent implements OnInit {

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
    
    this.data = this.subejercicios1[2].totalidadejercicios[1].subejercicio    
  
    console.log( this.subejercicios1 );
    console.log(this.data);


  }

}