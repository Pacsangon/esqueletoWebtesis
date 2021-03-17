import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup} from '@angular/forms';
import { DatostService} from '../../../services/datost.service';
import { EjerciciosService } from '../../../services/ejercicios.service';
import { element } from 'protractor';

@Component({
  selector: 'app-ejemplocaldeamiento',
  templateUrl: './ejemplocaldeamiento.component.html',
  styleUrls: ['./ejemplocaldeamiento.component.css']
})
export class EjemplocaldeamientoComponent implements OnInit {

  parrafo = "Este apartado es una tarea pendiente que va a cambiar a partir de conocer nuevas técnicas que se ajusten a dos criterios: cómo fomentar la creatividad para recopilar las historias y cuáles son los aspectos previos para usar la teatralidad en un grupo de personas.";
  titulo = "Las técnicas para recopilar historias";
  parrafo2 = "Utilizar las técnicas de Rodari es otra estrategia por si se requiere tener una vivencia común entre las personas y no se cuenta con tiempo de esperar la retroalimentación.";
  
  lista2 = "El binomio fantástico"
  parrafo3 = "Se necesita más técnicas para recopilar las historias porque son lo fundamental para diferenciarse del teatro profesional o comunitario.";
  titulo2 = "La teatralidad";
 
  parrafo4 = "Algo que considero fundamental en la teatralidad es la respiración para trabajar con personas no familiarizadas con el teatro.";
  parrafo5 = "No encontré un texto para comprender la respiración diafragmática. Hasta que encontré el video de Guuruk que pertenece al curso: Doblaje de voz. Los otros ejercicios complementan y sirven para incorporar la respiración diafragmática en las personas, porque es un ejercicio base que se utiliza comúnmente cuando se habla en público como lo es el teatro.";
  parrafo6 = "Partiendo de los ejercicios simples e inespecíficos antes de utilizar ejercicios teatrales habituales, complejos y relacionados con la temática. Un ejemplo de una secuencia de la respiración sería la siguiente:";
  lista3 = "Base respiración diafragmática";
  lista4 = "Técnica de respiración con vela";
  lista5 = "Técnicas de respiración con papel";
  lista6 = "Técnicas de respiración con globo";
  lista7 = "Ejercitación de labios usando trompetillas";
  lista8 = "Técnica de ejercitación de lengua con R";
  lista9 = "Técnica de gesticulación usando BUE";
  parrafo7 = "Lo importante es conocer diferentes técnicas para tener opciones que se adapten al contexto de trabajo y las modifiquen a la creación de una propuesta propia, porque no hay que limitarse a la repetición de las técnicas.";

 /* constructor() { }

  ngOnInit() {
  }

}*/

public data: any[];
public data0: any[];
public data1: any[];
public data2: any[];
public data3: any[];
public data4: any[];
//public radioGroupForm: FormGroup;
public model: number;

  datos = [];
  constructor(private _datos: DatostService) { }

  ngOnInit() {
    this.data = this._datos.obtenerDatos()
    console.log(this.data)
    this.data =  this.data[10].totalidadejercicios[0].subejercicio  
    console.log(this.data)
  
   

    

  
    /*this.radioGroupForm = this.formBuilder.group({
      'model': 0
    });*/
    
    
  }

  cambiosdirectorio(model){
    console.log(model)

  }

}
