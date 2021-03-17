import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-pillstablamemoriasentidos',
  templateUrl: './pillstablamemoriasentidos.component.html',
  styleUrls: ['./pillstablamemoriasentidos.component.css']
})
export class PillstablamemoriasentidosComponent implements OnInit {

  public data: any[];
  public subnombre1: string;
  public subnombre2: string;
  public subnombre3: string;
  public subnombre4: string;
  public subnombre5: string;
  

  
  constructor(private _modos: DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.data = this._modos.obtenerDatosec();
    console.log(this.data);
    this.subnombre1 = this.data[4].totalidadejercicios[0].subnombre    
   
    console.log( this.subnombre1 );
    
    


  }

}
