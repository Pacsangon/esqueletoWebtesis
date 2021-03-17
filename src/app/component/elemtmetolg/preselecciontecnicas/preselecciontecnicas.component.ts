import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preselecciontecnicas',
  templateUrl: './preselecciontecnicas.component.html',
  styleUrls: ['./preselecciontecnicas.component.css']
})
export class PreselecciontecnicasComponent implements OnInit {

  
  parte = "Se efectuó una revisión bibliográfica significativa sobre la teatralidad y la facilitación grupal para tener una mayor compresión en el momento de realizar las entrevistas a las expertas. Se utilizaron los siguientes documentos base:";
  libro= "Manual de juegos y ejercicios teatrales";
  parte2 = "(2001) por Holowatuck, J. y Astrosky, D.,";
  libro2 = " Juegos para actores y no actores";
  parte3 = " (2002) y";
  libro3= "El arco iris del deseo. Del teatro experimental a la terapia";
  parte4 = "(2004) por Boal para preseleccionar los ejercicios teatrales con la finalidad de utilizarlos dentro de un proceso de investigación educativa. En ellos se encuentra con una amplia variedad de ejercicios teatrales. Por lo tanto, se consideró oportuno crear un sistema de clasificación por etiquetas para los ejercicios.";

  parrafo = "En las filas se procedió acorde a los dos diferentes momentos y su punto medio: el “caldeamiento” como una forma de sintonizar a las personas participantes, el “tema” como ejercicio para profundizar nodos de interés personal o grupal y “ambos” a los ejercicios que se pueden usar en cualquiera de los diferentes momentos dependiendo de la dinámica grupal. Las columnas se remiten la pregunta si se puede usar los ejercicios para el tema de este trabajo o no. Lo “inespecífico” son los ejercicios que no tiene relación con el tema, pero sirve para poner el “cuerpo a funcionar porque baja la resistencia mental” (Banard, 2016, p. 7). Lo “específico” son los ejercicios con los cuales se pueden desarrollar el tema. “Ambas” se refiere a todos los ejercicios que dependen del enfoque en que se utilizan por la persona facilitadora o el tema a desarrollar.";

  parrafo2 = "A continuación, se presenta un recuento de la revisión documental:";

  

  datosclasificacion = [
    {pos:1,etiqueta:"Caldeamientos", inespecifico:"128",ambas:24, especifico:25,total:177},
    {pos:2,etiqueta:"Tema", inespecifico:"-",ambas:1, especifico:16,total:17},
    {pos:3,etiqueta:"Ambos", inespecifico:"-",ambas:8, especifico:1,total:9}
  ];

  fuente = "Elaborado a partir de Boal (2004)."

  parrafo3 = "Dentro de los ejercicios seleccionados anteriormente, hay que agregar y entender los 10 modos básicos que se repiten en varios ejercicios teatrales de Boal (2004) para usarlos. Por esto es deseable practicar y dominar estos modos para apropiarse de esos ejercicios.";

 
  subtitulo = "Escoja el tipo de ejercicios que le interesé conocer:";

  parrafo4 = "Se consideró incorporar más libros para buscar información relevante como pistas o principios ontológicos, epistemológicos y metodológicos utilizables y que orienten la propuesta. Entre ellos se encuentran Bello (2002), Solnit (2015), Ngozi (2017) y Artega (2012), que se utilizaran para dar contenido al encuadre que se encuentra en el apartado “Propuesta Metodológica utilizando las historias como técnicas”.";

  constructor() { 

    console.log(`la distribución de esta sección cambio. Entonces ahora la información de la revisión bibliografica se encuentra en resultadosiniciales/ngbd-tabset-justify/principios/preselecciontecnicas/pillspreselecciontecnicas`);
    
  }

  ngOnInit() {

    
  }

}
