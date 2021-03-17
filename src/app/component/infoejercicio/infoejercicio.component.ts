import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { EjerciciosService } from '../../services/ejercicios.service';

@Component({
  selector: 'app-infoejercicio',
  templateUrl: './infoejercicio.component.html',
  styleUrls: ['./infoejercicio.component.css']
})
export class InfoejercicioComponent implements OnInit {

  ejercicio = {};

  constructor(private ParamsRouter: ActivatedRoute, private ejercicioServicio: EjerciciosService) {
    this.ParamsRouter.params.subscribe(params => {
      //console.log(params);
      //console.log(params['id']);
      //console.log(this.ejercicioServicio.obtenerEjercicio(params['id']));
      this.ejercicio = this.ejercicioServicio.obtenerEjercicio(params['id']);
      console.log(this.ejercicio);
    })
   }
  ngOnInit() {
  }

}
