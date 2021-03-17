import { Component, OnInit } from '@angular/core';

import { DatosecService } from '../../../services/datosec.service';


@Component({
  selector: 'app-acordioncriteriosej',
  templateUrl: './acordioncriteriosej.component.html',
  styleUrls: ['./acordioncriteriosej.component.css']
})
export class AcordioncriteriosejComponent implements OnInit {

  public data: any[];
  public nombre1: string;
  public nombre2: string;
  public nombre3: string;
  public nombre4: string;
  public nombre5: string;

  
  constructor(private _modos: DatosecService) { }

  ngOnInit() {
    //Métodos de comprobación de los datos

    this.data = this._modos.obtenerDatosec();
    console.log(this.data);
    this.nombre1 = this.data[0].titulo
    this.nombre2 = this.data[1].titulo
    this.nombre3 = this.data[2].titulo
    this.nombre4 = this.data[3].titulo
    this.nombre5 = this.data[4].titulo
    console.log( this.nombre1 );
    console.log( this.nombre2 );
    console.log( this.nombre3 );
    console.log( this.nombre4 );
    console.log( this.nombre5 );

  }

}
