import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';

@Component({
  selector: 'app-pillescuchartodooye',
  templateUrl: './pillescuchartodooye.component.html',
  styleUrls: ['./pillescuchartodooye.component.css']
})
export class PillescuchartodooyeComponent implements OnInit {

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
    this.subnombre1 = this.data[1].totalidadejercicios[0].subnombre    
    this.subnombre2 = this.data[1].totalidadejercicios[1].subnombre
    this.subnombre3 = this.data[1].totalidadejercicios[2].subnombre
    this.subnombre4 = this.data[1].totalidadejercicios[3].subnombre
    this.subnombre5 = this.data[1].totalidadejercicios[4].subnombre
    console.log( this.subnombre1 );
    console.log( this.subnombre2 );
    console.log( this.subnombre3 );
    console.log( this.subnombre4 );
    console.log( this.subnombre5 );
    


  }

}