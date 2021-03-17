import { Injectable } from '@angular/core';

export interface relacionadosRule {
  Id: number;
  nombre: string;
  descripcion: string;
  etiquetas: string[];
  referencia: string;
  ejerciciosrelacionados: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DatosrelacionadosService {


  datosrelacionados: relacionadosRule[] = [
    {
      "Id": 1,
      "nombre": "Memoria y emoción: recordando un día del pasado",
      "descripcion": "Es el mismo ejercicio -Memoria: recordando el día de ayer-, pero tal vez ayer o por la mañana no haya ocurrido nada importante; por tanto, cada uno debe tener a su lado un copiloto, a quien contará un día de su pasado (de la emana pasada o de veinte años atrás) en que le haya ocurrido, 0 verdaderamente importante, algo que lo haya marcado de manera profunda y cuyo simple recuerdo, aún hoy, provoque en él una emoción. Cada participante debe tener un copiloto, porque las experiencias no son las mismas; el copiloto debe ayudar a que la persona enlace la memoria de las sensaciones preguntando, proponiendo varias cuestiones relacionadas con los detalles sensoriales. El copiloto no es un voyeur; debe aprovechar el ejercicio para intentar crear en su propia imaginación el mismo acontecimiento, con los mismos detalles, con la misma emoción, las mismas sensaciones.",
      "etiquetas": ["Caldeamiento", " Inespecífico"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Memoria: recordando el día de ayer", "Memoria y emoción: recordando un día del pasado", "Memoria, emoción  e imaginación", "Recordando una opresión actual"]
    },
    {
      "Id": 2,
      "nombre": "Memoria: recordando el día de ayer",
      "descripcion": "Los actores deben sentarse cómodamente en sillas, muy relajados. A continuación, mover con lentitud cada parte de su cuerpo, de manera ininterrumpida, y tomar conciencia de cada parte aislada, con los ojos cerrados. Después, el director debe comenzar a animarlos para recordar todo lo que les ocurrió la noche anterior, antes de que se acostaran. Cada detalle debe ir acompañado de sensaciones corporales, gusto, dolor, sensaciones táctiles, formas, colores, rasgos, profundidad, sonidos, timbres, melodías, ruidos, etc., que el actor describirá, intentando volver a sentirlas. El actor debe hacer un esfuerzo especial para recordar sus sensaciones corporales y volver a experimentarlas. Para facilitar la experiencia, debe tratar de mover repetidamente la parte del cuerpo que se relaciona con la cosa imaginada; si piensa en el sabor de alguna comida que ha probado, moverá la boca, los labios, la lengua. Si piensa en un baño que ha tomado, moverá todo su cuerpo intentando sentir la piel que ha estado en contacto con el agua-si piensa en una caminata, moverá los músculos de las piernas y los pies. Después de ello, el director seguirá estimulando y tanteando, llevando ahora a los actores a recordar lo que les ocurrió esa misma mañana. ¿Cómo se despertaron? ¿Con el despertador? ¿Los despertó alguien? ¿El sonido del despertador, la voz de una persona, cómo eran esos sonidos? El director pedirá que describan, lo más minuciosamente posible, el rostro de la primera persona que vieron, los detalles de la habitación donde estaban durmiendo, de la sala donde tomaron café: rasgos, colores, sonidos, timbres, melodías, ruidos, olores, gustos, etc. A continuación, el medio de transporte que usaron, metro, autobús, coche; el sonido de una puerta cerrándose, sus compañeros de viaje, etc. Siempre buscando detalles, los menores detalles de las impresiones corporales, y siempre los pequeños movimientos de las partes concernientes, que deben acompañar a la memoria. Finalmente, su llegada a la sala en la que están. ¿Qué vieron primero, qué voz oyeron primero? Una descripción sensorial de la sala, con todos los detalles posibles. ¿Ahora dónde están? ¿Al lado de quién? ¿Cómo están vestidos los demás? ¿Qué objetos hay en la sala? Sólo entonces pueden abrir los ojos y comparar.",
      "etiquetas": ["Caldeamiento", " Inespecífico"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Memoria: recordando el día de ayer", "Memoria y emoción: recordando un día del pasado", "Memoria, emoción  e imaginación", "Recordando una opresión actual"]
    },
    {
      "Id": 60,
      "nombre": "A, E, I, O, U",
      "descripcion": "Todos los actores juntos en un mismo grupo. Un actor se pone frente al grupo, que debe emitir sonidos usando las letras A, t> > O, U, cambiando el volumen de acuerdo con la distancia a la que se encuentre del actor aislado y en movimiento. Cuando el acto que hace de botón del volumen esté lejos, los demás emitirán son los más altos, y cuando esté cerca, sonidos más bajos. El actor podrá moverse libremente por toda la sala. Los actores del grupo deben intentar pasar emociones al otro actor y no sólo hacer ruido. Variante. En parejas. Cada actor emite un sonido dirigido a su compañero que está a medio metro de distancia; el otro retrocede un metro, después dos, tres, diez metros. Los actores tienen que ajustar sus voces a la distancia. Este ejercicio también puede hacerse cantando. De la misma forma que los ojos miran naturalmente un objeto que queremos mirar, también la voz mira naturalmente a una persona con la que queremos hablar.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 61,
      "nombre": "Olla a presión",
      "descripcion": "Con la nariz y la boca tapadas, hacer el máximo esfuerzo para expeler el aire. Cuando no aguante más, destapar la nariz y la boca.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 62,
      "nombre": "Inspiración con gran rapidez",
      "descripcion": "El actor intenta inspirar el máximo de aire posible y, a continuación, expelerlo con la mayor rapidez. Todo el grupo puede practicar este ejercicio, con el director marcando el tiempo para inspirar y espirar, como si fuese una competición para ver quién consigue mover mayor volumen de aire al mismo tiempo.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 63,
      "nombre": "Muy lentamente",
      "descripcion": "El actor inspira y después, emitiendo un sonido, espira de manera que su sonido pueda oírse durante el máximo tiempo posible.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 64,
      "nombre": "Respiración profunda por la boca",
      "descripcion": "Respirar profundamente por la boca, con los dientes apretados, espirando a continuación por la nariz.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 65,
      "nombre": "Inspiración con clara definición y mucha energía.",
      "descripcion": "Inspirar y espirar como se ha descrito antes, siguiendo un ritmo particular: el del corazón o el fragmento de una música (con un tono bien definido) o una melodía entonada por el grupo.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 66,
      "nombre": "Inspiración lenta con los brazos extendidos",
      "descripcion": "Inspirar lentamente al mismo tiempo que levanta los dos brazos lo más arriba posible y se pone de puntillas, intentando ocupar el mayor espacio posible; después, también lentamente, espirar mientras retoma la posición inicial, encogiendo el cuerpo hasta ocupar el menor espacio posible.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 67,
      "nombre": "Explosión",
      "descripcion": "Después de haber inspirado lentamente todo el volumen de aire posible, el actor debe expulsarlo de una vez por la boca. El aire produce un sonido parecido a un grito agresivo. Hacer lo mismo expeliendo enérgicamente el aire por la nariz, después de haber inspirado lo máximo posible.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 68,
      "nombre": "Inspiración lenta",
      "descripcion": "Inspirar lentamente por la fosa nasal derecha y espirar por la izquierda; después invertir el orden.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 69,
      "nombre": "Inmóvil en posición vertical",
      "descripcion": "El actor hace los mismos movimientos respiratorios. La respiración debe ser un acto de todo el cuerpo. Todos los músculos deben reaccionar a la entrada de aire en el cuerpo y a su expulsión, como si el actor pudiese sentir el oxígeno circulando por todo el cuerpo, a través de las arterias, y el anhídrido carbónico expulsado a través de las venas.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 70,
      "nombre": "Apoyado en una pared a corta distancia",
      "descripcion": "Apoyándose con las manos, el actor hace los mismos movimientos respiratorios anteriores; después repite todo apoyándose en los codos.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 71,
      "nombre": "Tumbado de espaldas, completamente relajado",
      "descripcion": "El actor se lleva las manos al abdomen, expele todo el aire de los pulmones, inspira lentamente y llena el abdomen hasta no mas; espira a continuación; repite lentamente esos movimientos varias veces. Hace lo mismo con las manos sobre las costillas, llenando el pecho, especialmente la parte de abajo, varias veces. Lo mismo con las manos sobre los hombros o hacia arriba intentando llenar la parte superior de los pulmones. Finalmente, hace una secuencia de las tres respiraciones, siguiendo siempre el mismo orden.",
      "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios de respiración"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Tumbado de espaldas, completamente relajado", "Apoyado en una pared a corta distancia", "Inmóvil en posición vertical", "Inspiración lenta", "Explosión", "Inspiración lenta con los brazos extendidos", "Muy lentamente", "Olla a presión", "Respiración profunda por la boca", "Inspiración con gran rapidez"]
    },
    {
      "Id": 72,
      "nombre": "Sonido y movimiento",
      "descripcion": "Un grupo de actores emite con la voz un sonido determinado (que puede ser de animales, follaje, calle, fábrica), mientras otro grupo hace movimientos relacionados con dicho sonido, como si equivaliesen a su visualización. Es decir, si el sonido elegido por el primer grupo es «miau», la imagen no será necesariamente la de un gato, sino la visualización que el segundo grupo de actores tenga de ese sonido especial. A un bosque de sonidos corresponderá un bosque de imágenes. A una secuencia ritual de sonidos, una secuencia ritual de imágenes.",
      "etiquetas": ["Caldeamiento", " Inespecífico"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Sonido y movimiento", "Sonidos rituales"]
    },
    {
      "Id": 73,
      "nombre": "Sonidos rituales",
      "descripcion": "El mismo ejercicio de sonido y movimiento, pero esta vez los actores que hacen los sonidos se limitarán a los sonidos de un ritual en particular, despertarse por la mañana o ir a casa, volver del trabajo, de la fábrica, etc. ",
      "etiquetas": ["Caldeamiento", " Inespecífico"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Sonido y movimiento", "Sonidos rituales"]
    },
    {
      "Id": 181,
      "nombre": "Memoria, emoción  e imaginación",
      "descripcion": "El mismo sistema. Con la ayuda de un copiloto, el actor intenta recordar algo que realmente ha ocurrido. Intenta despertar las emociones, sensaciones que tuvo, pero ahora el copiloto (que debe ser genuinamente un copiloto, consintiendo las mismas sensaciones y compartiendo las mismas imágenes) tiene derecho a introducir varios elementos que no existían en la versión original: personajes extras, sucesos adicionales, inventados, inesperados por el protagonista. El actor protagonista debe introducir en eso nuevos elementos de su mundo imaginario. Entonces, juntos, protagonista y copiloto participarán de la creación de una historia, parte realidad, parte ficción, pero conmovedora, impactante en su totalidad, y que debe provocar imágenes y sensaciones fuertes. Con la práctica, los elementos ficticios introducidos por el copiloto pueden llegar a ser cada vez más distantes de la realidad, surrealistas incluso. Sin embargo, las personas deben partir de lo probable y posible, hasta llegar a lo improbable e imposible, pero aún capaz de generar emociones y despertar sensaciones.",
      "etiquetas": ["Ambos"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Memoria: recordando el día de ayer", "Memoria y emoción: recordando un día del pasado", "Memoria, emoción  e imaginación", "Recordando una opresión actual"]
    },
    {
      "Id": 190,
      "nombre": "Recordando una opresión actual",
      "descripcion": "El mismo ejercicio. Ahora el copiloto debe solamente sugerir posibles acciones capaces de, eventualmente, ayudar a romper con la opresión que se está contando. Es el protagonista que, en su imaginación, aun bajo las indicaciones del copiloto, debe romper con esa opresión. Este ejercicio se convirtió, más tarde, en la serie de Arco iris del deseo, en la Técnica de la imagen y contraimagen.",
      "etiquetas": ["Tema", " Específico"],
      "referencia": "Juegos para actores y no actores, Augusto Boal",
      "ejerciciosrelacionados": ["Memoria: recordando el día de ayer", "Memoria y emoción: recordando un día del pasado", "Memoria, emoción  e imaginación", "Recordando una opresión actual"]
    }
  ];


  obtenerRelacionados() {
    return this.datosrelacionados;
  }

constructor() { }
}
