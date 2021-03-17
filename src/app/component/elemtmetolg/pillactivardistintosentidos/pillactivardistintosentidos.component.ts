import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-pillactivardistintosentidos',
  templateUrl: './pillactivardistintosentidos.component.html',
  styleUrls: ['./pillactivardistintosentidos.component.css']
})
export class PillactivardistintosentidosComponent implements OnInit {

  public data: any[];
  public subnombre1: string;
  public subnombre2: string;
  public subnombre3: string;
  public subnombre4: string;
  public subnombre5: string;
  public subejercicios1;
  public subejercicios2;
  public subejercicios3;
  public subejercicios4;
  public subejercicios5;

  
  constructor(private _modos: DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.data = this._modos.obtenerDatosec();
    console.log(this.data);
    this.subnombre1 = this.data[2].totalidadejercicios[0].subnombre    
    this.subnombre2 = this.data[2].totalidadejercicios[1].subnombre
    console.log( this.subnombre1 );
    console.log( this.subnombre2 );
    /**this.subnombre3 = this.data[0].totalidadejercicios[2].subnombre
    this.subnombre4 = this.data[0].totalidadejercicios[3].subnombre
    this.subnombre5 = this.data[0].totalidadejercicios[4].subnombre
    console.log( this.subnombre1 );
    console.log( this.subnombre2 );
    console.log( this.subnombre3 );
    console.log( this.subnombre4 );
    console.log( this.subnombre5 );
    this.subejercicios1 = this.data[0].totalidadejercicios[0].subejercicios
    this.subejercicios2 = this.data[0].totalidadejercicios[1].subejercicios
    this.subejercicios3 = this.data[0].totalidadejercicios[2].subejercicios
    this.subejercicios4 = this.data[0].totalidadejercicios[3].subejercicios
    this.subejercicios5 = this.data[0].totalidadejercicios[4].subejercicios
    console.log( this.subejercicios1 );**/


  }

}
