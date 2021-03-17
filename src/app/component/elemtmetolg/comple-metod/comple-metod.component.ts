import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comple-metod',
  templateUrl: './comple-metod.component.html',
  styleUrls: ['./comple-metod.component.css']
})
export class CompleMetodComponent implements OnInit {

  titulo = "Metodología";
  parrafo = "El diseño metodológico contemplaba cinco etapas: 1. Revisión bibliográfica, la cual aportaría insumos teóricos. 2. Entrevistas a expertas en trabajo socio educativo para identificar elementos metodológicos. 3. Sesiones de trabajos con las personas seleccionadas para la investigación se recopilarían las historias sobre el cuerpo, y 4. Con estos insumos se realizarían actividades teatrales y 5. La retroalimentación con estas personas sobre el proceso vivido y los aprendizajes."
  parrafo2 = "La metodología descrita en el párrafo anterior, tal y como se planteó en el anteproyecto fue un proceso de construcción tipo rizoma y en constante cambio. El diseño dependió de la colaboración de las personas y estuvo supeditado a la negociación grupal y al consentimiento informado.";
  parrafo3 = "Lo que no se pudo realizar fueron las actividades teatrales y la retroalimentación del proceso, debido a que las personas presentaron resistencia a completar la tarea de recopilar las historias, aun cuando se habían comprometido a hacerlo. Las historias cumplen la función de ser el prerequisito para utilizar las actividades teatrales.  Esto es una limitación del trabajo. Por lo tanto, lo que se presenta como resultado se refieren a las primeras tres etapas.";


  constructor() { }

  ngOnInit() {
  }

}
