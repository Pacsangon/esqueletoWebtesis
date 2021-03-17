import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  titulo = "Propuesta"
  parrafo = "Como cualquier otra propuesta, se necesita principios que orienten el proceso. Siempre se debe de reafirmar antes de trabajar con el grupo (Banard, 2016).";
  sub2titulo = "1.	Principios";
  sub3titulo = "a.	Principios previos para las personas facilitadoras";
  lista = "Un requisito antes de usar una propuesta es la preparación previa en las personas participantes.";
  lista2 = "Para trabajar con personas es fundamental desarrollar la confianza. Olinda menciona que la confianza se desarrolla a partir de escuchar a las personas, y, por el otro lado, Andreína considera que las técnicas generan la confianza requerida para trabajar grupalmente. Lo anterior solo son dos maneras diferentes para desarrollar la confianza";
  lista3 = "'El coordinador tiene que saber, finalmente, cual es el tema que viene a trabajar, cómo lo va a trabajar, que es lo que va hacer. De lo que no sabe es el resultado' (Banard, 2016, p. 7). Esto es una salvedad que hace Nancy, se debe de tener claro el plan de acción independientemente que la propuesta en sí requiera perderse para multiplicar. Además, en el encuadre se establecen las reglas o los principios para el trabajo.";
  lista4 = "Si se quiere extenderse de las respuestas dadas y los lugares comunes. Entonces tanto la preparación previa como la confianza constituyen lo esencial para acceder a un nivel de trabajo que profundice a las primeras impresiones.";
  lista5 = "Hay que planear la metodología a partir de escenarios para manejar la incertidumbre en los procesos sociales. Por eso se propone la utilización del diagrama de flujo en la investigación.";
  lista6 = "Promover la integración de las diferentes habilidades de pensamiento en las actividades.";
  lista7 = "Es posible trabajar de forma indirecta los temas. El tiempo que se dispone para trabajar marca una diferencia en la selección de las técnicas. Cuando se han experimentado heridas con el tema elegido y al no contar con tiempo, se puede desarrollar con el orden de lo simbólico: cuento y mito u leyenda. En el caso contrario que se cuente con tiempo, se puede escuchar a las personas y complementar con otras actividades.";
  lista8 = "Usar diferentes técnicas de varias áreas y modificarlas hasta apropiarse de las mismas para conformar un estilo propio.";
  lista9 = "No hay una manera única de garantizar el éxito en la selección de los ejercicios en una propuesta. Lo único que queda es arriesgar y seleccionar los ejercicios que ayuden a darle forma a la propuesta acorde con mis capacidades y mis limitaciones en función de ponerme en los zapatos de las personas que puedan participar en el proceso.";
  sub3titulo2 = "b.	Principios para el trabajo grupal";
  lista10 = "La premisa es que lo importante son las personas (Bravo, 2016) y es una decisión personal participar. Todo material personal sirve para trabajar, si es importante para la persona y lo quiere compartir.";
  lista11 = "'No interpretar a los demás como yo siento que usted…' (Bello, 2002).";
  lista12 = "No intentar transmitir mensajes o consejos, si no se corre los mismos riesgos (Boal, 2004).";
  lista13 = "No hay que aparentar saberlo todo, desmeritar un conocimiento o a la persona por cuestiones de género, raza, edad, económicas, epistemológicas, laborales, profesionales o dentro de situaciones que supone un desempeño de roles sociales como profesional en Medicina-paciente, docente-estudiante, policía-persona, etc.; y reconocer nuestros límites y alcances de nuestro conocimiento (Solnit, 2015).";
  lista14 = "Antes de dar una opinión, reflexionemos poniéndonos en los zapatos de la persona que cuenta una anécdota o un recuerdo o una vivencia, hacer el ejercicio de pensar y sentir, si lo que cuenta, me puedo identificar porque existe una similitud con lo que se encuentra en mi vida: Identificación; y/o, si reconozco y puedo poner en ese lugar de la persona que cuenta la situación: Analogía; y/o, si me afecta, produce sensaciones o me hace recordar (Boal, 2004). Esto es lo que provoca en las personas que participaron: Resonancia o multiplicación.";
  lista15 = "Siempre hay que tratar de evitar las respuestas desde los lugares comunes o los tópicos (Artega, 2012) y preguntarse sobre las circunstancias, si existen condiciones que limitan a una persona y se pueden variar, por ejemplo: de género o edad o económica. Para eso, se utiliza las herramientas de Ngozi (2017). La primera herramienta es una premisa. Una persona importa equitativamente. Punto. Sin condiciones como “en caso de” o “siempre y cuando”. Y la segunda herramienta es, constantemente vamos hacernos una pregunta: “¿Puedes invertir X – con Y o Y con X o los roles – y obtener los mismos resultados?” (Ngozi, 2017, p. 9).";
  lista16 = "Siempre tratando de identificar y realizar lo que sentimos y/o no sentimos.";
  lista17 = "Hay que hacerse responsable de lo que ve y dice al otro en el grupo porque se proyecta 'Todo lo que pasa aquí, tiene que ver con vos y tu universo interno' (Banard, 2016, p. 11).";
  lista18 = "Cada actuación o puesta en escena es única e inimitable de cada persona, según la historia con sus propios recursos: vivencias e imaginación, y provocar en nosotros mostrar su realidad o la realidad de la persona que cuenta la vivencia y así modificarla.";
  lista19 = "Busco la implementación de un lenguaje sígnico, tanto el significante como el significado sea inseparables y evitar el uso del lenguaje simbólico (el significante y el significado estén separados) (Boal, 2004).";
  lista20 = "Hay que desmitificar el papel del error en el aprendizaje y en la vida. El error socialmente es una referencia al fracaso en una sociedad que valoriza el éxito. Utilizar el error como una fuente de aprendizaje y de investigación para los temas con una contextura densa y compleja.";
  sub3titulo3 = "c.	Aprendizaje";
  parrafo2 = "El aprendizaje consiste en una renegociación personal y constante a lo largo de la vida; la cual interactúa, entreteje y valora una situación entre las experiencias Por experiencias se refiere al conocimiento, saber y sentido común producto de diferentes fuentes y aplicable a las prácticas; las interrelaciones con el entorno, las personas con los papeles sociales asumidos o no y, nuestras prácticas sociales como actividades y rutinas de diferente índole en el uso cotidiano (Lave y Wenger, 1991; Seely et al., 1989). El aprendizaje anterior conlleva a enfocarse en dos elementos para operacionalizarlo: partir de los hechos reales de la práctica de las personas participantes y la posibilidad de elegir libremente el tipo de material (contenido) que se desarrolle en el trabajo.";
  sub2titulo2 = "2.	Tema";
  parrafo3 = "La consigna en esta propuesta es “los grandes temas se inscriben en los problemas personales” (Boal, 2004, p. 61).";
  imagen = "./assets/img/propuesta/tema.png";
  parrafo4 = "Las zonas invisibles y sutiles del tema se vuelven inaccesibles a la pregunta y a la necesidad, si no se trasciende a la respuesta socialmente aceptada, más cuando las personas poseen intereses personales que se convierten en privilegios privados y cotidianos.";
  parrafo5 = "La respuesta en esta propuesta es el tema para acceder a las zonas invisibles y sutiles. Solo si se considera al tema como una forma de autoexploración del aprendizaje con las vivencias, y a su vez, estas vivencias se convierten en un modo de orientación en el tema de investigación. El tema refiere a la posibilidad de expandir el marco de referencia, desde lo amplio hasta las situaciones particulares y concretas de las personas participantes para determinar tanto el autoaprendizaje como el curso de la investigación.";
  parrafo6 = "Al identificar la forma de trabajar con un tema. Esto permite realizar un enfoque integral para explorar en las diferentes prácticas y sus relaciones (Spink, 2005), sin la necesidad de reducir la realidad a la visión de mundo de la persona investigadora. En este sentido, no podía ser cualquier tema. Tenía que ser un tema conectado a una vivencia personal para participar con los mismos riesgos en un proceso de aprendizaje colectivo.";
  sub3titulo4 = "a.	Criterios para seleccionar el tema:";
  lista21 = "Una vivencia personal que estuviera conectada a la construcción del tema.";
  lista22 = "La persona investigadora participe con los mismos riesgos que las personas participantes en las actividades del trabajo.";
  parrafo7 = "Sin el medio complementario para captar las vivencias, el tema para investigar por sí solo no resuelve nada y genera más incertidumbre. Este medio son las historias con el material de las experiencias directas para concretar el tema seleccionado.";
  sub2titulo3 = "3.	Historias";
  parrafo8 = "Las historias son el modo seleccionado de enfocar y autoexplorar el propio aprendizaje sobre el tema: la reflexión personal y la creación de su propio material pedagógico. Las historias son la medida en sí mismas que puede determinar, dependiendo de qué y cómo se cuentan, si se puede aplicar las dinámicas de construcción colectiva.";
  parrafo9 = "Las historias son las vivencias y la materia prima de este trabajo, que orientan el guion metodológico. Estas vivencias entendidas como acontecimientos con algún grado de relevancia personal. Lo anterior quedaba muy amplio y ambiguo, por lo que surgió el reto de cómo focalizar las vivencias a determinado “tema”, comprendiéndolo como una forma de acceder e indagar a las múltiples e impensadas relaciones que se suscitan en la vida cotidiana.";
  sub3titulo5 = "a.	Indicaciones";
  parrafo10 = "Con el nombre de fantasía (historias), la palabra refiere a cualquier experiencia importante que esté relacionado con la construcción del tema. Es decir, cada persona determina lo que es importante y selecciona la forma de contar las historias. No existe una forma exclusiva para presentar las historias, solo se necesita una manera para registrar que puede variar según la creatividad y las posibilidades de cada una de las personas participantes.";
  parrafo11 = "Las historias sólo representan una manera de recopilar vivencias, dejando el ejercicio de pensar a las personas participantes, es de ellas la responsabilidad de enfocarse en lo que consideren significativo del tema, y a su vez, quieran contar o relatar.  Son múltiples los caminos que pueden llegar a formular y es necesario ese grado de incertidumbre si se quiere trabajar con experiencias privadas, personales, comunes y particulares.";
  parrafo12 = "Para que el tema permita ampliar los resultados del proceso a las condiciones particulares de cada persona participante con su universo significativo, se recomienda acompañar la actividad de las historias con indicaciones generales para desarrollar su propia respuesta significativa con su material de aprendizaje. Entonces no hay respuestas buenas o malas o ideales cuando se trabaja con un tema complejo."
  parrafo13 = "Un complemento a las indicaciones amplias y generales para las historias fue dar el tiempo necesario para que las personas participantes pudiesen tomar las decisiones de seleccionar una vivencia o varias, formular una narrativa propia y contar la historia como un material de aprendizaje representativo (relato escrito o ilustrado). Ese tiempo resulta ser importante, en el momento de tener en cuenta en la planeación si se quiere o se persigue historias significativas o relevantes para las personas, y que se puedan usar en etapas posteriores.";
  sub3titulo6 = "b.	Registrar ";
  parrafo14 = "Las historias cumplen la tarea de reconstruir las vivencias con el doble propósito de ser un proceso creativo y ser la manera para registrar el proceso de investigación. La intención del registro es conceder la posibilidad de recopilar lo que pasó. Se recuerda de esa manera y se reconstruye creativamente en un espacio de reflexión personal para captar la pluralidad del esfuerzo de lo vivido, y no necesariamente la veracidad de los hechos. Si se sintió y se transmite un recuerdo en un ejercicio de historización, hay significados y depende del proceso educativo que se realice la posibilidad de comprenderlos en su contexto.";
  parrafo15 = "Todas las historias funcionan para registrar relaciones impensadas sobre el tema; cuentan vivencias independientemente de su origen o enfoque que tenga la persona que investiga. Las historias entendidas como un punto de reflexión en un tema complejo que se modifica según la sociedad y las particularidades de las personas. No obstante, no todas las historias funcionan para usarlas en la etapa teatral y para ello, se desarrolló los siguientes criterios:";
  lista23 = "El primer criterio refiere a empezar con que las personas participantes estén a gusto con las vivencias seleccionadas y que el material los represente en el relato tanto como se pueda exponer el material en un documento público."
  lista24 = "El segundo criterio consiste en el nivel de abstracción que tiene las historias. Entre más concreta sea la descripción de las vivencias que decidió contar, resulta más factibles de usar como guion para la teatralidad. Igualmente, si se quiere usar una historia de un tercero en la fase teatral está supeditado a la aprobación de la persona autora, porque la historia se modifica y se prueban variaciones indiferentemente de la vivencia.";
  lista25 = "El tercer criterio refiere a la elección de las personas participantes para escoger las historias que quieran seguir trabajando, porque se quiere modificar algo de lo contado en la historia.";
  sub2titulo4 = "4.	Técnicas recomendadas";
  parrafo16 = "El aprendizaje es complejo, varía en cada persona y ocurre a diario.  Sobre todo, proponer el aprendizaje como un intento colectivo de explorar al tema con sus relaciones concretas y sus posibles interconexiones. Desde entonces, las actividades de aprendizaje son acciones de cualquier índole para construir colectivamente y aprender individualmente.";
  parrafo17 = "Una manera de orientar es utilizar el cono de la experiencia de Dale. En él se encuentra una clasificación del material didáctico.";
  imagen2 = "./assets/img/propuesta/dale.png";
  fuente2p1 = "Elaboración propia a partir de";
  fuente2p2 = "Dale";
  fuente2p3 = ", 1946, p. 39.";
  enlace = "./assets/img/imagenesvarias/conodalevo.png";
  parrafo18 = "Mi recomendación es optar por la subdivisión de participar en una dramatización como una opción interesante para desarrollar el aprendizaje.";
  sub3titulo7 = "a.	Criterios";
  lista26 = "Ejercicios teatrales que sean juegos-ejercicios, es decir los ejercicios contengan algo de juego y que los juegos contengan algo de ejercicio para la reflexión física y mejor conocimiento del cuerpo.";
  lista27 = "Ejercicios teatrales que estimulen los sentidos adormecidos por la monotonía de la rutina.";
  lista28 = "No hay que utilizar ejercicios compuestos con otros ejercicios. Siempre hay que iniciar desde los ejercicios simples a los complejos.";
  parrafo19 = "Si se necesita una actividad inicial para aplicar las historias recomiendo la utilización de cualquiera de los dos ejercicios de Rodari: el canto en el estanque y binomio fantástico (1983).";
  parrafo20 = "En la página web se encuentra la información de todos los ejercicios y la clasificación en Boal y los dos ejercicios de Rodari.";
  parrafo21 = "Hay que recordar que la selección de los ejercicios siempre tuvo la intencionalidad de propiciar una construcción colectiva, así que funciona cualquier ejercicio que sirva para la reflexión colectiva. Lo importante es la capacidad de entretejer una propuesta con ejercicios que respeten los tiempos de aprendizaje, viviendo y sintiendo los momentos del proceso en el trabajo de campo, para adecuar la propuesta y desarrollar el tema a un nivel más profundo. En este sentido, se depende mucho del nivel de confianza entre todas las personas que participan en el proceso. De lo contrario, no van a compartir sus experiencias sentidas con detalles descriptivos de esas situaciones.";
  sub2titulo5 = "5.	Observaciones";
  parafo22 = "A pesar que no pude cumplir la propuesta ideal con el ciclo completo (la planeación de la propuesta, la recopilación de las historias, la utilización de las historias en los ejercicios teatrales, la retroalimentación y la reformulación de la propuesta para presentarla).";
  parrafo23 = "Representa un gran esfuerzo inicial por ordenar y plantear una posibilidad en el horizonte de alternativas para investigar. El tema se convierte en el principal inconveniente para replicar esta propuesta. Se debe de reflexionar y justificar la selección del tema. Para eso se ocupa disponer de tiempo, porque no es cualquier tema.";
  parrafo24 = "La persona investigadora no puede utilizar cualquier tema en este tipo de investigación, porque no se puede escribir, hablar por los otros o analizar un tema desde el punto cero y desconocer prácticas y relaciones frecuentes en el mismo, sino desde la experiencia. Se necesita de una experiencia significativa vinculada al tema para plantearse la posibilidad de la adaptación metodológica en el trabajo con el tema y las personas participantes.";
  parrafo25 = "Tampoco hay que confundir esta participación de la persona investigadora con sobrevalorar la opinión de la misma hasta convertirlo en algo autobiográfico. El protagonismo en este tipo de investigación lo tiene las personas participantes y la persona facilitadora tiene la posibilidad de adaptarse creativamente a las circunstancias para acceder a las zonas invisibles y sutiles en el tema.";
  parrafo26 = "Las historias en el tema complejo solo sirven si cada persona define los aspectos significativos que forma parte de su identidad.";
  parrafo27 = "Se necesita más tiempo y experiencias de aplicación. Siempre se puede ampliar o cambiar los criterios de selección de los temas y las historias.";
  parrafo28 = "Falta la implementación de los ejercicios teatrales con las historias para determinar si sirve la propuesta que promueve el aprendizaje.";
  parrafo29 = "No se pudo establecer criterios de evaluación, debido que no se concluyó la aplicación de la propuesta y queda como un pendiente.";
  parrafo30 = "Se requiere seguir desarrollando el apartado de los resultados en el trabajo de investigación, solo se rasgó la superficie acorde al avance que se hizo. Por lo tanto, no se pensó los resultados o la forma de registrar cuando se integre las historias en los ejercicios teatrales.";
  sub2titulo6 = "6.	Conclusiones";
  parrafo31 = "Ciertamente tan solo es una opción para el tratamiento de temas complejos. Pero es un punto de arranque para dar la posibilidad de imaginar y crear alternativas a los limites preconcebidos. Siempre será la mejor opción tomar el desafío de la complejidad para crear cuando “se trata de ejercitarse en un pensamiento capaz de tratar, de dialogar, de negociar con lo real” (Morin, 2005, p. 22).  Siempre existirá incertidumbre en los trabajos de investigación o académicos, solo queda navegar en la incertidumbre con estrategias “que permitan afrontar los riesgos, lo inesperado, lo incierto, y modificar su desarrollo en virtud de las informaciones adquiridas en el camino” (Morin, 1999, p.3).";

  constructor() { }

  ngOnInit() {
  }

}