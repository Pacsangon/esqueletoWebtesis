import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { EjerciciosService } from '../../services/ejercicios.service';

@Component({
  selector: 'app-buscador-ejercicio',
  templateUrl: './buscador-ejercicio.component.html',
  styleUrls: ['./buscador-ejercicio.component.css']
})
export class BuscadorEjercicioComponent implements OnInit {

  ejercicio: any[] = [];
  public criteriobusquedad : string;
  public criteriobusquedad1 : number;
  public prueba;

  constructor(private params: ActivatedRoute, private ejercicioServicio: EjerciciosService) {
    this.params.params.subscribe( params => {
      console.log(params)
      console.log(params.nombre)
      console.log(typeof(params.nombre))
      this.criteriobusquedad = params.nombre 
      this.criteriobusquedad1 = params.nombre.length
      console.log(params.nombre.length)
      console.log(params.nombre.length !== 0)
      this.prueba = params.nombre.length !== 0
      console.log(this.prueba);
      if (params.nombre.length !== 0) {
        this.ejercicio = this.ejercicioServicio.buscarEjercicio(params['nombre']);
      }
      
        
      
      console.log(this.ejercicio);
      
      console.log(this.ejercicio.length === 0);
     
    });
  }

  ngOnInit() {
      //$(".alert.alert-dismissible.alert-danger").toggle(this.ejercicio.length === 0);
  }

}
