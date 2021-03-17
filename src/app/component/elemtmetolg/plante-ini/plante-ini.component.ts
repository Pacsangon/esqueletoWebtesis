import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plante-ini',
  templateUrl: './plante-ini.component.html',
  styleUrls: ['./plante-ini.component.css']
})
export class PlanteIniComponent implements OnInit {

  Titulo = "Componentes Teóricos-Prácticos de las Estrategias Metodológicas Usadas por Expertas en el Proceso de Trabajo Socio Educativo";
  parrafo = "Se partió de una significativa revisión bibliográfica que aportara los elementos teóricos necesarios para cumplir con los objetivos del Trabajo de Final de Graduación (TFG). Esos resultados que se muestran más adelante, fueron una base importante para orientar la selección de las personas expertas a entrevistar y construir las preguntas generadoras de las mismas.";
  subtitulo = "Entrevistas."
  parrafo2 = "Con los resultados de la revisión bibliográfica se seleccionan a tres personas expertas para entrevistar como una manera de complementar los componentes teóricos prácticas.";
  sub2titulo =  "Selección de las expertas."
  parrafo3 = "Los complementos consisten en tres elementos: el primero, estriba en una metodología con su configuración teórica-práctica: la Multiplicación Dramática, que considero esencialmente diferente a nivel metodológico, debido al taller de Multiplicación Dramática 'Arquetipos', el 27 de febrero del 2016, organizado por el Instituto Costarricense de Psicodrama e impartido por la Licda. Nancy Rebeca Banard Camacho, porque me dejó la impresión de que es una metodología, que implementa técnicas y principios de varios enfoques.";
  parrafo4 = "El segundo, corresponde más a una necesidad del trabajo final de graduación para ampliar el conocimiento en el arte de facilitar grupos, porque se trabaja con personas y no es una tarea simple por realizar. En diferentes momentos, he podido apreciar el trabajo de Olinda Bravo con los grupos de Centro de Derechos Sociales del Migrante (CENDEROS). En la cual, se muestra el proceso de fondo en las interacciones entre ella con las mujeres en los diferentes grupos y espacios. Especialmente, se nota que el tiempo de convivencia con las personas influyen en el estado de ánimo y construyen relaciones de confianzas, porque no se puede separar con una línea imaginaria lo personal de lo laboral.";
  parrafo5 = "Por último, está más enfocado a un aspecto más técnico del teatro, en qué consiste los ejercicios teatrales para incorporar dentro de mis herramientas. En este caso se seleccionó a Andreina Quirós Vásquez porque había sistematizado la experiencia de aplicar el Teatro-foro-Clown en el libro: Juegos para Teatro-foto-Clown, y por su formación profesional en teatro.";
  parrafo6 = "El formato de las entrevistas tenía más la intención de una conversación con las siguientes preguntas generadoras.";
  titulaciondetabla = "Tabla 1";
  ordenamiento = [
    {tema:"Multiplicación Dramática",entrevistada:"Nancy Rebeca Banard Camacho", preguntasGeneradoras:["En qué consiste la multiplicación dramática y sus características.","Puede referirse al caldeamiento propio de multiplicación dramática."]},
    {tema:"Trabajo grupal",entrevistada:"Olinda Bravo", preguntasGeneradoras:["Cómo prepara una sesión de trabajo grupal.", "Habitualmente, con que técnicas trabaja.","Cuáles son los criterios para elegir las técnicas."]},
    {tema:"Teatralidad",entrevistada:"Andreina Quirós Vásquez", preguntasGeneradoras:["Que entiende por imagen.","Que entiende por lenguaje de imagen.","Cómo caldea a las personas con que ha trabajado.","Cómo fue el proceso y cuáles fueron los criterios para seleccionar las técnicas del libro juegos para teatro foro clown.","Ejercicios que no entiendo:","Si quiero usar este ejercicio necesito práctica las diferentes etapas."],datosextra:["Imagen del grupo","Imagen de la transición","Carrusel de las imágenes","Imágenes múltiples de la felicidad","Imagen múltiple de la opresión","Gesto ritual","Imagen de la hora","Ritmo","Circuito de rituales y máscaras","Gran juego del poder","Juego de las imágenes del poder","Voz de la imagen","Imagen de la voz"], datosextra2:["Lenguaje de imagen","Monólogo interior","Diálogo","Cámara lenta","Improvisación","formación de imágenes","constelación","dando información a las imágenes","re-improvisación con las imágenes","foro relámpago","creación de anticuerpos","feria","debate","Modos"]}
  ];
  fuente = "Elaboración propia, 2020.";
  parrafo7 = "La entrevista sobre la multiplicación dramática a la Licda. Nancy Rebeca Banard se realizó el 4 de octubre del 2016 con una duración de una hora y diez minutos en la sede de Aikú Centro de Salud y Bienestar en Mercedes Norte, Heredia, Costa Rica.";
  parrafo8 = "La entrevista sobre el trabajo grupal a la Licda. Olinda Bravo se realizó el 1 de setiembre del 2016 con una duración de una hora y diez minutos en la sede Central de CENDEROS en Barrio México, San José, Costa Rica.";
  parrafo9 = "La entrevista sobre la teatralidad a la Licda. Andreina Quirós Vásquez se realizó el 8 de junio del 2017 con una duración de veinte y tres minutos en la Ciudad universitaria Rodrigo Facio Brenes de la Universidad de Costa Rica en San Pedro, San José, Costa Rica.";
  parrafo10 = "También se consultó a una segunda persona experta en teatro para complementar la entrevista a Andreina Quirós. Se eligió a Alex Condori por su formación profesional en teatro y su experiencia en teatro comunitario. La manera de proceder fue seleccionar algunos de los ejercicios en las preguntas generadoras y se envió por correo electrónico el contexto de cada ejercicio a Alex Condori para el análisis y la impresión de los mismos.";
  subtitulo2 = "Las Historias como Técnica Metodológica.";
  sub2titulo2 = "Antecedentes de Trabajar con Historias"
  parrafo11 ="Hay dos experiencias que vale la pena mencionar por el cruce entre las vivencias con efecto multiplicador o eco y las facilidades de la tecnología. La primera experiencia deriva del libro, Los hombres me explican cosas de Rebecca Solnit, poco después de la publicación del mismo apareció una página web: Academic men explain things to me. Esta página surge a partir de la iniciativa de las mujeres que deseaban contar sus vivencias sobre los hombres explicando cosas a las mujeres. Es decir, el hábito masculino de explicar cosas independientemente que sabe o no sobre el tema, habitualmente con un tono paternal y condescendiente (Rubio, 2016).";
  parrafo12 = "La segunda experiencia, Sexismo cotidiano por Laura Bates, es un libro que tiene origen en la vivencia de incidentes sexistas. Laura pone a disposición una página web “donde las mujeres podían subir sus historias” (Bates, 2016, p. 17).  Esta iniciativa surge desde una inquietud personal por evidenciar el sexismo cotidiano con la utilización de la tecnología.";
  parrafo13 = "Aunque en estos dos casos no se realiza una investigación en términos académicos y según los criterios de rigor científico, ambos libros se pueden considerar como parte de los antecedentes de las historias en este trabajo. Dichos libros demuestran que la necesidad de buscar y ampliar las formas de investigar sin formalismos académicos. Ya existen ejemplos, que plantea la posibilidad: si se puede investigar desde las experiencias con un lenguaje particular y la tecnología sobre temas que se invisibilizan en la vida cotidiana.";
  sub2titulo3 = "Dónde surge la concepción de trabajar con historias";
  parrafo14 = "En el trabajo de Erika Lust (directora de cine para adultos –anteriormente conocido como porno para mujeres) existe una línea de trabajo titulada XConfessions. Esta línea consiste en compartir confesiones de fantasías eróticas enviadas anónimamente por internet. Estas confesiones son el material que se puede convertir en el guion para realizar películas eróticas. En la página web de XConfessions hay un repositorio público con las confesiones y la posibilidad de que cualquier persona pueda confesar sus fantasías.";
  parrafo15 = "Ahora bien, las confesiones representan ampliar de forma práctica el discurso hegemónico sobre lo erótico en la sociedad occidentalizada. Se construye lo erótico desde las fantasías de las personas concretas y reales que no cumplen con los tópicos en la industria de la pornografía patriarcal. Para entender la postura de Lust, existe un video TEDx y un libro titulado Porno para mujeres, el mismo repositorio de las confesiones y el libro de menciona Lust: Hardcore de Linda Williams.";
  parrafo16 = "El otro punto de reflexión donde surge la idea de usar historias fue la tecnología. En el año 2013 me dio curiosidad de entender la tecnología que usaba todos los días desde que entré a la universidad en 2007, pues el internet cambió vertiginosamente la sociedad. A partir del curso “Medios tecnológicos para la administración de la educación no formal”, pude explorar una herramienta de código abierto para crear contenido educativo llamada exeLearning.";
  parrafo17 = "La herramienta en sí misma tenía limitaciones en las actividades educativas si se plantea el aprendizaje como la capacidad de memorizar desde una visión formal. Esta presentaba una evaluación sumativa y con actividades no interactivas: actividad, reflexión, actividad de lectura y caso práctico. También incluía actividades interactivas: pregunta verdadero-falso, pregunta de elección múltiple, pregunta de selección múltiple, cuestionario SCORM, rellenar huecos, actividad desplegable. Aunque me gusta la idea de realizar contenido educativo, no me gustaba el programa con las opciones disponibles.";
  parrafo18 = "Por esa razón, decidí aprender HTML, CSS y Javascript - todo esto provocó un interés en la visualización de los datos. En el año 2016 participé en el curso “Visualización de datos e infografía con D3”. En el curso, Alberto Cairo reflexiona sobre la necesidad de diferenciar las infografías entre la representación gráfica de los datos y contar historias con los datos. Indiferentemente que este aporte proviene del periodismo de datos, el contar historias es fundamental y requiere integrar otros aportes independientemente al área de conocimiento occidentalizada para investigar, porque siempre se presentan los resultados y los datos de la misma manera.";
  parrafo19 = "Esta idea de trabajar con historias y pensar en cómo se presentan los resultados se afina e impulsa con el libro electrónico Resonate. Present visual stories that transform audiences por Nancy Duarte en el año 2013. Este libro representa en sí mismo una forma digital para presentar los resultados, dispone de los hipervínculos y los videos a parte del texto y las imágenes.";
  parrafo20 = "Sin embargo, no hay garantía de nada ni lo convierte en un sinónimo infalible de ser una fuente interactiva o participativa. Al final, la tecnología es solo un medio más que existe actualmente y modifica la sociedad al ritmo de los avances tecnológicos accesibles a gran parte de la población.  Pero vale la pena intentar usarla.";
  sub2titulo4 = "Génesis de la Propuesta";
  parrafo21 = "Se pensó en el tipo de aprendizaje que permitiera reflexionar en qué manera de aprender puede ser la más eficaz en la vida cotidiana, o por lo menos la más recurrente. Sin duda alguna, la respuesta es las historias que encienden al grabarse en nuestro interior y se resiste al tiempo (Duarte, 2013). Además, son esas historias que evocan a los hechos reales en la vida cotidiana y motiven a tomar la decisión de compartirlas con las demás personas para aprender de las historias y trabajar con las mismas.";
  parrafo22 = "Las historias solventan los limitantes de la teatralidad. Las historias son el modo seleccionado de autoexploración del propio aprendizaje sobre el tema, la reflexión personal y la creación de su propio material pedagógico. Las historias son la medida en sí mismos que puede determinar, dependiendo de qué y cómo se cuentan a las mismas, si se puede aplicar las dinámicas de los ejercicios teatrales o no. Igualmente, las historias representan el grado de confianza que se pueda desarrollar en las sesiones o previamente.";
  parrafo23 = "Las historias es mi forma de colaborar a superar la veracidad de los hechos como criterio de legitimidad académica y social por la interpretación de las vivencias. Esa es la materia prima de este trabajo y que orientaba el guion metodológico fueron las vivencias, estas entendidas como acontecimientos con algún grado de relevancia personal. Lo anterior quedaba muy amplio y ambiguo, por lo que surgió el reto de cómo focalizar las vivencias a determinado “tema”, comprendiéndolo como una forma de acceder e indagar a las múltiples e impensadas relaciones que se suscitan en la vida cotidiana.";
  parrafo24 = "Asimismo, al identificar un tema para trabajar las vivencias permitieron realizar un enfoque integral para explorar en las diferentes prácticas y sus relaciones (Spink, 2005), sin la necesidad de reducir la realidad a la visión de mundo de la persona investigadora. En este sentido, no podía ser cualquier tema. Tenía que ser un tema conectado a una vivencia personal para participar en un proceso de aprendizaje colectivo. Podía ser de interés o no de la disciplina. Esto solo se determinará hasta la aplicación de la propuesta para saber si cumplió con la condición de un abordaje integral.";
  parrafo25 = "Entonces, suponía que hay vivencias relevantes que se recuerdan más que otras a pesar de los años. Consideraba que una sesión fotográfica del cuerpo desnudo como punto inicial de resonancia  (Duarte, 2013). Si resultaba ser una vivencia relevante. Este fue el punto de acceso al tema: el cuerpo, y una vivencia que produjo alguna forma de resonancia.";
  sub2titulo5 = "A Modo de Indicación ";
  parrafo26 = "Con el nombre de fantasía (historias), la palabra refiere a cualquier experiencia importante que esté relacionado con la construcción de su cuerpo. Es decir, cada persona determina lo que es importante y selecciona la forma de contar las historias. No existe una forma exclusiva para presentar las historias, solo se necesita una manera para registrar que puede variar según la creatividad y las posibilidades de cada una de las personas participantes.";
  parrafo27 = "Hay que tener en cuenta que estas historias formarían parte de los resultados en el Trabajo Final de Graduación. Entonces, siempre será una decisión personal si usa un seudónimo o su nombre real. Ya que las historias representan el guion de los ejercicios teatrales. Además, hay que tener en cuenta que estas historias formarán parte de los resultados en el Trabajo Final de Graduación.";
  sub2titulo6 = "Teatro como Espejo Imaginario";
  parrafo28 = "Cualquier persona puede hacer teatro, aunque no todas las personas hacen teatro. En este sentido, la teatralidad tiene la capacidad “para la comprensión y la búsqueda de soluciones a problemas sociales e intersubjetivos” (Boal, 2004, p.9). Por lo consiguiente, permite a cada persona observarse a sí mismo, en acción, para adquirir información y la capacidad de imaginar variantes o inventar alternativas a nuestras acciones. Es decir, “desdoblarse: mirarse en el acto de mirar” (Boal, 2004, p.8).";
  parrafo29 = "Por lo menos, intentar aprender a partir de los acontecimientos cotidianos y las cuestiones individuales y propias para ver a las personas más allá de simples categorías de clases sociales, de género, de análisis o de cualquier otra clasificación y darle la importancia requerida. También la teatralidad es considerada como un espejo que tiene acceso a las imágenes de los recuerdos representativos, transformándolas de nuevo según los deseos de las personas. Pero solo es transformador si nos ayuda a modificarnos a nosotros mismos.";
  parrafo30 = "Sobre todo, la teatralidad permite expresar y converger desde la representación en primera persona. Se aprende al poner en escena ese recuerdo para remirarlo y las vivencias como insumo fundamental en el engrane de las sesiones.";
  parrafo31 = "La teatralidad depende del grado de confianza y la participación entre las personas con sus recuerdos o vivencias para los ejercicios teatrales. La razón de esto es que los ejercicios o técnicas teatrales por sí solas no pueden despertar las emociones, las sensaciones y las reflexiones personales.";
  subtitulo3 = "Selección del Tema Complejo: Cuerpo";
  parrafo32 = "El cuerpo puede ser un punto nodal y fundamental. En este trabajo el cuerpo representa una manera de operacionalizar la interseccionalidad en la configuración de la identidad y las relaciones impensadas por la persona investigadora. Cualquier enfoque teórico para explicar el cuerpo resultaría en una limitación al restringir el grado de importancia solo a ciertos términos explicativos. Esto deja de lado otros términos que se generen en el trabajo de campo. Sobre todo, que el cuerpo es una constante construcción durante toda la vida y donde se refleja muchos de los propios fantasmas (Boal, 2004).";
  parrafo33 = "Dos criterios de selección del tema fueron: una vivencia personal que estuviera conectada a la construcción del cuerpo y poder participar en el trabajo. El proyecto fotográfico Somos como somos representan esos dos criterios. Somos como somos son fotos digitales no manipuladas de cuerpos desnudos, tanto de mujeres como hombres, aunque estos últimos en menor medida. Las personas participantes se caracterizan porque posan voluntariamente, no son modelos profesionales ni reciben remuneración monetaria (Silva, 2012).";
  parrafo34 = "Se da un proceso de fototerapia compuesto por tres fases. Para dicha sesión, la automotivación sirve para realizar un distanciamiento. La sesión fotográfica es un espacio para repensar, vivenciar y crecer; y el proceso de selección de las fotos se convierte en autorreconocimiento y aceptación, cuando revisan y escogen a gusto de cada persona las fotos, que los identifican (Cuevas, S.F.).";
  parrafo35 = "Las fotos representan un mecanismo para desmitificar el cuerpo masificado de los estereotipos, los esquemas y los principios que se enmarca al mismo (belleza, desnudez, salud, etc.).  El proyecto impulsa –a nivel personal–, variar o romper o transgredir por medio de los cuerpos y sus particularidades. Esto puede permitir que cada persona se auto reconozca, valore y acepte su cuerpo (Silva, 2012).";
  parrafo36 = "En este estado de cosas, el criterio de selección fue participar en Somos como somos. Es decir, tener esta vivencia como relevante y, a su vez, pueda generar el efecto de resonancia, por qué no cualquier persona realiza una sesión fotográfica de su cuerpo desnudo y si se considera como una decisión personal.";
  parrafo37 = "La verdad o validez de los hechos se reduce a la interpretación de cada persona. Por lo que un mismo hecho es vivido de forma diferente y genera muchas interpretaciones. Tratar a todas las interpretaciones como historias con el mismo nivel de importancia, más que concentrarme en algún principio para descartar o resaltar una sobre las demás. Lo que interesa es contar historias. Todo depende de lo que las personas quieran contar o no.";
  parrafo38 = "Por esta razón, se solicitó la colaboración con historias de las vivencias que consideren pertinentes a la construcción de su propio cuerpo. Partir de las historias como un punto de resonancia complementario y de reflexión a nivel personal, que depende de cada persona. Un mecanismo para estimular y recopilar puede ser el cuaderno de campo – es un espacio para reflexionar, valorar y recordar esas vivencias relevantes.";
  parrafo39 = "Ahora bien, la propuesta del cuaderno de campo inicialmente es digital, ya sea, por medio del correo electrónico o por una red social como una forma de interactuar asincrónicamente. En su mayor parte, va depender de las facilidades de las personas que participen: si tienen el tiempo, acceso a internet, las ganas y el compromiso. Las tres instrucciones para el cuaderno de campo digital son contar historias con el seudónimo de ser necesario a través de variaciones al canto en el estanque y binomio fantástico de Rodari (1983), la evaluación constante de cualquier aspecto que merezca a criterio personal como una manera de plasmar la opinión de las personas participantes y la selección de material audio visual como un mecanismo para crear insumos de la retroalimentación.";
  parrafo40 = "El canto en el estanque y binomio fantástico son dos técnicas del libro Gramática de la fantasía. Introducción al arte de inventar historias por Rodari (1983). Este libro tiene como objetivo invocar la creatividad para crear historias en la dimensión de la fantasía. Por este motivo, surge la necesidad de realizar variaciones a las técnicas para pasar de las fantasías a las vivencias.";
  parrafo41 = "El canto en el estanque es una metáfora precisa si se considera la existencia de una lógica relacional y el hecho que en una escena no se puede registrar todo lo sucedido. La metáfora trata de lanzar una piedra o canto, lo cual produce el efecto de oscilación. Esto afecta al ecosistema del estanque de formas impensadas, por medio de movimientos invisibles: es decir, todos los eventos o microeventos que suceden en un instante y sin registrar. En este sentido, pretendo usar la palabra como una piedra y ver qué se asocia de las memorias en cada persona; si palabras, imágenes, olores, sonidos y recuerdos forman parte de esos ecos escondidos. El objetivo es las “narraciones que nos ayuden a recuperar el tiempo perdido” (Rodari, 1983, p. 9).";
  parrafo42 = "Asimismo, si se requiere profundizar más en las vivencias, creo que el binomio fantástico, convertido en un marco de referencia entre el cuerpo y cada persona, puede ser un encuentro generador para estimular las narraciones en esa construcción constante del cuerpo, pero en esos pequeños o banales actos.";
  subtitulo4 = "Consideraciones éticas"
  parrafo43 = "La dimensión ética empieza por el ejercicio de reflexionar sobre las actividades del trabajo y sus posibles repercusiones en las personas participantes en el proceso. Estos supuestos éticos refieren a la valoración de la relación riesgo/beneficio para encontrar situaciones hipotéticas que se perciban como riesgos y beneficios. Los riesgos que se encontraron fueron el uso del internet, las políticas de privacidad pertenecientes a terceros en las aplicaciones que puedan estar relacionadas con este trabajo. No se encontró ningún beneficio para las personas participantes.";
  parrafo44 = "El uso del internet será un problema latente para cualquier trabajo que se plantee utilizar la tecnología. Al momento de compartir un texto, un audio, un video o una foto con una persona en una aplicación o una red social, ese contenido puede ser difundido a una gran cantidad de personas a través de internet, sin tener la certeza de las repercusiones que se generen a esa persona expuesta en el contenido. Las políticas de privacidad de las diferentes aplicaciones y las páginas web implican un aumento de los datos a los que acceden terceros, lo cual difiere a la intención del trabajo final de graduación.";
  parrafo45 = "Siempre se intenta seleccionar la mejor opción para garantizar la confiabilidad de los datos personales en la gama de redes sociales que existían en esa época.  Facebook contaba con la opción más fiable para usar: el grupo secreto, el cual limita el acceso de las publicaciones a las personas que formaran parte del mismo.";


  
  
  




  constructor() { }

  
  

  ngOnInit() {
    console.log(this.ordenamiento[2].datosextra);
  }


}
