import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DatosecService {

  datosejcal =[
    {
      "titulo": "Sentir todo lo que se toca",
      "totalidadejercicios": [{
          "subnombre": "Ejercicios generales - Primera serie",
          "subejercicios": [{
              "Id": 213,
              "nombre": "La cruz y el círculo",
              "descripción": "Comienzo por el ejercicio teóricamente más fácil de hacer pero que, debido a las mecanizaciones psicológicas y físicas, se vuelve de difícil ejecución en la práctica. Como no hay necesidad de preparación, los no actores se entregan sin miedo; y si se les advierte que es casi imposible realizarlo bien, no tendrán miedo a conseguirlo y se sentirán libres para intentarlo. Se pide que hagan un círculo con la mano derecha, grande o pequeño, como puedan: es fácil, y todo el mundo lo hace. Se pide después que hagan una cruz con la mano izquierda: es aún más fácil y todos lo logran. Se pide entonces que hagan las dos cosas al mismo tiempo. Es casi imposible. En un grupo de unas treinta personas, a veces una lo logra. Difícilmente dos, y tres es un récord. También servirá cualquier figura diferente para cada mano, además del círculo y la cruz. Variante Se pide que hagan un círculo con el pie derecho, durante un minuto. Que olviden el pie y sigan haciendo el círculo. Después, que escriban sus nombres en el aire, con la mano derecha. Es casi imposible. El pie tiende a seguir a la mano y a escribir el mismo nombre también. Para facilitar el ejercicio, se intenta hacer un círculo con el pie izquierdo y escribir con la mano derecha. Es más fácil, y algunas personas a veces lo consiguen.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 214,
              "nombre": "Hipnotismo colombiano",
              "descripcion": "Un actor pone la mano a pocos centímetros de la cara del otro; éste, como hipnotizado, debe mantener la cara siempre a la misma distancia de la mano del hipnotizador, los dedos y el pelo, el mentón y la muñeca. El líder inicia una serie de movimientos con las manos, rectos y circulares, hacia arriba y hacia abajo, hacia los lados, haciendo que el compañero ejecute con el cuerpo todas las estructuras musculares posibles, con el fin de equilibrarse y mantener la misma distancia entre la cara y la mano. La mano hipnotizadora puede cambiar para hacer, por ejemplo, que el actor hipnotizado se vea obligado a pasar entre las piernas del hipnotizador. Las manos del hipnotizador no deben hacer nunca movimientos muy rápidos, que no puedan seguirse. El hipnotizador debe ayudar a su compañero a adoptar todas las posiciones ridículas, grotescas, no usuales: son precisamente éstas las que ayudan al actor a activar estructuras musculares poco usadas y a sentir mejor las más usuales. El actor utilizará ciertos músculos olvidados de su cuerpo. Al cabo de unos minutos, se intercambian los papeles de hipnotizador e hipnotizado. Pasados unos minutos más, los dos actores se hipnotizan mutuamente: ambos tienden la mano derecha, y cada uno obedece a la mano del otro.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 215,
              "nombre": "Variante: Hipnosis con las dos manos.",
              "descripcion": " El mismo ejercicio: Hipnotismo colombiano. Esta vez el actor dirige a dos de sus compañeros, a cada uno con una mano diferente. El líder no debe detener el movimiento de una mano ni de la otra. Este ejercicio le sirve a él también. Puede cruzar sus manos, obligar a un compañero a pasar por debajo del otro (sin tocarse). Cada cuerpo debe buscar su propio equilibrio, sin apoyarse en el otro. El líder no puede hacer movimientos muy bruscos; no es un enemigo, sino un aliado, aun cuando intente siempre desequilibrar a sus compañeros. Después, se cambia de líder, de manera que cada uno de los tres actores pueda experimentar la función de hipnotizador. Al cabo de unos minutos, los tres actores, en triángulo, se hipnotizan unos a otros, tendiendo, a su derecha, su mano derecha, y obedeciendo a la mano derecha del otro, que se aproxima por la izquierda. Variante .Hipnotismo con las manos y los pies. Como los anteriores, pero con cuatro actores, uno para cada pie y cada mano del líder. Éste puede hacer cualquier movimiento, incluso bailar, cruzar los brazos, dar vueltas con el cuerpo por el suelo, saltar, etc., pero siempre en cámara lenta. Los actores que siguen los pies deben fijar su atención sólo en el dedo gordo.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 216,
              "nombre": "Variante :Con cualquier parte del cuerpo.",
              "descripcion": "En esta variante: Hipnotismo colombiano, un actor va al centro y comienza a mover todo el cuerpo, mirando siempre en una sola dirección; los otros hacen un círculo a su alrededor. Un primer voluntario se acerca y se deja hipnotizar por una parte del cuerpo del líder (el actor en el centro); a continuación, debe seguir todos los movimientos de esa parte del cuerpo, oreja, nariz, espaldas, nalgas, no importa cuál. Un segundo actor se acerca y hace lo mismo, pudiendo elegir cualquier parte del cuerpo de uno o de otro de los que ya están en escena. El tercer actor elige una parte del cuerpo de los que están en el medio, hasta que todos los actores se dejen hipnotizar por los cuerpos de los otros. Entonces, el primer actor puede dar una o más vueltas con su cuerpo, lentamente, porque sus movimientos adquirirán bastante relieve cuando los repita el grupo, dada su distancia en relación con el centro del círculo. A continuación, si el espacio es suficientemente grande, puede indicarse que todos se alejen de (o se acerquen a) la parte del cuerpo que los está hipnotizando.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 217,
              "nombre": "La menor superficie",
              "descripcion": "Cada actor estudia todas las posturas que permitan a su cuerpo tocar lo menos posible el suelo, usando todas las variaciones posibles. Los pies y las manos, un pie y una mano sobre el rostro, la caja torácica, espaldas, nalgas. Es necesario que, en un momento u otro, toda la superficie del cuerpo toque el suelo. El paso de una postura a otra debe hacerse muy lentamente, con el fin de estimular todos los músculos que intervienen en la transición y permitir que el actor se observe. El actor debe sentir la fuerza de la gravedad que lo arrastra hacia el suelo, sentir que se trata de una lucha entre su fuerza muscular y la gravedad, mediada por el peso de su cuerpo. Los movimientos que hacemos cada día acaban mecanizando nuestros cuerpos; en este caso tratamos de desmecanizarlos, desestructurarlos, desmontarlos. Al cabo de unos minutos, se pide a los actores que formen parejas. Cada uno debe tocar el cuerpo del otro en la menor superficie posible y tocar el suelo también lo menos posible. Cada uno debe equilibrar al otro. Los dos cuerpos deben moverse lentamente, sin interrupción, intentando descubrir cada vez una nueva posición, una nueva figura que ha de modificarse continuamente. Después, se pide a los actores que formen grupos de cuatro, tal vez de ocho, tal vez un único grupo que los incluya a todos. Si se puede, es mucho mejor trabajar sobre el césped o sobre una superficie blanda. En este ejercicio, como en todos los demás ejercicios físicos de comunicación muscular, está absolutamente prohibido hablar; la comunicación en este caso es sólo muscular o visual, nunca verbal. Hablar, aun en voz baja, obliga a los actores a prestar atención a las palabras y no a las imágenes ni a los contactos. No hace falta realizar proezas, ser heroico, ni intentar ser mejor que los demás, nada de riesgos. Dentro de lo que cabe, habrá que hacer lo que sea posible hacer, sin obligar a nadie a nada, sin forzar.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 218,
              "nombre": "Empujarse",
              "descripcion": "Este es un ejercicio muy importante, sobre todo porque muestra físicamente lo que debe ser la acción mayéutica1 del actor durante una sesión de Teatro Foro. Mayéutica: proceso socrático que consiste en ayudar a una persona a exponer conscientemente concepciones latentes en su mente a través de preguntas y sin que el filósofo ofrezca ni imponga conceptos preexistentes. En este sentido, el Teatro del Oprimido es mayéutico, porque a través de preguntas se produce e aprendizaje entre los espectadores y los actores. (N. del A.) Se trata de utilizar todas nuestras fuerzas y, aun así, no lograr vencer. Debe practicarse en parejas que tengan más o menos el mismo peso y la misma fuerza. Como en una sesión de Teatro Foro, los actores deben utilizar todos sus conocimientos, pero no agobiar a los espect-actores, sino estimularlos a que inventen, creen, descubran. Los actores, en pareja, uno frente al otro, se sujetan por los hombros. Hay que imaginarse una línea en el suelo. Comienzan a empujarse con todas sus fuerzas, y cuando uno siente que su adversario es más débil, disminuye su propio esfuerzo para no traspasar la línea, para no ser el vencedor. Si el otro aumenta su fuerza, el primero hará lo mismo, y los dos utilizarán juntos toda la fuerza de que sean capaces. A continuación se hace lo mismo con dos actores, espalda contra espalda. Después, culo contra culo. Luego, baile de espaldas: dos actores se ponen de espaldas y bailan sin música. Hace falta que cada uno intente comprender al otro, las intenciones de sus movimientos. Columpio. Frente afrente, sentados en el suelo. Los actores se sujetan por los brazos. Con las manos solamente resultaría más difícil. Se sostienen con los pies firmemente apoyados en el suelo, muy cerca, pero no uno contra otro. A continuación, uno sube y otro baja; cuando el segundo comienza a subir, el primero baja, como en un verdadero columpio. Pueden formarse también grupos de cuatro, en los que cada uno a su turno sube mientras los otros retroceden. Y, finalmente, a una señal del director, suben los cuatro de una vez.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 219,
              "nombre": "Dominguillo",
              "descripcion": "Se pide al grupo que forme un círculo, todos de pie mirando al centro. Después, que se inclinen en dirección al centro sin doblar la cintura, encorvarse ni levantar los talones, como la Torre de Pisa. A continuación, que se inclinen hacia fuera. Que hagan lo mismo hacia la izquierda, hacia la derecha, siempre sin doblar la cintura ni levantar los pies. Que dibujen un círculo en el espacio con sus cuerpos, que se inclinen hacia delante, hacia la izquierda, hacia atrás, hacia la derecha, hacia el centro; luego lo mismo pero al contrario, centro, derecha, atrás, izquierda delante, y así varias veces. Un voluntario va al centro, cierra los ojos y hace lo mismo, sólo que esta vez se deja caer; todos los demás deben sostenerlo con las manos, permitiéndole inclinarse hasta muy cerca del suelo. A continuación deben volver a situarlo nuevamente en el centro, pero él caerá en otra dirección, siendo sujetado siempre por tres compañeros, por lo menos. Al final, los compañeros pueden ayudar al protagonista con las manos a girar en círculo, en vez de llevarlo de nuevo hacia el centro. Variante Dos personas solamente y una tercera en el medio que se deje caer hacia delante y hacia atrás, siendo sostenida por los dos compañeros.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 220,
              "nombre": "Círculo de nudos",
              "descripcion": "Como preparación, se hace la rueda elástica. Los actores se dan las manos, formando una rueda. Después se alejan hasta que ya no llegan a tocarse, salvo con los dedos, aunque sus cuerpos siguen alejándose lo más posible. Después de cierto tiempo, hacen lo opuesto y se juntan en el centro, ocupando el menor espacio posible. Esa rueda puede combinarse con un ejercicio de voz. Los actores emiten sonidos que expresan su deseo de tocarse alejándose y después el deseo de alejarse mientras se están tocando. Se rehace el círculo, todos cogidos de la mano; no se debe cambiar la manera de cogerse de la mano durante todo el ejercicio. Uno de los actores comienza a andar, tirando de los demás (siempre lentamente, sin brusquedad) y pasando por encima y por debajo de las manos de los compañeros que tiene delante, como para hacer un nudo; a continuación, un segundo actor hace lo mismo, formando otro nudo, después otro, y otros dos o tres, al mismo tiempo, por encima y por debajo, hasta que todos hagan todos los nudos posibles y que nadie pueda ya moverse. Muy lentamente, sin violencia, en silencio, intentarán volver a la posición original. Variante Se hace lo mismo con los ojos cerrados. En este caso, es necesario hacer todo muy lentamente, para evitar choques. Variante Una línea, en vez de un círculo: es la variante llamada bramante. Variante Los actores se juntan en un bloque, levantan los brazos, todos juntos, se dan las manos, y cada uno aprieta las manos de otros dos; a continuación, se separan e intentan formar un círculo sin soltar en ningún momento las manos ni cambiar sus manos de posición al coger las de los demás.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 221,
              "nombre": "El círculo griego: el actor como sujeto",
              "descripcion": "Un actor, en el centro, comienza un movimiento, y todos los demás a su alrededor deben ayudar para que lo haga. Ejemplo: él levanta un pie, alguien le coloca su propia rodilla bajo el pie para que suba. El protagonista hace lo que quiere y los demás lo ayudan a levantarse, girar, estirarse, subir, escalar, etc. El protagonista debe moverse lentamente, para permitir que los demás tengan tiempo de descubrir sus intenciones con sólo mirarlo. Para descubrirlas mejor, los actores deben tocar cualquier parte del cuerpo del protagonista y traducir los mensajes musculares. No se debe manipular al protagonista: a él le toca decidir sus propios movimientos. Si es posible, pueden formarse dos o más grupos simultáneos; en ese caso, los protagonistas pueden cambiar de grupo pero no los grupos de protagonista: los protagonistas son siempre los sujetos. El ejercicio termina cuando el protagonista vuelve suavemente al suelo. Una vez, en Italia, dije «Alto», y los actores dejaron caer al protagonista. Eso nunca debe suceder.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 222,
              "nombre": "El actor objeto",
              "descripcion": "Hay dos maneras de comenzar este ejercicio: El protagonista sube a una mesa y se deja caer de espaldas sobre ocho actores dispuestos en dos filas de cuatro, frente a frente, con los brazos extendidos, sujetando, con las manos bien abiertas, el antebrazo del compañero que está delante, dispuestos a sostener el peso, sin olvidar de quitarse antes pulseras, relojes, anillos, etc. El actor corre, se arroja en los brazos de los ocho actores. Antes de saltar, grita; al oír el grito, los actores extienden sus brazos y se sujetan frente a frente, formando una red. En los dos casos, el actor se queda echado sobre cuatro pares de brazos que lo sujetan. En ese momento, un actor sujeta sus brazos y otro sus pies; lanzan al protagonista al aire tres veces, con los brazos extendidos; con el protagonista vuelto hacia el suelo (es peligroso estar con el estómago hacia arriba), los otros ocho actores lo impulsan hacia arriba, se arrodillan y lo reciben abajo. Después de eso, lo tumban en el suelo y todos, al mismo tiempo, comienzan a hacerle un masaje uniforme, con las dos manos, hacia la derecha y hacia la izquierda, de tal manera que todo el cuerpo del protagonista sea tocado con la misma intensidad (ni cariño ni agresión). A continuación, lo colocan de espaldas y repiten el mismo masaje. El actor que está junto a su cabeza, lo masajea en las orejas, la nariz, el cuello, el pelo. El que está a sus pies, los pies. Durante el ejercicio, los actores deben emitir un sonido uniforme como el masaje.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 223,
              "nombre": "Levantar a alguien de una silla",
              "descripcion": " Un actor se sienta en una silla, otros intentan sujetar su cuerpo contra ella, haciendo uso de todas sus fuerzas, y él intenta levantarse. En determinado momento, el director grita «¡Alto!» y todos, al mismo tiempo, invierten el movimiento y lo lanzan al aire. Variante Lo mismo con un brazo apretado contra una mesa: al soltarlo, tiende a levantarse solo.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 224,
              "nombre": "Equilibrio del cuerpo con objetos",
              "descripcion": "Se coge un objeto cualquiera, un lápiz, una pelota, una silla, un libro, una mesa, una cartera, un pedazo de papel, un sello postal, un cartel, un teléfono, cualquier cosa. Se buscan todas las posiciones y estructuras corporales en las que se pueda equilibrar ese objeto, usando todas las relaciones posibles entre el cuerpo y el objeto: cerca del cuerpo, a distancia, encima o debajo. Lo importante es estudiar la relación cuerpo- objeto-gravedad. Se pueden usar las manos, pero sólo lo indispensable. Después de unos minutos, el director dará la señal para que los actores cambien de objetos sin usar las manos; unos minutos más, nuevo cambio; luego, el director pide que los actores recuperen sus objetos iniciales y cada uno busca el suyo, dando el objeto que lleva consigo al actor que tiene el suyo, hasta que el último actor haya recuperado su objeto. Siempre con el cuerpo en cámara lenta, los actores vuelven a poner los objetos en sus lugares originales.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 225,
              "nombre": "Globo como prolongación del cuerpo",
              "descripcion": "El director lanza dos, tres, muchos globos a los actores, que deben mantenerlos en alto, tocándolos con cualquier parte de sus cuerpos, como si éstos formasen parte de los globos que están tocando; deben llenarse de aire e intentar flotar como si fuesen globos.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 226,
              "nombre": "Carrera de silla",
              "descripcion": "En fila, cinco o más actores suben cada uno a una silla. La primera silla de la fila se deja vacía. Cada actor pasa a la silla que está delante y deja vacía la última. Entonces, con las manos, pasan la última silla, la que está vacía, al primer lugar y avanzan  una vez más otra silla, dando nuevamente un paso hacia delante y repitiendo todo el proceso... y así sucesivamente, poniendo toda la fila en movimiento.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 227,
              "nombre": "Ritmo con sillas",
              "descripcion": "Cinco actores, cada uno con una silla, deben crear una imagen con esta y su propio cuerpo. El líder numerará las imágenes: 1, 2, 3, 4, 5. A continuación dirá un número o una secuencia de números, rítmicamente, y los participantes deberán adoptar la posición correspondiente a ese número. Variante El mismo ejercicio sin sillas. Los actores usarán solamente sus propios cuerpos. En la versión Hamlet, los actores deberán formar imágenes de escenas de los personajes de esa (o de cualquier otra obra).",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 228,
              "nombre": "Baile de sillas",
              "descripcion": "Es un juego de niños muy conocido. Un círculo formado por sillas vueltas hacia fuera, teniendo siempre una menos que el número de participantes. Los actores cantan y bailan una música conocida, andando alrededor de las sillas. Cuando el director grita «¡alto!», todos deberán sentarse. El que queda de pie abandona el juego, y se retira una silla. El juego prosigue hasta que el último jugador se siente en la última silla.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 229,
              "nombre": "Movimiento premeditado",
              "descripcion": "Los actores se mueven con premeditación, separando claramente el momento en el que se premedita y el movimiento del momento en el que se ejecuta, como si no pudiesen ser simultáneos. Esos movimientos deben hacerse en todas las direcciones, en todos los niveles, sobre mesas, sillas, en el suelo, escaleras, de manera ordenada o desordenada, caótica, de pie, tumbados, inclinados, a cuatro patas, pero siempre de una forma premeditada y dividida: pienso lo que voy a hacer y después lo hago. Lo importante es reflexionar sobre el propio cuerpo, los músculos, las estructuras musculares. Así, todos los movimientos serán planeados.",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 230,
              "nombre": "Dificultad en relación con los cuerpos y los objetos",
              "descripcion": "Estamos acostumbrados a hacer movimientos mecanizados inconscientemente. No obstante, todo podría cambiar si se produjese una mínima alteración con nuestros cuerpos o con los objetos. Si, por ejemplo, un actor tiene una mano en la espalda, ¿cómo podrá poner la mesa? Si tiene sólo un ojo (el otro tapado) o una pierna (la otra atada); si no puede ir hacia delante o sólo puede ir hacia atrás o andar hacia los lados; si sus dedos están entumecidos, ¿cómo podrá vestirse o acariciar a alguien? Todas las transformaciones físicas provocan el aumento inmediato de la sensibilidad. Dividir el movimiento Se divide en partes un movimiento continuo (andar, por ejemplo) : primero una pierna, pausa; después el brazo, pausa; la otra pierna, pausa... y así sucesivamente. No coordinación de movimientos coordinados. La coordinación de movimientos endurece los músculos y determina la máscara física. En este ejercicio, el actor estudia sus movimientos y deja de coordinarlos: los brazos separados de las piernas al andar; una pierna con un ritmo diferente del de la otra; una mano gesticulando lo contrario de la otra; la mano no coordinada con la boca que se abre para recibir los alimentos; el dedo que se levanta antes de que se abra la boca para pronunciar un discurso; los brazos haciendo el movimiento de equilibrar las piernas que se cruzan, pero no al mismo tiempo, etc. Primero se puede realizar una acción cualquiera y después repetirla con los movimientos no coordinados. Círculo máximo y círculo mínimo Los actores se dan las manos en círculo e intentan hacer que ocupe el mayor espacio posible, después el menor, el mayor, el menor... ..........",
              "etiquetas": ["Primera serie: Ejercicios generales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Caminatas - Segunda serie",
          "subejercicios": [{
              "Id": 231,
              "nombre": "Carrera en cámara lenta",
              "descripcion": "Gana el último en llegar. Una vez iniciada la carrera, los actores no podrán interrumpir sus movimientos, que deberán ejecutarse lo más lentamente posible. Cada corredor deberá estirar lo máximo que pueda las piernas a cada paso. El pie que adelante a la otra pierna debe pasar siempre por encima de la altura de la rodilla. Hace falta que el actor, al avanzar, estire bien su cuerpo, porque con ese movimiento el pie romperá el equilibrio y, a cada centímetro que camine, se organizará una nueva estructura muscular, instintivamente, activando ciertos músculos dormidos. Cuando el pie llegue al suelo, debe oírse el ruido. Inmediatamente se levantará el otro pie. Este ejercicio, que exige un gran equilibrio, estimula todos los músculos del cuerpo. Otra regla: los dos pies jamás podrán estar al mismo tiempo en el suelo. En cuanto el pie derecho se haya apoyado, el pie izquierdo debe subir, y viceversa. Siempre un solo pie en el suelo.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 232,
              "nombre": "El ángulo recto",
              "descripcion": "Los actores se sientan en el suelo, con los brazos estirados paralelos a su superficie y las piernas también estiradas. Comienzan a caminar con las nalgas, a la derecha y después a la izquierda, como si fuesen los pies. El tamaño de cada paso debe ser el mayor posible, pero no es necesario caminar rápidamente, pues no se trata de una carrera. Después de recorrer cierta distancia, todos deben retroceder, caminando sobre sus propios pasos, siempre con las nalgas. Las piernas y los brazos deben estar siempre estirados hacia delante, en ángulo recto. Es preciso mantener la espalda bien recta, formando un ángulo de noventa gra- dos con los brazos y las piernas.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 233,
              "nombre": "El cangrejo",
              "descripcion": "Las dos manos y los dos pies en el suelo. Se trata de andar como los cangrejos, hacia la izquierda y hacia la derecha. Nunca hacia delante ni hacia atrás.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 234,
              "nombre": "Piernas cruzadas",
              "descripcion": "De pie, lado a lado, dos actores se sujetan por la cintura, apretándose fuertemente, y cruzan las piernas, la derecha de uno con la izquierda del otro, levantándolas para que no toquen el suelo. Después empiezan a andar teniendo en cuenta que cada uno debe considerar el cuerpo del otro como su propia pierna. Atención, la idea es andar y no saltar. La pierna (el actor) no ayuda, es el otro quien debe hacer todo el esfuerzo para que ella, es decir, su compañero, avance.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 235,
              "nombre": "Mono",
              "descripcion": "Caminar hacia delante con las manos siempre tocando el suelo, con la cabeza trazando una línea horizontal con respecto al suelo, como los monos, que se desplazan armoniosamente. Saltar obstáculos, armoniosamente.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 236,
              "nombre": "Andar a cuatro patas",
              "descripcion": "El actor anda a cuatro patas, hacia delante y hacia atrás.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 237,
              "nombre": "Paso de camello",
              "descripcion": "Pie derecho con mano derecha. Pie izquierdo con mano izquierda. El camello avanza primero el lado izquierdo, después el lado derecho.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 238,
              "nombre": "Paso de elefante",
              "descripcion": "Como el ejercicio: paso de camello, sólo que al contrario: pie derecho con mano izquierda, pie izquierdo con mano derecha. Es así como anda el elefante.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 239,
              "nombre": "Paso de canguro",
              "descripcion": "El actor se agacha y se coge los tobillos con las manos. Anda hacia delante, saltando como un canguro.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 240,
              "nombre": "Inclinados unos sobre otros",
              "descripcion": "Dos actores, lado a lado, acercan sus hombros (el hombro izquierdo de uno contra el hombro derecho del otro) e intentan caminar así inclinados, cada cual poniendo los pies lo más lejos posible del otro. Variante Lo mismo con dos actores, formando una unidad, de cada lado (cuatro en total). Variante Dos actores de espaldas; cuatro actores de espaldas, equilibrándose en sus cuellos.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 241,
              "nombre": "Carrera de sacos",
              "descripcion": "Los pies juntos o dentro de un saco. Saltando primero hacia delante, después hacia atrás, después de lado.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 242,
              "nombre": "Carretilla",
              "descripcion": "Como hacen los niños: un actor en el suelo se apoya sobre las manos y el otro lo sujeta por los pies. Uno camina con las manos y el otro lo sigue, como quien conduce una carretilla.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 243,
              "nombre": "Como gustéis",
              "descripcion": "Intentando modificar la forma habitual de andar, incluso el ritmo, y variando muchas veces durante el ejercicio.",
              "etiquetas": ["Segunda serie: caminatas"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Masaje - Tercera serie",
          "subejercicios": [{
              "Id": 244,
              "nombre": "Masaje",
              "descripcion": "El término masaje no es el más adecuado para designar esta serie de ejercicios. La mejor descripción sería: un diálogo persuasivo entre los dedos de un compañero y el cuerpo de otro. Este diálogo debe establecerse sin violencia ni tampoco cosquillas; ni agresión, ni cariño. Buscamos, sobre todo, localizar las tensiones musculares. Es un diálogo, un intento de calmar, de relajar los agarrotamientos, las rigideces musculares a través de movimienVariante (italiana) Todos tumbados en el suelo, con las cabezas alineadas. La primera persona de la fila comienza a rodar sobre los cuerpos de sus compañeros hasta llegar al otro lado. En cuanto se retira, continúa rodando la segunda persona, después la tercera, y así sucesivamente. Variante (Edam) Todos tumbados de espaldas, uno al lado del otro, como la primera vez, con las cabezas en direcciones opuestas. Esta vez, se deja un pequeño espacio entre cada uno de los actores. Viene el primero y se acuesta sobre los tres primeros actores acostados, en el sentido perpendicular, es decir, formando un ángulo recto con ellos. El director da la señal y todos los que están acostados comienzan a rodar en el mismo sentido (como una alfombra voladora). El que está encima de esta alfombra es movido en la misma dirección. Una segunda persona lo sigue, y así sucesivamente.",
              "etiquetas": ["Tercera serie: masajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 246,
              "nombre": "Masaje de espalda",
              "descripcion": "Dos actores, espalda contra espalda. Cada uno intenta masajear al otro con su propia espalda.",
              "etiquetas": ["Tercera serie: masajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 247,
              "nombre": "Demonio",
              "descripcion": "Una buena manera de liberar las tensiones. El actor salta de un pie al otro, haciendo, con los brazos, movimientos parecidos a los que hacemos para secarnos el agua del cuerpo, o para exorcizar al demonio (en los países donde los demonios existen, claro...).",
              "etiquetas": ["Tercera serie: masajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Juegos de integración - Cuarta serie",
          "subejercicios": [{
              "Id": 248,
              "nombre": "Nadie con nadie (estilo Quebec)",
              "descripcion": "En parejas, con una persona que queda siempre fuera. Esa persona, el líder, indicará en voz alta las partes del cuerpo con las que los participantes deberán tocarse; por ejemplo, cabeza con cabeza; pie derecho con codo izquierdo (el pie de una persona debe tocar el codo de la otra, y viceversa, al mismo tiempo, si fuese posible); oreja izquierda en el ombligo, etc. Los contactos corporales son acumulativos y no se deshacen hasta que se haga imposible obedecer las nuevas instrucciones. Los actores pueden hacer los contactos sentados, de pie, tumbados, etc. Cuando resulte imposible continuar, el líder dirá nadie con nadie, y todos buscarán nuevas parejas; y un nuevo líder (el que quede sin compañero) deberá dar continuidad al juego.",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 249,
              "nombre": "Oso de Poitiers",
              "descripcion": "Se elige un participante para que sea el oso de Poitiers (ciudad francesa donde se practica este juego). Da la espalda a los demás, que son los leñadores. Éstos deben representar con mímica la acción de trabajar. El oso, al lanzar un fuerte rugido, hace que los leñadores caigan al suelo o se queden inmóviles incluso de pie, sin hacer el menor movimiento, totalmente paralizados. El oso se acercará a cada uno de ellos, rugirá cuanto quiera, podrá tocarlos, hacerles cosquillas, empujarlos, todo lo que pueda para lograr que se muevan, se rían, obligándolos a mostrar que están vivos. Si eso ocurre, el leñador se transformará en oso también, y los dos osos harán lo mismo con los otros leñadores, que seguirán intentando no moverse. Luego tres, cuatro osos, etc. Este ejercicio-juego es muy curioso, porque produce el efecto Vacíamente contrario al que sería su objetivo. El principio es: siel leñador adormece sus sentidos, si consigue no sentir nada, no ver ni oír nada, si se finge muerto, el oso no lo atacará, porque los osos no devoran a los muertos. La instrucción «no sentir nada» provoca exactamente la reacción opuesta, y todos los sentidos agudizan su actividad. Se siente más, se escucha mejor, se ve lo que no se veía, se huele lo que no se olía: sólo queda fuera el gusto. ¡El miedo nos hace hipersensibles!",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 250,
              "nombre": "Un, dos, tres, al escondite inglés (en francés: «un, deux, trois, soleil»)",
              "descripcion": "Juego también muy conocido. Una persona frente a la pared, sin mirar a los otros. Éstos, que están a cierta distancia, se acercan. La persona que esté en la pared canta lento o rápido y a continuación se vuelve hacia quienes se acercan. En ese momento, todos deben quedarse inmóviles, y quien es sorpren- dido andando debe volver al punto de partida. El que toca a la persona que está junto a la pared es el vencedor del juego. (Forma parte de los juegos de salón, pero sirve para unificar al grupo...)",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 251,
              "nombre": "Baile con manzana",
              "descripcion": "Dos compañeros bailan con una manzana sostenida entre las frentes de ambos y deben evitar que caiga.",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 252,
              "nombre": "Fútbol americano",
              "descripcion": "Todos los actores se apoyan en una pared, menos uno, que queda aparte, frente al grupo. El director inicia el juego, y todos deben cruzar la sala y llegar a la pared opuesta. El actor que está aparte intenta agarrar a cualquiera de los demás actores. A continuación, cualquiera de los dos, tanto él como su prisionero, ahora transformado en apresador, deben capturar a otro. De esa forma, cuatro actores deberán capturar a otros cuatro, después a ocho, después a dieciséis, etc. Sólo se puede apresar a un jugador cada vez. Variante Lo mismo, con la diferencia de que el actor que está fuera puede coger a los otros simplemente rozándolos y se permite que capture a varios compañeros al mismo tiempo. Esta variante es menos violenta. Variante Igual a la anterior, sólo que el actor que está aparte tiene las manos atadas. Es la más difícil.",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 253,
              "nombre": "Buenos días",
              "descripcion": "Juego especialmente útil para iniciar espectáculos de Teatro Foro y animar al público: cada persona debe dar los buenos días o las buenas noches a otra y decir su nombre, no pudiendo soltar la mano de esa primera persona antes de estrechar la de otra, darle los buenos días o las buenas noches, y así sucesivamente, formando redes de apretones de manos.",
              "etiquetas": ["Cuarte serie: juegos  de integración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Gravedad - Quinta serie",
          "subejercicios": [{
              "Id": 254,
              "nombre": "Horizontales",
              "descripcion": "El actor, sin mover el resto del cuerpo (que debe permanecer rígido), mueve sólo el cuello y la cabeza hacia delante; un compañero puede ayudarlo, tocando su nariz y luego alejando el dedo: la nariz debe intentar seguir el dedo hasta donde pueda, lo más lejos posible del cuerpo, sin que los pies se desplacen lo más mínimo. El movimiento siempre debe seguir una línea horizontal. Sin mover el resto del cuerpo, el actor mueve el cuello y la cabeza hacia atrás lo más que pueda. Es siempre conveniente la ayuda de un compañero que, con el dedo, indique el movimiento, que debe ser siempre recto y horizontal. El actor mueve el cuello hacia la izquierda, poniendo la cabeza sobre el hombro izquierdo, como si fuese un sombrero, pero sin torcerla, sin mirar hacia los lados, siempre mirando hacia delante. El compañero puede ayudarlo tocando su oreja con el dedo. Para facilitar el ejercicio, el actor puede cruzar las manos encima de su propia cabeza e intentar tocar los codos con las orejas. ídem, hacia la derecha. Todos los movimientos anteriores deben ser rectos y horizontales, es decir, la nariz moviéndose paralelamente al suelo, sin curvas. Ahora, el actor mueve el cuello, intentando tocar nuevamente los puntos extremos que haya alcanzado, hacia adelante y hacia atrás, hacia la izquierda y hacia la derecha, en movimientos circulares, no rectos. Es importante que los ojos miren fijamente un punto, que el cuello haga todo el movimiento y que la cabeza se mantenga siempre a la misma distancia del suelo, sin inclinarse hacia abajo o hacia arriba. Exactamente lo mismo para el tórax. Es importante que el tórax se mueva lo máximo posible hacia delante y hacia atrás, hacia la derecha y hacia la izquierda, y que se llene durante la respiración. Por ello, es aconsejable inspirar cuando el tórax va hacia atrás y expirar cuando va hacia delante; es decir, lo con- trario de lo habitual. Exactamente lo mismo para la pelvis. Marioneta: un actor coge a un compañero por el cuello de la camisa y éste deja caer libremente la cabeza, como una marioneta. El otro toca su cabeza, que debe moverse exclusivamente por la fuerza de la gravedad. Marioneta: ídem, cabeza y brazo derecho. Las demás partes del cuerpo permanecen rígidas. El brazo derecho y la cabeza deben estar completamente sueltos, obedeciendo sólo a los impulsos del compañero y a la fuerza de la gravedad. Marioneta: ídem, más el brazo izquierdo. Marioneta: un compañero sujeta a otro por la cintura, y toda la parte superior del cuerpo del actor se afloja y se deja caer. El actor improvisa con estos movimientos básicos. Por ejemplo, una máquina de escribir: las manos pulsan las teclas y, coordinadamente, la cabeza se mueve un espacio hacia la izquierda, o retrocede todos los espacios (el retroceso del carro), retroceso (un espacio hacia la derecha), mayúscula (la cabeza sube), tecla roja (la cabeza va hacia la izquierda). (Nota: hoy, 1998, me doy cuenta, mirando mi ordenador Pentium de 230 megahercios, de que los tiempos han cambiado... pero la memoria existe...).",
              "etiquetas": ["Quinta serie: Gravedad"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 255,
              "nombre": "Verticales",
              "descripcion": "a) El actor, sentado en el suelo, con las piernas y los brazos en ángulo recto en relación con el resto del cuerpo, divide éste verticalmente en dos partes, cada una con un brazo, una pierna, un hombro, la mitad de la pelvis y del tórax. Así, camina sobre el trasero, inclinando primero la parte derecha del cuerpo hacia delante y después la parte izquierda, separando lo más posible las dos partes. Después de haber dado algunos pasos hacia delante, siempre con los brazos y las piernas estirados, retrocede. Exactamente lo mismo, el actor tumbado en el suelo, con los brazos y las piernas estirados en línea recta, paralelos al cuerpo. Anda hacia delante y hacia atrás. Tumbado en el suelo, el actor se mueve hacia la derecha y hacia la izquierda.",
              "etiquetas": ["Quinta serie: Gravedad"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 256,
              "nombre": "Secuencia de movimientos rectilíneos y circulares",
              "descripcion": "a) El actor se mueve con movimientos exclusivamente rectilíneos de piernas, brazos y cabeza, como si fuese un robot (de los antiguos, que eran así; después se inventaron robots más gráciles) . Los movimientos deben ser entrecortados, sin ritmos definidos, inesperados, sorprendentes. El movimiento pendular de los brazos no sirve, porque es circular. Deben moverse todas las partes del cuerpo. Los actores casi siempre tienden a hacer movimientos bruscos, violentos, y hay que evitarlo. Aunque rectos, los movimientos pueden ser suaves, delicados. Deben serlo. Se empieza con un brazo, después el otro, una pierna, después la otra, el cuello, y así sucesivamente. Los movimientos rectos se ejecutan mejor si el actor tiene conciencia de que deben ser paralelos a las paredes, o al suelo, o al techo, o a cualquier diagonal de la sala. b) El actor camina con movimientos curvos (circulares, ovales, helicoidales, elípticos, etc.). Los brazos giran mientras se mueven hacia delante y hacia atrás, mientras suben y bajan; la cabeza debe describir curvas en relación con el suelo, subiendo y bajando, sin mantenerse nunca al mismo nivel. Las piernas y todo el cuerpo suben y bajan. El movimiento debe ser continuo, suave rítmico, circular y lento. Los actores deben repetir varias veces los mismos movimientos, intentando estudiar (sentir) todos los músculos que se activan y desactivan en su realización. Sólo después de haber estudiado (sentido) un movimiento deben pasar a otro, igualmente circular, helicoidal, elíptico, etc. Es importante que todo el cuerpo se ponga en movimiento: cabeza, brazos, dedos (que no deben mantenerse nunca cerrados), tórax, caderas, piernas, pies. El ejercicio debe hacerse suavemente, sin violencia, con placer, casi sensualmente. No debe causar dolor, debe calentar el cuerpo. Alternar movimientos circulares y rectilíneos. La parte derecha del cuerpo hace movimientos circulares, y la izquierda, rectilíneos. Tras unos minutos, se alternan. c) La parte superior del cuerpo describe movimientos circulares y la parte inferior, de la cintura para abajo, rectilíneos. Después de unos minutos, se alternan. d) Todas las variaciones posibles, con todas las partes del cuerpo que el actor haya conseguido dominar y separar. f) El actor camina, separando lo más posible todas las partes del cuerpo, estirando hasta el límite extremo la cabeza, los brazos y las piernas, intentando sentir la división vertical de todo el cuerpo. Camina de puntillas con movimientos siempre rectos. A continuación, comienza a hacer movimientos circulares, lentamente, y a encoger el cuerpo, acercando todas sus partes, deteniéndose cuando la apariencia ctel cuerpo se asemeja a una bola. Después, se hace el mismo movimiento inversamente. h) Los actores realizan todos los ejercicios anteriores marcha atrás. g) Los actores deben mantener las rodillas dobladas y caminar así durante unos minutos, sin enderezarse: se revela aquí la lucha entre la fuerza muscular y la fuerza de gravedad. h) Los participantes pueden hacer cualquier tipo de movimiento (circular o rectilíneo), hacia los lados o hacia atrás -nunca hacia delante, como es habitual-, y siempre con las rodillas dobladas. i) El actor debe comenzar a hacer un poco menos de esfuerzo que el habitual para continuar caminando, para desplazarse. Primero un poco menos e, inmediatamente después, un poco más. Debe estudiar esas dos fuerzas, la fuerza muscular y la de la gravedad. Intentar equilibrar la gravedad solamente con la energía necesaria, pero usando cada vez menos la fuerza muscular necesaria. Menos, menos, más, menos, menos, menos, más. Victoria difícil y lenta de la gravedad. El actor se arrastra. Siempre variando entre un poco más de fuerza y un poco menos, pero siempre cada vez menos, haciendo que sea cada vez más difícil el movimiento de avance; sin embargo, cada uno debe intentar seguir avanzando, arrastrándose, incluso tocando ahora el suelo con las rodillas, después con las piernas, después con el abdomen, más tarde también con el tórax, etc. J) Finalmente, después de cierto tiempo, cada uno renuncia a moverse y se abandona, teniendo la precaución de acabar tumbado de espaldas. Es necesario que la mayor parte posible del cuerpo toque el suelo. El actor, entonces, debe intentar sentir el peso específico de cada parte de su cuerpo: los dedos, por ejemplo. Los dedos de las manos son diez y debe sentirlos separadamente y no en conjunto. Mueve primero los dedos, después la mano derecha, que se levanta y vuelve a caer; entonces, la levanta más alto y b deja caer; después la mano izquierda se levanta y cae, se levanta v cae; a continuación, la pierna izquierda, la pierna derecha, que una, dos veces, se levantan y caen; después la cabeza se levanta y se apoya suavemente en el suelo otra vez; a continuación, la cabeza y el tórax; después el actor se pone boca abajo. k) Entonces, cuando haya sentido cada parte de su cuerpo, el actor reanuda el movimiento contrario, usando siempre la fuerza muscular límite necesaria: un poco más, un poco más y un poquito menos. El estudio, ahora, se hace en el sentido de un poco más. Las rodillas se yerguen y caen, pero suben de nuevo y cada vez más. El cuerpo comienza a moverse; cuanto más suavemente baja, más impulso se obtiene al reanudar el movimiento. l) El actor se mueve con dificultad: esa dificultad es real, porque se trata de vencer la fuerza real de la gravedad, contra la cual luchamos todos los días. El actor avanza con las manos, después los brazos, después también las rodillas, usando solamente la fuerza necesaria, a veces un poco menos, a veces un poco más, y más, y más. Se queda acuclillado. Primero miraba el suelo, después miraba la horizontal; ahora, en cuclillas, comienza a mirar el techo y a dirigirse muscularmente para levantarse y andar, y se levanta y se queda de pie, andando. m) El actor camina. Ahora no puede mirar el suelo, sino sólo hacia arriba. Es necesario que camine con más energía. Levanta los brazos e intenta tocar el techo, anda y salta; cada vez, todos intentan saltar un poco más alto, despegar del suelo, más alto, aún más alto. Intentan tocar el techo, una vez, dos... después deben gritar cuando salten, corriendo para cobrar impulso y gritar para alcanzar el techo y despegar, volar, saltando lo más alto posible. Este ejercicio tiene un momento de inflexión muy importante en la primera etapa, los participantes son vencidos por la gravedad. Ello ocasiona cierta angustia, tristeza. Sobre todo porque caen al suelo y se dan cuenta de una realidad: la implacable fuerza de la gravedad, contra la cual debemos luchar continuamente. Cuando llegan a la inercia, hay que dejarlos que descansen. Darles todo el tiempo que necesiten para volver a levantarse Hay que estimularlos para que se levanten, se recuperen, salten, miren el techo. Es preciso decirles que la gravedad es una fuerza muy poderosa, pero que cada uno de nosotros tiene una fuerza aún mayor que ella. Esta serie debe terminar con la euforia provocada por nuestra victoria corporal, aunque todos, la verdad sea dicha, estemos cansados...",
              "etiquetas": ["Quinta serie: Gravedad"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        }
      ]
    },
    {
      "titulo": "Escuchar todo lo que se oye",
      "totalidadejercicios": [{
          "subnombre": "Ejercicios y juegos de ritmo - Primera serie",
          "subejercicio": [{
              "Id": 257,
              "nombre": "Rueda de ritmo y movimiento",
              "descripcion": "Los actores forman un círculo; uno de ellos se coloca en el centro y realiza un movimiento cualquiera, por más insólito que sea, acompañado de un sonido; tanto el sonido como el movimiento obedecen a un ritmo que él mismo inventa. Todos los actores lo siguen, intentando reproducir exactamente sus movimientos y sonidos dentro del ritmo, lo más sincrónicamente posible. El actor desafía a otro, que se sitúa en el centro del círculo y lentamente rehace el movimiento y el sonido con otro ritmo, mientras el primer actor vuelve a la rueda. Todos ahora siguen al segundo actor, que desafía a un tercero y así sucesivamente. El que se coloca en el centro puede reproducir el ritmo corporal y musical que quiera, que más le guste, pero que no esté habituado a hacer en su vida real. No se trata de bailar o cantar algo que todos conocen. No se debe tener miedo al ridículo, a lo grotesco, a lo insólito. Si todos hiciesen el ridículo, nadie se sentiría ridículo... Todos deben intentar reproducir, lo más precisamente posible, lo que son capaces de ver y oír: los mismos movimientos, la misma voz, el mismo ritmo... Si hubiese una mujer en el centro, los hombres en el círculo no deben ejecutar la versión masculina de movimiento, sino reproducir exactamente lo que estén percibiendo. ¿Qué ocurre entonces? ¿Cuál es el mecanismo? Muy sencillo: al intentar imitar la manera de moverse, de cantar, etc., del otro comenzamos a deshacer nuestras propias mecanizaciones. Imitando a los otros, estaremos reestructurando de varias maneras diferentes (porque varios actores se situarán en el centro) nuestra propia manera de ser y de actuar. No se debe hacer una caricatura, porque nos llevaría a hacer cosas diferentes, pero siempre de la misma forma rígida. Debemos intentar comprender, sentir, reproduciendo exactamente lo externo para sentir mejor lo interior de la persona situada en el centro.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 258,
              "nombre": "Juego de ritmo y movimiento",
              "descripcion": "Se forman dos equipos. El primero, a una señal del director, comienza a hacer individualmente todos los tipos de sonidos y movimientos rítmicos que se le ocurran. Los componentes de ese grupo deben unificar en pocos segundos sus movimientos, ritmos y sonidos. El segundo grupo comienza entonces a reproducir los movimientos y ritmos del primero, a continuación los transforma en ritmos individuales, los reunifica, los pasa al otro grupo, y así sucesivamente.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 259,
              "nombre": "Unificar el ritmo dentro del círculo",
              "descripcion": "Todos los actores inician juntos un ritmo, con la voz, las manos y las piernas; después de unos minutos cambian lentamente, hasta que un ritmo nuevo se impone, y así sucesivamente, durante varios minutos. Variante Cada actor hace un ritmo aisladamente hasta que todos se unifiquen en un único ritmo. Variante A una señal dada, los actores comienzan a hacer un ritmo propio acompañado de un movimiento. Tras unos minutos, se acercan unos a otros, según sus afinidades rítmicas. Los actores con mayores afinidades van homogeneizando sus ritmos hasta que todo el elenco esté practicando el mismo ritmo y movimiento. Eso puede no ocurrir, pero no importa, siempre que cada grupo tenga su ritmo y movimiento bien definidos. Variante Se forma un círculo en el que una persona inicia un ritmo y todos lo siguen; el director hace una señal, el círculo se rompe, y cada participante intenta transformar ese ritmo en otro que le sea individualmente más agradable. El director hace hace otra señal y todos vuelven al círculo, pero ahora cada uno con su propio sonido y su propio movimiento: se observan e intentan unificar todos los ritmos en uno solo. Cuando eso ocurre, el director otra señal; se rompe el círculo, todos se alejan, individualizan sus ritmos, retornan al círculo y los reunifican.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 260,
              "nombre": "Máquina de ritmos",
              "descripcion": "Un actor va hasta el centro e imagina que es la pieza del engranaje de una máquina compleja. Hace un movimiento rítmico con su cuerpo y, al mismo tiempo, el sonido que esa pieza de la maquina debe producir. Los otros actores prestan atención, en circulo, alrededor de la máquina. Un segundo actor se levanta y, con su propio cuerpo, añade una segunda pieza al engranaje de esa máquina, con otro sonido y otro movimiento que sean complementarios y no idénticos. Un tercer actor hace lo mismo, y un cuarto, hasta que todo el grupo esté integrado en una misma Máquina, múltiple, compleja, armónica. Cuando todos estén integrados en la máquina, el director dice al primer actor que acelere el ritmo: todos deben intentar seguir ese cambio en el funcionamiento. Cuando la máquina esté próxima a la explosión, el director indica al primer actor que disminuya el ritmo hasta que todas las personas terminen juntas el ejercicio. Para que todo funcione bien, hace falta que cada actor intente realmente escuchar lo que está oyendo. Variante Amor y odio. El mismo ejercicio, con la siguiente modificación: todos los participantes deben imaginar una máquina de odio, después una de amor. Sea lo que fuere lo que cada uno entiende por las palabras odioy amor, deben seguir siendo parte del engranaje de una máquina y no de un ser humano. Variante Región o país. El mismo ejercicio que incluya, además de una emoción (o varias), un tema. Por ejemplo, regiones del mismo país del que son originarios los participantes: Alemania (máquina prusiana, bávara, berlinesa...); Francia (máquina bretona, parisiense, marsellesa, etc.); Brasil (máquina carioca, bahiana, mineira...); España (máquina aragonesa, madrileña, etc); o tomando como tema los partidos políticos: PP, PSOE, PNV, CIU, etc. O incluso forma de teatro y de cine: cine mudo, circo, ópera, novela, etc. Es extraordinario cómo pueden revelarse, en ritmo físico y sonoro, la ideología de un grupo, sus ideas políticas, etc. Todo lo que pensamos y criticamos aparece. Nota: este juego es particularmente útil cuando se quiere, por ejemplo, crear imágenes de un tema para que pierda su carácter abstracto: burocracia, futuro, infancia, salud, etc. Se pide a los participantes que representen las máquinas de ritmo de esos temas. Muchas veces los actores acabaron ayudándome a hacer la mise en scéne de una pieza usando ese juego.",
              "etiquetas": ["Caldeamiento", " Ambos", "ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 261,
              "nombre": "Ritmo en herradura",
              "descripcion": "Los actores están sentados dispuestos en forma de herradura o media luna. La primera persona a la derecha debe comenzar un ritmo que debe extenderse por todos los participantes hasta el último, en la otra punta de la herradura. La persona que queda al final de la herradura debe iniciar otro ritmo, que hará el recorrido de vuelta. Cada participante estará siempre creando un ritmo, hasta que éste sea sustituido por el ritmo que llega de su izquierda o de su derecha.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 262,
              "nombre": "Ritmo en círculo",
              "descripcion": "Lo mismo que el anterior, en círculo, todos de pie, de tal manera que puedan trabajar los diferentes ritmos desde la primera hasta la última persona.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 263,
              "nombre": "Fila de cinco actores",
              "descripcion": "Similar al juego anterior. La primera persona de la fila hace un sonido y un gesto rítmicos, y los demás la imitan. La primera persona va al final de la fila, y la que estaba en segundo lugar pasa al primero, debiendo añadir un sonido y un gesto rítmicos a los que ya se están haciendo, y así sucesivamente, hasta que todos hayan hecho su contribución, volviendo su ejecución cada vez más compleja.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 264,
              "nombre": "Anda, para, justifica",
              "descripcion": "Los actores caminarán por la sala de manera extraña y estrambótica. De vez en cuando, el director dirá «¡Alto!» y pedirá a cada uno de los actores que justifique su manera de andar diciendo algo que tenga coherencia, por más absurdo que sea.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 265,
              "nombre": "Bautizo «mineiro»",
              "descripcion": "Actores en círculo; cada uno, en secuencia, da dos pasos adelante, dice su nombre, dice una palabra que comienza con la primera letra de su nombre y que corresponda a una característica que posee o cree poseer, haciendo un movimiento rítmico que corresponda a esa palabra. Los demás actores repiten dos veces: nombre, palabra y movimiento. Cuando hayan pasado todos, el primero vuelve, pero ahora en una posición neutra, y son los demás quienes deben acordarse de la palabra, nombre y gesto. Naturalmente, este ejercicio se hace con grupos que se encuentran por primera vez, y no con viejos amigos.",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 266,
              "nombre": "Si dices que sí",
              "descripcion": "Una melodía que permita al actor que conduce el ejercicio cantar una frase así: «Si yo digo que sí, tú dirás que no: sí, sí, no», a la vez todos deben responder «no, no, sí». «Si yo digo Juan, Luis, Juan, vosotros diréis [y los otros dicen] Luis, Juan, Luis»; y después utilizará las palabras «pan» y «miel». A continuación, diver- sas combinaciones de las tres palabras y de las otras tres: «Juan, miel, no» contra «Luis, pan, sí»...",
              "etiquetas": ["Primera serie: ejercicios y juegos de ritmo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Melodía - Segunda serie",
          "subejercicio": [{
              "Id": 267,
              "nombre": "Orquesta",
              "descripcion": "Un pequeño grupo de actores monta una orquesta, utilizando cualquier clase de objeto improvisado como instrumento, mientras los otros inventan un baile correspondiente. La música debe ser melódica y cambiar con frecuencia: los actores deben permitir que esa música invada sus cuerpos sin hacer ningún movimiento premeditado: hay que dejarse llevar, naturalmente.",
              "etiquetas": ["Segunda serie: Melodía"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 268,
              "nombre": "Música y baile",
              "descripcion": "Algunos ritmos, especialmente los brasileños de origen africano, como la samba, la batucada, la capoeira (sólo con movimientos circulares y muchos andando hacia atrás), son excelentes para estimular todos los músculos del cuerpo. Los actores no deben repetir pasos ya establecidos, sino dejar que sus cuerpos se balanceen. Puede también utilizar una cinta de casete reponiéndola a una velocidad mayor que aquella a la que fue grabada. Es importante que en todos estos ejercicios de calentamiento siempre se comience lentamente. Poco a poco, se aumentará la intensidad del ejercicio. Es importante que la práctica de estos ejercicios sea placentera, el actor debe sentir placer y no dolor al ejecutarlos.",
              "etiquetas": ["Segunda serie: Melodía"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Sonidos - Tercera serie",
          "subejercicio": [{
              "Id": 269,
              "nombre": "Sonido y movimiento",
              "descripcion": "Un grupo de actores emite con la voz un sonido determinado (que puede ser de animales, follaje, calle, fábrica), mientras otro grupo hace movimientos relacionados con dicho sonido, como si equivaliesen a su visualización. Es decir, si el sonido elegido por el primer grupo es «miau», la imagen no será necesariamente la de un gato, sino la visualización que el segundo grupo de actores tenga de ese sonido especial. A un bosque de sonidos corresponderá un bosque de imágenes. A una secuencia ritual de sonidos, una secuencia ritual de imágenes.",
              "etiquetas": ["Tercera serie: Sonido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 270,
              "nombre": "Sonidos rituales",
              "descripcion": "El mismo ejercicio de sonido y movimiento, pero esta vez los actores que hacen los sonidos se limitarán a los sonidos de un ritual en particular, despertarse por la mañana o ir a casa, volver del trabajo, de la fábrica, etc. ",
              "etiquetas": ["Tercera serie: Sonido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Ritmo de la respiración - Cuarta serie",
          "subejercicio": [{
              "Id": 271,
              "nombre": "Tumbado de espaldas, completamente relajado",
              "descripcion": "El actor se lleva las manos al abdomen, expele todo el aire de los pulmones, inspira lentamente y llena el abdomen hasta no mas; espira a continuación; repite lentamente esos movimientos varias veces. Hace lo mismo con las manos sobre las costillas, llenando el pecho, especialmente la parte de abajo, varias veces. Lo mismo con las manos sobre los hombros o hacia arriba intentando llenar la parte superior de los pulmones. Finalmente, hace una secuencia de las tres respiraciones, siguiendo siempre el mismo orden.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 272,
              "nombre": "Apoyado en una pared a corta distancia",
              "descripcion": "Apoyándose con las manos, el actor hace los mismos movimientos respiratorios anteriores; después repite todo apoyándose en los codos.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 273,
              "nombre": "Inmóvil en posición vertical",
              "descripcion": "El actor hace los mismos movimientos respiratorios. La respiración debe ser un acto de todo el cuerpo. Todos los músculos deben reaccionar a la entrada de aire en el cuerpo y a su expulsión, como si el actor pudiese sentir el oxígeno circulando por todo el cuerpo, a través de las arterias, y el anhídrido carbónico expulsado a través de las venas.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 274,
              "nombre": "Inspiración lenta",
              "descripcion": "Inspirar lentamente por la fosa nasal derecha y espirar por la izquierda; después invertir el orden.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 275,
              "nombre": "Explosión",
              "descripcion": "Después de haber inspirado lentamente todo el volumen de aire posible, el actor debe expulsarlo de una vez por la boca. El aire produce un sonido parecido a un grito agresivo. Hacer lo mismo expeliendo enérgicamente el aire por la nariz, después de haber inspirado lo máximo posible.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 276,
              "nombre": "Inspiración lenta con los brazos extendidos",
              "descripcion": "Inspirar lentamente al mismo tiempo que levanta los dos brazos lo más arriba posible y se pone de puntillas, intentando ocupar el mayor espacio posible; después, también lentamente, espirar mientras retoma la posición inicial, encogiendo el cuerpo hasta ocupar el menor espacio posible.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 277,
              "nombre": "Inspiración con clara definición y mucha energía.",
              "descripcion": "Inspirar y espirar como se ha descrito antes, siguiendo un ritmo particular: el del corazón o el fragmento de una música (con un tono bien definido) o una melodía entonada por el grupo.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 278,
              "nombre": "Olla a presión",
              "descripcion": "Con la nariz y la boca tapadas, hacer el máximo esfuerzo para expeler el aire. Cuando no aguante más, destapar la nariz y la boca.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 279,
              "nombre": "Inspiración con gran rapidez",
              "descripcion": "El actor intenta inspirar el máximo de aire posible y, a continuación, expelerlo con la mayor rapidez. Todo el grupo puede practicar este ejercicio, con el director marcando el tiempo para inspirar y espirar, como si fuese una competición para ver quién consigue mover mayor volumen de aire al mismo tiempo.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 280,
              "nombre": "Muy lentamente",
              "descripcion": "El actor inspira y después, emitiendo un sonido, espira de manera que su sonido pueda oírse durante el máximo tiempo posible.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 281,
              "nombre": "Respiración profunda por la boca",
              "descripcion": "Respirar profundamente por la boca, con los dientes apretados, espirando a continuación por la nariz.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 282,
              "nombre": "A, E, I, O, U",
              "descripcion": "Todos los actores juntos en un mismo grupo. Un actor se pone frente al grupo, que debe emitir sonidos usando las letras A, t> > O, U, cambiando el volumen de acuerdo con la distancia a la que se encuentre del actor aislado y en movimiento. Cuando el acto que hace de botón del volumen esté lejos, los demás emitirán son los más altos, y cuando esté cerca, sonidos más bajos. El actor podrá moverse libremente por toda la sala. Los actores del grupo deben intentar pasar emociones al otro actor y no sólo hacer ruido. Variante. En parejas. Cada actor emite un sonido dirigido a su compañero que está a medio metro de distancia; el otro retrocede un metro, después dos, tres, diez metros. Los actores tienen que ajustar sus voces a la distancia. Este ejercicio también puede hacerse cantando. De la misma forma que los ojos miran naturalmente un objeto que queremos mirar, también la voz mira naturalmente a una persona con la que queremos hablar.",
              "etiquetas": ["Cuarta serie: ritmo de la respiración"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Ritmos internos - Quinta serie",
          "subejercicio": [{
            "Id": 283,
            "nombre": "Ritmo de imágenes",
            "descripcion": "En este juego-ejercicio, un actor se mantiene aparte y los demás, por turnos, intentan expresar con sus cuerpos una imagen rítmica de él, y eso individualmente, cada uno como la sienta. A continuación, todos los actores, juntos, repiten los ritmos que han creado, en esta ocasión al mismo tiempo. El actor que está aparte intenta integrarse en esa orquesta de ritmos que son, según los compañeros, los suyos.",
            "etiquetas": ["Quinta serie: los ritmos internos"],
            "referencia": "Juegos para actores y no actores, Augusto Boal"
          }]
        }
      ]
    },
    {
      "titulo": "Activar los distintos sentidos",
      "totalidadejercicios": [{
          "subnombre": "Serie Ciego",
          "subejercicio": [{
              "Id": 284,
              "nombre": "El punto, el abrazo y el apretón de manos",
              "descripcion": "Se pide que cada participante mire fijamente algún punto de la sala -una ventana, una marca en la pared, etc.- y luego cierre los ojos e intente caminar hasta ese punto. Si, en su recorrido, tropieza con otro actor y se desvía de su trayecto, debe corregirlo. Después de un tiempo, el director dirá que abran los ojos y que se localicen en la sala: ¿quién está cerca del punto que miró? ¿Quién está lejos? Se intenta una segunda vez: los que han logrado acercarse o incluso tocar el punto deben elegir otro punto más distante, y los que se han quedado lejos, uno más cercano A continuación, los actores forman parejas y se abrazan. Cierran los ojos y se separan, caminando hacia atrás, hasta encontrar un obstáculo (la pared probablemente) o después de un determinado número de pasos. Deben entonces volver e intentar abrazar nuevamente al mismo compañero. Repetir este ejercicio por lo menos dos veces, cambiando de compañero. Finalmente, la versión más difícil. En parejas, los actores se dan la mano, cierran los ojos, se alejan manteniendo las manos extendidas en la misma posición, caminan hacia atrás hasta encontrar un obstáculo, vuelven e intentan darse de nuevo un apretón de manos.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 285,
              "nombre": "Bosque de sonidos",
              "descripcion": "El grupo se divide en parejas: un miembro será el ciego; otro, el lazarillo. Este último emite sonidos de un animal -gato, perro, pájaro o cualquier otro-, mientras su pareja escucha con atención. Entonces los ciegos cierran los ojos, y los lazarillos, al mismo tiempo, comienzan a emitir sus sonidos, que deben ser seguidos por los ciegos. Cuando el lazarillo deja de emitir sonidos, el ciego debe detenerse. El lazarillo es responsable de la seguridad del compañero (ciego) y debe dejar de emitir sonidos si el ciego está a punto de tropezar con otro o golpearse con algún objeto. El lazarillo cambiará constantemente de posición. Si el ciego hace bien su papel, si sigue los sonidos con facilidad, el guía debe mantenerse lo más distante posible, con la voz casi inaudible. El ciego debe concentrarse solamente en su sonido, aunque a su lado haya muchos otros. El ejercicio tiene como objetivo despertar y estimular la función selectiva del oído. Variante. (Julián) Círculo. Los actores son numerados, 1 o 2, en secuencias: 1, 2,o i 2, 1, 2 Cada actor número 1 se coloca frente a frente con el actor número 2 situado a su derecha y produce un sonido que el ,número 2 debe reconocer. Vuelve a su lugar. Cada actor número 2 se coloca frente a frente con el actor número 1 situado a su derecha, es decir, formando una pareja diferente de la primera y produciendo un sonido que el compañero debe identificar. De vuelta a sus posiciones con los ojos cerrados, los actores se dan las manos e intentan sentir, para posteriormente reconocer, las manos de los compañeros a la derecha y a la izquierda. El director da la señal y el círculo se rompe: los actores realizan movimientos en zigzag para mezclarse entre sí. A otra señal del director,todos emiten el sonido que habían creado delante del compañero a su derecha, intentan escuchar el sonido hecho por el compañero procedente de la izquierda. Cuando reconoce el sonido de su lazarillo, el ciego se aferra a su mano, comenzando a reconstruir el círculo original. Los actores sólo abrirán los ojos cuando sus dos manos estén ocupadas: han descubierto y han sido descubiertos.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 286,
              "nombre": "Viaje imaginario",
              "descripcion": "En parejas. El lazarillo debe llevar al ciego a través de una serie de obstáculos reales o imaginarios, como si los dos estuviesen en un bosque, en un supermercado, en la Luna, en el desierto del sahara u otro escenario real o imaginario que el lazarillo tenga en mente. Como en todos los ejercicios de esta naturaleza, está prohibido hablar; toda información debe transmitirse a través contacto físico y de los sonidos. Siempre que sea posible, el lazarillo debe hacer los mismos movimientos que el ciego, al paginar su propia historia. El lazarillo debe colocar obstáculos por toda la sala: sillas, mesas todo lo que encuentre disponible: a veces los obstáculos serán reales, otras veces imaginarios. El ciego debe intentar imaginar dónde está. Por ejemplo: ¿en un río? ¿Un río con cocodrilos? ¿Piedras? El lazarillo puede usar el contacto físico, la respiración o sonidos, como forma de guiar; el ciego, a su vez, no podrá hacer ningún movimiento que no se le haya ordenado o sugerido. Después de unos minutos, el ejercicio acaba y el ciego relata al lazarillo en qué parte de la sala cree que han estado, quién estaba cerca de ellos, etc. En resumen, debe dar las informaciones reales que ha percibido con sus sentidos, excepto la vista. Después de las informaciones objetivas, los ciegos explican adonde creen haber viajado: cuentan el viaje imaginario. Los lazarillos cuentan entonces sus historias y se comparan unas con otras.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 287,
              "nombre": "Fila de ciegos",
              "descripcion": "Dos filas, frente a frente. Los actores de una de las filas deben cerrar los ojos y, con las manos, examinar el rostro y las manos de los actores que tienen enfrente, en la otra fila. Éstos, a continuación, se dispersarán por la sala, y los ciegos deberán encontrar a la persona que tenían delante, tocándole manos y mejillas. Variante Un ejercicio de Teatro Imagen. Las personas que estén con los ojos abiertos deben jugar a las estatuas, individualmente. Los actores de la fila de los ciegos deben tocar, durante algunos minutos, los contornos de las estatuas de los actores correspondientes a ellos, en la otra fila. Después, volver a sus posiciones y reproducir las estatuas con sus propios cuerpos: imagen especular, imagen del espejo. A continuación abren los ojos y comparan las dos estatuas.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 288,
              "nombre": "El imán afectivo (negativo y positivo)",
              "descripcion": "Los actores caminarán por la sala con los ojos cerrados durante algunos minutos, tratando de no tropezar unos con otros. Es bueno que todos estén con los brazos cruzados, con las manos cubriéndose los codos, para que las personas más bajas no reciban codazos en los ojos. Cuanto más despacio caminen, menos daño se harán. En esa primera parte del juego, cuando dos personas tropiecen, deberán separarse inmediatamente: domina el polo negativo. Deben moverse por la sala evitando siempre tocar a los demás; al no poder ver, los actores comienzan a percibir el mundo exterior a través de los otros sentidos. Después de unos minutos, el director anunciará a los participantes que el imán está en positivo. A partir de este momento, las personas que se toquen deberán quedarse pegadas unas a otras durante un momento. Esto es muy difícil, porque los participantes no pueden dejar de moverse; sus pies deben seguir avanzando y, algunas veces, al tener que andar pegados, es necesario que anden de lado o de espaldas. Está prohibido tocarse con las manos, es mejor que usen otras partes del cuerpo. Si una persona se siente cómoda, podrá quedarse pegada a la otra el tiempo que quiera; de lo contrario, tiene derecho a seguir buscando. La persona que ha sido abandonada tiene derecho a insistir, pero sólo una vez; el objetivo del juego no es cazar a una persona en especial. Puede quedarse pegada a una, dos o mas participantes. Finalmente, el director dará la señal para detenerse. Todos lo hacen donde están y cada uno intentará encontrar un rostro, sólo uno, con las manos. Entonces comienza la parte más bonita del juego: cada persona intentará traducir las sensaciones, en una imagen. En otras palabras, tocando el rostro del o ella, intentarán imaginar cómo es ese rostro, desde su forma, generando los menores detalles de la fisonomía. Ese proceso de traducción es muy delicado y también muy placentero. Las personas pueden tocar el rostro y la cabeza, pero no el resto del cuerpo Después de unos minutos, el director ordenará que abran los ojos y comparen la imagen construida mentalmente con la que tienen delante.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 289,
              "nombre": "Múltiple escultura sueca",
              "descripcion": "La mitad del grupo está formada por ciegos y la otra mitad por lazarillos. Cada lazarillo pronuncia el nombre de su ciego, que debe intentar seguirlo. El grupo de los lazarillos cambia frecuentemente de posición hasta un determinado momento, cuando debe parar y seguir llamando a sus ciegos, muy despacio. Cuando los ciegos estén cerca del grupo de los lazarillos, éstos los cogerán de la mano y modelarán sus cuerpos en una escultura compleja, en la que todos se toquen, es decir, una única escultura hecha de diferentes cuerpos. Después, los lazarillos formarán la misma escultura con sus propios cuerpos. Como la reproducción tiene que ser exactamente igual al original, cada lazarillo tiene que ocupar la misma posición en la que colocó a su ciego. El director llamará a los ciegos y los llevará, uno a uno, hasta la escultura de los lazarillos. Cada ciego deberá intentar descubrir cual ha sido el suyo, tocando los diferentes cuerpos. Si un ciego reconoce a su lazarillo, deberá decir su propio nombre. Si acierta el lazarillo asentirá y podrá salir del juego y abrir los ojos. Las posturas de esos lazarillos sólo se modificará cuando el último ciego haya descubierto a su lazarillo.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 290,
              "nombre": "Vampiro de Estrasburgo",
              "descripcion": "Todos caminan por la sala sin tropezarse, con los ojos cerrados y las manos cubriéndose los codos, como protección. El director toca el cuello de alguien, que pasa a ser el primer «vampiro de Estrasburgo»: sus brazos se estirarán hacia delante, dará un grito de horror y a partir de ese momento buscará un cuello para chupar su sangre. El grito que dé permitirá a los demás saber dónde está el vampiro e intentar escapar. El primer vampiro encontrará otro cuello y repetirá el gesto del director: un suave toque en el cuello, con las dos manos. El segundo «vampiro» dará igualmente un grito de horror, estirando los brazos, y entonces serán dos vampiros, después tres, cuatro, etc. Puede ocurrir que un vampiro «ataque» a otro vampiro; en ese caso, el segundo se rehumanizará y dará un grito de placer; esto indica que alguien muy cerca se ha rehumanizado, pero también que hay un vampiro próximo. Deben evitarse entonces las regiones más infestadas de vampiros. Es curioso (y bastante comprensible) que los participantes encuentren cierto alivio en ser vampirizados, puesto que a partir de entonces, en lugar de huir, comenzarán a perseguir. Es el mismo mecanismo del oprimido que se vuelve opresor. Y mucho más rico que eso. Por un lado, el oprimido (actor) se convierte en opresor (vampiro): escapa a su opresión, a su dolor, a su angustia. Deja de ser víctima y se convierte en verdugo. Por otro lado, desarrolla en sí el mecanismo de lucha: siente que toda situación opresiva puede detenerse, romperse. Las dos situaciones van juntas.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 291,
              "nombre": "Coche ciego",
              "descripcion": "Una persona detrás de otra. La que va delante es el coche ciego. Por detrás, el conductor guiará los movimientos del coche ciego ,presionando con los dedos en medio de la espalda (el coche avanza en línea recta), en el hombro izquierdo (gira a la izquierda; cuanto más cerca del hombro, más cerrada será la curva), el hombro derecho (lo mismo, a la derecha), o con una mano en el cuello (marcha atrás). Como muchos coches ciegos circularán al mismo tiempo, es necesario evitar colisiones. El coche debe parar cuando el conductor deje de tocarlo. La velocidad será controlada por la mayor o menor presión de los dedos en la espalda.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 292,
              "nombre": "Descubrir el objeto",
              "descripcion": "Con los ojos tapados y las manos hacia atrás, utilizando todas las demás partes del cuerpo, el actor tocará e intentará descubrir cuál es el objeto que se le presenta: silla, lapicero, vaso, papel, flor, etc. Este ejercicio estimula intensamente la sensibilidad de todas las partes del cuerpo que se relacionan con el objeto. Variante Descubrir el rostro de los otros: ¿quién es?",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 293,
              "nombre": "Olor de las manos",
              "descripcion": "Una fila de actores se acerca a un ciego (actor con los ojos cerrados), cada uno le da una de las manos a oler, mientras le dice su nombre. Una vez que todos han pasado (cinco actores, por ejemplo), volverán en un orden diferente y el ciego deberá decir el nombre de la persona, intentando reconocer el olor de sus manos. Variante. Lo mismo con el rostro, que el ciego tocará para después reconocer, siendo diferente el orden en el que los rostros repiten el contacto. También se puede hacer lo mismo con las manos.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 294,
              "nombre": "Hacer un ocho",
              "descripcion": "Dos actores se colocarán a una distancia de dos metros uno de otro. En fila, con los ojos cerrados, los demás actores intentarán hacer un ocho alrededor de los dos primeros. Variante Slalom (como en el esquí). Una o más filas, de cuatro o cinco actores cada una. Entre ellos, los demás harán el slalom, con los ojos cerrados, caminando.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 295,
              "nombre": "Guardameta",
              "descripcion": "Un juego de confianza. Seis actores de pie, juntos, no muy alejados, formarán la portería. Otro actor, unos pasos por delante, será el guardameta. Frente a ellos, a unos seis metros de distancia, estarán los demás actores. Uno a uno mirarán al guardameta con atención, cerrarán los ojos y saldrán corriendo en su dirección lo más rápidamente que puedan. El guardameta debe sujetarlos por la cintura. Cuando un actor pierde el rumbo del guardameta, uno de los seis actores de la portería deberá sujetarlo. Es importante no disminuir el ritmo al acercarse al guardameta: ésa es la prueba de confianza.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 296,
              "nombre": "Sentarse en la pierna de otro",
              "descripcion": "Un participante, con los ojos abiertos, se arrodilla para que otro, con los ojos cerrados, se siente en su pierna. El director cuenta hasta siete; el ciego se levanta y da siete pasos hacia delante; después, el director cuenta hacia atrás, de siete a uno, y el actor debe volver, de espaldas, y sentarse nuevamente en la misma rodilla. El actor arrodillado debe impedir que el compañero se caiga, si se hubiese desviado en su trayectoria.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 297,
              "nombre": "Dibujar el propio cuerpo",
              "descripcion": "Los actores se tumban cómodamente en el suelo, cierran los ojos y piensan en su cuerpo como una totalidad, y en cada una de sus partes: dedos, cabeza, boca, lengua, pies, sexo, ojos, pelo, ombligo, piernas, cuello, codos, hombros, vértebras, etc. Deben mover la parte en la que estén pensando, cuando eso sea posible. Después de unos minutos de concentración, el director dará a cada actor una hoja de papel en blanco (todas del mismo tamaño) y un lápiz o bolígrafo (del mismo color). Pedirá que cada uno dibuje su propio cuerpo, manteniendo los ojos bien cerrados, y que firme con su nombre en el dorso del dibujo. Hecho esto, recogerá los dibujos y los colocará en el suelo, en cualquier orden, y sólo entonces los actores podrán ver su obra. El director preguntará qué impresiona más en los dibujos: ¿los cuerpos están desnudos o vestidos? ¿Acostados o de pie? ¿Descansando o trabajando? ¿Relacionados con otros objetos o aislados? ¿Con detalles importantes como los ojos y el sexo, o solamente en líneas generales? Finalmente, los invitará a identificar sus propios dibujos. Este ejercicio sensibiliza bastante al grupo. Primero, porque cada uno tendrá que pensar en su propio cuerpo, en cada parte de él; después, porque tendrán que reproducir, dibujándolo, lo que han sentido; por último, porque después del ejercicio comenzarán a prestarse más atención a sí mismos, a sus movimientos, a la manera de sentarse, de dirigirse a los demás, etc. El ejercicio hace que los actores tomen conciencia de que, ante todo, somos un cuerpo. Si son capaces de tener las ideas abstractas más profundas y crear las cosas más maravillosas, es necesario tener, ante todo, un cuerpo: ¡antes de tener un nombre, habitamos un cuerpo! Y raramente pensamos en nuestro cuerpo como fuente fundamental de todos los placeres y todos los dolores, de todo conocimiento y toda búsqueda, de todo. Normalmente, hacemos este ejercicio antes del «Juego de las máscaras de los propios actores». En este caso, se pide que cada uno diga por qué ha reconocido su dibujo, y lo que diga será una información valiosa para el actor que, más adelante, lo tendrá como modelo para el juego mencionado de las máscaras.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 298,
              "nombre": "Arcilla para modelar",
              "descripcion": "Es parecido al anterior, pero en esta versión se utiliza arcilla para modelar en vez de papel y lápiz. Es diferente, porque las manos pueden rehacer los detalles ya modelados. En el papel, si uno ya ha acabado el dibujo de la cabeza, por ejemplo, podrá recordar lo que ha hecho, pero no podrá rehacer el dibujo. Con la arcilla, siempre podrá volver a lo que había hecho.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 299,
              "nombre": "Tocar el color",
              "descripcion": "El director dará a un actor (ciego) cinco prendas de vestuario del mismo tipo (cinco calcetines, cinco camisas, etc.), pero hechas de materiales diferentes y de colores distintos. El actor deberá examinar cada una de esas prendas e intentar reconocer los colores correspondientes.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 300,
              "nombre": "Ciego con bomba",
              "descripcion": "Algunos actores con los ojos vendados, rodeados por los demás, deberán imaginar que sostienen una bomba que explotará si llegan a tocar a alguien durante más de un segundo. A cada contacto, deberán alejarse lo máximo posible. Este ejercicio produce un increíble desarrollo de todos los sentidos.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 301,
              "nombre": "Canto de la sirena",
              "descripcion": "Difícil y delicado. Los actores piensan en una opresión que realmente hayan vivido, cierran los ojos y se juntan en grupo en el centro de la sala. Aquel que quiera comenzar emitirá un sonido (un grito, un gemido, un llanto o lamento), que debe ser la traducción sonora de la opresión en la que haya pensado. El director lo llevará de la mano hacia uno de los rincones de la sala. Un segundo actor hará lo mismo, pensando en una de sus propias opresiones. Después un tercero y un cuarto, uno a uno, con un grito específico y siempre diferente. Los cuatro primeros actores deben emitir entonces sus gritos al mismo tiempo. Los que permanezcan en el centro, siempre con los ojos cerrados, deberán escuchar atentamente a los cuatro primeros actores y elegir cuál de los gritos se asemeja a su propia opresión; así, se formarán cuatro grupos. Entonces todos abrirán los ojos y, en cada grupo, cada actor contará a los demás la opresión que tenía en mente, el episodio que ha imaginado. Curiosamente, se verá que dentro de cada grupo las historias tratarán siempre el mismo tipo de opresión o tema.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 302,
              "nombre": "Encontrar la espalda adecuada",
              "descripcion": "Los actores andarán por la sala, con los ojos cerrados, uniendo de vez en cuando su espalda a la de un compañero y apretándose, moviéndose, buscando la espalda más adecuada para cada uno. Cuando la encuentren, manteniendo siempre los ojos cerrados, harán un contacto semejante al de un masaje.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 303,
              "nombre": "¿Quién ha dicho «Ah»?",
              "descripcion": "Todos, con los ojos cerrados, caminan por la sala. El director (con un toque) designará a una persona que deberá emitir un «Ah», de la manera que quiera. Los demás intentarán descubrir quién ha sido y decir su nombre.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 304,
              "nombre": "mano melódica",
              "descripcion": "Sentados en círculo, cogidos de la mano. La mano derecha por debajo y la izquierda por encima. Un actor iniciará, con la mano derecha, un ritmo, que será recibido por la mano izquierda del actor que está a su derecha. Éste, a su vez, también pasará, con la mano derecha, el ritmo que ha recibido a la mano izquierda del actor situado a su derecha, y así sucesivamente. De esa forma, cada actor deberá pasar con la mano derecha el movimiento rítmico y melódico que ha recibido con la mano izquierda. Después el director dirá «Cabeza», y todos incluirán sus cabezas en el movimiento; después «Tórax»; después «Cintura», «Pierna», hasta que todo el cuerpo esté comprometido con el ritmo. Por fin, el director pedirá que emitan un sonido compatible con sus movimientos. Variante. El mismo ejercicio, pero esta vez la mano que controla se coloca sobre la mano controlada, y no debajo de ella: resulta más difícil y más delicado, porque debe atraer a la otra mano y no sólo levantarla mecánicamente.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 305,
              "nombre": "La mano reencontrada o perdida",
              "descripcion": "Con los ojos cerrados, los actores circulan por la sala, tocándose las manos, hasta que se formen parejas que se complazcan en tocarse las manos. Juegan con las manos. Se separan a continuación, andan por la sala, se mezclan, abren los ojos, forman un círculo, tienden las manos hacia el centro del círculo; con la mirada, intentan descubrir cuáles son las manos con las que jugaban.",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 306,
              "nombre": "dragón de Trou Balligan",
              "descripcion": "Se cuenta que en la Edad Media, en Normandía, Francia, había una princesa muy hermosa, riquísima heredera de un pueblo llamado Trou Balligan. Allí vivía también un dragón feroz y malvado, que devoraba a los jóvenes y, sobre todo, a las jóvenes más bellas. La juventud de Trou Balligan estaba a punto de desaparecer completamente, cuando se supo que el dragón había propuesto un trato: si la princesa estuviese dispuesta a entregarse a la voracidad del dragón, éste abandonaría el feudo y se iría a sembrar el terror en otras regiones del país. Al enterarse de esa propuesta indecorosa, la princesa, queriendo salvar a sus súbditos, aceptó magnánima el sacrificio de su vida: sería devorada por el dragón. Sus subditos, conmovidos, rechazaron la oferta, pero la princesa decidió actuar por su cuenta, una bonita noche lluviosa, y salvar a su pueblo, así que se dirigió a la gruta de la bestia para entregarse por propia voluntad. El dragón, feliz, fue a recibirla a la puerta, como correspondía a una princesa, sobre todo a ésta, tan digna y generosa. Antes de devorarla, el famélico monstruo le pidió que se desnudase, pues tenía miedo de atragantarse con tantas sedas, pendientes, collares y oropeles. Cuando la vio toda desnuda, sus ojos se le salieron literalmente de las órbitas. La joven era de una belleza tan esplendorosa, su cuerpo tan perfecto, que él quedó momentáneamente ciego, con los globos oculares colgados de los nervios ópticos, como ojos de cangrejo. Considerando que uno de los mayores placeres de la gastronomía consiste precisamente en admirar el plato antes de comerlo, el dragón decidió postergar el banquete hasta que sus ojos volviesen al lugar debido. Se supo entonces en el pueblo del gesto heroico de la hermosa y estoica princesa, y los campesinos, sus súbditos, decidieron salvarla. Fueron a la gruta del dragón y...y aquí comienza el ejercicio: la princesa es atada a una silla con una buena cantidad de prendas de ropa (jerseys, camisas, pantalones, lo que se tenga a mano); el dragón, con los ojos vendados, intenta tocar a los campesinos, apartándolos de su prisionera; ellos deben evitar que los toque y esforzarse por liberar a la princesa. Si el dragón llega a tocar a los campesinos, éstos mueren y abandonan el juego, que puede terminar de dos maneras: porque ya no hay «salvadores» o, por el contrario, por que la hermosa princesa ha sido liberada. Este ejercicio es más breve que su explicación. Si resulta demasiado fácil, puede practicarse con dos dragones en lugar de uno: al fin y al cabo, como los dragones no existen...",
              "etiquetas": ["Serie: Ciego"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Serie espacio",
          "subejercicio": [{
            "Id": 307,
            "nombre": "Serie del espacio",
            "descripcion": "Esta serie también trabaja todos los sentidos,, incluido el de la vista. Sin dejar ningún espacio vacío en la sala, todos los actores deberán caminar con rapidez (sin correr), de manera que sus cuerpos estén siempre más o menos equidistantes de todos los demás y esparcidos por todo el suelo de la sala. De vez en cuando, el director dirá «¡Alto!» y todos deberán detenerse, intentando que no haya ningún espacio desocupado en la superficie de la sala. No se puede parar antes de la orden. Si alguien ve un espacio vacío, lo llenará con su cuerpo; no obstante, como está prohibido parar, debe seguir andando, buscando otro espacio vacío y dejando vacío aquel donde está. En vez de decir solamente «¡Alto!», el director dirá también un número, y entonces todos deberán formar grupos según el número anunciado: 3, 5, 8 personas, etc. Cada grupo debe estar equidistante de los demás grupos, de modo de no permitir que haya espacios vacíos en la sala. El director menciona un número y una figura geométrica, y los actores deberán organizarse en grupos para formar la figura geométrica indicada: cuatro círculos, tres rombos, cinco triángulos, etc. El director menciona un número y una parte del cuerpo. Si dice, por ejemplo, tres narices o siete pies, entonces deberán tocarse tres narices y siete pies. Todo el espacio de la sala deberá estar ocupado por grupos que estén equidistantes, como en los ejercicios anteriores. El director menciona un color y una prenda de vestir o un rasgo físico distintivo; por ejemplo, «juntaos según el color de las camisas, del pelo, de los ojos»..., y los actores así lo harán... asegurándose de que los grupos estén igualmente distribuidos por toda la sala. Los actores corren lentamente (al correr, los dos pies quedan en algún momento en el aire; al andar, uno de los pies está siempre en contacto con el suelo). De vez en cuando, el director dirá «¡Ahora, id pegados!» e inmediatamente los actores se juntarán (pegados) en grupos de tres, cinco o más integrantes, sin parar de correr. A continuación el director dirá «Separaos» y todos se separarán. El director dirá «Alto» y todos se quedarán quietos donde estén, con un solo pie apoyado en el suelo. El otro pie y las dos manos intentarán tocar a tres compañeros diferentes: el resultado será una tela de araña.",
            "etiquetas": ["Serie: espacio"],
            "referencia": "Juegos para actores y no actores, Augusto Boal"
          }]
        }
      ]
    },
    {
      "titulo": "Ver todo lo que se mira",
      "totalidadejercicios": [{
          "subnombre": "Secuencia del espejo",
          "subejercicio": [{
              "Id": 308,
              "nombre": "Espejo simple",
              "descripcion": "Dos filas de participantes, cada uno mirando fijamente a la persona que tiene enfrente. Las personas de la fila A son designadas como sujetos, y las de la fila B como imágenes. El ejercicio comienza y cada sujeto inicia una serie de movimientos y de expresiones faciales, en cámara lenta, que debe reproducir en sus mínimos detalles la imagen que está enfrente. El sujeto no debe considerarse enemigo de la imagen: no se trata de una competición, de hacer movimientos bruscos, imposibles de seguir: se trata, por el contrario, de buscar la perfecta sincronización de movimientos y la mayor exactitud en la reproducción de los gestos del sujeto por parte de la imagen. La exactitud y la sincronización deben ser de tal orden que un observador exterior no sea capaz de distinguir quién origina los movimientos y quién los reproduce. Es importante que los movimientos sean lentos (para que la imagen pueda reproducirlos y hasta preverlos) y también continuos. Es igualmente importante que se preste atención a los mínimos detalles, sea de todo el cuerpo, sea de la fisonomía.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 309,
              "nombre": "Sujeto e imagen cambian los papeles",
              "descripcion": "Después de unos minutos, el director anuncia que las dos filas de actores cambiarán de función. A continuación, da la señal para que cambien. Precisamente en ese momento los participantes sujetos se transforman en imágenes y éstas en aquéllos. Este cambio debe hacerse sin romper la continuidad y con precisión. Cuando se alcanza la perfección, el propio movimiento que se estaba realizando en el momento del cambio debe continuar y tomar un rumbo coherente, sin que se produzca ninguna ruptura. Al igual que en el caso anterior el observador exterior no debe advertir que ha habido un cambio, lo que ocurrirá, en realidad, siempre que se dé una total reproducción y sincronización de los gestos.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 310,
              "nombre": "Ambos son sujeto e imagen",
              "descripcion": "Pasados unos minutos, el director anuncia que los participantes de las dos filas serán simultáneamente imagen y sujeto; unos instantes después, da la señal para que así se haga. A partir de ese momento, los dos participantes, frente a frente, tienen derecho a crear el movimiento que deseen y el deber de reproducir los movimientos creados por el compañero. Esto debe hacerse sin tiranía por parte de ninguno de los dos. Es importante que cada uno se sienta libre de hacer los movimientos que le apetezcan y, al mismo tiempo, solidario para que los movimientos del compañero se reproduzcan a la perfección. Libertad y solidaridad son indispensables para que se haga el ejercicio sin tiranía, sin opresión. En toda esta secuencia, nadie debe hacer movimientos imposibles de ser reproducidos. La velocidad no es importante, es incluso contraproducente. Importantes son la sincronización y que la reproducción sea fiel. Hasta este momento, la comunicación es exclusivamente visual, y la atención de cada participante debe concentrarse sólo en el compañero que está enfrente, sobre todo en los ojos y, en círculos concéntricos, en todo su cuerpo. Los actores no deben mirar los pies ni las manos: miran a los ojos, pero el resto del cuerpo, así como otros espacios, está naturalmente incluido en su campo visual.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 311,
              "nombre": "Todos se dan las manos",
              "descripcion": "Una vez más, a una señal del director, todos los participantes se dan las manos, a derecha y a izquierda: las dos filas, así unidas, siguen frente a frente, cada uno mirando a los ojos del compañero. En esta etapa, sin embargo, se incluye un elemento nuevo: si antes la comunicación era exclusivamente visual, ahora también es muscular: cada participante recibe estímulos visuales (del compañero que está enfrente) y musculares (de los compañeros a la derecha y a la izquierda). No se deben hacer movimientos que no pueda seguir el compañero de enfrente, si los que están a su derecha y a su izquierda le impiden realizar muscularmente el mismo gesto o movimiento. En ese caso, el participante que inició el movimiento imposible debe volver atrás lo más rápidamente que pueda para no perder la sincronización, y para que la reproducción sea lo más perfecta posible. Si los movimientos fuesen lentos y continuos, habrá siempre una consulta visual y muscular, la cual permitirá que las dos filas sean siempre idénticas la una a la otra. Una será siempre la imagen de la otra y, en cada una de ellas, cada actor tendrá siempre la libertad de movimientos y la responsabilidad (ahora dentro de los límites musculares) de reproducir los movimientos del compañero de enfrente.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 312,
              "nombre": "Dos filas forman una curva",
              "descripcion": "El director elige a uno de los participantes del extremo de una de las filas y hace que ejecute una curva en U; muscularmente, ese participante atraerá al compañero de al lado y toda la fila hará una curva, que la fila de enfrente repetirá sincrónicamente. Se supone que sigue existiendo, entre ambas filas, un único y largo espejo. Cuando, para hacer la curva, los participantes de una fila se apartan del espejo imaginario, lo mismo debe suceder con los participantes de la otra. Cuando se acercan, esto se repite. Lo máximo que puede ocurrir, al acercarse, es que un actor toque físicamente al actor que tiene enfrente, pero debe respetarse la línea divisoria (pues es el espejo) y nunca traspasarla. Los participantes deben continuar mirándose fijamente. El hecho de que hagan una curva añade un elemento nuevo, necesario en esta progresión. Los actores frente a frente pasan por tres etapas hasta este punto de la secuencia: a) comunicación visual directa, individual; b) comunicación muscular y visual entre cada uno y otras tres personas: una enfrente (vista) y dos a los lados (tacto); c) en esta etapa, los actores toman conciencia de la totalidad de cada grupo (de cada fila), es decir, incluyen el espacio total del ejercicio, pero continúan limitados y determinados por el contacto físico, que cercena la invención.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 313,
              "nombre": "Grupos simétricos",
              "descripcion": "El director advierte y da la señal para que todos se suelten las manos. Pero el ejercicio continúa, sin interrupción. Ahora, liberados del contacto manual, los participantes, respetando siempre la presencia de un único espejo que sigue dividiendo la sala Por el medio, tratan de formar con los compañeros de su propio ando una imagen colectiva, simétrica. Puede ocurrir que todos los participantes de un bloque organicen una sola imagen reproducida por el bloque de enfrente (los dos bloques son simultáneamente sujetos e imágenes: sigue sin existir la tiranía de una persona sobre otra y, ahora, la de un grupo sobre otro; siguen siendo necesarias la libertad y la solidaridad), o que cada bloque se subdivida en varios bloques menores. Es importante, sin embargo, que no se atomicen aún más en individuos aislados; es importante que dos o más o muchas o todas las personas de cada fila reproduzcan, a cada lado, con perfección y sincronismo, la misma imagen.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 314,
              "nombre": "Espejo roto",
              "descripcion": "Cuando el espejo se rompe, se vuelven a formar parejas de compañeros que se miran frente a frente, sujetos e imágenes, reproduciendo perfecta y sincrónicamente los movimientos iniciados por cualquiera de los dos, sin tiranía. Pero ahora cada pareja tiene su propio trozo de espejo, autónomo: ya no existe el espejo central que dividía la sala en dos, sino trozos individuales de espejo, desparramados por la sala. Cada pareja, dentro de la sala, evoluciona como quiere, acercándose o alejándose de su compañero y de su trozo de espejo, girando, dando vueltas, pero siempre manteniendo la misma relación. En ese momento, cada participante debe ampliar su capacidad de concentración y de visión, que incluye al compañero de enfrente y el espacio, pero ya ahora el espacio cambiante, que modifica permanentemente la evolución de cada pareja y cada trozo de espejo. Ese movimiento, ahora, no está limitado por la presencia del espejo grande y largo que se ha roto. El espacio se vuelve mucho más dinámico y mudable, y la atención y la concentración deben ser mucho mayores y más intensas. Es igualmente importante que cada pareja evolucione por toda la sala.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 315,
              "nombre": "Cambiando de compañero",
              "descripcion": "Tres veces el director debe anunciar y dar la señal a los participantes para que cambien de compañero. La primera vez, cada uno debe elegir a otro compañero que esté cerca. Dada la señal, y sin mayor transición, se deja al compañero de enfrente y se busca a otro con el cual habrá de establecerse una relación mimética semejante. Puede ocurrir que el encuentro se produzca con gran facilidad, pero también puede llevar un tiempo. En cualquier caso, el actor debe seguir moviéndose lenta y continuamente, completando y desarrollando los movimientos que realizaba con el compañero anterior hasta encontrar al nuevo. En el segundo cambio, cada uno debe buscar a un compañero que esté a una distancia media, y la tercera vez debe buscar al más distante posible dentro de la sala. Es importante que no se rompa la continuidad, que el actor no deje de moverse y, con los brazos cruzados, intente localizar a quien no tiene pareja: el propio movimiento atraerá al nuevo posible compañero. En esta etapa de la secuencia ocurre muchas veces que dos participantes eligen al mismo compañero, y durante unos instantes los dos creen haber establecido contacto; pero si ambos miran fijamente a los ojos del compañero elegido (si concentran la atención en los ojos, aunque tengan toda la sala dentro de su campo visual), enseguida se darán cuenta de si están siendo o no correspondidos. Cada vez que se forma una nueva pareja, es importante que se establezca un diálogo fértil entre los participantes, que cada uno estudie al otro corporalmente, sintiendo la diferencia de movimientos entre el nuevo compañero y el anterior. No se trata de Pasar rápidamente de una cosa a otra, sino de dialogar visual y tísicamente, de conocerse.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 316,
              "nombre": "Espejo distorsionador",
              "descripcion": "El director siempre debe prevenir a los participantes antes de dar la señal para que la secuencia pase a una nueva etapa. En este caso, dada la señal, la relación entre los compañeros de una misma pareja se modifica totalmente. Si hasta aquí todos los movimientos, todas las expresiones faciales, todos los gestos se reproducían idénticamente, miméticamente, en esta etapa se produce el comentario, la respuesta. Cada uno tiene derecho a hacer lo que le parezca, y a cada nuevo estímulo el otro responde, comenta, aumenta, disminuye, ridiculiza, destruye, relativiza. Reproduce, en suma, la imagen que recibe, pero, al mismo tiempo, se contrapone a ella. La imagen (gesto, movimiento, expresión facial) y la respuesta no deben ser sucesivas, sino casi simultáneas y continuas. No se trata de hacer algo y esperar que el otro haga su parte, para responder a continuación mientras el otro espera: por el contrario, se trata, sin interrupción, de enviar y recibir mensajes visuales que se responden, que se distorsionan. Es cierto que la simultaneidad no es del todo posible, pero la espera, el reposo, deben evitarse.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 317,
              "nombre": "Espejo narcisista",
              "descripcion": "Después de la distorsión, la crítica, el comentario corrosivo, la tentativa de destrucción de la máscara del compañero de enfrente, después de la caricatura, el espejo se vuelve narcisista. Éste puede ser uno de los mejores momentos de toda la secuencia. Aquí cada participante se mira al espejo y se ve guapo. Pero la imagen que ve es la del compañero de enfrente. Cada uno debe intentar reproducir, con la mayor exactitud posible, todos los gestos de placer, toda la alegría que siente cuando está bien consigo mismo, cuando está feliz de ser quien es. Yo estoy feliz, hago un gesto de felicidad y me miro al espejo: pero lo que veo es mi propia imagen en el cuerpo de otra persona. Al mismo tiempo, la otra persona se mira en mí: en mí, se ve a sí misma, feliz, contenta: soy yo quien, con mis gestos y movimientos, debo restituirle esa felicidad y ese contento. El poeta portugués Fernando Pessoa escribió estos admirables versos: Nadie ama a otro, sino que ama lo que de sí hay en él o lo supone. Ésta es la idea de tales ejercicios: nos buscamos a nosotros mismos en los otros, que a su vez se buscan en nosotros.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 318,
              "nombre": "Espejo rítmico",
              "descripcion": "Suavemente, en esta búsqueda amorosa de sí mismo en el otro, el diálogo se unifica, se convierte en monólogo: los dos buscan movimientos que se reproduzcan rítmicamente. Los dos deben encontrar movimientos rítmicos corporales que sean agradables para ambos. Pueden ser lentos o rápidos, suaves o enérgicos, simples o complejos: lo importante es que ambos se sientan bien, cómodos y contentos al realizarlos, que los movimientos sean rítmicos y siempre los mismos, que todo el cuerpo se ponga en movimiento.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 319,
              "nombre": "Unificación",
              "descripcion": "Finalmente, el director previene a los participantes y da la señal para que todos intenten unificarse. Que lo intenten: no se trata de una obligación. Puede suceder que, al final de la secuencia, toda la sala esté totalmente sincronizada, unificada en un mismo ritmo, en un mismo movimiento. Pero puede también suceder (segunda hipótesis) que toda la sala esté unificada en ritmos y movimientos complementarios, que no sean los mismos, pero que se armonicen. Puede incluso darse una tercera hipótesis: los diferentes grupos no se unifican y terminan formando varios grupos y subgrupos, repitiendo, insistentes, el propio ritmo y el propio movimiento. Esta etapa final debe ser correspondida de la manera correcta: no se trata de competición, de imponer el propio movimiento a los demás; se trata, a lo sumo, de un intento de seducción. Lo que se pretende es un estudio rítmico de los participantes y también unificar al grupo en sus bases mínimas. Esto, sin embargo, puede revelarse como imposible. En esta fase, queda evidenciado el grado de violencia, de tendencia a estallar, de agresividad de cada componente del grupo; se evidencia también el grado de compatibilidad, de diálogo, de capacidad de trabajo conjunto. El director debe tener el cuidado de no obligar a nadie a hacer nada en especial, de no manipular al grupo en el sentido de intentar obligatoriamente la unificación. Se trata sólo de comprobar, estudiar y no imponer. Es necesario que cada uno se manifieste libremente, para que los resultados del estudio sean verdaderos. Existe en toda esta larga secuencia una gran variedad de formas visuales de comunicación, pero todas ellas tienen una base común: el mimetismo (excepto el espejo distorsionador, donde el mimetismo, aunque existe, no es dominante). En toda la secuencia, se estudia al compañero para reproducirlo en los mínimos detalles y con la mayor simultaneidad. En la próxima secuencia, el modelado, la forma de diálogo se modifica totalmente.",
              "etiquetas": ["Secuencia: Espejo"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Secuencia del modelado",
          "subejercicio": [{
              "Id": 320,
              "nombre": "Escultor toca al modelo",
              "descripcion": "Dos filas, cada persona frente a otra. Una de las filas es de escultores, y la otra de estatuas. Comienza el ejercicio y cada escultor trabaja con la estatua que desea. Para ello, toca el cuerpo de la estatua, cuidando de producir los efectos que desea en sus mínimos detalles. Los escultores no pueden usar el lenguaje del espejo, es decir, no pueden mostrar en el propio cuerpo la imagen o figura que les gustaría ver reproducida -aquí no interviene el mimetismo, la reproducción-, pues éste no es el diálogo del espejo, sino el del modelado. Por tanto, es necesario tocar, modelar, y a cada gesto del escultor corresponderá un gesto en consecuencia, a cada causa un efecto que no es idéntico. En el diálogo de los espejos, las dos personas están siempre, sincrónicamente, haciendo el mismo gesto; en el diálogo del modelado, aunque sincrónicamente, estarán haciendo gestos complementarios. El director debe sugerir que este primer ejercicio dure el tiempo necesario (dos o tres minutos, o más, según los participantes, la atmósfera creada, etc.) para que el escultor y el modelo se comprendan, para que la estatua pueda traducir fácilmente los gestos del escultor, vistos y sentidos.",
              "etiquetas": ["Secuencia: Modelado"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 321,
              "nombre": "Escultor no toca al modelo",
              "descripcion": "En esta segunda parte, el director da la señal para que los escultores se alejen de sus modelos. Sin embargo, deben seguir haciendo los mismos gestos que hacían antes, cuando tocaban a modelos. Las estatuas, que antes veían y sentían esos gestos, ahora siguen viéndolos, pero sin sentirlos: deben, no obstante, seguir respondiendo como si aún los estuviesen sintiendo, como si los escultores continuasen tocándolas. Así se produce un modelo a distancia. Los escultores deben seguir haciendo los gestos realistas, es decir, los gestos que serían necesarios para que las estatuas realizasen los movimientos, adoptasen expresiones faciales o hiciesen los gestos que los escultores desearían que hiciesen. En este ejercicio, los escultores pueden verse tentados a cometer dos errores: primero, el de volver a acercarse a las estatuas que antes tocaban (para hacerles comprender lo que desean) y ahora ya no deben tocar; segundo, hacer señales simbólicas del tipo «ven aquí», «no, no es así», etc. Es evidente que sienten también una tercera tentación, la peor de todas, la de hablar, que debe ser evitada a toda costa, ya que introduce con violencia el lenguaje verbal, que sólo conseguiría cortar brutalmente la comunicación visual. En este caso, si la estatua realmente no comprende el gesto del escultor, éste debe tocar al modelo, pero sólo como último recurso, para que perciba qué está haciendo, y después es inevitable que el modelo vuelva a la posición anterior, para que el escultor reproduzca el mismo gesto y él, modelo, reproduzca el mismo efecto, el cual ahora, por cierto, ha comprendido. Los modelos, a su vez, pueden verse tentados a cometer un error frecuente: realizar movimientos no provocados. Por ejemplo, si el escultor hace el gesto de atraerlo por la cintura o de tirarle del brazo, el modelo deberá caer al suelo. En caso contrario, cometerá el error de dar un paso adelante, para restablecer el equilibrio. El movimiento de la pierna, sin embargo, no ha sido provocado. Y el modelo no debe, como es lógico, producir ningún movimiento autónomo. Si el escultor desea que se acerque sin caerse, es necesario que preste atención al equilibrio corporal y mueva un pie primero y el otro después, teniendo sumo cuidado en que el centro de gravedad no se aparte de los pies y en que el modelo no se caiga. Lo mismo es válido para cualquier otro movimiento del modelo (por ejemplo, el movimiento pendular de los brazos): ninguno debe ser autónomo, todos deben ser provocados, dirigidos por el escultor.",
              "etiquetas": ["Secuencia: Modelado"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 322,
              "nombre": "Escultores se dispersan por la sala",
              "descripcion": "Si en el ejercicio: Escultor no toca al modelo, escultor y modelo estaban frente a frente, sin obstáculos, siempre en línea recta, ahora los escultores deben moverse por toda la sala, teniendo antes el cuidado de mover los rostros de sus modelos en dirección al lugar donde pretenden colocarse. Es decir: el modelo, que no posee movimientos autónomos, no puede buscar al escultor en caso de que éste salga de su campo visual. Los escultores se mueven y hacen que se muevan sus modelos, hacia delante y hacia atrás, hacia los lados, hacia arriba y hacia abajo.",
              "etiquetas": ["Secuencia: Modelado"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 323,
              "nombre": "Escultores hacen una única escultura",
              "descripcion": "Alejándose lo más posible y dentro de una sala donde se superponen modelos y escultores, donde la visibilidad está obstruida, los escultores intentan relacionar sus modelos entre sí, para formar un solo modelo multiforme, al que tendrán que dar un sentido, una significación que puede o no proponer el director.",
              "etiquetas": ["Secuencia: Modelado"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 324,
              "nombre": "Escultura con cuatro o cinco personas",
              "descripcion": "Hasta el ejercicio: Escultores hacen una única escultura, la secuencia debía ejecutarse de forma ininterrumpida. Cada ejercicio debía suceder al anterior sin interrupción, y la transición era, en sí misma, tan importante como el ejercicio propiamente dicho. Ahora se rompe la comicidad. Los participantes se dividen en grupos de cuatro o cinco. Un escultor y los demás son modelos. Cada escultor produce, con los cuerpos de los compañeros, una imagen significativa. Como si dijese: «Esto es lo que pienso». Cuando termina de visualizar su opinión, ocupa el lugar de uno de los compañeros que sale y se transforma en escultor. Y éste comienza a trabajar como si dijese: «Eso es lo que tú piensas, pero mira lo que te respondo», y a partir de la imagen recibida, modificándola, modela la imagen que simboliza su pensamiento, organiza los cuerpos de los compañeros en un solo modelo múltiple que tenga el significado que desea. Todo esto se hace sin que el escultor toque a sus modelos; los movimientos se producen a distancia, vistos pero no sentidos, y los traduce la sensibilidad de cada modelo, que actúa como si estuviese siendo realmente tocado. El proceso continúa hasta que el último participante haya dado su opinión visual.",
              "etiquetas": ["Secuencia: Modelado"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Imagenes como uno de esos posibles lenguajes",
          "subejercicio": [{
              "Id": 325,
              "nombre": "Completar la imagen",
              "descripcion": "Dos actores se saludan, estrechándose las manos. Se inmoviliza la imagen. Se pide al grupo que diga cuáles son los posibles significados que la imagen puede tener: ¿es una reunión de negocios, dos amantes despidiéndose para siempre, dos traficante de drogas negociando, etc.? Se exploran varias posibilidades. Las imágenes son polisémicas, y sus significados dependen no sólo de sí mismas sino también de los observadores. Uno de los actores de la pareja sale, y el director pregunta a los espectadores sobre los posibles significados de la imagen que queda, ahora solitaria. El director invita al actor que lo desee a entrar en la imagen en otra posición -el primero continúa inmóvil, dándole otro significado. Después, sale el primer actor y un cuarto entra en la imagen, siempre saliendo uno, quedándose el otro, entrando el siguiente. Después de esta demostración, todos se juntan en parejas y comienzan con la imagen de un apretón de manos. Un actor se retira de la imagen, dejando al otro con la mano tendida. Ahora, en vez de decir qué piensa que significa esta nueva imagen, el que se ha ido vuelve y completa la imagen, mostrando lo que ve como un posible significado suyo; se coloca en una posición diferente, en una relación diferente con el actor que está con la mano tendida, cambiando el significado de la imagen. Entonces el segundo participante sale de esta nueva imagen, observa y después vuelve a entrar en la imagen y la completa, cambiando el significado otra vez. Y así sucesivamente, uno tras otro, estableciendo un diálogo de imágenes. Como en los ejercicios de modelado, los actores deben pensar con sus cuerpos. No importa si la manera que el actor ha elegido para completar la imagen no tiene un significado literal: lo importante es dejar que el juego transcurra y las ideas fluyan. El director puede añadir uno o más objetos al juego -una silla, por ejemplo, o dos-, y los actores pueden moverlos, siempre que, al hacerlo, no se desplace la imagen del compañero. Variante (de tres) Dos actores se dan la mano, y un tercero, al verlos, decide en qué parte de la imagen entrar. Así, sucesivamente, cada uno de los tres sale, observa lo que queda de la imagen -otra imagen con otro significado- y vuelve a entrar, completando la ronda. Variante (Hamlet) a) Cada actor decide quién es e intenta descubrir quién es el otro, b) uno de los dos es el protagonista, y el otro es, cada vez, un personaje diferente: en este caso, el mismo protagonista esculpe los dos cuerpos.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 326,
              "nombre": "Juego de pelota",
              "descripcion": "Fútbol, baloncesto, voleibol, etc. Dos equipos jugarán un partido sin usar ninguna pelota, sino actuando como si tuviesen una. El director -arbitro del partido- debe observar si el movimiento imaginario de la pelota coincide con los movimientos de los actores, corrigiéndolos si fuese necesario. Se puede utilizar calquier tipo de deporte colectivo para este tipo de ejercicio: ping-pong, tenis, etc.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 327,
              "nombre": "Descubrir la diferencia",
              "descripcion": "Dos filas, cada actor frente a otro, observándose; se vuelven de espaldas y alteran un detalle determinado en sí mismos o en la ropa; vuelven a mirarse y cada uno debe descubrir la diferencia en el otro.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 328,
              "nombre": "Contar la propia historia",
              "descripcion": "Un actor cuenta cualquier cosa que realmente le haya ocurrido; al mismo tiempo, sus compañeros ilustran la historia que va desarrollando. El actor que narra no puede intervenir ni hacer correcciones durante el ejercicio. Al final se discutirán las diferencias. El narrador tendrá la oportunidad de comparar sus reacciones con las de sus compañeros.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 329,
              "nombre": "Teléfono francés",
              "descripcion": "Un círculo de personas que se miran. La número 1 está mirando a la número 4, que está mirando a la número 7, que está mirando a la número 10, y así sucesivamente. La 2 está mirando a la 5, que está mirando a la 8, que está mirando a la 11, y así sucesivamente. La 3 está mirando a la 6, que está mirando a la 9, que está mirando a la 12, y así sucesivamente. No se pueden formar grupos dentro del círculo; por ejemplo, si son veinte, no se puede contar sólo hasta dos, porque se formarán dos círculos de diez. El objetivo del ejercicio es no hacer nada. Se mira atentamente a su modelo sin hacer nada. Pero en cuanto nuestro modelo se mueva un poco, nosotros nos movemos también y un poco más que él. Como hay alguien que también nos mira, y para quien somos el modelo, él se moverá un poco más que nosotros y un poco más aún que nuestro modelo. Es una escalada. A partir de la instrucción de no hacer nada, de quedarse inmóvil, llegamos a todos los extremos.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 330,
              "nombre": "Concentración",
              "descripcion": "Estableciendo un círculo de atención, los actores deben descubrir el mayor número posible de colores, matices, formas, pormenores dentro de ese pequeño círculo. Puede tratarse de una mesa, parte de un mueble, la pared, el rostro de un compañero, una mano, un papel en blanco, etc. Lo importante es que el actor -que como todo ser humano está habituado a sintetizarla realidad, a estructurarla de forma simplificada para poder moverse en ella (enloqueceríamos si percibiésemos y registrásemos en nuestra conciencia la infinita variedad de colores y formas que nuestro ojo es capaz de percibir)-, lo importante, decía, es que el actor se ejercite en analizarla, realidad y descubrirla en sus mínimos detalles. Este ejercicio puede hacerse con un actor frente a otro. Cada uno informa al que tiene enfrente de toda la variedad que ha llegado a descubrir en su rostro. Lo mismo podrá hacerse con sonidos.",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 331,
              "nombre": "Juego de las profesiones",
              "descripcion": "Con nombres de profesiones en los papeles, dos veces cada profesión, oficio u ocupación: obrero metalúrgico, dentista, sacerdote, sargento, chófer, pugilista, actor, prostituta, etc., sólo aquellas profesiones que los actores conozcan. Cada actor saca un papel. Todos comienzan a improvisar la profesión que les ha tocado, sin hablar de ella, sólo mostrando la visión que tienen de esos profesionales. El director dará indicaciones, como por ejemplo: 1. Los profesionales están caminando por la calle; 2. Van a comer (bocadillos, fast food, restaurante elegante, etc.); 3. Asisten a una inauguración en el Museo de Arte Moderno (¿a comprar una obra, exhibirse, disfrutar de los cuadros?); 5. Se dirigen a un espectáculo de boxeo o a un partido de fútbol (¿cómo se comportan?); y, finalmente, 6. Van a trabajar: en este momento, los actores muestran todos los rituales del trabajo de cada uno y comienzan a intentar identificar al compañero de la misma profesión; cuando eso ocurre, la pareja sale del juego. En la segunda parte del juego, en círculo, las parejas se miran trabajando y forman familias de profesiones, es decir, profesiones cuyos rituales se asemejen. Después, cada familia pasa delante del grupo que debe intentar descubrir, primero, de qué profesiones se trata, y, segundo, por qué han formado una familia. Variante (Hamlet) Juego de los personajes de la obra (Hamlet o cualquier otra).",
              "etiquetas": ["Imagenes uno de esos posibles lenguajes"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Juegos de máscaras y rituales",
          "subejercicio": [{
              "Id": 332,
              "nombre": "Intercambio de máscaras",
              "descripcion": "Los actores realizan un ritual bien conocido y después cambian de papeles dentro de ese ritual: por ejemplo, los hombres representando según las máscaras usuales de las mujeres, etc., o el jefe y el empleado, el profesor y el alumno, el latifundista y el campesino, el policía y el ladrón, etc.; manteniendo todas las acciones del ritual, los dos actores cambian de máscara.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 333,
              "nombre": "Juego de las máscaras de los propios actores",
              "descripcion": "Normalmente este juego se realiza después del ejercicio «Dibujar el propio cuerpo» (véase p. 217). Si se hace separadamente, todos los actores escriben sus nombres en pedazos de papel, que se doblarán y distribuirán al azar; si se hace con el ejercicio mencionado, los actores tendrán que escribir sus nombres detrás de los dibujos que hicieron de sus cuerpos. Cuantos más participantes, mejor: requiere como mínimo dieciséis para ser efectivo; treinta es un buen número. El grupo se divide en dos. La mitad del grupo sale a escena y los actores interpretan su propia vida cotidiana. La técnica «Imagen de la hora» puede usarse para facilitar el ejercicio, y el director especifica los distintos momentos del día, mientras que los actores, en el escenario, hacen lo que acostumbran a esa hora del día. Mientras los actores están en el escenario, la otra mitad del grupo observa, cada uno prestando atención al actor que le servirá de modelo. Después, los dos grupos cambian de lugar. Los actores que estaban en la platea intentan mostrar ahora, en escena, las máscaras de los actores que estaban observando; como siempre, en el ejercicio de máscaras no deben imitar lo que ha hecho el actor; deben evitar lo obvio, e intentar mostrar lo que han visto de más importante o significativo en su actor. Si el ejercicio «Dibujar el propio cuerpo» se hace antes que éste, pueden también usar cualquier información significativa proveniente de los dibujos. Los actores que hacen de público tienen que intentar descubrir qué actor, en escena, está interpretando sus máscaras; en cuanto las identifiquen, lo dirán. Una vez que todas las máscaras estén identificadas, el director debe pedir a cada conjunto actor/máscara, una pareja cada vez, que interpreten juntos en el escenario, y el grupo/público podrá notar las similitudes y las diferencias entre los actores y sus máscaras. Otros actores también podrán unirse a ellos, subiendo al escenario y añadiendo elementos que han sido olvidados por la máscara. Vale la pena preguntar a los actores cómo han identificado sus máscaras, o por qué no han sido capaces de identificarse.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 334,
              "nombre": "Sustitución de la máscara",
              "descripcion": "Sirve para revelar el carácter económico de determinadas relaciones. En ciertas regiones de América Latina, el clero es muy progresista, pero en otras es terriblemente reaccionario. Primero se crean, por ejemplo, las máscaras determinadas por los rituales de dependencia del campesino en relación con el latifundista. A continuación, se establecen las máscaras de los rituales de la confesión de un fiel a un sacerdote. Después, manteniendo el ritual de una disputa económica, los actores usan las máscaras del sacerdote (latifundista) y del fiel (campesino). Éste es un ejemplo: pueden hacerse otras parejas de rituales y máscaras e intercambiarlas.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 335,
              "nombre": "Juego de papeles complementarios",
              "descripcion": "Variante del juego de las profesiones, con la diferencia de que en los pedazos de papel hay profesiones o papeles sociales complementarios: profesor-alumno, marido-mujer, médico-paciente, cura-fiel, policía- ladrón, obrero-burgués, etc.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 336,
              "nombre": "Fotografiar la imagen",
              "descripcion": "Varias versiones posibles: a) Variante hablada: un grupo cierra los ojos, el otro forma una imagen compleja; a una señal, los ciegos abren los ojos durante tres segundos, como una cámara, y después cada uno cuenta todo lo que ha visto y se comparan los relatos; a continuación, el segundo grupo rehace la escena para que se comprueben errores y aciertos, b) Variante simple: todos cierran los ojos mientras un actor forma una imagen; abren los ojos tres segundos, como una cámara, y la reproducen con su propio cuerpo, en imagen especular; después, dos personas, a continuación tres, reproducen una imagen cada vez. c) Variante en parejas: dos parejas frente a frente; la pareja 1 cierra los ojos, la 2 forma una imagen en la que los dos integrantes se tocan; la 1 abre y cierra los ojos, reproduce la imagen con su propio cuer- po, abre los ojos y compara, d) Variante en filas: dos filas, frente a frente. La fila 1 cierra los ojos, la 2 forma una imagen compleja o una serie de pequeñas imágenes con tres o cuatro actores cada una. El grupo 1 abre los ojos y los cierra. El grupo 2 vuelve a la posición original, de pie. El grupo 1 abre los ojos y, en silencio y sin diálogo, esculpe a los actores del grupo 2 reconstruyendo la forma en la que estaban o supuestamente estaban. Si la imagen esculpida resulta igual a la imagen original, no ocurre nada; si no, cuando el director diga «Ya», todos los actores de la imagen errónea deberán hacer un ruido con la boca y, en cámara lenta, colocarse en la imagen correcta. Una vez más para la errónea, con sonido, y una vez más para la correcta, siempre con sonido, é) Variante estroboscópica: todos cierran los ojos, y un actor, en cámara lenta, realiza una serie de acciones físicas. Durante ese período, el director dirá «Abre/Cierra» cinco veces, y todos abrirán y cerrarán los ojos cinco veces. Al final, todos tendrán que reproducir las acciones que han visto en esos cinco flashes). Variante Hamlet: grupos de actores formarán imágenes de escenas de la obra (Hamlet o cualquier otra), que los demás actores deben comentar y adivinar.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 337,
              "nombre": "Inventar secuencias de una imagen dinámica",
              "descripcion": "Un actor inicia una acción física con un sentido claro para él, una acción que podría realizar en la vida real. Se detiene. Lo sustituye otro actor, que continúa esa misma acción en el sentido que considera correcto o habitual. Otros actores pueden decir «Alto» y mostrar secuencias alternativas para esa acción.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 338,
              "nombre": "El líder designado",
              "descripcion": "Me gusta que todos crean en mí, pero no ciegamente, porque puedo estar equivocado en lo que digo o pienso. Por ello, me gusta hacer este ejercicio. Los actores se colocan en círculo (o en más de uno si son muchos), cierran los ojos; el director anuncia que pasará dos veces detrás de todos los actores de cada círculo y, en una de ellas, tocará sólo a una persona, sólo a una, en cada círculo: ése será el líder designado. A continuación, todos deben abrir los ojos y, sin hablar, sólo observándose, descubrir quién es el líder. Es sencillo: todos estarán sinceramente intentando descubrir quién está mintiendo, y el líder, mintiendo, simulará que también busca. Después de unos minutos, el director pide que todos levanten el brazo y, a una señal, indiquen al que creen que es el líder. El juego se hace dos veces y, en la última, inevitablemente todos los actores se comportan siempre de una forma muy diferente. El director pide que los actores indicados como líderes no revelen la verdad, si lo son o no. Después de la segunda vez, el director pregunta por qué han elegido a éste o aquél, y todos darán sus razones para sospechar que el mentiroso era uno o el otro. En verdad, y allí reside el truco, el mentiroso es el propio director: la primera vez, no tocará a nadie, no habrá ningún líder; en la segunda tocará a todos, todos serán líderes. Este ejercicio es estupendo: como se trata de la cuarta categoría («Ver todo lo que se mira»), puedo asegurar que en ningún otro los actores ven tanto lo que miran como en éste. Y, al mismo tiempo, comienzan a prestar mayor atención a lo que dice el director y no sólo a obedecer mecánicamente.",
              "etiquetas": ["Juegos de máscaras y rituales"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Invención del espacio y estructuras espaciales del poder",
          "subejercicio": [{
              "Id": 339,
              "nombre": "Inventando el espacio en la sala",
              "descripcion": "Usando sus cuerpos y algunos objetos (los mismos de la secuencia anterior), los participantes recrean un ambiente en la sala: un barco, una iglesia, un banco, una sala de baile, un desierto, un océano, etc. El primer actor se coloca en la posición en la que estaría si la sala fuese ese barco, iglesia, etc.",
              "etiquetas": ["Invención del espacio y las estructuras espaciales del poder"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 340,
              "nombre": "Homenaje a Magritte: «Esto no es una botella»",
              "descripcion": "Este juego tiene dos puntos de partida. El primero son las palabras de Bertolt Brecht: «Hay muchos objetos en un solo objeto si la meta final es la revolución, pero no habrá ningún objeto en ningún objeto si no es ésa la meta final». El otro punto de partida es el trabajo de Rene Magritte. Algunas de sus pinturas llevan títulos que dificultan la identificación de los objetos que representan: una jarra nombrada como «fruto» o el famoso grabado Esto no es una pipa, en el que vemos una pipa. Lo que Magritte quiso realmente decir fue que una pipa o cualquier objeto designado con un nombre inusual no son esa pipa ni ese objeto, sino obras de arte, representaciones, artes plásticas. La pipa representada no es una pipa, en efecto: basta intentar filmársela para comprobar la verdad contenida en el título, mentiroso en apariencia. Este juego es un homenaje al pintor surrealista belga. Se comienza con una botella de plástico vacía diciendo: «Esto no es una botella, entonces ¿qué será?», y cada participante tendrá derecho a usar la botella en relación con su propio cuerpo, formando la imagen que quiera, estática o dinámica, dando al objeto botella el sentido que quiera: un bebé o una bomba, una pelota o una guitarra, un telescopio o una pastilla de jabón. Después de la botella, se puede usar una silla. O una mesa, cualquier objeto. Un trozo de madera puede ser un arma, un bastón, una estaca, un caballo, un paraguas, una muleta, un ascensor, un puente, una pala, un mástil, una vara, un remo, un silbato, una flecha, una lanza, un violín, una aguja, muchas otras cosas menos un trozo de madera...",
              "etiquetas": ["Invención del espacio y las estructuras espaciales del poder"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        },
        {
          "subnombre": "Juegos de integración",
          "subejercicio": [{
              "Id": 341,
              "nombre": "Juego del asesino en el Hotel Ágata",
              "descripcion": "Este juego fue extraído de una historia de suspenso. En el salón en un hotel, cortadas completamente las comunicaciones con el exterior, se descubre una tarjeta que dice: «Soy un asesino y voy a matarlos a todos». Todos los participantes deben crear y desarrollar personajes, lo más completa y minuciosamente posible, y descubrir lo más rápidamente que puedan quién es el asesino (previa y secretamente designado por sorteo). El asesino puede a una señal prefijada (por ejemplo, dos pequeños toques en el hombro), «matar» a los otros, después de un período de diez minutos de improvisaciones, durante el cual todos intentan estudiarse y reconocerse mutuamente. Los restantes actores pueden, mediante votación mayoritaria, «matar» al sospechoso: si el sospechoso apuntado es inocente, aunque muera, con él muere también el acusador, y los dos salen del juego. Si es el verdadero asesino, termina el juego. Para evitar que el juego termine enseguida, tengo el hábito de designar a más de un asesino... Los actores no siempre están de acuerdo... Este juego de salón también puede hacerse como ejercicio de laboratorio, es decir, con actores que crean realmente personajes y desarrollan sus emociones. En este caso, los «muertos» no salen de escena, mueren de manera realista. De cualquier modo, la «muerte» de quien ha sido asesinado no puede ser rápida; por el contrario, el actor debe esperar unos minutos antes de «morir», para no denunciar al asesino, que estará, en el momento del asesinato, cerca de él. Este tipo de juego es estupendo para activar la percepción del actor. En general, nuestros sentidos seleccionan lo que vamos a concienciar; el juego amplía el marco de concienciación, y cada actor comienza a analizar con muchos más pormenores a todos sus compañeros, dado que, potencialmente, todos son «asesinos». El director puede no seleccionar a nadie... y así el suspense se mantiene, porque nadie es el asesino. O puede sólo elegirlo secretamente, durante el propio juego.",
              "etiquetas": ["Juego extravertido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 342,
              "nombre": "Guerrilleros y policías",
              "descripcion": "Variante del Juego del asesino en el Hotel Ágata. El elenco se divide en dos grupos, uno de guerrilleros y otro de policías. Todos viajan de incógnito en un vehículo que sufre una avería en la carretera. Los personajes no se conocen, aunque todos sepan que dentro del vehículo hay exclusivamente policías y guerrilleros, pero cada uno debe crear un personaje que está disfrazado de otro personaje, clandestino, camuflado. El ejercicio consiste en intentar descubrir cuáles son los amigos y cuáles los enemigos, y «matar» por medio de una señal prefijada. El ejercicio termina cuando sólo quedan «vivos» los componentes de uno de los grupos. Aquí la imaginación desempeña un papel importante, así como la observación: es importante que cada actor (sea del grupo que fuere) imagine una historia coherente para mostrarse ante sus amigos tal como realmente es, y ante sus enemigos como si fuese uno de ellos. Se permiten la formación de grupos y la división, de tal forma que no se pongan todos a hablar con todos al mismo tiempo, sino que se generen interrogatorios aislados, «muertos» aislados, etc. El ejercicio puede alcanzar un alto grado de violencia emocional e ideológica; hay que crear no sólo personajes en general, sino también personajes combatientes y personajes represivos. Hay que justificar las posiciones antagónicas.",
              "etiquetas": ["Juego extravertido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 343,
              "nombre": "Baile en la embajada",
              "descripcion": "Este juego se basa en un hecho que, según dicen, ocurrió realmente en una recepción en una embajada latinoamericana durante el tiempo de la represión fascista y las guerrillas. La relación es fácil de percibir. Cada actor elige un personaje importante Para interpretar: un juez, un político, un empresario, un nuncio apostólico, un militar de alta graduación, etc. Van todos al baile de la embajada, donde los reciben con toda ceremonia, y se esfuerzan por parecer agradables, bien educados, vestidos con sus mejores ropas y, sobre todo, respetando rigurosamente el protocolo. Se los anuncia al entrar, se encuentran, se mezclan, conversan: todo es diplomacia. Lo que los invitados no saben es que el camarero es miembro de un movimiento revolucionario; sirve las bebidas, los canapés, y, en el momento del pastel, que sirve en pequeños trozos, nadie desconfía pero siente los efectos: en el pastel se ha puesto una droga alucinógena. Se sirve una primera ronda de pastel, que quita la inhibición de los invitados, los cuales comienzan a actuar de forma un tanto extraña y se inicia una enérgica lucha entre la voluntad consciente de los personajes y sus deseos inconscientes, que afloran y se manifiestan sin ningún temor. La segunda ronda de pastel contiene más droga, y los invitados revelan más de sí mismos, actuando como realmente les gustaría actuar, sin ningún protocolo inhibidor; sus deseos afloran a la superficie y dejan caer sus máscaras de respetabilidad. Tal vez no haga falta la tercera ronda de pastel... Finalmente, viene el café, que restaura la moralidad y los vuelve a situar en condiciones sociales aceptables. Es el director quien inicia cada ronda a intervalos apropiados. Lo importante en este juego no es dejarse llevar por la irracionalidad, sino trabajar en el límite de la lucha entre la razón y el deseo.",
              "etiquetas": ["Juego extravertido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 344,
              "nombre": "Pelea de gallos",
              "descripcion": "Dos actores improvisan: el primero acusa al segundo de algo, por más inverosímil que sea; el segundo tiene que aceptar y defenderse, haciendo que resulte admisible lo inadmisible. El segundo no sabe, al iniciarse la improvisación, quién es el otro ni él mismo: debe aceptar ser lo que el otro dice que es, y en la medida en que lo va descubriendo.",
              "etiquetas": ["Juego extravertido"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 345,
              "nombre": "Sueño de niño (Qué querría ser de mayor)",
              "descripcion": "La mitad de los actores del grupo escriben sus nombres en pedazos de papel, junto con el nombre o descripción de la persona, héroe o figura mítica que, siendo niños, soñaban ser cuando creciesen; la otra mitad del grupo observa. Primero, los participantes caminan por el espacio de la escena Usando solamente sus cuerpos, para mostrar las características e los personajes que están interpretando: sus sueños. Deben revelar lo que les fascinaba en esos personajes cuando eran niños, usando solamente gestos, expresión facial y movimientos todos al mismo tiempo, pero sin que se relacionen unos con otros. Después de unos minutos, el director les indica que busquen un compañero. Comienzan a hablar entre dientes con sus compañeros. Después de un tiempo, se elige a otro compañero, con el cual podrán hablar con palabras, pero sin decir nada que pueda revelar, obviamente, a quién están interpretando. El diálogo puede volverse surrealista, no importa. Cuando termine, el director llamará, uno a uno, a los participantes, y asistiendo todos, así como aquellos que estaban en escena, deben describir los rasgos que vieron en la persona encargada de representar. No deben intentar descubrir la identidad de la aspiración infantil (Superman, Madre Teresa, Pelé, Grace Kelly, etc.), sino, en vez de eso, intentar describir cómo ha actuado la persona, porque eso revelará lo que realmente quería ser, o qué capacidades quería desarrollar en sí misma, usando el nombre o imagen de alguien real o fantástico como vehículo para esa aspiración. Dos ejemplos. En Zurich, un hombre escribió «Tarzán». Los comentarios de los participantes mostraron que él quería ser superior, un líder, un comandante, un jefe, encima de todos los demás, es decir, los animales. Además, se mostraba cruel con éstos. En Nueva York, dos muchachas escribieron el mismo nombre: Cenicienta. Una de ellas reveló narcisismo, belleza, crueldad; la otra, una puertorriqueña, eligió mostrar el momento en el que su Cenicienta volvía a la cocina: todas las mujeres querían tener algunos momentos de felicidad. Aunque efímeros: la cocina las esperaba. Este juego es eficaz porque revela características y aspiraciones que los participantes aún conservan en la memoria. No me acuerdo de ningún sueño si, en cierta forma, no lo sueño todavía...Después de que la primera parte del grupo haya representado sus sueños de niño, la segunda mitad hará lo mismo.",
              "etiquetas": ["Juegos introvertidos"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 346,
              "nombre": "Opuesto de mí mismo",
              "descripcion": "Otra vez las mismas reglas. Los participantes escriben sus nombres en pedazos de papel, junto con un rasgo que creen no poseer pero que les gustaría, y que debe ser completamente diferente de su comportamiento actual. Durante el juego, después de un tiempo, el director debe dar instrucciones del tipo «volver al comportamiento normal» y después «volver al opuesto de sí mismo».",
              "etiquetas": ["Juegos introvertidos"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            },
            {
              "Id": 347,
              "nombre": "Las dos revelaciones de Santa Teresa",
              "descripcion": "El título no tiene nada de religioso y está relacionado con un barrio de Río de Janeiro donde fue inventado. El grupo decide qué tipo de relación interpersonal decide investigar: marido/mujer, padre/hijo, profesor/estudiante, médico/paciente, etc. Solamente pueden seleccionarse relaciones próximas y cargadas de sentido y emoción. Se forman parejas y, en cada una, los miembros decidirán solamente: a) quién interpreta qué, quién es uno y quién es el otro: no pueden ser los dos padres o alumnos, etc; cada uno debe ser uno de los polos del binomio; b) dónde va a ser la escena en la que se encontrarán; c) qué edad tiene cada uno: son diferentes una madre de treinta años y otra de sesenta. Después de eso, los miembros de la pareja se separan y cada uno piensa, solo, en una revelación, algo que -bueno o malo, tabú- si se dijese provocaría el mayor choque en la relación, que nunca más volvería a ser la misma. La improvisación comienza cuando los dos se encuentran. Inician la conversación sobre temas que esos personajes suelen tratar y se ponen a hacer lo que se supone que hacen habitual-mente, incluyendo todo tipo de lugar común y cliché. Después de unos minutos, el director dirá: «Uno de los dos puede hacer la primera revelación». Entonces, uno de los miembros deberá revelar al otro algo de gran importancia, que tenga el poder de cambiar la relación, para mejor«o para peor. El otro miembro deberá mostrar la reacción que imagina sería la mas probable. Se improvisa la reacción ante lo que se ha revelado. Unos minutos más tarde, el director pedirá al segundo miembro que haga su revelación, que debe ser tan importante como la anterior, y la primera persona reaccionará de acuerdo con lo que imagina sería la verdadera reacción del otro. Nuevo intervalo, el director dirá que uno de los dos debe marcharse e improvisan la separación: ¿«te veo más tarde», buenas noches o un «adiós para siempre»? ¿Se marcha para comprar una botella de champán y celebrar o para no volver nunca más? Este juego es particularmente útil para revelar las estratificaciones en una cultura determinada. Primero: ¿dónde suelen encontrarse y hablar, por ejemplo, maridos y mujeres: en la cocina o en la cama? ¿Qué revelaciones hacen las hijas a sus madres: están embarazadas de un hombre casado y quieren abortar? ¿Quieren abandonar el hogar? ¿Dejar de estudiar, irse del país? Las comparaciones que se pueden hacer entre las diferentes parejas -por ejemplo, dónde se encuentran, qué se revelan, etc son muy eficaces como manera de revelar los mecanismos de una sociedad determinada. Generalmente hago este juego en la misma sesión, el mismo día de «Imagen de la hora» (donde cada uno debe mostrar qué hace generalmente a las siete de la mañana, a las ocho, a las nueve, a las diez, etc.) y «El gesto ritual» (donde cada uno muestra, en forma de imagen, la cristalización de los movimientos mecanizados que se hacen cada día).",
              "etiquetas": ["Juegos introvertidos"],
              "referencia": "Juegos para actores y no actores, Augusto Boal"
            }
          ]
        }
      ]
    },
    {
      "titulo": "La memoria de los sentidos",
      "totalidadejercicios": [{
        "subnombre": "Memoria, emoción e imaginación",
        "subejercicio": [{
            "Id": 348,
            "nombre": "Memoria: recordando el día de ayer",
            "descripcion": "Los actores deben sentarse cómodamente en sillas, muy relajados. A continuación, mover con lentitud cada parte de su cuerpo, de manera ininterrumpida, y tomar conciencia de cada parte aislada, con los ojos cerrados. Después, el director debe comenzar a animarlos para recordar todo lo que les ocurrió la noche anterior, antes de que se acostaran. Cada detalle debe ir acompañado de sensaciones corporales, gusto, dolor, sensaciones táctiles, formas, colores, rasgos, profundidad, sonidos, timbres, melodías, ruidos, etc., que el actor describirá, intentando volver a sentirlas. El actor debe hacer un esfuerzo especial para recordar sus sensaciones corporales y volver a experimentarlas. Para facilitar la experiencia, debe tratar de mover repetidamente la parte del cuerpo que se relaciona con la cosa imaginada; si piensa en el sabor de alguna comida que ha probado, moverá la boca, los labios, la lengua. Si piensa en un baño que ha tomado, moverá todo su cuerpo intentando sentir la piel que ha estado en contacto con el agua-si piensa en una caminata, moverá los músculos de las piernas y los pies. Después de ello, el director seguirá estimulando y tanteando, llevando ahora a los actores a recordar lo que les ocurrió esa misma mañana. ¿Cómo se despertaron? ¿Con el despertador? ¿Los despertó alguien? ¿El sonido del despertador, la voz de una persona, cómo eran esos sonidos? El director pedirá que describan, lo más minuciosamente posible, el rostro de la primera persona que vieron, los detalles de la habitación donde estaban durmiendo, de la sala donde tomaron café: rasgos, colores, sonidos, timbres, melodías, ruidos, olores, gustos, etc. A continuación, el medio de transporte que usaron, metro, autobús, coche; el sonido de una puerta cerrándose, sus compañeros de viaje, etc. Siempre buscando detalles, los menores detalles de las impresiones corporales, y siempre los pequeños movimientos de las partes concernientes, que deben acompañar a la memoria. Finalmente, su llegada a la sala en la que están. ¿Qué vieron primero, qué voz oyeron primero? Una descripción sensorial de la sala, con todos los detalles posibles. ¿Ahora dónde están? ¿Al lado de quién? ¿Cómo están vestidos los demás? ¿Qué objetos hay en la sala? Sólo entonces pueden abrir los ojos y comparar.",
            "etiquetas": ["Memoria, emoción e imaginación"],
            "referencia": "Juegos para actores y no actores, Augusto Boal"
          },
          {
            "Id": 349,
            "nombre": "Memoria y emoción: recordando un día del pasado",
            "descripcion": "Es el mismo ejercicio -Memoria: recordando el día de ayer-, pero tal vez ayer o por la mañana no haya ocurrido nada importante; por tanto, cada uno debe tener a su lado un copiloto, a quien contará un día de su pasado (de la emana pasada o de veinte años atrás) en que le haya ocurrido, 0 verdaderamente importante, algo que lo haya marcado de manera profunda y cuyo simple recuerdo, aún hoy, provoque en él una emoción. Cada participante debe tener un copiloto, porque las experiencias no son las mismas; el copiloto debe ayudar a que la persona enlace la memoria de las sensaciones preguntando, proponiendo varias cuestiones relacionadas con los detalles sensoriales. El copiloto no es un voyeur; debe aprovechar el ejercicio para intentar crear en su propia imaginación el mismo acontecimiento, con los mismos detalles, con la misma emoción, las mismas sensaciones.",
            "etiquetas": ["Memoria, emoción e imaginación"],
            "referencia": "Juegos para actores y no actores, Augusto Boal"
          },
          {
            "Id": 350,
            "nombre": "Memoria y emoción: recordando un día del pasado",
            "descripcion": "El mismo sistema - de: Memoria: recordando el día de ayer y Memoria y emoción: recordando un día del pasado-,. Con la ayuda de un copiloto, el actor intenta recordar algo que realmente ha ocurrido. Intenta despertar las emociones, sensaciones que tuvo, pero ahora el copiloto (que debe ser genuinamente un copiloto, consintiendo las mismas sensaciones y compartiendo las mismas imágenes) tiene derecho a introducir varios elementos que no existían en la versión original: personajes extras, sucesos adicionales, inventados, inesperados por el protagonista. El actor protagonista debe introducir en eso nuevos elementos de su mundo imaginario. Entonces, juntos, protagonista y copiloto participarán de la creación de una historia, parte realidad, parte ficción, pero conmovedora, impactante en su totalidad, y que debe provocar imágenes y sensaciones fuertes. Con la práctica, los elementos ficticios introducidos por el copiloto pueden llegar a ser cada vez más distantes de la realidad, surrealistas incluso. Sin embargo, las personas deben partir de lo probable y posible, hasta llegar a lo improbable e imposible, pero aún capaz de generar emociones y despertar sensaciones.",
            "etiquetas": ["Memoria, emoción e imaginación"],
            "referencia": "Juegos para actores y no actores, Augusto Boal"
          }
  
        ]
      }]
    }
  ];

  obtenerDatosec () {
    return this.datosejcal;
  }

  constructor() { }
}
