import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatostService {

  datos = [{
    "tipodeejercicio": "Caldeamiento",
    "ejercicios": [{
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
        "Id": 3,
        "nombre": "Opuesto de mí mismo",
        "descripcion": "Otra vez las mismas reglas. Los participantes escriben sus nombres en pedazos de papel, junto con un rasgo que creen no poseer pero que les gustaría, y que debe ser completamente diferente de su comportamiento actual. Durante el juego, después de un tiempo, el director debe dar instrucciones del tipo «volver al comportamiento normal» y después «volver al opuesto de sí mismo».",
        "etiquetas": ["Caldeamiento"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 4,
        "nombre": "Pelea de gallos",
        "descripcion": "Dos actores improvisan: el primero acusa al segundo de algo, por más inverosímil que sea; el segundo tiene que aceptar y defenderse, haciendo que resulte admisible lo inadmisible. El segundo no sabe, al iniciarse la improvisación, quién es el otro ni él mismo: debe aceptar ser lo que el otro dice que es, y en la medida en que lo va descubriendo.",
        "etiquetas": ["Caldeamiento", " Específico", " Juego extravertido"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 5,
        "nombre": "Baile en la embajada",
        "descripcion": "Este juego se basa en un hecho que, según dicen, ocurrió realmente en una recepción en una embajada latinoamericana durante el tiempo de la represión fascista y las guerrillas. La relación es fácil de percibir. Cada actor elige un personaje importante Para interpretar: un juez, un político, un empresario, un nuncio apostólico, un militar de alta graduación, etc. Van todos al baile de la embajada, donde los reciben con toda ceremonia, y se esfuerzan por parecer agradables, bien educados, vestidos con sus mejores ropas y, sobre todo, respetando rigurosamente el protocolo. Se los anuncia al entrar, se encuentran, se mezclan, conversan: todo es diplomacia. Lo que los invitados no saben es que el camarero es miembro de un movimiento revolucionario; sirve las bebidas, los canapés, y, en el momento del pastel, que sirve en pequeños trozos, nadie desconfía pero siente los efectos: en el pastel se ha puesto una droga alucinógena. Se sirve una primera ronda de pastel, que quita la inhibición de los invitados, los cuales comienzan a actuar de forma un tanto extraña y se inicia una enérgica lucha entre la voluntad consciente de los personajes y sus deseos inconscientes, que afloran y se manifiestan sin ningún temor. La segunda ronda de pastel contiene más droga, y los invitados revelan más de sí mismos, actuando como realmente les gustaría actuar, sin ningún protocolo inhibidor; sus deseos afloran a la superficie y dejan caer sus máscaras de respetabilidad. Tal vez no haga falta la tercera ronda de pastel... Finalmente, viene el café, que restaura la moralidad y los vuelve a situar en condiciones sociales aceptables. Es el director quien inicia cada ronda a intervalos apropiados. Lo importante en este juego no es dejarse llevar por la irracionalidad, sino trabajar en el límite de la lucha entre la razón y el deseo.",
        "etiquetas": ["Caldeamiento", " Específico", " Juego extravertido"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 6,
        "nombre": "Guerrilleros y policías",
        "descripcion": "Variante del Juego del asesino en el Hotel Ágata. El elenco se divide en dos grupos, uno de guerrilleros y otro de policías. Todos viajan de incógnito en un vehículo que sufre una avería en la carretera. Los personajes no se conocen, aunque todos sepan que dentro del vehículo hay exclusivamente policías y guerrilleros, pero cada uno debe crear un personaje que está disfrazado de otro personaje, clandestino, camuflado. El ejercicio consiste en intentar descubrir cuáles son los amigos y cuáles los enemigos, y «matar» por medio de una señal prefijada. El ejercicio termina cuando sólo quedan «vivos» los componentes de uno de los grupos. Aquí la imaginación desempeña un papel importante, así como la observación: es importante que cada actor (sea del grupo que fuere) imagine una historia coherente para mostrarse ante sus amigos tal como realmente es, y ante sus enemigos como si fuese uno de ellos. Se permiten la formación de grupos y la división, de tal forma que no se pongan todos a hablar con todos al mismo tiempo, sino que se generen interrogatorios aislados, «muertos» aislados, etc. El ejercicio puede alcanzar un alto grado de violencia emocional e ideológica; hay que crear no sólo personajes en general, sino también personajes combatientes y personajes represivos. Hay que justificar las posiciones antagónicas.",
        "etiquetas": ["Caldeamiento", " Específico", " Juego extravertido"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 7,
        "nombre": "Juego del asesino en el Hotel Ágata",
        "descripcion": "Este juego fue extraído de una historia de suspenso. En el salón en un hotel, cortadas completamente las comunicaciones con el exterior, se descubre una tarjeta que dice: «Soy un asesino y voy a matarlos a todos». Todos los participantes deben crear y desarrollar personajes, lo más completa y minuciosamente posible, y descubrir lo más rápidamente que puedan quién es el asesino (previa y secretamente designado por sorteo). El asesino puede a una señal prefijada (por ejemplo, dos pequeños toques en el hombro), «matar» a los otros, después de un período de diez minutos de improvisaciones, durante el cual todos intentan estudiarse y reconocerse mutuamente. Los restantes actores pueden, mediante votación mayoritaria, «matar» al sospechoso: si el sospechoso apuntado es inocente, aunque muera, con él muere también el acusador, y los dos salen del juego. Si es el verdadero asesino, termina el juego. Para evitar que el juego termine enseguida, tengo el hábito de designar a más de un asesino... Los actores no siempre están de acuerdo... Este juego de salón también puede hacerse como ejercicio de laboratorio, es decir, con actores que crean realmente personajes y desarrollan sus emociones. En este caso, los «muertos» no salen de escena, mueren de manera realista. De cualquier modo, la «muerte» de quien ha sido asesinado no puede ser rápida; por el contrario, el actor debe esperar unos minutos antes de «morir», para no denunciar al asesino, que estará, en el momento del asesinato, cerca de él. Este tipo de juego es estupendo para activar la percepción del actor. En general, nuestros sentidos seleccionan lo que vamos a concienciar; el juego amplía el marco de concienciación, y cada actor comienza a analizar con muchos más pormenores a todos sus compañeros, dado que, potencialmente, todos son «asesinos». El director puede no seleccionar a nadie... y así el suspense se mantiene, porque nadie es el asesino. O puede sólo elegirlo secretamente, durante el propio juego.",
        "etiquetas": ["Caldeamiento", "[Específico", "Juego extravertido"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 8,
        "nombre": "Homenaje a Magritte: «Esto no es una botella»",
        "descripcion": "Este juego tiene dos puntos de partida. El primero son las palabras de Bertolt Brecht: «Hay muchos objetos en un solo objeto si la meta final es la revolución, pero no habrá ningún objeto en ningún objeto si no es ésa la meta final». El otro punto de partida es el trabajo de Rene Magritte. Algunas de sus pinturas llevan títulos que dificultan la identificación de los objetos que representan: una jarra nombrada como «fruto» o el famoso grabado Esto no es una pipa, en el que vemos una pipa. Lo que Magritte quiso realmente decir fue que una pipa o cualquier objeto designado con un nombre inusual no son esa pipa ni ese objeto, sino obras de arte, representaciones, artes plásticas. La pipa representada no es una pipa, en efecto: basta intentar filmársela para comprobar la verdad contenida en el título, mentiroso en apariencia. Este juego es un homenaje al pintor surrealista belga. Se comienza con una botella de plástico vacía diciendo: «Esto no es una botella, entonces ¿qué será?», y cada participante tendrá derecho a usar la botella en relación con su propio cuerpo, formando la imagen que quiera, estática o dinámica, dando al objeto botella el sentido que quiera: un bebé o una bomba, una pelota o una guitarra, un telescopio o una pastilla de jabón. Después de la botella, se puede usar una silla. O una mesa, cualquier objeto. Un trozo de madera puede ser un arma, un bastón, una estaca, un caballo, un paraguas, una muleta, un ascensor, un puente, una pala, un mástil, una vara, un remo, un silbato, una flecha, una lanza, un violín, una aguja, muchas otras cosas menos un trozo de madera...",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 9,
        "nombre": "Líder designado",
        "descripcion": "Me gusta que todos crean en mí, pero no ciegamente, porque puedo estar equivocado en lo que digo o pienso. Por ello, me gusta hacer este ejercicio. Los actores se colocan en círculo (o en más de uno si son muchos), cierran los ojos; el director anuncia que pasará dos veces detrás de todos los actores de cada círculo y, en una de ellas, tocará sólo a una persona, sólo a una, en cada círculo: ése será el líder designado. A continuación, todos deben abrir los ojos y, sin hablar, sólo observándose, descubrir quién es el líder. Es sencillo: todos estarán sinceramente intentando descubrir quién está mintiendo, y el líder, mintiendo, simulará que también busca. Después de unos minutos, el director pide que todos levanten el brazo y, a una señal, indiquen al que creen que es el líder. El juego se hace dos veces y, en la última, inevitablemente todos los actores se comportan siempre de una forma muy diferente. El director pide que los actores indicados como líderes no revelen la verdad, si lo son o no. Después de la segunda vez, el director pregunta por qué han elegido a éste o aquél, y todos darán sus razones para sospechar que el mentiroso era uno o el otro. En verdad, y allí reside el truco, el mentiroso es el propio director: la primera vez, no tocará a nadie, no habrá ningún líder; en la segunda tocará a todos, todos serán líderes. Este ejercicio es estupendo: como se trata de la cuarta categoría («Ver todo lo que se mira»), puedo asegurar que en ningún otro los actores ven tanto lo que miran como en éste. Y, al mismo tiempo, comienzan a prestar mayor atención a lo que dice el director y no sólo a obedecer mecánicamente.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 10,
        "nombre": "Naturalidad y ridículo",
        "descripcion": "En una rueda de ritmo y movimiento, un actor va hacia el centro y hace todos los movimientos y ritmos que sean cómodos y naturales; entra un compañero y lo hace cambiar a lo que le parezca más incómodo y antinatural: el actor en el centro y los de la rueda lo siguen. El compañero sale y el actor del centro reanuda los movimientos cómodos; entra un segundo actor y lo hace cambiar nuevamente. La comodidad conduce, muchas veces, a la mecanización.",
        "etiquetas": ["Caldeamiento", " Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 11,
        "nombre": "Juego de las profesiones",
        "descripcion": "Con nombres de profesiones en los papeles, dos veces cada profesión, oficio u ocupación: obrero metalúrgico, dentista, sacerdote, sargento, chófer, pugilista, actor, prostituta, etc., sólo aquellas profesiones que los actores conozcan. Cada actor saca un papel. Todos comienzan a improvisar la profesión que les ha tocado, sin hablar de ella, sólo mostrando la visión que tienen de esos profesionales. El director dará indicaciones, como por ejemplo: 1. Los profesionales están caminando por la calle; 2. Van a comer (bocadillos, fast food, restaurante elegante, etc.); 3. Asisten a una inauguración en el Museo de Arte Moderno (¿a comprar una obra, exhibirse, disfrutar de los cuadros?); 5. Se dirigen a un espectáculo de boxeo o a un partido de fútbol (¿cómo se comportan?); y, finalmente, 6. Van a trabajar: en este momento, los actores muestran todos los rituales del trabajo de cada uno y comienzan a intentar identificar al compañero de la misma profesión; cuando eso ocurre, la pareja sale del juego. En la segunda parte del juego, en círculo, las parejas se miran trabajando y forman familias de profesiones, es decir, profesiones cuyos rituales se asemejen. Después, cada familia pasa delante del grupo que debe intentar descubrir, primero, de qué profesiones se trata, y, segundo, por qué han formado una familia. Variante (Hamlet) Juego de los personajes de la obra (Hamlet o cualquier otra).",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 12,
        "nombre": "Concentración",
        "descripcion": "Estableciendo un círculo de atención, los actores deben descubrir el mayor número posible de colores, matices, formas, pormenores dentro de ese pequeño círculo. Puede tratarse de una mesa, parte de un mueble, la pared, el rostro de un compañero, una mano, un papel en blanco, etc. Lo importante es que el actor -que como todo ser humano está habituado a sintetizarla realidad, a estructurarla de forma simplificada para poder moverse en ella (enloqueceríamos si percibiésemos y registrásemos en nuestra conciencia la infinita variedad de colores y formas que nuestro ojo es capaz de percibir)-, lo importante, decía, es que el actor se ejercite en analizarla, realidad y descubrirla en sus mínimos detalles. Este ejercicio puede hacerse con un actor frente a otro. Cada uno informa al que tiene enfrente de toda la variedad que ha llegado a descubrir en su rostro. Lo mismo podrá hacerse con sonidos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 13,
        "nombre": "Teléfono francés",
        "descripcion": "Un círculo de personas que se miran. La número 1 está mirando a la número 4, que está mirando a la número 7, que está mirando a la número 10, y así sucesivamente. La 2 está mirando a la 5, que está mirando a la 8, que está mirando a la 11, y así sucesivamente. La 3 está mirando a la 6, que está mirando a la 9, que está mirando a la 12, y así sucesivamente. No se pueden formar grupos dentro del círculo; por ejemplo, si son veinte, no se puede contar sólo hasta dos, porque se formarán dos círculos de diez. El objetivo del ejercicio es no hacer nada. Se mira atentamente a su modelo sin hacer nada. Pero en cuanto nuestro modelo se mueva un poco, nosotros nos movemos también y un poco más que él. Como hay alguien que también nos mira, y para quien somos el modelo, él se moverá un poco más que nosotros y un poco más aún que nuestro modelo. Es una escalada. A partir de la instrucción de no hacer nada, de quedarse inmóvil, llegamos a todos los extremos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 14,
        "nombre": "Contar la propia historia",
        "descripcion": "Un actor cuenta cualquier cosa que realmente le haya ocurrido; al mismo tiempo, sus compañeros ilustran la historia que va desarrollando. El actor que narra no puede intervenir ni hacer correcciones durante el ejercicio. Al final se discutirán las diferencias. El narrador tendrá la oportunidad de comparar sus reacciones con las de sus compañeros.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 15,
        "nombre": "Descubrir la diferencia",
        "descripcion": "Dos filas, cada actor frente a otro, observándose; se vuelven de espaldas y alteran un detalle determinado en sí mismos o en la ropa; vuelven a mirarse y cada uno debe descubrir la diferencia en el otro.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 16,
        "nombre": "Juego de pelota",
        "descripcion": "Fútbol, baloncesto, voleibol, etc. Dos equipos jugarán un partido sin usar ninguna pelota, sino actuando como si tuviesen una. El director -arbitro del partido- debe observar si el movimiento imaginario de la pelota coincide con los movimientos de los actores, corrigiéndolos si fuese necesario. Se puede utilizar calquier tipo de deporte colectivo para este tipo de ejercicio: ping-pong, tenis, etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 17,
        "nombre": "Completar la imagen",
        "descripcion": "Dos actores se saludan, estrechándose las manos. Se inmoviliza la imagen. Se pide al grupo que diga cuáles son los posibles significados que la imagen puede tener: ¿es una reunión de negocios, dos amantes despidiéndose para siempre, dos traficante de drogas negociando, etc.? Se exploran varias posibilidades. Las imágenes son polisémicas, y sus significados dependen no sólo de sí mismas sino también de los observadores. Uno de los actores de la pareja sale, y el director pregunta a los espectadores sobre los posibles significados de la imagen que queda, ahora solitaria. El director invita al actor que lo desee a entrar en la imagen en otra posición -el primero continúa inmóvil, dándole otro significado. Después, sale el primer actor y un cuarto entra en la imagen, siempre saliendo uno, quedándose el otro, entrando el siguiente. Después de esta demostración, todos se juntan en parejas y comienzan con la imagen de un apretón de manos. Un actor se retira de la imagen, dejando al otro con la mano tendida. Ahora, en vez de decir qué piensa que significa esta nueva imagen, el que se ha ido vuelve y completa la imagen, mostrando lo que ve como un posible significado suyo; se coloca en una posición diferente, en una relación diferente con el actor que está con la mano tendida, cambiando el significado de la imagen. Entonces el segundo participante sale de esta nueva imagen, observa y después vuelve a entrar en la imagen y la completa, cambiando el significado otra vez. Y así sucesivamente, uno tras otro, estableciendo un diálogo de imágenes. Como en los ejercicios de modelado, los actores deben pensar con sus cuerpos. No importa si la manera que el actor ha elegido para completar la imagen no tiene un significado literal: lo importante es dejar que el juego transcurra y las ideas fluyan. El director puede añadir uno o más objetos al juego -una silla, por ejemplo, o dos-, y los actores pueden moverlos, siempre que, al hacerlo, no se desplace la imagen del compañero. Variante (de tres) Dos actores se dan la mano, y un tercero, al verlos, decide en qué parte de la imagen entrar. Así, sucesivamente, cada uno de los tres sale, observa lo que queda de la imagen -otra imagen con otro significado- y vuelve a entrar, completando la ronda. Variante (Hamlet) a) Cada actor decide quién es e intenta descubrir quién es el otro, b) uno de los dos es el protagonista, y el otro es, cada vez, un personaje diferente: en este caso, el mismo protagonista esculpe los dos cuerpos.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 18,
        "nombre": "Escultura con cuatro o cinco personas",
        "descripcion": "Hasta el ejercicio: Escultores hacen una única escultura, la secuencia debía ejecutarse de forma ininterrumpida. Cada ejercicio debía suceder al anterior sin interrupción, y la transición era, en sí misma, tan importante como el ejercicio propiamente dicho. Ahora se rompe la comicidad. Los participantes se dividen en grupos de cuatro o cinco. Un escultor y los demás son modelos. Cada escultor produce, con los cuerpos de los compañeros, una imagen significativa. Como si dijese: «Esto es lo que pienso». Cuando termina de visualizar su opinión, ocupa el lugar de uno de los compañeros que sale y se transforma en escultor. Y éste comienza a trabajar como si dijese: «Eso es lo que tú piensas, pero mira lo que te respondo», y a partir de la imagen recibida, modificándola, modela la imagen que simboliza su pensamiento, organiza los cuerpos de los compañeros en un solo modelo múltiple que tenga el significado que desea. Todo esto se hace sin que el escultor toque a sus modelos; los movimientos se producen a distancia, vistos pero no sentidos, y los traduce la sensibilidad de cada modelo, que actúa como si estuviese siendo realmente tocado. El proceso continúa hasta que el último participante haya dado su opinión visual.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 19,
        "nombre": "Escultores hacen una única escultura",
        "descripcion": "Alejándose lo más posible y dentro de una sala donde se superponen modelos y escultores, donde la visibilidad está obstruida, los escultores intentan relacionar sus modelos entre sí, para formar un solo modelo multiforme, al que tendrán que dar un sentido, una significación que puede o no proponer el director.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 20,
        "nombre": "Escultores se dispersan por la sala",
        "descripcion": "Si en el ejercicio: Escultor no toca al modelo, escultor y modelo estaban frente a frente, sin obstáculos, siempre en línea recta, ahora los escultores deben moverse por toda la sala, teniendo antes el cuidado de mover los rostros de sus modelos en dirección al lugar donde pretenden colocarse. Es decir: el modelo, que no posee movimientos autónomos, no puede buscar al escultor en caso de que éste salga de su campo visual. Los escultores se mueven y hacen que se muevan sus modelos, hacia delante y hacia atrás, hacia los lados, hacia arriba y hacia abajo.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 21,
        "nombre": "Escultor no toca al modelo",
        "descripcion": "En esta segunda parte, el director da la señal para que los escultores se alejen de sus modelos. Sin embargo, deben seguir haciendo los mismos gestos que hacían antes, cuando tocaban a modelos. Las estatuas, que antes veían y sentían esos gestos, ahora siguen viéndolos, pero sin sentirlos: deben, no obstante, seguir respondiendo como si aún los estuviesen sintiendo, como si los escultores continuasen tocándolas. Así se produce un modelo a distancia. Los escultores deben seguir haciendo los gestos realistas, es decir, los gestos que serían necesarios para que las estatuas realizasen los movimientos, adoptasen expresiones faciales o hiciesen los gestos que los escultores desearían que hiciesen. En este ejercicio, los escultores pueden verse tentados a cometer dos errores: primero, el de volver a acercarse a las estatuas que antes tocaban (para hacerles comprender lo que desean) y ahora ya no deben tocar; segundo, hacer señales simbólicas del tipo «ven aquí», «no, no es así», etc. Es evidente que sienten también una tercera tentación, la peor de todas, la de hablar, que debe ser evitada a toda costa, ya que introduce con violencia el lenguaje verbal, que sólo conseguiría cortar brutalmente la comunicación visual. En este caso, si la estatua realmente no comprende el gesto del escultor, éste debe tocar al modelo, pero sólo como último recurso, para que perciba qué está haciendo, y después es inevitable que el modelo vuelva a la posición anterior, para que el escultor reproduzca el mismo gesto y él, modelo, reproduzca el mismo efecto, el cual ahora, por cierto, ha comprendido. Los modelos, a su vez, pueden verse tentados a cometer un error frecuente: realizar movimientos no provocados. Por ejemplo, si el escultor hace el gesto de atraerlo por la cintura o de tirarle del brazo, el modelo deberá caer al suelo. En caso contrario, cometerá el error de dar un paso adelante, para restablecer el equilibrio. El movimiento de la pierna, sin embargo, no ha sido provocado. Y el modelo no debe, como es lógico, producir ningún movimiento autónomo. Si el escultor desea que se acerque sin caerse, es necesario que preste atención al equilibrio corporal y mueva un pie primero y el otro después, teniendo sumo cuidado en que el centro de gravedad no se aparte de los pies y en que el modelo no se caiga. Lo mismo es válido para cualquier otro movimiento del modelo (por ejemplo, el movimiento pendular de los brazos): ninguno debe ser autónomo, todos deben ser provocados, dirigidos por el escultor.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 22,
        "nombre": "Escultor toca al modelo",
        "descripcion": "Dos filas, cada persona frente a otra. Una de las filas es de escultores, y la otra de estatuas. Comienza el ejercicio y cada escultor trabaja con la estatua que desea. Para ello, toca el cuerpo de la estatua, cuidando de producir los efectos que desea en sus mínimos detalles. Los escultores no pueden usar el lenguaje del espejo, es decir, no pueden mostrar en el propio cuerpo la imagen o figura que les gustaría ver reproducida -aquí no interviene el mimetismo, la reproducción-, pues éste no es el diálogo del espejo, sino el del modelado. Por tanto, es necesario tocar, modelar, y a cada gesto del escultor corresponderá un gesto en consecuencia, a cada causa un efecto que no es idéntico. En el diálogo de los espejos, las dos personas están siempre, sincrónicamente, haciendo el mismo gesto; en el diálogo del modelado, aunque sincrónicamente, estarán haciendo gestos complementarios. El director debe sugerir que este primer ejercicio dure el tiempo necesario (dos o tres minutos, o más, según los participantes, la atmósfera creada, etc.) para que el escultor y el modelo se comprendan, para que la estatua pueda traducir fácilmente los gestos del escultor, vistos y sentidos.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 23,
        "nombre": "Unificación",
        "descripcion": "Finalmente, el director previene a los participantes y da la señal para que todos intenten unificarse. Que lo intenten: no se trata de una obligación. Puede suceder que, al final de la secuencia, toda la sala esté totalmente sincronizada, unificada en un mismo ritmo, en un mismo movimiento. Pero puede también suceder (segunda hipótesis) que toda la sala esté unificada en ritmos y movimientos complementarios, que no sean los mismos, pero que se armonicen. Puede incluso darse una tercera hipótesis: los diferentes grupos no se unifican y terminan formando varios grupos y subgrupos, repitiendo, insistentes, el propio ritmo y el propio movimiento. Esta etapa final debe ser correspondida de la manera correcta: no se trata de competición, de imponer el propio movimiento a los demás; se trata, a lo sumo, de un intento de seducción. Lo que se pretende es un estudio rítmico de los participantes y también unificar al grupo en sus bases mínimas. Esto, sin embargo, puede revelarse como imposible. En esta fase, queda evidenciado el grado de violencia, de tendencia a estallar, de agresividad de cada componente del grupo; se evidencia también el grado de compatibilidad, de diálogo, de capacidad de trabajo conjunto. El director debe tener el cuidado de no obligar a nadie a hacer nada en especial, de no manipular al grupo en el sentido de intentar obligatoriamente la unificación. Se trata sólo de comprobar, estudiar y no imponer. Es necesario que cada uno se manifieste libremente, para que los resultados del estudio sean verdaderos. Existe en toda esta larga secuencia una gran variedad de formas visuales de comunicación, pero todas ellas tienen una base común: el mimetismo (excepto el espejo distorsionador, donde el mimetismo, aunque existe, no es dominante). En toda la secuencia, se estudia al compañero para reproducirlo en los mínimos detalles y con la mayor simultaneidad. En la próxima secuencia, el modelado, la forma de diálogo se modifica totalmente.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 24,
        "nombre": "Espejo rítmico",
        "descripcion": "Suavemente, en esta búsqueda amorosa de sí mismo en el otro, el diálogo se unifica, se convierte en monólogo: los dos buscan movimientos que se reproduzcan rítmicamente. Los dos deben encontrar movimientos rítmicos corporales que sean agradables para ambos. Pueden ser lentos o rápidos, suaves o enérgicos, simples o complejos: lo importante es que ambos se sientan bien, cómodos y contentos al realizarlos, que los movimientos sean rítmicos y siempre los mismos, que todo el cuerpo se ponga en movimiento.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 25,
        "nombre": "Espejo narcisista",
        "descripcion": "Después de la distorsión, la crítica, el comentario corrosivo, la tentativa de destrucción de la máscara del compañero de enfrente, después de la caricatura, el espejo se vuelve narcisista. Éste puede ser uno de los mejores momentos de toda la secuencia. Aquí cada participante se mira al espejo y se ve guapo. Pero la imagen que ve es la del compañero de enfrente. Cada uno debe intentar reproducir, con la mayor exactitud posible, todos los gestos de placer, toda la alegría que siente cuando está bien consigo mismo, cuando está feliz de ser quien es. Yo estoy feliz, hago un gesto de felicidad y me miro al espejo: pero lo que veo es mi propia imagen en el cuerpo de otra persona. Al mismo tiempo, la otra persona se mira en mí: en mí, se ve a sí misma, feliz, contenta: soy yo quien, con mis gestos y movimientos, debo restituirle esa felicidad y ese contento. El poeta portugués Fernando Pessoa escribió estos admirables versos: Nadie ama a otro, sino que ama lo que de sí hay en él o lo supone. Ésta es la idea de tales ejercicios: nos buscamos a nosotros mismos en los otros, que a su vez se buscan en nosotros.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 26,
        "nombre": "Espejo distorsionador",
        "descripcion": "El director siempre debe prevenir a los participantes antes de dar la señal para que la secuencia pase a una nueva etapa. En este caso, dada la señal, la relación entre los compañeros de una misma pareja se modifica totalmente. Si hasta aquí todos los movimientos, todas las expresiones faciales, todos los gestos se reproducían idénticamente, miméticamente, en esta etapa se produce el comentario, la respuesta. Cada uno tiene derecho a hacer lo que le parezca, y a cada nuevo estímulo el otro responde, comenta, aumenta, disminuye, ridiculiza, destruye, relativiza. Reproduce, en suma, la imagen que recibe, pero, al mismo tiempo, se contrapone a ella. La imagen (gesto, movimiento, expresión facial) y la respuesta no deben ser sucesivas, sino casi simultáneas y continuas. No se trata de hacer algo y esperar que el otro haga su parte, para responder a continuación mientras el otro espera: por el contrario, se trata, sin interrupción, de enviar y recibir mensajes visuales que se responden, que se distorsionan. Es cierto que la simultaneidad no es del todo posible, pero la espera, el reposo, deben evitarse.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 27,
        "nombre": "Cambiando de compañero",
        "descripcion": "Tres veces el director debe anunciar y dar la señal a los participantes para que cambien de compañero. La primera vez, cada uno debe elegir a otro compañero que esté cerca. Dada la señal, y sin mayor transición, se deja al compañero de enfrente y se busca a otro con el cual habrá de establecerse una relación mimética semejante. Puede ocurrir que el encuentro se produzca con gran facilidad, pero también puede llevar un tiempo. En cualquier caso, el actor debe seguir moviéndose lenta y continuamente, completando y desarrollando los movimientos que realizaba con el compañero anterior hasta encontrar al nuevo. En el segundo cambio, cada uno debe buscar a un compañero que esté a una distancia media, y la tercera vez debe buscar al más distante posible dentro de la sala. Es importante que no se rompa la continuidad, que el actor no deje de moverse y, con los brazos cruzados, intente localizar a quien no tiene pareja: el propio movimiento atraerá al nuevo posible compañero. En esta etapa de la secuencia ocurre muchas veces que dos participantes eligen al mismo compañero, y durante unos instantes los dos creen haber establecido contacto; pero si ambos miran fijamente a los ojos del compañero elegido (si concentran la atención en los ojos, aunque tengan toda la sala dentro de su campo visual), enseguida se darán cuenta de si están siendo o no correspondidos. Cada vez que se forma una nueva pareja, es importante que se establezca un diálogo fértil entre los participantes, que cada uno estudie al otro corporalmente, sintiendo la diferencia de movimientos entre el nuevo compañero y el anterior. No se trata de Pasar rápidamente de una cosa a otra, sino de dialogar visual y tísicamente, de conocerse.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 28,
        "nombre": "Espejo roto",
        "descripcion": "Cuando el espejo se rompe, se vuelven a formar parejas de compañeros que se miran frente a frente, sujetos e imágenes, reproduciendo perfecta y sincrónicamente los movimientos iniciados por cualquiera de los dos, sin tiranía. Pero ahora cada pareja tiene su propio trozo de espejo, autónomo: ya no existe el espejo central que dividía la sala en dos, sino trozos individuales de espejo, desparramados por la sala. Cada pareja, dentro de la sala, evoluciona como quiere, acercándose o alejándose de su compañero y de su trozo de espejo, girando, dando vueltas, pero siempre manteniendo la misma relación. En ese momento, cada participante debe ampliar su capacidad de concentración y de visión, que incluye al compañero de enfrente y el espacio, pero ya ahora el espacio cambiante, que modifica permanentemente la evolución de cada pareja y cada trozo de espejo. Ese movimiento, ahora, no está limitado por la presencia del espejo grande y largo que se ha roto. El espacio se vuelve mucho más dinámico y mudable, y la atención y la concentración deben ser mucho mayores y más intensas. Es igualmente importante que cada pareja evolucione por toda la sala.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 29,
        "nombre": "Grupos simétricos",
        "descripcion": "El director advierte y da la señal para que todos se suelten las manos. Pero el ejercicio continúa, sin interrupción. Ahora, liberados del contacto manual, los participantes, respetando siempre la presencia de un único espejo que sigue dividiendo la sala Por el medio, tratan de formar con los compañeros de su propio ando una imagen colectiva, simétrica. Puede ocurrir que todos los participantes de un bloque organicen una sola imagen reproducida por el bloque de enfrente (los dos bloques son simultáneamente sujetos e imágenes: sigue sin existir la tiranía de una persona sobre otra y, ahora, la de un grupo sobre otro; siguen siendo necesarias la libertad y la solidaridad), o que cada bloque se subdivida en varios bloques menores. Es importante, sin embargo, que no se atomicen aún más en individuos aislados; es importante que dos o más o muchas o todas las personas de cada fila reproduzcan, a cada lado, con perfección y sincronismo, la misma imagen.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 30,
        "nombre": "Dos filas forman una curva",
        "descripcion": "El director elige a uno de los participantes del extremo de una de las filas y hace que ejecute una curva en U; muscularmente, ese participante atraerá al compañero de al lado y toda la fila hará una curva, que la fila de enfrente repetirá sincrónicamente. Se supone que sigue existiendo, entre ambas filas, un único y largo espejo. Cuando, para hacer la curva, los participantes de una fila se apartan del espejo imaginario, lo mismo debe suceder con los participantes de la otra. Cuando se acercan, esto se repite. Lo máximo que puede ocurrir, al acercarse, es que un actor toque físicamente al actor que tiene enfrente, pero debe respetarse la línea divisoria (pues es el espejo) y nunca traspasarla. Los participantes deben continuar mirándose fijamente. El hecho de que hagan una curva añade un elemento nuevo, necesario en esta progresión. Los actores frente a frente pasan por tres etapas hasta este punto de la secuencia: a) comunicación visual directa, individual; b) comunicación muscular y visual entre cada uno y otras tres personas: una enfrente (vista) y dos a los lados (tacto); c) en esta etapa, los actores toman conciencia de la totalidad de cada grupo (de cada fila), es decir, incluyen el espacio total del ejercicio, pero continúan limitados y determinados por el contacto físico, que cercena la invención.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 31,
        "nombre": "Todos se dan las manos",
        "descripcion": "Una vez más, a una señal del director, todos los participantes se dan las manos, a derecha y a izquierda: las dos filas, así unidas, siguen frente a frente, cada uno mirando a los ojos del compañero. En esta etapa, sin embargo, se incluye un elemento nuevo: si antes la comunicación era exclusivamente visual, ahora también es muscular: cada participante recibe estímulos visuales (del compañero que está enfrente) y musculares (de los compañeros a la derecha y a la izquierda). No se deben hacer movimientos que no pueda seguir el compañero de enfrente, si los que están a su derecha y a su izquierda le impiden realizar muscularmente el mismo gesto o movimiento. En ese caso, el participante que inició el movimiento imposible debe volver atrás lo más rápidamente que pueda para no perder la sincronización, y para que la reproducción sea lo más perfecta posible. Si los movimientos fuesen lentos y continuos, habrá siempre una consulta visual y muscular, la cual permitirá que las dos filas sean siempre idénticas la una a la otra. Una será siempre la imagen de la otra y, en cada una de ellas, cada actor tendrá siempre la libertad de movimientos y la responsabilidad (ahora dentro de los límites musculares) de reproducir los movimientos del compañero de enfrente.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 32,
        "nombre": "Ambos son sujeto e imagen",
        "descripcion": "Pasados unos minutos, el director anuncia que los participantes de las dos filas serán simultáneamente imagen y sujeto; unos instantes después, da la señal para que así se haga. A partir de ese momento, los dos participantes, frente a frente, tienen derecho a crear el movimiento que deseen y el deber de reproducir los movimientos creados por el compañero. Esto debe hacerse sin tiranía por parte de ninguno de los dos. Es importante que cada uno se sienta libre de hacer los movimientos que le apetezcan y, al mismo tiempo, solidario para que los movimientos del compañero se reproduzcan a la perfección. Libertad y solidaridad son indispensables para que se haga el ejercicio sin tiranía, sin opresión. En toda esta secuencia, nadie debe hacer movimientos imposibles de ser reproducidos. La velocidad no es importante, es incluso contraproducente. Importantes son la sincronización y que la reproducción sea fiel. Hasta este momento, la comunicación es exclusivamente visual, y la atención de cada participante debe concentrarse sólo en el compañero que está enfrente, sobre todo en los ojos y, en círculos concéntricos, en todo su cuerpo. Los actores no deben mirar los pies ni las manos: miran a los ojos, pero el resto del cuerpo, así como otros espacios, está naturalmente incluido en su campo visual.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 33,
        "nombre": "Sujeto e imagen cambian los papeles",
        "descripcion": "Después de unos minutos, el director anuncia que las dos filas de actores cambiarán de función. A continuación, da la señal para que cambien. Precisamente en ese momento los participantes sujetos se transforman en imágenes y éstas en aquéllos. Este cambio debe hacerse sin romper la continuidad y con precisión. Cuando se alcanza la perfección, el propio movimiento que se estaba realizando en el momento del cambio debe continuar y tomar un rumbo coherente, sin que se produzca ninguna ruptura. Al igual que en el caso anterior el observador exterior no debe advertir que ha habido un cambio, lo que ocurrirá, en realidad, siempre que se dé una total reproducción y sincronización de los gestos.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 34,
        "nombre": "Espejo simple",
        "descripcion": "Dos filas de participantes, cada uno mirando fijamente a la persona que tiene enfrente. Las personas de la fila A son designadas como sujetos, y las de la fila B como imágenes. El ejercicio comienza y cada sujeto inicia una serie de movimientos y de expresiones faciales, en cámara lenta, que debe reproducir en sus mínimos detalles la imagen que está enfrente. El sujeto no debe considerarse enemigo de la imagen: no se trata de una competición, de hacer movimientos bruscos, imposibles de seguir: se trata, por el contrario, de buscar la perfecta sincronización de movimientos y la mayor exactitud en la reproducción de los gestos del sujeto por parte de la imagen. La exactitud y la sincronización deben ser de tal orden que un observador exterior no sea capaz de distinguir quién origina los movimientos y quién los reproduce. Es importante que los movimientos sean lentos (para que la imagen pueda reproducirlos y hasta preverlos) y también continuos. Es igualmente importante que se preste atención a los mínimos detalles, sea de todo el cuerpo, sea de la fisonomía.",
        "etiquetas": ["Caldeamiento", " Ambos (Inespecífico o Específico)"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 35,
        "nombre": "Serie del espacio",
        "descripcion": "Esta serie también trabaja todos los sentidos,, incluido el de la vista. Sin dejar ningún espacio vacío en la sala, todos los actores deberán caminar con rapidez (sin correr), de manera que sus cuerpos estén siempre más o menos equidistantes de todos los demás y esparcidos por todo el suelo de la sala. De vez en cuando, el director dirá «¡Alto!» y todos deberán detenerse, intentando que no haya ningún espacio desocupado en la superficie de la sala. No se puede parar antes de la orden. Si alguien ve un espacio vacío, lo llenará con su cuerpo; no obstante, como está prohibido parar, debe seguir andando, buscando otro espacio vacío y dejando vacío aquel donde está. En vez de decir solamente «¡Alto!», el director dirá también un número, y entonces todos deberán formar grupos según el número anunciado: 3, 5, 8 personas, etc. Cada grupo debe estar equidistante de los demás grupos, de modo de no permitir que haya espacios vacíos en la sala. El director menciona un número y una figura geométrica, y los actores deberán organizarse en grupos para formar la figura geométrica indicada: cuatro círculos, tres rombos, cinco triángulos, etc. El director menciona un número y una parte del cuerpo. Si dice, por ejemplo, tres narices o siete pies, entonces deberán tocarse tres narices y siete pies. Todo el espacio de la sala deberá estar ocupado por grupos que estén equidistantes, como en los ejercicios anteriores. El director menciona un color y una prenda de vestir o un rasgo físico distintivo; por ejemplo, «juntaos según el color de las camisas, del pelo, de los ojos»..., y los actores así lo harán... asegurándose de que los grupos estén igualmente distribuidos por toda la sala. Los actores corren lentamente (al correr, los dos pies quedan en algún momento en el aire; al andar, uno de los pies está siempre en contacto con el suelo). De vez en cuando, el director dirá «¡Ahora, id pegados!» e inmediatamente los actores se juntarán (pegados) en grupos de tres, cinco o más integrantes, sin parar de correr. A continuación el director dirá «Separaos» y todos se separarán. El director dirá «Alto» y todos se quedarán quietos donde estén, con un solo pie apoyado en el suelo. El otro pie y las dos manos intentarán tocar a tres compañeros diferentes: el resultado será una tela de araña.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 36,
        "nombre": "dragón de Trou Balligan",
        "descripcion": "Se cuenta que en la Edad Media, en Normandía, Francia, había una princesa muy hermosa, riquísima heredera de un pueblo llamado Trou Balligan. Allí vivía también un dragón feroz y malvado, que devoraba a los jóvenes y, sobre todo, a las jóvenes más bellas. La juventud de Trou Balligan estaba a punto de desaparecer completamente, cuando se supo que el dragón había propuesto un trato: si la princesa estuviese dispuesta a entregarse a la voracidad del dragón, éste abandonaría el feudo y se iría a sembrar el terror en otras regiones del país. Al enterarse de esa propuesta indecorosa, la princesa, queriendo salvar a sus súbditos, aceptó magnánima el sacrificio de su vida: sería devorada por el dragón. Sus subditos, conmovidos, rechazaron la oferta, pero la princesa decidió actuar por su cuenta, una bonita noche lluviosa, y salvar a su pueblo, así que se dirigió a la gruta de la bestia para entregarse por propia voluntad. El dragón, feliz, fue a recibirla a la puerta, como correspondía a una princesa, sobre todo a ésta, tan digna y generosa. Antes de devorarla, el famélico monstruo le pidió que se desnudase, pues tenía miedo de atragantarse con tantas sedas, pendientes, collares y oropeles. Cuando la vio toda desnuda, sus ojos se le salieron literalmente de las órbitas. La joven era de una belleza tan esplendorosa, su cuerpo tan perfecto, que él quedó momentáneamente ciego, con los globos oculares colgados de los nervios ópticos, como ojos de cangrejo. Considerando que uno de los mayores placeres de la gastronomía consiste precisamente en admirar el plato antes de comerlo, el dragón decidió postergar el banquete hasta que sus ojos volviesen al lugar debido. Se supo entonces en el pueblo del gesto heroico de la hermosa y estoica princesa, y los campesinos, sus súbditos, decidieron salvarla. Fueron a la gruta del dragón y...y aquí comienza el ejercicio: la princesa es atada a una silla con una buena cantidad de prendas de ropa (jerseys, camisas, pantalones, lo que se tenga a mano); el dragón, con los ojos vendados, intenta tocar a los campesinos, apartándolos de su prisionera; ellos deben evitar que los toque y esforzarse por liberar a la princesa. Si el dragón llega a tocar a los campesinos, éstos mueren y abandonan el juego, que puede terminar de dos maneras: porque ya no hay «salvadores» o, por el contrario, por que la hermosa princesa ha sido liberada. Este ejercicio es más breve que su explicación. Si resulta demasiado fácil, puede practicarse con dos dragones en lugar de uno: al fin y al cabo, como los dragones no existen...",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 37,
        "nombre": "La mano reencontrada o perdida",
        "descripcion": "Con los ojos cerrados, los actores circulan por la sala, tocándose las manos, hasta que se formen parejas que se complazcan en tocarse las manos. Juegan con las manos. Se separan a continuación, andan por la sala, se mezclan, abren los ojos, forman un círculo, tienden las manos hacia el centro del círculo; con la mirada, intentan descubrir cuáles son las manos con las que jugaban.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 38,
        "nombre": "mano melódica",
        "descripcion": "Sentados en círculo, cogidos de la mano. La mano derecha por debajo y la izquierda por encima. Un actor iniciará, con la mano derecha, un ritmo, que será recibido por la mano izquierda del actor que está a su derecha. Éste, a su vez, también pasará, con la mano derecha, el ritmo que ha recibido a la mano izquierda del actor situado a su derecha, y así sucesivamente. De esa forma, cada actor deberá pasar con la mano derecha el movimiento rítmico y melódico que ha recibido con la mano izquierda. Después el director dirá «Cabeza», y todos incluirán sus cabezas en el movimiento; después «Tórax»; después «Cintura», «Pierna», hasta que todo el cuerpo esté comprometido con el ritmo. Por fin, el director pedirá que emitan un sonido compatible con sus movimientos. Variante. El mismo ejercicio, pero esta vez la mano que controla se coloca sobre la mano controlada, y no debajo de ella: resulta más difícil y más delicado, porque debe atraer a la otra mano y no sólo levantarla mecánicamente.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 39,
        "nombre": "¿Quién ha dicho «Ah»?",
        "descripcion": "Todos, con los ojos cerrados, caminan por la sala. El director (con un toque) designará a una persona que deberá emitir un «Ah», de la manera que quiera. Los demás intentarán descubrir quién ha sido y decir su nombre.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 40,
        "nombre": "Encontrar la espalda adecuada",
        "descripcion": "Los actores andarán por la sala, con los ojos cerrados, uniendo de vez en cuando su espalda a la de un compañero y apretándose, moviéndose, buscando la espalda más adecuada para cada uno. Cuando la encuentren, manteniendo siempre los ojos cerrados, harán un contacto semejante al de un masaje.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 41,
        "nombre": "Canto de la sirena",
        "descripcion": "Difícil y delicado. Los actores piensan en una opresión que realmente hayan vivido, cierran los ojos y se juntan en grupo en el centro de la sala. Aquel que quiera comenzar emitirá un sonido (un grito, un gemido, un llanto o lamento), que debe ser la traducción sonora de la opresión en la que haya pensado. El director lo llevará de la mano hacia uno de los rincones de la sala. Un segundo actor hará lo mismo, pensando en una de sus propias opresiones. Después un tercero y un cuarto, uno a uno, con un grito específico y siempre diferente. Los cuatro primeros actores deben emitir entonces sus gritos al mismo tiempo. Los que permanezcan en el centro, siempre con los ojos cerrados, deberán escuchar atentamente a los cuatro primeros actores y elegir cuál de los gritos se asemeja a su propia opresión; así, se formarán cuatro grupos. Entonces todos abrirán los ojos y, en cada grupo, cada actor contará a los demás la opresión que tenía en mente, el episodio que ha imaginado. Curiosamente, se verá que dentro de cada grupo las historias tratarán siempre el mismo tipo de opresión o tema.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 42,
        "nombre": "Ciego con bomba",
        "descripcion": "Algunos actores con los ojos vendados, rodeados por los demás, deberán imaginar que sostienen una bomba que explotará si llegan a tocar a alguien durante más de un segundo. A cada contacto, deberán alejarse lo máximo posible. Este ejercicio produce un increíble desarrollo de todos los sentidos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 43,
        "nombre": "Tocar el color",
        "descripcion": "El director dará a un actor (ciego) cinco prendas de vestuario del mismo tipo (cinco calcetines, cinco camisas, etc.), pero hechas de materiales diferentes y de colores distintos. El actor deberá examinar cada una de esas prendas e intentar reconocer los colores correspondientes.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 44,
        "nombre": "Arcilla para modelar",
        "descripcion": "Es parecido al anterior, pero en esta versión se utiliza arcilla para modelar en vez de papel y lápiz. Es diferente, porque las manos pueden rehacer los detalles ya modelados. En el papel, si uno ya ha acabado el dibujo de la cabeza, por ejemplo, podrá recordar lo que ha hecho, pero no podrá rehacer el dibujo. Con la arcilla, siempre podrá volver a lo que había hecho.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 45,
        "nombre": "Dibujar el propio cuerpo",
        "descripcion": "Los actores se tumban cómodamente en el suelo, cierran los ojos y piensan en su cuerpo como una totalidad, y en cada una de sus partes: dedos, cabeza, boca, lengua, pies, sexo, ojos, pelo, ombligo, piernas, cuello, codos, hombros, vértebras, etc. Deben mover la parte en la que estén pensando, cuando eso sea posible. Después de unos minutos de concentración, el director dará a cada actor una hoja de papel en blanco (todas del mismo tamaño) y un lápiz o bolígrafo (del mismo color). Pedirá que cada uno dibuje su propio cuerpo, manteniendo los ojos bien cerrados, y que firme con su nombre en el dorso del dibujo. Hecho esto, recogerá los dibujos y los colocará en el suelo, en cualquier orden, y sólo entonces los actores podrán ver su obra. El director preguntará qué impresiona más en los dibujos: ¿los cuerpos están desnudos o vestidos? ¿Acostados o de pie? ¿Descansando o trabajando? ¿Relacionados con otros objetos o aislados? ¿Con detalles importantes como los ojos y el sexo, o solamente en líneas generales? Finalmente, los invitará a identificar sus propios dibujos. Este ejercicio sensibiliza bastante al grupo. Primero, porque cada uno tendrá que pensar en su propio cuerpo, en cada parte de él; después, porque tendrán que reproducir, dibujándolo, lo que han sentido; por último, porque después del ejercicio comenzarán a prestarse más atención a sí mismos, a sus movimientos, a la manera de sentarse, de dirigirse a los demás, etc. El ejercicio hace que los actores tomen conciencia de que, ante todo, somos un cuerpo. Si son capaces de tener las ideas abstractas más profundas y crear las cosas más maravillosas, es necesario tener, ante todo, un cuerpo: ¡antes de tener un nombre, habitamos un cuerpo! Y raramente pensamos en nuestro cuerpo como fuente fundamental de todos los placeres y todos los dolores, de todo conocimiento y toda búsqueda, de todo. Normalmente, hacemos este ejercicio antes del «Juego de las máscaras de los propios actores». En este caso, se pide que cada uno diga por qué ha reconocido su dibujo, y lo que diga será una información valiosa para el actor que, más adelante, lo tendrá como modelo para el juego mencionado de las máscaras.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 46,
        "nombre": "Sentarse en la pierna de otro",
        "descripcion": "Un participante, con los ojos abiertos, se arrodilla para que otro, con los ojos cerrados, se siente en su pierna. El director cuenta hasta siete; el ciego se levanta y da siete pasos hacia delante; después, el director cuenta hacia atrás, de siete a uno, y el actor debe volver, de espaldas, y sentarse nuevamente en la misma rodilla. El actor arrodillado debe impedir que el compañero se caiga, si se hubiese desviado en su trayectoria.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 47,
        "nombre": "Guardameta",
        "descripcion": "Un juego de confianza. Seis actores de pie, juntos, no muy alejados, formarán la portería. Otro actor, unos pasos por delante, será el guardameta. Frente a ellos, a unos seis metros de distancia, estarán los demás actores. Uno a uno mirarán al guardameta con atención, cerrarán los ojos y saldrán corriendo en su dirección lo más rápidamente que puedan. El guardameta debe sujetarlos por la cintura. Cuando un actor pierde el rumbo del guardameta, uno de los seis actores de la portería deberá sujetarlo. Es importante no disminuir el ritmo al acercarse al guardameta: ésa es la prueba de confianza.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 48,
        "nombre": "Hacer un ocho",
        "descripcion": "Dos actores se colocarán a una distancia de dos metros uno de otro. En fila, con los ojos cerrados, los demás actores intentarán hacer un ocho alrededor de los dos primeros. Variante Slalom (como en el esquí). Una o más filas, de cuatro o cinco actores cada una. Entre ellos, los demás harán el slalom, con los ojos cerrados, caminando.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 49,
        "nombre": "Olor de las manos",
        "descripcion": "Una fila de actores se acerca a un ciego (actor con los ojos cerrados), cada uno le da una de las manos a oler, mientras le dice su nombre. Una vez que todos han pasado (cinco actores, por ejemplo), volverán en un orden diferente y el ciego deberá decir el nombre de la persona, intentando reconocer el olor de sus manos. Variante. Lo mismo con el rostro, que el ciego tocará para después reconocer, siendo diferente el orden en el que los rostros repiten el contacto. También se puede hacer lo mismo con las manos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 50,
        "nombre": "Descubrir el objeto",
        "descripcion": "Con los ojos tapados y las manos hacia atrás, utilizando todas las demás partes del cuerpo, el actor tocará e intentará descubrir cuál es el objeto que se le presenta: silla, lapicero, vaso, papel, flor, etc. Este ejercicio estimula intensamente la sensibilidad de todas las partes del cuerpo que se relacionan con el objeto. Variante Descubrir el rostro de los otros: ¿quién es?",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 51,
        "nombre": "Coche ciego",
        "descripcion": "Una persona detrás de otra. La que va delante es el coche ciego. Por detrás, el conductor guiará los movimientos del coche ciego ,presionando con los dedos en medio de la espalda (el coche avanza en línea recta), en el hombro izquierdo (gira a la izquierda; cuanto más cerca del hombro, más cerrada será la curva), el hombro derecho (lo mismo, a la derecha), o con una mano en el cuello (marcha atrás). Como muchos coches ciegos circularán al mismo tiempo, es necesario evitar colisiones. El coche debe parar cuando el conductor deje de tocarlo. La velocidad será controlada por la mayor o menor presión de los dedos en la espalda.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 52,
        "nombre": "Vampiro de Estrasburgo",
        "descripcion": "Todos caminan por la sala sin tropezarse, con los ojos cerrados y las manos cubriéndose los codos, como protección. El director toca el cuello de alguien, que pasa a ser el primer «vampiro de Estrasburgo»: sus brazos se estirarán hacia delante, dará un grito de horror y a partir de ese momento buscará un cuello para chupar su sangre. El grito que dé permitirá a los demás saber dónde está el vampiro e intentar escapar. El primer vampiro encontrará otro cuello y repetirá el gesto del director: un suave toque en el cuello, con las dos manos. El segundo «vampiro» dará igualmente un grito de horror, estirando los brazos, y entonces serán dos vampiros, después tres, cuatro, etc. Puede ocurrir que un vampiro «ataque» a otro vampiro; en ese caso, el segundo se rehumanizará y dará un grito de placer; esto indica que alguien muy cerca se ha rehumanizado, pero también que hay un vampiro próximo. Deben evitarse entonces las regiones más infestadas de vampiros. Es curioso (y bastante comprensible) que los participantes encuentren cierto alivio en ser vampirizados, puesto que a partir de entonces, en lugar de huir, comenzarán a perseguir. Es el mismo mecanismo del oprimido que se vuelve opresor. Y mucho más rico que eso. Por un lado, el oprimido (actor) se convierte en opresor (vampiro): escapa a su opresión, a su dolor, a su angustia. Deja de ser víctima y se convierte en verdugo. Por otro lado, desarrolla en sí el mecanismo de lucha: siente que toda situación opresiva puede detenerse, romperse. Las dos situaciones van juntas.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 53,
        "nombre": "Múltiple escultura sueca",
        "descripcion": "La mitad del grupo está formada por ciegos y la otra mitad por lazarillos. Cada lazarillo pronuncia el nombre de su ciego, que debe intentar seguirlo. El grupo de los lazarillos cambia frecuentemente de posición hasta un determinado momento, cuando debe parar y seguir llamando a sus ciegos, muy despacio. Cuando los ciegos estén cerca del grupo de los lazarillos, éstos los cogerán de la mano y modelarán sus cuerpos en una escultura compleja, en la que todos se toquen, es decir, una única escultura hecha de diferentes cuerpos. Después, los lazarillos formarán la misma escultura con sus propios cuerpos. Como la reproducción tiene que ser exactamente igual al original, cada lazarillo tiene que ocupar la misma posición en la que colocó a su ciego. El director llamará a los ciegos y los llevará, uno a uno, hasta la escultura de los lazarillos. Cada ciego deberá intentar descubrir cual ha sido el suyo, tocando los diferentes cuerpos. Si un ciego reconoce a su lazarillo, deberá decir su propio nombre. Si acierta el lazarillo asentirá y podrá salir del juego y abrir los ojos. Las posturas de esos lazarillos sólo se modificará cuando el último ciego haya descubierto a su lazarillo.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 54,
        "nombre": "El imán afectivo (negativo y positivo)",
        "descripcion": "Los actores caminarán por la sala con los ojos cerrados durante algunos minutos, tratando de no tropezar unos con otros. Es bueno que todos estén con los brazos cruzados, con las manos cubriéndose los codos, para que las personas más bajas no reciban codazos en los ojos. Cuanto más despacio caminen, menos daño se harán. En esa primera parte del juego, cuando dos personas tropiecen, deberán separarse inmediatamente: domina el polo negativo. Deben moverse por la sala evitando siempre tocar a los demás; al no poder ver, los actores comienzan a percibir el mundo exterior a través de los otros sentidos. Después de unos minutos, el director anunciará a los participantes que el imán está en positivo. A partir de este momento, las personas que se toquen deberán quedarse pegadas unas a otras durante un momento. Esto es muy difícil, porque los participantes no pueden dejar de moverse; sus pies deben seguir avanzando y, algunas veces, al tener que andar pegados, es necesario que anden de lado o de espaldas. Está prohibido tocarse con las manos, es mejor que usen otras partes del cuerpo. Si una persona se siente cómoda, podrá quedarse pegada a la otra el tiempo que quiera; de lo contrario, tiene derecho a seguir buscando. La persona que ha sido abandonada tiene derecho a insistir, pero sólo una vez; el objetivo del juego no es cazar a una persona en especial. Puede quedarse pegada a una, dos o mas participantes. Finalmente, el director dará la señal para detenerse. Todos lo hacen donde están y cada uno intentará encontrar un rostro, sólo uno, con las manos. Entonces comienza la parte más bonita del juego: cada persona intentará traducir las sensaciones, en una imagen. En otras palabras, tocando el rostro del o ella, intentarán imaginar cómo es ese rostro, desde su forma, generando los menores detalles de la fisonomía. Ese proceso de traducción es muy delicado y también muy placentero. Las personas pueden tocar el rostro y la cabeza, pero no el resto del cuerpo Después de unos minutos, el director ordenará que abran los ojos y comparen la imagen construida mentalmente con la que tienen delante.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 55,
        "nombre": "Fila de ciegos",
        "descripcion": "Dos filas, frente a frente. Los actores de una de las filas deben cerrar los ojos y, con las manos, examinar el rostro y las manos de los actores que tienen enfrente, en la otra fila. Éstos, a continuación, se dispersarán por la sala, y los ciegos deberán encontrar a la persona que tenían delante, tocándole manos y mejillas. Variante Un ejercicio de Teatro Imagen. Las personas que estén con los ojos abiertos deben jugar a las estatuas, individualmente. Los actores de la fila de los ciegos deben tocar, durante algunos minutos, los contornos de las estatuas de los actores correspondientes a ellos, en la otra fila. Después, volver a sus posiciones y reproducir las estatuas con sus propios cuerpos: imagen especular, imagen del espejo. A continuación abren los ojos y comparan las dos estatuas.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 56,
        "nombre": "Viaje imaginario",
        "descripcion": "En parejas. El lazarillo debe llevar al ciego a través de una serie de obstáculos reales o imaginarios, como si los dos estuviesen en un bosque, en un supermercado, en la Luna, en el desierto del sahara u otro escenario real o imaginario que el lazarillo tenga en mente. Como en todos los ejercicios de esta naturaleza, está prohibido hablar; toda información debe transmitirse a través contacto físico y de los sonidos. Siempre que sea posible, el lazarillo debe hacer los mismos movimientos que el ciego, al paginar su propia historia. El lazarillo debe colocar obstáculos por toda la sala: sillas, mesas todo lo que encuentre disponible: a veces los obstáculos serán reales, otras veces imaginarios. El ciego debe intentar imaginar dónde está. Por ejemplo: ¿en un río? ¿Un río con cocodrilos? ¿Piedras? El lazarillo puede usar el contacto físico, la respiración o sonidos, como forma de guiar; el ciego, a su vez, no podrá hacer ningún movimiento que no se le haya ordenado o sugerido. Después de unos minutos, el ejercicio acaba y el ciego relata al lazarillo en qué parte de la sala cree que han estado, quién estaba cerca de ellos, etc. En resumen, debe dar las informaciones reales que ha percibido con sus sentidos, excepto la vista. Después de las informaciones objetivas, los ciegos explican adonde creen haber viajado: cuentan el viaje imaginario. Los lazarillos cuentan entonces sus historias y se comparan unas con otras.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 57,
        "nombre": "Bosque de sonidos",
        "descripcion": "El grupo se divide en parejas: un miembro será el ciego; otro, el lazarillo. Este último emite sonidos de un animal -gato, perro, pájaro o cualquier otro-, mientras su pareja escucha con atención. Entonces los ciegos cierran los ojos, y los lazarillos, al mismo tiempo, comienzan a emitir sus sonidos, que deben ser seguidos por los ciegos. Cuando el lazarillo deja de emitir sonidos, el ciego debe detenerse. El lazarillo es responsable de la seguridad del compañero (ciego) y debe dejar de emitir sonidos si el ciego está a punto de tropezar con otro o golpearse con algún objeto. El lazarillo cambiará constantemente de posición. Si el ciego hace bien su papel, si sigue los sonidos con facilidad, el guía debe mantenerse lo más distante posible, con la voz casi inaudible. El ciego debe concentrarse solamente en su sonido, aunque a su lado haya muchos otros. El ejercicio tiene como objetivo despertar y estimular la función selectiva del oído. Variante. (Julián) Círculo. Los actores son numerados, 1 o 2, en secuencias: 1, 2,o i 2, 1, 2 Cada actor número 1 se coloca frente a frente con el actor número 2 situado a su derecha y produce un sonido que el ,número 2 debe reconocer. Vuelve a su lugar. Cada actor número 2 se coloca frente a frente con el actor número 1 situado a su derecha, es decir, formando una pareja diferente de la primera y produciendo un sonido que el compañero debe identificar. De vuelta a sus posiciones con los ojos cerrados, los actores se dan las manos e intentan sentir, para posteriormente reconocer, las manos de los compañeros a la derecha y a la izquierda. El director da la señal y el círculo se rompe: los actores realizan movimientos en zigzag para mezclarse entre sí. A otra señal del director,todos emiten el sonido que habían creado delante del compañero a su derecha, intentan escuchar el sonido hecho por el compañero procedente de la izquierda. Cuando reconoce el sonido de su lazarillo, el ciego se aferra a su mano, comenzando a reconstruir el círculo original. Los actores sólo abrirán los ojos cuando sus dos manos estén ocupadas: han descubierto y han sido descubiertos.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 58,
        "nombre": "El punto, el abrazo y el apretón de manos",
        "descripcion": "Se pide que cada participante mire fijamente algún punto de la sala -una ventana, una marca en la pared, etc.- y luego cierre los ojos e intente caminar hasta ese punto. Si, en su recorrido, tropieza con otro actor y se desvía de su trayecto, debe corregirlo. Después de un tiempo, el director dirá que abran los ojos y que se localicen en la sala: ¿quién está cerca del punto que miró? ¿Quién está lejos? Se intenta una segunda vez: los que han logrado acercarse o incluso tocar el punto deben elegir otro punto más distante, y los que se han quedado lejos, uno más cercano A continuación, los actores forman parejas y se abrazan. Cierran los ojos y se separan, caminando hacia atrás, hasta encontrar un obstáculo (la pared probablemente) o después de un determinado número de pasos. Deben entonces volver e intentar abrazar nuevamente al mismo compañero. Repetir este ejercicio por lo menos dos veces, cambiando de compañero. Finalmente, la versión más difícil. En parejas, los actores se dan la mano, cierran los ojos, se alejan manteniendo las manos extendidas en la misma posición, caminan hacia atrás hasta encontrar un obstáculo, vuelven e intentan darse de nuevo un apretón de manos.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 59,
        "nombre": "Ritmo de imágenes",
        "descripcion": "En este juego-ejercicio, un actor se mantiene aparte y los demás, por turnos, intentan expresar con sus cuerpos una imagen rítmica de él, y eso individualmente, cada uno como la sienta. A continuación, todos los actores, juntos, repiten los ritmos que han creado, en esta ocasión al mismo tiempo. El actor que está aparte intenta integrarse en esa orquesta de ritmos que son, según los compañeros, los suyos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
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
        "Id": 74,
        "nombre": "Música y baile",
        "descripcion": "Algunos ritmos, especialmente los brasileños de origen africano, como la samba, la batucada, la capoeira (sólo con movimientos circulares y muchos andando hacia atrás), son excelentes para estimular todos los músculos del cuerpo. Los actores no deben repetir pasos ya establecidos, sino dejar que sus cuerpos se balanceen. Puede también utilizar una cinta de casete reponiéndola a una velocidad mayor que aquella a la que fue grabada. Es importante que en todos estos ejercicios de calentamiento siempre se comience lentamente. Poco a poco, se aumentará la intensidad del ejercicio. Es importante que la práctica de estos ejercicios sea placentera, el actor debe sentir placer y no dolor al ejecutarlos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", "melodía"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 75,
        "nombre": "Orquesta",
        "descripcion": "Un pequeño grupo de actores monta una orquesta, utilizando cualquier clase de objeto improvisado como instrumento, mientras los otros inventan un baile correspondiente. La música debe ser melódica y cambiar con frecuencia: los actores deben permitir que esa música invada sus cuerpos sin hacer ningún movimiento premeditado: hay que dejarse llevar, naturalmente.",
        "etiquetas": ["Caldeamiento", " Inespecífico", "melodía"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 76,
        "nombre": "Si dices que sí",
        "descripcion": "Una melodía que permita al actor que conduce el ejercicio cantar una frase así: «Si yo digo que sí, tú dirás que no: sí, sí, no», a la vez todos deben responder «no, no, sí». «Si yo digo Juan, Luis, Juan, vosotros diréis [y los otros dicen] Luis, Juan, Luis»; y después utilizará las palabras «pan» y «miel». A continuación, diver- sas combinaciones de las tres palabras y de las otras tres: «Juan, miel, no» contra «Luis, pan, sí»...",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 77,
        "nombre": "Bautizo «mineiro»",
        "descripcion": "Actores en círculo; cada uno, en secuencia, da dos pasos adelante, dice su nombre, dice una palabra que comienza con la primera letra de su nombre y que corresponda a una característica que posee o cree poseer, haciendo un movimiento rítmico que corresponda a esa palabra. Los demás actores repiten dos veces: nombre, palabra y movimiento. Cuando hayan pasado todos, el primero vuelve, pero ahora en una posición neutra, y son los demás quienes deben acordarse de la palabra, nombre y gesto. Naturalmente, este ejercicio se hace con grupos que se encuentran por primera vez, y no con viejos amigos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 78,
        "nombre": "Anda, para, justifica",
        "descripcion": "Los actores caminarán por la sala de manera extraña y estrambótica. De vez en cuando, el director dirá «¡Alto!» y pedirá a cada uno de los actores que justifique su manera de andar diciendo algo que tenga coherencia, por más absurdo que sea.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 79,
        "nombre": "Fila de cinco actores",
        "descripcion": "Similar al juego anterior. La primera persona de la fila hace un sonido y un gesto rítmicos, y los demás la imitan. La primera persona va al final de la fila, y la que estaba en segundo lugar pasa al primero, debiendo añadir un sonido y un gesto rítmicos a los que ya se están haciendo, y así sucesivamente, hasta que todos hayan hecho su contribución, volviendo su ejecución cada vez más compleja.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 80,
        "nombre": "Ritmo en herradura",
        "descripcion": "Los actores están sentados dispuestos en forma de herradura o media luna. La primera persona a la derecha debe comenzar un ritmo que debe extenderse por todos los participantes hasta el último, en la otra punta de la herradura. La persona que queda al final de la herradura debe iniciar otro ritmo, que hará el recorrido de vuelta. Cada participante estará siempre creando un ritmo, hasta que éste sea sustituido por el ritmo que llega de su izquierda o de su derecha.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 81,
        "nombre": "Ritmo en círculo",
        "descripcion": "Lo mismo que el anterior, en círculo, todos de pie, de tal manera que puedan trabajar los diferentes ritmos desde la primera hasta la última persona.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 82,
        "nombre": "Máquina de ritmos",
        "descripcion": "Un actor va hasta el centro e imagina que es la pieza del engranaje de una máquina compleja. Hace un movimiento rítmico con su cuerpo y, al mismo tiempo, el sonido que esa pieza de la maquina debe producir. Los otros actores prestan atención, en circulo, alrededor de la máquina. Un segundo actor se levanta y, con su propio cuerpo, añade una segunda pieza al engranaje de esa máquina, con otro sonido y otro movimiento que sean complementarios y no idénticos. Un tercer actor hace lo mismo, y un cuarto, hasta que todo el grupo esté integrado en una misma Máquina, múltiple, compleja, armónica. Cuando todos estén integrados en la máquina, el director dice al primer actor que acelere el ritmo: todos deben intentar seguir ese cambio en el funcionamiento. Cuando la máquina esté próxima a la explosión, el director indica al primer actor que disminuya el ritmo hasta que todas las personas terminen juntas el ejercicio. Para que todo funcione bien, hace falta que cada actor intente realmente escuchar lo que está oyendo. Variante Amor y odio. El mismo ejercicio, con la siguiente modificación: todos los participantes deben imaginar una máquina de odio, después una de amor. Sea lo que fuere lo que cada uno entiende por las palabras odioy amor, deben seguir siendo parte del engranaje de una máquina y no de un ser humano. Variante Región o país. El mismo ejercicio que incluya, además de una emoción (o varias), un tema. Por ejemplo, regiones del mismo país del que son originarios los participantes: Alemania (máquina prusiana, bávara, berlinesa...); Francia (máquina bretona, parisiense, marsellesa, etc.); Brasil (máquina carioca, bahiana, mineira...); España (máquina aragonesa, madrileña, etc); o tomando como tema los partidos políticos: PP, PSOE, PNV, CIU, etc. O incluso forma de teatro y de cine: cine mudo, circo, ópera, novela, etc. Es extraordinario cómo pueden revelarse, en ritmo físico y sonoro, la ideología de un grupo, sus ideas políticas, etc. Todo lo que pensamos y criticamos aparece. Nota: este juego es particularmente útil cuando se quiere, por ejemplo, crear imágenes de un tema para que pierda su carácter abstracto: burocracia, futuro, infancia, salud, etc. Se pide a los participantes que representen las máquinas de ritmo de esos temas. Muchas veces los actores acabaron ayudándome a hacer la mise en scéne de una pieza usando ese juego.",
        "etiquetas": ["Caldeamiento", " Ambos", "ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 83,
        "nombre": "Unificar el ritmo dentro del círculo",
        "descripcion": "Todos los actores inician juntos un ritmo, con la voz, las manos y las piernas; después de unos minutos cambian lentamente, hasta que un ritmo nuevo se impone, y así sucesivamente, durante varios minutos. Variante Cada actor hace un ritmo aisladamente hasta que todos se unifiquen en un único ritmo. Variante A una señal dada, los actores comienzan a hacer un ritmo propio acompañado de un movimiento. Tras unos minutos, se acercan unos a otros, según sus afinidades rítmicas. Los actores con mayores afinidades van homogeneizando sus ritmos hasta que todo el elenco esté practicando el mismo ritmo y movimiento. Eso puede no ocurrir, pero no importa, siempre que cada grupo tenga su ritmo y movimiento bien definidos. Variante Se forma un círculo en el que una persona inicia un ritmo y todos lo siguen; el director hace una señal, el círculo se rompe, y cada participante intenta transformar ese ritmo en otro que le sea individualmente más agradable. El director hace hace otra señal y todos vuelven al círculo, pero ahora cada uno con su propio sonido y su propio movimiento: se observan e intentan unificar todos los ritmos en uno solo. Cuando eso ocurre, el director otra señal; se rompe el círculo, todos se alejan, individualizan sus ritmos, retornan al círculo y los reunifican.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 84,
        "nombre": "Juego de ritmo y movimiento",
        "descripcion": "Se forman dos equipos. El primero, a una señal del director, comienza a hacer individualmente todos los tipos de sonidos y movimientos rítmicos que se le ocurran. Los componentes de ese grupo deben unificar en pocos segundos sus movimientos, ritmos y sonidos. El segundo grupo comienza entonces a reproducir los movimientos y ritmos del primero, a continuación los transforma en ritmos individuales, los reunifica, los pasa al otro grupo, y así sucesivamente.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 85,
        "nombre": "Rueda de ritmo y movimiento",
        "descripcion": "Los actores forman un círculo; uno de ellos se coloca en el centro y realiza un movimiento cualquiera, por más insólito que sea, acompañado de un sonido; tanto el sonido como el movimiento obedecen a un ritmo que él mismo inventa. Todos los actores lo siguen, intentando reproducir exactamente sus movimientos y sonidos dentro del ritmo, lo más sincrónicamente posible. El actor desafía a otro, que se sitúa en el centro del círculo y lentamente rehace el movimiento y el sonido con otro ritmo, mientras el primer actor vuelve a la rueda. Todos ahora siguen al segundo actor, que desafía a un tercero y así sucesivamente. El que se coloca en el centro puede reproducir el ritmo corporal y musical que quiera, que más le guste, pero que no esté habituado a hacer en su vida real. No se trata de bailar o cantar algo que todos conocen. No se debe tener miedo al ridículo, a lo grotesco, a lo insólito. Si todos hiciesen el ridículo, nadie se sentiría ridículo... Todos deben intentar reproducir, lo más precisamente posible, lo que son capaces de ver y oír: los mismos movimientos, la misma voz, el mismo ritmo... Si hubiese una mujer en el centro, los hombres en el círculo no deben ejecutar la versión masculina de movimiento, sino reproducir exactamente lo que estén percibiendo. ¿Qué ocurre entonces? ¿Cuál es el mecanismo? Muy sencillo: al intentar imitar la manera de moverse, de cantar, etc., del otro comenzamos a deshacer nuestras propias mecanizaciones. Imitando a los otros, estaremos reestructurando de varias maneras diferentes (porque varios actores se situarán en el centro) nuestra propia manera de ser y de actuar. No se debe hacer una caricatura, porque nos llevaría a hacer cosas diferentes, pero siempre de la misma forma rígida. Debemos intentar comprender, sentir, reproduciendo exactamente lo externo para sentir mejor lo interior de la persona situada en el centro.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " ejercicios y juegos de ritmo"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 86,
        "nombre": "Buenos días",
        "descripcion": "Juego especialmente útil para iniciar espectáculos de Teatro Foro y animar al público: cada persona debe dar los buenos días o las buenas noches a otra y decir su nombre, no pudiendo soltar la mano de esa primera persona antes de estrechar la de otra, darle los buenos días o las buenas noches, y así sucesivamente, formando redes de apretones de manos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 87,
        "nombre": "Fútbol americano",
        "descripcion": "Todos los actores se apoyan en una pared, menos uno, que queda aparte, frente al grupo. El director inicia el juego, y todos deben cruzar la sala y llegar a la pared opuesta. El actor que está aparte intenta agarrar a cualquiera de los demás actores. A continuación, cualquiera de los dos, tanto él como su prisionero, ahora transformado en apresador, deben capturar a otro. De esa forma, cuatro actores deberán capturar a otros cuatro, después a ocho, después a dieciséis, etc. Sólo se puede apresar a un jugador cada vez. Variante Lo mismo, con la diferencia de que el actor que está fuera puede coger a los otros simplemente rozándolos y se permite que capture a varios compañeros al mismo tiempo. Esta variante es menos violenta. Variante Igual a la anterior, sólo que el actor que está aparte tiene las manos atadas. Es la más difícil.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 88,
        "nombre": "Baile con manzana",
        "descripcion": "Dos compañeros bailan con una manzana sostenida entre las frentes de ambos y deben evitar que caiga.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 89,
        "nombre": "Un, dos, tres, al escondite inglés (en francés: «un, deux, trois, soleil»)",
        "descripcion": "Juego también muy conocido. Una persona frente a la pared, sin mirar a los otros. Éstos, que están a cierta distancia, se acercan. La persona que esté en la pared canta lento o rápido y a continuación se vuelve hacia quienes se acercan. En ese momento, todos deben quedarse inmóviles, y quien es sorpren- dido andando debe volver al punto de partida. El que toca a la persona que está junto a la pared es el vencedor del juego. (Forma parte de los juegos de salón, pero sirve para unificar al grupo...)",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 90,
        "nombre": "Nadie con nadie (estilo Quebec)",
        "descripcion": "En parejas, con una persona que queda siempre fuera. Esa persona, el líder, indicará en voz alta las partes del cuerpo con las que los participantes deberán tocarse; por ejemplo, cabeza con cabeza; pie derecho con codo izquierdo (el pie de una persona debe tocar el codo de la otra, y viceversa, al mismo tiempo, si fuese posible); oreja izquierda en el ombligo, etc. Los contactos corporales son acumulativos y no se deshacen hasta que se haga imposible obedecer las nuevas instrucciones. Los actores pueden hacer los contactos sentados, de pie, tumbados, etc. Cuando resulte imposible continuar, el líder dirá nadie con nadie, y todos buscarán nuevas parejas; y un nuevo líder (el que quede sin compañero) deberá dar continuidad al juego.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 91,
        "nombre": "Oso de Poitiers",
        "descripcion": "Se elige un participante para que sea el oso de Poitiers (ciudad francesa donde se practica este juego). Da la espalda a los demás, que son los leñadores. Éstos deben representar con mímica la acción de trabajar. El oso, al lanzar un fuerte rugido, hace que los leñadores caigan al suelo o se queden inmóviles incluso de pie, sin hacer el menor movimiento, totalmente paralizados. El oso se acercará a cada uno de ellos, rugirá cuanto quiera, podrá tocarlos, hacerles cosquillas, empujarlos, todo lo que pueda para lograr que se muevan, se rían, obligándolos a mostrar que están vivos. Si eso ocurre, el leñador se transformará en oso también, y los dos osos harán lo mismo con los otros leñadores, que seguirán intentando no moverse. Luego tres, cuatro osos, etc. Este ejercicio-juego es muy curioso, porque produce el efecto Vacíamente contrario al que sería su objetivo. El principio es: siel leñador adormece sus sentidos, si consigue no sentir nada, no ver ni oír nada, si se finge muerto, el oso no lo atacará, porque los osos no devoran a los muertos. La instrucción «no sentir nada» provoca exactamente la reacción opuesta, y todos los sentidos agudizan su actividad. Se siente más, se escucha mejor, se ve lo que no se veía, se huele lo que no se olía: sólo queda fuera el gusto. ¡El miedo nos hace hipersensibles!",
        "etiquetas": ["Caldeamiento", " Inespecífico", " juegos  de integración"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 92,
        "nombre": "Como gustéis",
        "descripcion": "Intentando modificar la forma habitual de andar, incluso el ritmo, y variando muchas veces durante el ejercicio.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 93,
        "nombre": "Carretilla",
        "descripcion": "Como hacen los niños: un actor en el suelo se apoya sobre las manos y el otro lo sujeta por los pies. Uno camina con las manos y el otro lo sigue, como quien conduce una carretilla.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 94,
        "nombre": "Carrera de sacos",
        "descripcion": "Los pies juntos o dentro de un saco. Saltando primero hacia delante, después hacia atrás, después de lado.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 95,
        "nombre": "Inclinados unos sobre otros",
        "descripcion": "Dos actores, lado a lado, acercan sus hombros (el hombro izquierdo de uno contra el hombro derecho del otro) e intentan caminar así inclinados, cada cual poniendo los pies lo más lejos posible del otro. Variante Lo mismo con dos actores, formando una unidad, de cada lado (cuatro en total). Variante Dos actores de espaldas; cuatro actores de espaldas, equilibrándose en sus cuellos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 96,
        "nombre": "Paso de canguro",
        "descripcion": "El actor se agacha y se coge los tobillos con las manos. Anda hacia delante, saltando como un canguro.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 97,
        "nombre": "Paso de elefante",
        "descripcion": "Como el ejercicio: paso de camello, sólo que al contrario: pie derecho con mano izquierda, pie izquierdo con mano derecha. Es así como anda el elefante.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 98,
        "nombre": "Paso de camello",
        "descripcion": "Pie derecho con mano derecha. Pie izquierdo con mano izquierda. El camello avanza primero el lado izquierdo, después el lado derecho.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 99,
        "nombre": "Andar a cuatro patas",
        "descripcion": "El actor anda a cuatro patas, hacia delante y hacia atrás.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 100,
        "nombre": "Mono",
        "descripcion": "Caminar hacia delante con las manos siempre tocando el suelo, con la cabeza trazando una línea horizontal con respecto al suelo, como los monos, que se desplazan armoniosamente. Saltar obstáculos, armoniosamente.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 101,
        "nombre": "Piernas cruzadas",
        "descripcion": "De pie, lado a lado, dos actores se sujetan por la cintura, apretándose fuertemente, y cruzan las piernas, la derecha de uno con la izquierda del otro, levantándolas para que no toquen el suelo. Después empiezan a andar teniendo en cuenta que cada uno debe considerar el cuerpo del otro como su propia pierna. Atención, la idea es andar y no saltar. La pierna (el actor) no ayuda, es el otro quien debe hacer todo el esfuerzo para que ella, es decir, su compañero, avance.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 102,
        "nombre": "El cangrejo",
        "descripcion": "Las dos manos y los dos pies en el suelo. Se trata de andar como los cangrejos, hacia la izquierda y hacia la derecha. Nunca hacia delante ni hacia atrás.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 103,
        "nombre": "El ángulo recto",
        "descripcion": "Los actores se sientan en el suelo, con los brazos estirados paralelos a su superficie y las piernas también estiradas. Comienzan a caminar con las nalgas, a la derecha y después a la izquierda, como si fuesen los pies. El tamaño de cada paso debe ser el mayor posible, pero no es necesario caminar rápidamente, pues no se trata de una carrera. Después de recorrer cierta distancia, todos deben retroceder, caminando sobre sus propios pasos, siempre con las nalgas. Las piernas y los brazos deben estar siempre estirados hacia delante, en ángulo recto. Es preciso mantener la espalda bien recta, formando un ángulo de noventa gra- dos con los brazos y las piernas.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 104,
        "nombre": "Carrera en cámara lenta",
        "descripcion": "Gana el último en llegar. Una vez iniciada la carrera, los actores no podrán interrumpir sus movimientos, que deberán ejecutarse lo más lentamente posible. Cada corredor deberá estirar lo máximo que pueda las piernas a cada paso. El pie que adelante a la otra pierna debe pasar siempre por encima de la altura de la rodilla. Hace falta que el actor, al avanzar, estire bien su cuerpo, porque con ese movimiento el pie romperá el equilibrio y, a cada centímetro que camine, se organizará una nueva estructura muscular, instintivamente, activando ciertos músculos dormidos. Cuando el pie llegue al suelo, debe oírse el ruido. Inmediatamente se levantará el otro pie. Este ejercicio, que exige un gran equilibrio, estimula todos los músculos del cuerpo. Otra regla: los dos pies jamás podrán estar al mismo tiempo en el suelo. En cuanto el pie derecho se haya apoyado, el pie izquierdo debe subir, y viceversa. Siempre un solo pie en el suelo.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Serie caminatas"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 105,
        "nombre": "Dificultad en relación con los cuerpos y los objetos",
        "descripcion": "Estamos acostumbrados a hacer movimientos mecanizados inconscientemente. No obstante, todo podría cambiar si se produjese una mínima alteración con nuestros cuerpos o con los objetos. Si, por ejemplo, un actor tiene una mano en la espalda, ¿cómo podrá poner la mesa? Si tiene sólo un ojo (el otro tapado) o una pierna (la otra atada); si no puede ir hacia delante o sólo puede ir hacia atrás o andar hacia los lados; si sus dedos están entumecidos, ¿cómo podrá vestirse o acariciar a alguien? Todas las transformaciones físicas provocan el aumento inmediato de la sensibilidad. Dividir el movimiento Se divide en partes un movimiento continuo (andar, por ejemplo) : primero una pierna, pausa; después el brazo, pausa; la otra pierna, pausa... y así sucesivamente. No coordinación de movimientos coordinados. La coordinación de movimientos endurece los músculos y determina la máscara física. En este ejercicio, el actor estudia sus movimientos y deja de coordinarlos: los brazos separados de las piernas al andar; una pierna con un ritmo diferente del de la otra; una mano gesticulando lo contrario de la otra; la mano no coordinada con la boca que se abre para recibir los alimentos; el dedo que se levanta antes de que se abra la boca para pronunciar un discurso; los brazos haciendo el movimiento de equilibrar las piernas que se cruzan, pero no al mismo tiempo, etc. Primero se puede realizar una acción cualquiera y después repetirla con los movimientos no coordinados. Círculo máximo y círculo mínimo Los actores se dan las manos en círculo e intentan hacer que ocupe el mayor espacio posible, después el menor, el mayor, el menor... ..........",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 106,
        "nombre": "Movimiento premeditado",
        "descripcion": "Los actores se mueven con premeditación, separando claramente el momento en el que se premedita y el movimiento del momento en el que se ejecuta, como si no pudiesen ser simultáneos. Esos movimientos deben hacerse en todas las direcciones, en todos los niveles, sobre mesas, sillas, en el suelo, escaleras, de manera ordenada o desordenada, caótica, de pie, tumbados, inclinados, a cuatro patas, pero siempre de una forma premeditada y dividida: pienso lo que voy a hacer y después lo hago. Lo importante es reflexionar sobre el propio cuerpo, los músculos, las estructuras musculares. Así, todos los movimientos serán planeados.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 107,
        "nombre": "Baile de sillas",
        "descripcion": "Es un juego de niños muy conocido. Un círculo formado por sillas vueltas hacia fuera, teniendo siempre una menos que el número de participantes. Los actores cantan y bailan una música conocida, andando alrededor de las sillas. Cuando el director grita «¡alto!», todos deberán sentarse. El que queda de pie abandona el juego, y se retira una silla. El juego prosigue hasta que el último jugador se siente en la última silla.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 108,
        "nombre": "Ritmo con sillas",
        "descripcion": "Cinco actores, cada uno con una silla, deben crear una imagen con esta y su propio cuerpo. El líder numerará las imágenes: 1, 2, 3, 4, 5. A continuación dirá un número o una secuencia de números, rítmicamente, y los participantes deberán adoptar la posición correspondiente a ese número. Variante El mismo ejercicio sin sillas. Los actores usarán solamente sus propios cuerpos. En la versión Hamlet, los actores deberán formar imágenes de escenas de los personajes de esa (o de cualquier otra obra).",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 109,
        "nombre": "Carrera de silla",
        "descripcion": "En fila, cinco o más actores suben cada uno a una silla. La primera silla de la fila se deja vacía. Cada actor pasa a la silla que está delante y deja vacía la última. Entonces, con las manos, pasan la última silla, la que está vacía, al primer lugar y avanzan  una vez más otra silla, dando nuevamente un paso hacia delante y repitiendo todo el proceso... y así sucesivamente, poniendo toda la fila en movimiento.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 110,
        "nombre": "Globo como prolongación del cuerpo",
        "descripcion": "El director lanza dos, tres, muchos globos a los actores, que deben mantenerlos en alto, tocándolos con cualquier parte de sus cuerpos, como si éstos formasen parte de los globos que están tocando; deben llenarse de aire e intentar flotar como si fuesen globos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 111,
        "nombre": "Equilibrio del cuerpo con objetos",
        "descripcion": "Se coge un objeto cualquiera, un lápiz, una pelota, una silla, un libro, una mesa, una cartera, un pedazo de papel, un sello postal, un cartel, un teléfono, cualquier cosa. Se buscan todas las posiciones y estructuras corporales en las que se pueda equilibrar ese objeto, usando todas las relaciones posibles entre el cuerpo y el objeto: cerca del cuerpo, a distancia, encima o debajo. Lo importante es estudiar la relación cuerpo- objeto-gravedad. Se pueden usar las manos, pero sólo lo indispensable. Después de unos minutos, el director dará la señal para que los actores cambien de objetos sin usar las manos; unos minutos más, nuevo cambio; luego, el director pide que los actores recuperen sus objetos iniciales y cada uno busca el suyo, dando el objeto que lleva consigo al actor que tiene el suyo, hasta que el último actor haya recuperado su objeto. Siempre con el cuerpo en cámara lenta, los actores vuelven a poner los objetos en sus lugares originales.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 112,
        "nombre": "Círculo de nudos",
        "descripcion": "Como preparación, se hace la rueda elástica. Los actores se dan las manos, formando una rueda. Después se alejan hasta que ya no llegan a tocarse, salvo con los dedos, aunque sus cuerpos siguen alejándose lo más posible. Después de cierto tiempo, hacen lo opuesto y se juntan en el centro, ocupando el menor espacio posible. Esa rueda puede combinarse con un ejercicio de voz. Los actores emiten sonidos que expresan su deseo de tocarse alejándose y después el deseo de alejarse mientras se están tocando. Se rehace el círculo, todos cogidos de la mano; no se debe cambiar la manera de cogerse de la mano durante todo el ejercicio. Uno de los actores comienza a andar, tirando de los demás (siempre lentamente, sin brusquedad) y pasando por encima y por debajo de las manos de los compañeros que tiene delante, como para hacer un nudo; a continuación, un segundo actor hace lo mismo, formando otro nudo, después otro, y otros dos o tres, al mismo tiempo, por encima y por debajo, hasta que todos hagan todos los nudos posibles y que nadie pueda ya moverse. Muy lentamente, sin violencia, en silencio, intentarán volver a la posición original. Variante Se hace lo mismo con los ojos cerrados. En este caso, es necesario hacer todo muy lentamente, para evitar choques. Variante Una línea, en vez de un círculo: es la variante llamada bramante. Variante Los actores se juntan en un bloque, levantan los brazos, todos juntos, se dan las manos, y cada uno aprieta las manos de otros dos; a continuación, se separan e intentan formar un círculo sin soltar en ningún momento las manos ni cambiar sus manos de posición al coger las de los demás.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 113,
        "nombre": "Dominguillo",
        "descripcion": "Se pide al grupo que forme un círculo, todos de pie mirando al centro. Después, que se inclinen en dirección al centro sin doblar la cintura, encorvarse ni levantar los talones, como la Torre de Pisa. A continuación, que se inclinen hacia fuera. Que hagan lo mismo hacia la izquierda, hacia la derecha, siempre sin doblar la cintura ni levantar los pies. Que dibujen un círculo en el espacio con sus cuerpos, que se inclinen hacia delante, hacia la izquierda, hacia atrás, hacia la derecha, hacia el centro; luego lo mismo pero al contrario, centro, derecha, atrás, izquierda delante, y así varias veces. Un voluntario va al centro, cierra los ojos y hace lo mismo, sólo que esta vez se deja caer; todos los demás deben sostenerlo con las manos, permitiéndole inclinarse hasta muy cerca del suelo. A continuación deben volver a situarlo nuevamente en el centro, pero él caerá en otra dirección, siendo sujetado siempre por tres compañeros, por lo menos. Al final, los compañeros pueden ayudar al protagonista con las manos a girar en círculo, en vez de llevarlo de nuevo hacia el centro. Variante Dos personas solamente y una tercera en el medio que se deje caer hacia delante y hacia atrás, siendo sostenida por los dos compañeros.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 114,
        "nombre": "Empujarse",
        "descripcion": "Este es un ejercicio muy importante, sobre todo porque muestra físicamente lo que debe ser la acción mayéutica1 del actor durante una sesión de Teatro Foro. Mayéutica: proceso socrático que consiste en ayudar a una persona a exponer conscientemente concepciones latentes en su mente a través de preguntas y sin que el filósofo ofrezca ni imponga conceptos preexistentes. En este sentido, el Teatro del Oprimido es mayéutico, porque a través de preguntas se produce e aprendizaje entre los espectadores y los actores. (N. del A.) Se trata de utilizar todas nuestras fuerzas y, aun así, no lograr vencer. Debe practicarse en parejas que tengan más o menos el mismo peso y la misma fuerza. Como en una sesión de Teatro Foro, los actores deben utilizar todos sus conocimientos, pero no agobiar a los espect-actores, sino estimularlos a que inventen, creen, descubran. Los actores, en pareja, uno frente al otro, se sujetan por los hombros. Hay que imaginarse una línea en el suelo. Comienzan a empujarse con todas sus fuerzas, y cuando uno siente que su adversario es más débil, disminuye su propio esfuerzo para no traspasar la línea, para no ser el vencedor. Si el otro aumenta su fuerza, el primero hará lo mismo, y los dos utilizarán juntos toda la fuerza de que sean capaces. A continuación se hace lo mismo con dos actores, espalda contra espalda. Después, culo contra culo. Luego, baile de espaldas: dos actores se ponen de espaldas y bailan sin música. Hace falta que cada uno intente comprender al otro, las intenciones de sus movimientos. Columpio. Frente afrente, sentados en el suelo. Los actores se sujetan por los brazos. Con las manos solamente resultaría más difícil. Se sostienen con los pies firmemente apoyados en el suelo, muy cerca, pero no uno contra otro. A continuación, uno sube y otro baja; cuando el segundo comienza a subir, el primero baja, como en un verdadero columpio. Pueden formarse también grupos de cuatro, en los que cada uno a su turno sube mientras los otros retroceden. Y, finalmente, a una señal del director, suben los cuatro de una vez.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 115,
        "nombre": "La menor superficie",
        "descripcion": "Cada actor estudia todas las posturas que permitan a su cuerpo tocar lo menos posible el suelo, usando todas las variaciones posibles. Los pies y las manos, un pie y una mano sobre el rostro, la caja torácica, espaldas, nalgas. Es necesario que, en un momento u otro, toda la superficie del cuerpo toque el suelo. El paso de una postura a otra debe hacerse muy lentamente, con el fin de estimular todos los músculos que intervienen en la transición y permitir que el actor se observe. El actor debe sentir la fuerza de la gravedad que lo arrastra hacia el suelo, sentir que se trata de una lucha entre su fuerza muscular y la gravedad, mediada por el peso de su cuerpo. Los movimientos que hacemos cada día acaban mecanizando nuestros cuerpos; en este caso tratamos de desmecanizarlos, desestructurarlos, desmontarlos. Al cabo de unos minutos, se pide a los actores que formen parejas. Cada uno debe tocar el cuerpo del otro en la menor superficie posible y tocar el suelo también lo menos posible. Cada uno debe equilibrar al otro. Los dos cuerpos deben moverse lentamente, sin interrupción, intentando descubrir cada vez una nueva posición, una nueva figura que ha de modificarse continuamente. Después, se pide a los actores que formen grupos de cuatro, tal vez de ocho, tal vez un único grupo que los incluya a todos. Si se puede, es mucho mejor trabajar sobre el césped o sobre una superficie blanda. En este ejercicio, como en todos los demás ejercicios físicos de comunicación muscular, está absolutamente prohibido hablar; la comunicación en este caso es sólo muscular o visual, nunca verbal. Hablar, aun en voz baja, obliga a los actores a prestar atención a las palabras y no a las imágenes ni a los contactos. No hace falta realizar proezas, ser heroico, ni intentar ser mejor que los demás, nada de riesgos. Dentro de lo que cabe, habrá que hacer lo que sea posible hacer, sin obligar a nadie a nada, sin forzar.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 116,
        "nombre": "Hipnotismo colombiano",
        "descripcion": "Un actor pone la mano a pocos centímetros de la cara del otro; éste, como hipnotizado, debe mantener la cara siempre a la misma distancia de la mano del hipnotizador, los dedos y el pelo, el mentón y la muñeca. El líder inicia una serie de movimientos con las manos, rectos y circulares, hacia arriba y hacia abajo, hacia los lados, haciendo que el compañero ejecute con el cuerpo todas las estructuras musculares posibles, con el fin de equilibrarse y mantener la misma distancia entre la cara y la mano. La mano hipnotizadora puede cambiar para hacer, por ejemplo, que el actor hipnotizado se vea obligado a pasar entre las piernas del hipnotizador. Las manos del hipnotizador no deben hacer nunca movimientos muy rápidos, que no puedan seguirse. El hipnotizador debe ayudar a su compañero a adoptar todas las posiciones ridículas, grotescas, no usuales: son precisamente éstas las que ayudan al actor a activar estructuras musculares poco usadas y a sentir mejor las más usuales. El actor utilizará ciertos músculos olvidados de su cuerpo. Al cabo de unos minutos, se intercambian los papeles de hipnotizador e hipnotizado. Pasados unos minutos más, los dos actores se hipnotizan mutuamente: ambos tienden la mano derecha, y cada uno obedece a la mano del otro.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 117,
        "nombre": "La cruz y el círculo",
        "descripcion": "Comienzo por el ejercicio teóricamente más fácil de hacer pero que, debido a las mecanizaciones psicológicas y físicas, se vuelve de difícil ejecución en la práctica. Como no hay necesidad de preparación, los no actores se entregan sin miedo; y si se les advierte que es casi imposible realizarlo bien, no tendrán miedo a conseguirlo y se sentirán libres para intentarlo. Se pide que hagan un círculo con la mano derecha, grande o pequeño, como puedan: es fácil, y todo el mundo lo hace. Se pide después que hagan una cruz con la mano izquierda: es aún más fácil y todos lo logran. Se pide entonces que hagan las dos cosas al mismo tiempo. Es casi imposible. En un grupo de unas treinta personas, a veces una lo logra. Difícilmente dos, y tres es un récord. También servirá cualquier figura diferente para cada mano, además del círculo y la cruz. Variante Se pide que hagan un círculo con el pie derecho, durante un minuto. Que olviden el pie y sigan haciendo el círculo. Después, que escriban sus nombres en el aire, con la mano derecha. Es casi imposible. El pie tiende a seguir a la mano y a escribir el mismo nombre también. Para facilitar el ejercicio, se intenta hacer un círculo con el pie izquierdo y escribir con la mano derecha. Es más fácil, y algunas personas a veces lo consiguen.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Ejercicios generales"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 118,
        "nombre": "Imagen de la palabra",
        "descripcion": "Esta técnica puede ponerse en práctica de dos maneras: con el propio cuerpo o con el cuerpo de los demás, además de con los objetos hallados en el local de trabajo. Mostrando el tema con el propio cuerpo Primera etapa: la construcción de las imágenes Se le pide a los participantes que muestren con sus cuerpos la imagen de una palabra determinada: un país o una región, un partido político o una profesión, una actitud, un personaje histórico o un acontecimiento reciente. La palabra ha de representar siempre a alguien o algo que tenga un interés para el grupo, aunque se trate de una palabra con un significado amplio, como «teatro», «felicidad» o «futuro». En círculo, cada uno piensa en la imagen que va a mostrar, y se vuelve hacia el interior del círculo cuando tiene una idea clara de lo que va a hacer. A una señal del animador, todos forman la imagen al mismo tiempo, para evitar que los participantes se influyan mutuamente. Segunda etapa: familia de imágenes El animador pide que sin deshacer las imágenes observen a los demás y que se agrupen a cámara lenta en familias de imágenes similares. Cada familia se muestra en el espacio estético para que el grupo pueda hacer comentarios –objetivos o subjetivos, sólo están prohibidas las interpretaciones definitivas- de lo que se ve en escena. Tercera etapa: las dinamizaciones Siguiendo las instrucciones del director, cada grupo familiar hará: 1. Un ritmo: cada actor moverá su imagen según el ritmo que le sea propio. Siguen los comentarios de los que observan. 2. Una frase: cada actor dirá una frase que corresponda a ese momento preciso de la imagen. Siguen los comentarios. Ejemplos En Florencia, alguien propuso la palabra «religión». Se mostraron imágenes piadosas: Jesús crucificado, la Virgen llorando, unos penitentes... hasta el momento en que el estilo de las imágenes cambió radicalmente y se llegó a mostrar unas parejas de jóvenes que se daban besos en la iglesia, unos pobres pidiendo limosna, unos monjes luciendo una gran sonrisa, y unos turistas que fotografiaban todo el conjunto. En el sur de Francia, un profesor pidió a sus alumnos que mostraran imágenes de Juana de Arco, de Berenice, de Napoleón... De este modo comprendió que los jóvenes ya no percibían los aspectos heroicos, trágicos o guerreros de aquellos personajes tal como se les habían enseñado, sino que los interpretaban según su información y experiencia. Fedra iba a hacer la compra al supermercado, mientras que Napoleón estaba sumido en números rojos por culpa de las guerras. Ideas de niños, que se desvelaban en la imagen. En Brasil se propuso la palabra «violencia». Río de Janeiro es una de las ciudades más violentas del mundo, donde más se roba y mata, gracias al ejemplo dado por la dictadura. Fue ella la que inventó el secuestro en masa, práctica ampliamente extendida hoy en día entre los traficantes, que han aprendido bien la lección militar. Los actores mostraron imágenes de violencia física (las agresiones de la policía), económica (el alquiler, el supermercado), sexual (la violación)... y también una imagen de alguien que no hacía más que mirar fijamente, sin decir nada, sin hacer nada. ¿Cuántas personas son así efectivamente? Variante: las estructuras de imágenes En esta variante, en lugar de formar familias de imágenes los actores buscan una interrelación posible entre sus imágenes, formando estructuras binarias de imágenes complementarias. Cada imagen, además del sentido que posee aisladamente, adquiere significaciones adicionales cuando entra en relación con otra imagen. Por ejemplo, alguien propuso como tema el teatro francés. Los participantes, actores profesionales en su mayoría, no tenían una buena opinión del teatro que practicaban: uno se miraba maravillado el ombligo; otro intentaba besarse las nalgas con entusiasmo; un tercero, con unos gemelos, buscaba a un espectador que huía; un cuarto contaba dinero; un quinto bostezaba; un sexto dormía; un séptimo... En resumen, ¡no estaban nada contentos consigo mismos! Cuando se formaron las estructuras, una evidencia sorprendió a todo el mundo: las imágenes que simbolizaban a los artistas se reagruparon, sin relación alguna con las imágenes de espectadores, que permanecían aisladas... durmiendo y bostezando. Variante: la metamorfosis La metamorfosis es en sí misma una técnica, descrita más adelante. A una señal del animador, los actores se transforman a cámara lenta en imágenes de sus opresores. A continuación, pasan de una a otra, con varias idas y venidas, para que puedan analizarse mejor las relaciones entre ambos, oprimido y opresor. Generalmente, al mostrar imágenes de sus propias opresiones los participantes tienden al realismo. Cuando se transforman en opresores, muestran más bien imágenes expresionistas, deformadas, monstruosas. Cuanto mayor sea su opresión, más deformes serán las imágenes. Esta deformación debe entenderse en el sentido de «revelación de una esencia», y no en el de «deterioro». En una sociedad, un torturador puede tener una apariencia normal -¡realista!-; se comporta normalmente. Esta imagen realista no es distinta de las demás. Sin embargo, su imagen real es la que nos proporciona el torturado: la del monstruo. El torturador es realmente como lo ve el torturado, aunque en su versión realista se parezca a todo el mundo. No se trata aquí de inventar un neo-expresionismo subjetivo delirante. En esta construcción, lo importante no es cómo cierto oprimido ve a cierto opresor, sino que se trata de descubrir cómo los oprimidos ven a los opresores. Si tuviéramos que dar un nombre a este método deberíamos llamarlo expresionismo social: una contradicción en los términos. En este libro se explican, más adelante, otras formas de dinamización de esta técnica.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "El ArcoIris del Deseo, Augusto Boal"
      },
      {
        "Id": 119,
        "nombre": "Recorriendo",
        "descripcion": "se le pide al grupo que explore el espacio de trabajo a partir de diferentes formas de desplazamiento (caminar, correr, gatear, salticar, reptar, etc.) Es conveniente que este trabajo se realice, siempre que el tipo de piso lo permita, descalzos. Que previamente se hayan quitado todo elemento peligroso, como anillos, aros, colgantes con punta, llaveros, etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales"
      },
      {
        "Id": 120,
        "nombre": "Paso a paso",
        "descripcion": "esta vez ponemos el acento en las calidades de los desplazamientos, como por ejemplo: caminar con pasos cortos, largos, ocupar el máximo espacio, el mínimo, etc. Variantes: cambios de sentido y de dirección; cambios de velocidades; cambios de energías; cambios de niveles; cambios de cantidad y tipos de apoyos.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales"
      },
      {
        "Id": 121,
        "nombre": "Control de calidad",
        "descripcion": "los desplazamientos en sí cumplen varias funciones, como ya lo expresamos anteriormente. Una tiene que ver con la predisposición psicofísica. Para facilitar la misma el coordinador, mientras el grupo camina les solicitará: que caminen por todo el espacio; que transiten las zonas vacías, buscando equilibrar entre todos el espacio; que varíen las direcciones, evitando la circularidad constante; que la mirada esté abierta, despejada y que sea panorámica; que aflojen el gesto; que se desplacen en silencio; que registren los apoyos; que registren la respiración; que registren en qué condiciones está el cuerpo y de ser necesario realizar algún otro movimiento, que lo hagan; etc. En una segunda instancia, luego de la repetición de esta actividad durante varias clases, se les pedirá, al ser nombrados, que indiquen una de las consignas antes mencionadas.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales"
      },
      {
        "Id": 122,
        "nombre": "La banda",
        "descripcion": "se le pide al grupo que inicie la recorrida por el espacio, que se conecte con él y con los compañeros (que los registre). Luego deberá encontrar su propio ritmo, cadencia. Debe focalizar su atención durante el desplazamiento en alguna zona del cuerpo. Después comenzará a jugar con sonidos, probando lo que espontáneamente salga; luego elegirá un sonido apropiado para esta cadencia y lo fijará. Cuando el coordinador ve que todo el grupo supera esta instancia, a través de un stop provoca el congelamiento. Uno a uno los irá nombrando para que comiencen su forma (desplazamiento y sonido), el resto observará. Una vez que todos se han observado, el que quiera iniciará su desplazamiento; el resto del grupo se irá sumando al recorrido del primero, acompañándolo con su movimiento y sonido. Este proceso se realiza hasta que todo el grupo se desplace en conjunto, habiendo creado una banda.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales"
      },
      {
        "Id": 123,
        "nombre": "autos locos",
        "descripcion": "en colectivo y simultáneo se desplazan por todo el salón, a la orden del coordinador deben inventar y abordar un determinado medio de trasporte en forma individual, desde la más simple patineta hasta el más complejo de los camiones con acoplado. La velocidad y forma de desplazamiento la van a determinar el móvil que hayan elegido. Si se chocan o se rozan, deben ambos descomponer en cámara lenta su móvil hasta llegar a la posición de acostados. Luego se levantan y componen un móvil diferente. En el caso en que no se choquen solos el coordinador debe dar como consigna que aumenten la velocidad o reducirles el espacio de tránsito, etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales"
      },
      {
        "Id": 124,
        "nombre": "Oposición permanente",
        "descripcion": "este ejercicio debe realizarse avanzado el proceso de clases, ya que es importante que el grupo haya transitado diferentes tipos de desplazamientos, para que tenga mayor soltura y experiencia, para las propuestas. Luego de una caminata, o cualquier otro desplazamiento simple, se les da como consigna que deben realizar con el cuerpo lo opuesto a lo que está realizando el compañero con el que se cruzan. Las oposiciones pueden estar referidas a diferentes niveles, energías, posiciones, ritmos, etc. Dado que las posibilidades y variedades son infinitas deben seleccionar a quién se oponen, cómo se oponen y hasta cuándo. Este ejercicio resulta interesante para el docente, ya que como el grupo lo desarrolla sin consignas, le permite a aquél realizar una observación del grupo en actividad.",
        "etiquetas": ["Caldeamiento", " Inespecífico", " Desplazamiento"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 125,
        "nombre": "Sombras",
        "descripcion": "se dispone a todo el grupo en el salón de trabajo mirando hacia el frente, de manera tal que al moverse no se choquen con otro compañero. Al frente, al medio y separado del resto del grupo se coloca un compañero de espaldas el que realizará los movimientos que quiera pudiendo utilizar laterales o hacia atrás y adelante de manera que todos puedan imitarlo.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 126,
        "nombre": "Puntos de apoyo",
        "descripcion": "Este trabajo, si bien es una variante de los desplazamientos, es fundamental que le brindemos un espacio determinado, dado que vamos a focalizar la atención en los apoyos. Esto implica ya no solo el transito por el espacio, sino que el sujeto va a trabajar hacia un mayor registro propio.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 127,
        "nombre": "Piso",
        "descripcion": "con la punta de los pies, en cuatro patas, de espaldas, sentados, etc.; paredes: máximo de cuerpo apoyado, mínimo, rebotes, etc.; combinados piso y pared; con los compañeros: espalda con espalda, unidos sutilmente, asimétricamente (codo con oreja), etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 128,
        "nombre": "Atraídos",
        "descripcion": "este trabajo se presenta como una combinación de desplazamientos en “como si” y variantes de los puntos de apoyo. Partiendo de esta propuesta se les puede pedir que: caminen normalmente, luego caminen “como si” el piso fuese de arena caliente, después vuelvan a caminar normalmente, posteriormente camino con la condición de que el piso arde y esta vez debo desplazarme junto a un compañero espalda con espalda. De esta forma, el coordinador va cambiando las consignas para proponer el uso de diferentes puntos de apoyo, tanto con el piso, pared, como con otro compañero.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 129,
        "nombre": "Elevador",
        "descripcion": "por parejas se sientan en el piso apoyando espalda con espalda, al máximo posible. Sin utilizar las manos deberán pararse al mismo tiempo para luego sentarse. Es importante en este ejercicio que los integrantes de la pareja tengan la misma contextura física.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 130,
        "nombre": "Esculturas",
        "descripcion": "previamente el coordinador debe traer preparadas tarjetas que indiquen diferentes estructuras proponiendo calidad y cantidad de puntos de apoyo. Por ejemplo. Tarjeta Nº 1 Un apoyo en el piso. Dos apoyos en la pared Dos apoyos en el compañero Tarjeta Nº 2 Un apoyo en un objeto. Tres apoyos en el compañero. Dos apoyos en el piso. Luego, el grupo se divide en parejas, a cada una se le entrega una tarjeta, con la cual deben componer una escultura, sin agregar ni sacar ningún punto de apoyo. Es decir, entre ambos deben apoyar sólo lo indicado en la tarjeta. Luego se puede volver a barajar y entregar otra tarjeta a la misma pareja, dado que con los mismos datos se pueden componer infinidad de esculturas.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 131,
        "nombre": "Esculturas en silencio",
        "descripcion": "este ejercicio es una variante del anterior Se trabaja con música, el grupo se desplaza al compás de la misma, desarticula, se despereza, respira, emite sonido si es necesario. Cuando la música se interrumpe cada uno debe buscar un compañero y escuchar atentamente la lectura que realiza el coordinador de una tarjeta. Luego deben armar la escultura. Cuando vuelve la música retoman la caminata y así en cada silencio se dará lectura a otra tarjeta. Una variante posible es que mientras está la música el coordinador anuncie el número de personas que se deben agrupar.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 132,
        "nombre": "Trabajo con stop",
        "descripcion": "Camino normal, camino como si..., para, registro la respiración, estado del cuerpo, apoyos; continúo la caminata; camino normal, stop, golpe de karate al aire, camino normal, stop, golpe de karate y grito, continúo la caminata.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 133,
        "nombre": "Uno para a todos",
        "descripcion": "el coordinador pedirá que se desplacen por el salón aplicando cualquiera de las variantes de ejercicios de desplazamiento. En un determinado momento pedirá un stop, al que todos responden congelando inmediatamente. Un compañero cualquiera reiniciará la marcha y todos la reiniciarán con él. Al detenerse otro cualquiera todos deben hacer stop. Así sucesivamente el grupo irá deteniéndose y reiniciando el desplazamiento. Como variante de este ejercicio se les pedirá, que quien reinicie la marcha proponga diferentes dinámicas de desplazamiento (niveles, velocidades, ritmos, con sonido, mínimo o máximo espacios, etc.). Como progresión del mismo, en el caso de tener paridad entre varones y mujeres se les pedirá que en simultáneo y colectivo realicen el uno para todos por sexo. Lo cual permitirá un mayor y más profundo desarrollo del registro y de la adaptación. La forma de dividir en dos grupos Puede ser cualquier otra.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 134,
        "nombre": "Duende",
        "descripcion": "este ejercicio es una variante del ejercicio: uno para a todos. Todos juntos se desplazan por el salón y a la señal de stop deben detenerse y cerrar los ojos. Un compañero, designado por el coordinador abrirá los ojos y hará de duende. Su tarea consiste en deambular por los espacios vacíos que dejan los compañeros ya sea entre sí o a partir de la postura. Si alguno de los que están con los ojos cerrados lo detecta 0 percibe, ya sea por el sonido, la respiración, la temperatura, el olor, etc_ deberá levantar la mano. Si es verdad se reinicia la caminata. Nuevamente stop con ojos cerrados y el descubridor hará de duende. En caso de que el grupo sea muy numeroso les recomendamos incorporar más de un duende.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 135,
        "nombre": "Stop en como si",
        "descripcion": "Sigamos combinando, ya que la creatividad es siempre una combinación sincrética de elementos conocidos. Ejemplos: camino normal, stop, camino normal (en el desarrollo de esta caminata enuncio las condiciones o modalidades del próximo stop. Al stop me detengo como si fuese una estatua), stop... Variantes: estatuas temáticas (clásicas, de próceres, de músicos de rock nacional, de oficios, de animales, de distintas animosidades); diferentes dinámicas: en dúos, en tríos, todo el grupo; combinando niveles: alto, bajo y toda la gama de medios. Es recomendable tener en cuenta la posibilidad de repetir la misma consigna varias veces con el propósito de agotar la idea y desarrollar nuevas imágenes. Esta actividad finaliza con la realización de una plaza, una feria, una colección, un museo, un estante de una juguetería, etc. En este punto el stop se puede cancelar momentáneamente y dar comienzo al juego dramático.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D. Augusto Boal"
      },
      {
        "Id": 136,
        "nombre": "Fotos",
        "descripcion": "La foto es un congelamiento de una situación. La misma puede ser tomada como objeto o medio, es decir, puede funcionar como lugar de llegada o como punto de partida. Vamos al ejemplo, si partimos del ejercicio de la plaza o el museo, congelar la situación en uno u otro momento determinado y señalar que el mismo es una foto de situación, nos permitirá trabajar sobre: registro propio (corporal, estado anímico, situación espacial); registro del conjunto, valorización del todo; pequeños cambios que no me modifican por completo, pero suman a la totalidad.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 137,
        "nombre": "Fotógrafo",
        "descripcion": "una vez realizada una foto cualquiera, uno de los participantes puede salir y observarla desde afuera, como si fuese a sacar la foto. Este paso se puede realizar tantas veces como se quiera, lo importante es que cuando uno sale, la foto se modifique lo menos posible. De esta forma el fotógrafo podrá observar al grupo y su relación con el mismo, registrando el espacio que dejó vacío. Otra variante es que el espacio que él dejó sea copiado y ocupado por el coordinador. ¿Se puede construir una historia partiendo de una foto? Sí y es muy fácil. Si pensamos a una foto como la detención de una situación del aquí y ahora.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 138,
        "nombre": "Tres actos",
        "descripcion": "el grupo se divide en subgrupos de entre 5 y 6 personas cada uno. Cada subgrupo recibirá una foto (ésta puede ser alguna de las creadas por el grupo en otro ejercicio o una foto traída por el coordinador, ya sea tanto una real, de revistas, de diarios, cuadros, etc.), luego, cada subgrupo intentará reproducirla. Después se mostrarán y por último se les pedirá que compongan dos fotos más para construir una historia. A _ Ésta estará relacionada con el antes, con los antecedentes, con las causas, con las circunstancias que desencadenaron los acontecimientos o son el origen de la foto que tenemos. B _ Es la foto que tenemos. C _ Es la foto de las consecuencias posibles o el resultado del acontecimiento de la foto B. Pidámosle al grupo que: 1) realice estas tres fotos y que las muestre o que relate la primera, muestre la segunda y relate la tercera. Esto puede organizarse en todas las variantes posibles; 2) luego del relato de las tres, pueden tomar al resto del grupo y dirigirlo en el armado de las dos fotos restantes; 3) después del punto 2, cada grupo, a su vez, debe armar antecedentes y otras posibles consecuencias de esa foto que les tocó; 4) este ejercicio puede concluir acá o se puede desarrollar a partir de la acción. (Ver ejercicio “improvisación a partir de una foto”). Como vemos A, B, y C responden respectivamente a introducción, nudo y desenlace, y a su vez forman una estructura, de modo que al alterar uno de estos elementos se alteran los otros dos. Desde aquí tenemos un punto de partida para trabajar, por medio del juego teatral, todo lo referente a otros contenidos, como ser: la prevención de accidentes, catástrofes, epidemias, determinadas conductas, problemáticas grupales y/o institucionales, vinculares, etc. A partir de aquí, el docente puede implementar su creatividad para continuar acorde con su propósito.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 139,
        "nombre": "Semejante",
        "descripcion": "le pedimos al grupo que se separe en subgrupos a partir de las diferentes consignas y que se registren una vez conformados. Posibles consignas: número de calzado. El grupo se mueve y se conforman varios subgrupos; éstos pueden ser de varios, uno o ninguno. Cuando están seleccionados, el coordinador los recorre y los presenta al resto. Luego, simulando que la cantidad de grupos formados no le sirve para iniciar el juego vuelve a consignar distraídamente que se dividan por: color de ojos. Se les señala la importancia de la exactitud en la selección. Luego del recorrido y la presentación, siempre en forma distraída, vuelve a señalar que tampoco esta selección le sirve. Entonces vuelve a pedirles que se dividan por: cuadro de fútbol; comida preferida; estatura; color predominante de la ropa; barrio en el que viven; música preferida, etc. Reflexión final del juego: se le explica al grupo que este juego llamado del semejante, lo realizamos porque de alguna manera es la base filosófica de nuestro trabajo. Dado que algunas veces estuvimos junto a otros, otras veces con los mismos o siempre con distintos y quizá en alguna ocasión estuvimos solos, así como también en la vida. Este juego nos sirve para demostrar lo que nos va a pasar haciendo y aprendiendo juntos Teatro. Uno va a aprender del otro, porque todos tenemos algo en común con todos. Si jugáramos con la humanidad toda a infinitos grupos es muy probable que estemos unidos en diferentes situaciones. Uno es semejante al otro y el otro es semejante a mí. Todos tenemos cosas para aprender tanto de uno mismo y de los otros, como los otros tienen para aprender de mí. Esta reflexión nos sirve para que ante el desdoblamiento de roles (los que hacen y los que miran) no queden los observadores en un rol pasivo y crítico.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 140,
        "nombre": "Artesanos",
        "descripcion": "le pedimos al grupo que se separe (según la cantidad de participantes) en 3 6 4 subgrupos, por ejemplo de acuerdo con el último número de su documento, es decir del 0 al 3, del 4 al 6 y del 7 al 9. En este ejercicio participarán todos simultáneamente. Una vez conformados los subgrupos proponemos que realicen en el menor tiempo posible, lo siguiente: (para optimizar este trabajo debemos Priorizar el factor tiempo, es decir el docente debe responder a toda pregunta con el tiempo que les resta para la presentación. Deben crear formas en conjunto sin demasiada racionalización. El factor tiempo limitado, predispone al contacto, la relación y la interacción con sus Pares sin que interfieran demasiado el cuestionamiento y la autocrítica) Por ejemplo: tienen 10 segundos para construir: el número 8 (los integrantes nos miran con asombro, otros pueden preguntar cómo hacerlo y algunas otras preguntas a las que contestaremos mirando el reloj, respondiendo que lo hagan como quieran y que el tiempo corre). Finalizan el armado cuando logran la quietud. Sin modificar demasiado la estructura armada, los grupos deben observar la construcción de sus compañeros. Luego se les pide que armen: un número de dos dígitos; una letra; un triángulo; un cuchillo y un tenedor; un tubo de pasta dental con la tapita afuera; la cara interior de la puerta de una heladera. (Como sugerencia se puede agregar un reportaje a cada uno de los integrantes preguntándole qué objeto representa). Otra variante de este ejercicio es la representación de objetos abstractos o imágenes, por ejemplo: un paisaje lunar; el fondo del mar; una nave extraterrestre; una prisionera atada al mástil de un buque corsario; el resultado de una búsqueda agotadora; la soledad en una selva tropical de altura; el primer amor en un día de eclipse solar; un almanaque de gomería, mes de octubre. El desarrollo de esta actividad puede finalizar en la presentación de las fotos recién armadas o bien podemos continuarla pidiéndoles que esta foto se transforme en una situación, con lo cual comenzamos a trabajar la improvisación, o sea la foto como punto de partida para construir una historia. (Ver ejercicios: Tres actos o Improvisación a partir de una foto).",
        "etiquetas": ["Caldeamiento", " Ambos"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 141,
        "nombre": "Orador",
        "descripcion": "se disponen en parejas, uno parado detrás del otro. El de adelante cruza sus manos en la espalda, el último pasa su manos por el hueco que deja el de adelante con los brazos. Luego el primero comienza a hablar y el segundo gesticulará con sus mano acorde o no con el discurso del primero. Ejemplo posibles de discursos: venta de un producto en el colectivo; pedido de empleo; disculpas a una novia o novio engañado; chiste; salmo de la misa del domingo; relato de una pesadilla. Como variante de este ejercicio se le puede pedir al orador que coloque en ambas manos un calzado simulando los pies de un enano. Es aconsejable que se arrodille o trabaje apoyado sobre una mes como también que utilice una tela o un saco grande para esconder ambos. Este ejercicio es conocido como el enano.",
        "etiquetas": ["Caldeamiento", " Ambos"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 142,
        "nombre": "Lucha",
        "descripcion": "por parejas y bajo la consigna de que no deben tocarse se comienza un enfrentamiento de karate, donde cada contrincante debe reaccionar al estímulo del golpe o patada de su compañero desde la zona a la que supuestamente fue dirigido. La dinámica es golpe, recepción, reacción. Por lo que debe realizarse de a uno por vez. Por lo general tanto a la recepción como a la reacción se les agrega sonido. 44 _ La lucha y la velocidad: el desarrollo es similar al del ejercicio anterior, pero en algún momento uno de los integrantes de la pareja cambia la velocidad (cámara lenta, cámara rápida, normal) y el otro debe adaptarse para luego, cuando él lo decida cambiar. Otra variante es provocar mayor distancia entre los luchadores e ir jugando entre la máxima y mínima distancias posibles. 45 _ La lucha de película: con la misma dinámica, pero se les propone que exageren al máximo todos los movimientos, dándoles un carácter de falsa teatralidad. Luego pueden incorporarle sonidos.",
        "etiquetas": ["Caldeamiento", " Ambos"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 143,
        "nombre": "Hoy presentamos",
        "descripcion": "dispuesto el grupo en ronda, uno entra al centro de la misma y presenta a un personaje (que debe ser un sujeto o un objeto al que le agregará una cualidad, por ejemplo: el gusano resfriado, la viuda desesperada, el ladrillo partido, etc.). En su presentación señala a un compañero de la ronda, éste a su vez deberá adaptar gesto, cuerpo y voz del personaje sugerido e ingresar al centro de la ronda, para reemplazar a su presentador. Una vez en el centro, deberá presentarse brevemente y anunciar al próximo personaje. Así sucesivamente.",
        "etiquetas": ["Caldeamiento", " Ambos"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 144,
        "nombre": "Juego de los 7 errores",
        "descripcion": "dos grupos enfrentados en dos hileras. Cada uno observa detenidamente, tratando de obtener la mayor información posible, al compañero de enfrente. Luego la hilera que observó (pasado un tiempo acordado) se da vuelta (sin espiar al compañero antes observado). El observado debe modificar 7 cosas, que pueden ser: el lugar, objetos ornamentales, ropas, postura, etc. y congelar. El otro voltea a la señal del coordinador y en un tiempo especificado debe enunciar los 7 cambios de su compañero. Luego viceversa, pudiendo computar por grupo aciertos y errores.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 145,
        "nombre": "Cadena de acciones",
        "descripcion": "para desarrollar la atención y la memoria. A la vista de todos los integrantes, frente a ellos, se colocan una serie de elementos sin necesaria relación entre sí, por ejemplo: un teléfono, anteojos, una peluca, un zapato, una olla, un revólver, una taza, una revista, etc. La secuencia se realiza de la siguiente manera: pasa un integrante toma un elemento y acciona con él, luego el segundo repito la acción del primero, toma otro elemento y realiza una acción con éste y así sucesivamente. Si alguien se equivoca, se comienza una nueva serie. En el caso de que el grupo tenga un alto grado de concentración y se agoten todos los elementos, deberán continuar la serie otorgándole otra acción a un mismo elemento.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 146,
        "nombre": "Arquitectos",
        "descripcion": "la mitad del grupo sale de la sala, mientras el resto compone una instalación (creación de un espacio determinado). El grupo de afuera entra y la observa, luego vuelve a salir y los compañeros modifican uno o más elementos de esta estructura, los otros vuelven a ingresar y deben reconocer los cambios. Esta experiencia se puede realizar gran cantidad de veces sutilizando las propuestas.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 147,
        "nombre": "Braille",
        "descripcion": "observación interna o registro. El trabajo se desarrolla en parejas, de a uno por vez o en una serie de tres o cuatro ejercicios cada uno. Consiste en que uno ofrece la palma de su mano al otro, éste escribe con su dedo una letra en la palma del compañero (obviamente el que dio la mano debe mirar para otro lado) para que este adivine cuál es. El ejercicio se puede continuar con números, palabras cortas en otras zonas del cuerpo (espalda, antebrazo, frente, pierna, etc.) Se recomienda con cuidado, cariño y respeto, borrar lo antes escrito. Se puede pautar de antemano la posibilidad de uno o más intentos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 148,
        "nombre": "Tomando medidas",
        "descripcion": "dos grupos enfrentados a la mayor distancia que permita el salón de trabajo. Uno frente a otro. Uno debe extender el dedo índice y apuntar a la nariz del compañero de enfrente. Este último debe guiar al otro respecto de la altura exacta de su nariz. Recién cuando esté seguro de que la punta de su nariz y el dedo del compañero coinciden, le pide que lo fije y comienza a avanzar sin modificar su altura o la posición de su cabeza hasta hacer coincidir dedo y nariz (podemos intentarlo varias veces). otra medición que podemos hacer es la altura, también el ancho de hombros, el de cadera. 60 _ Las marcas: una variante del anterior es la posibilidad de hacer las mediciones, pero esta vez con elementos, es decir observo a mi compañero de pie y luego tomo dos elementos y los dispongo en el piso de manera tal que limiten el espacio que ocuparía a lo largo, mi compañero acostado. Luego verifican.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 149,
        "nombre": "Rondas de imitación",
        "descripcion": "Sonora: de a uno por vez, reproducen un ritmo que luego todo el grupo en conjunto deberá imitar. s importante que los sonidos no sean sólo vocales, sino también percusivos involucrando diferentes partes del cuerpo, la pared, el piso, etc. De movimiento: se realiza la misma dinámica que en el ejemplo anterior, pero esta vez poniendo el acento en el movimiento. Este trabajo se puede complejizar combinando sonido y movimiento. De animales: misma dinámica que los anteriores, a las que se pueden agregar distintas tipologías. Por ejemplo mamíferos, insectos voladores, prehistóricos, de granja, acuáticos, etc. De actividades: igual dinámica que los anteriores, sólo que esta vez, al pasar, realizarán una acción. Por ejemplo: pescar un pez gigante, sembrar espantando pájaros, acunar a una hormiga, hacer una tortilla de huevos de ñandú, etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 150,
        "nombre": "Te regalo",
        "descripcion": "todos en ronda. Pasa un compañero y realiza una acción con un elemento imaginario, luego se lo regala a otro de la ronda. Éste pasa al centro y acciona con el elemento, esta vez no imita la acción del compañero anterior, sino que propone una diferente con el mismo objeto. Para terminar su secuencia guarda su regalo y crea otro elemento a partir de la acción para luego regalárselo a otro compañero. Así sucesivamente.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 151,
        "nombre": "Saludo atentamente",
        "descripcion": "en simultáneo y colectivo se desplazan todos por el espacio; a la orden de stop del coordinador, le dan la mano al compañero más cercano diciendo cada uno su nombre. Al segundo stop lo mi sino, pero agregando también el saludo con la mano izquierda. Al tercer stop: mano derecha, mano izquierda, hacemos contacto hombro_hombro (derecho con derecho, izquierdo con izquierdo), así sucesivamente hasta llegar a una secuencia que involucre: rodillas, cadera, cabeza_cola. A cada nuevo encuentro es conveniente sugerir que agreguen otro dato personal.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 152,
        "nombre": "Ronda de aplausos",
        "descripcion": "se arma una rueda en la cual practicamos: aplauso al medio (centrado en el pecho) otro a la derecha y otro a la izquierda. Una vez que todos los integrantes del grupo reconocen el código, comenzamos con el juego. El coordinador comienza con un aplauso a la derecha pasándolo de esta forma al compañero que se encuentra en ese lado, éste a su vez lo pasará al de su derecha y así sucesivamente. Luego se realiza una ronda para la izquierda. En la tercera ronda fijamos a dos compañeros que estén enfrentados, estos tendrán la opción de cambiar el sentido del aplauso. Una condición importante a partir de esta fase es que nadie puede aplaudir más de una vez por turno y no se debe repetir el mismo sentido. De esta forma evitaremos que el juego se concentre en unos pocos. En la ronda siguiente incorporamos otros dos compañeros con la opción de modificar el sentido y así en adelante hasta que sea libre para todos la decisión de cambiar el sentido. Lo cual irá incrementando el nivel de atención. Es fundamental destacar que quien regirá previamente la elección del compañero es la mirada. Si ésta no se fija en el compañero elegido es muy probable que respondan dos o más. Una vez adquirida práctica en este juego, podemos incorporar el aplauso hacia delante con lo cuál lo estaría mandando a un compañero que esté enfrente. Si el grupo es muy numeroso otra opción es que al mandarlo deba decir el nombre del compañero elegido",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 153,
        "nombre": "Aplausos dirigidos",
        "descripcion": "como variante del ejercicio: Ronda de aplausos, el primero, antes de mandar el aplauso indica un rubro como por ejemplo colores, con lo cual todos deberán adaptarse a la propuesta y enunciar un color previo al aplauso. Otros ejemplos pueden ser países, equipos de fútbol, profesiones, etc. En una primera instancia, como en el ejemplo anterior solo habrá dos elegidos que puedan proponer rubro, luego esto se irá ampliando hasta que todos puedan cambiar.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 154,
        "nombre": "Pelotita",
        "descripcion": "todos en ronda, de pie. Uno arroja una pelotita (lo ideal es trabajar con pelotas de tenis, que son de fácil manipulación) a otro compañero, a quien previamente seleccionó con la mirada. El juego consiste en pasarse la pelota. De esta forma al avanzar el juego se pueden incorporar más pelotas, dependiendo de la cantidad de integrantes del grupo. Es recomendable para el éxito del trabajo no incorporar la palabra. La forma de medir la atención del grupo se registra por la cantidad de pelotas que se mantienen el aire, es decir que no caen al piso. Si la cantidad de integrantes es numerosa se recomienda comenzar por cuartetos, luego unir dos cuartetos y así hasta trabajar con el grupo completo. 69 _ El pelotero: se colocan un número igual de participantes en dos hileras enfrentadas. A una distancia de un metro como mínimo. El coordinador se instala en una de las puntas de estas dos hileras y señala el recorrido de la pelota, que es el siguiente: del 1 de la hilera A al 1 de la hilera B, éste al 2 de la hilera A y así sucesivamente. Cuando llega al último de la hilera B se la pasa al anteúltimo de la hilera A y este al anteúltimo de la hilera B y así sucesivamente recorrerá el circuito. Una vez lograda la circulación de la pelota, el coordinador agregará de a una por vez, más pelotas desde los laterales. Éste es un juego clásico de atención y disociación",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 155,
        "nombre": "Misión imposible",
        "descripcion": "todos dispersos en el salón con ojos vendados y en cualquier posición. El coordinador esconderá en algún lugar del salón un reloj despertador a cuerda. Guiados por el tic_tac deben buscarlo. El primero que lo encuentra se descubre los ojos y lo cambia de lugar. Así continua el juego.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 156,
        "nombre": "Radar",
        "descripcion": "se dispersa todo el grupo por el salón, mirando todos para el mismo lado. Frente al grupo, contra la pared se dispondrán tres o cuatro compañeros. Los mismos tendrán los ojos vendados. Su objetivo será llegar a la pared opuesta. Los compañeros dispersos funcionarán como boyas o señales sonoras en el camino. Los más próximos a la salida deben emitir señales sonoras agudas y continuas, los más lejanos emitirán señales sonoras continuas, pero graves. Los radares deben atravesar el salón sin chocarse con los compañeros boyas. De hacerlo reemplazan a la boya y éste pasa a ser radar. Luego de la primera tanda de radares, se debe cambiar la orientación de las boyas y el lugar de salida del radar, para que todos tengan oportunidad de participar.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 157,
        "nombre": "Solo en la selva",
        "descripcion": "un compañero con los ojos vendados se para en el centro del salón. El resto del grupo se dispone por todo el salón; respetando el de a uno por vez, deberán emitir sonidos de animales. El del centro, deberá señalar de dónde vino el sonido, nombrar quién lo emitió y determinar qué animal reprodujo. Si el compañero es descubierto reemplaza al del centro.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 158,
        "nombre": "Presas del silencio",
        "descripcion": "todos al mismo tiempo deben caminar por todo el salón en diferentes direcciones y sentidos, al ritmo de una música externa; a la interrupción provocada por el coordinador deben detenerse. Luego, cuando se reinicia la música, también se reinicia el desplazamiento, pero esta vez, al detenerse la música, deben continuar reproduciendo el ritmo corporalmente. Así el coordinador irá estimulando con diferentes ritmos musicales en los sucesivos stops.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 159,
        "nombre": "Ronda de nombres y su variación",
        "descripcion": "se distribuyen en ronda y de a uno por vez deben decir su nombre. En la segunda vuelta, el primero dice su nombre, el segundo repite el nombre del primero y agrega el suyo, así sucesivamente hasta que el último debe decir los nombres de todos. En caso de que alguno se equivoque, se recomienza la ronda en ese punto. 88 _ Paseo del nombre: este juego aparece como una variante de “ronda de nombres” o como progresión del mismo en una sesión contigua. Todos en ronda, uno debe pasarle su nombre al de al lado de las siguientes formas: como elementos naturales (agua, tierra, fuego, aire); como sustancias (oleoso, gaseoso, gomoso, espumoso, etc.); como un animal; con gestualidad sonora (a carcajadas, llorando, en un suspiro, etc.).",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 160,
        "nombre": "reportaje y sus variaciones",
        "descripcion": "se los dispone en ronda y se le pide a cada uno que piense cinco preguntas que le haría a alguien que no conoce. Luego, se distribuyen en parejas y cada uno debe hacérselas a su compañero. Una vez terminado el reportaje, de a uno pasarán y presentarán a su reporteado bajo las siguientes características: como conductor de un programa de bailanta; como presentador de programa de ópera; como conductor de un programa de documentales; como conductor de un programa deportivo, etc. 94 _ El detective: variante del anterior. Por parejas en un tiempo de tres minutos deben recabar la mayor cantidad de información uno del otro, para luego pasar a presentarlo con la mayor precisión y veracidad posibles. 95 _ El informante: progresión del anterior. Una vez cumplidos los tres minutos, cada uno de los integrantes de la pareja debe elegir a un tercer compañero y contarle sólo tres datos del compañero reporteado. Éste a su vez, con sólo esos tres datos deberá presentarlo intentando reconstruir los datos que faltan. Su presentación no podrá ser menor de dos minutos, por lo que se verá obligado a inventar gran parte de la información.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 161,
        "nombre": "Cuidar las espaldas",
        "descripcion": "un compañero, parado de frente a una Pared, a una distancia de aproximadamente 30 cm o una baldosa, se le Pide que se deje caer hacia atrás donde lo espera para recibirlo otro compañero, el que suavemente con sus manos abiertas amortigua la recepción y lo lleva hacia la posición inicial. Es importante que la posición del receptor sea con una pierna atrás y otra adelante (para lograr una base de mayor estabilidad y fuerza), que sus manos estén a la altura de los omóplatos del compañero (para que al recibirlo no provoque quiebres en su columna y le dé mayor seguridad). La distancia entre las manos y la espalda del compañero se irá aumentando a medida que se crea confianza entre la pareja. El, compañero frente a la pared tiene sus manos abiertas a la altura del pecho y al llegar a la misma se da un suave envión hacia atrás. A medida que van rotando los roles se puede probar que el que realiza el vaivén, cierre los ojos (para perder la noción del espacio). Una variante de este ejercicio es que el que realiza el vaivén llegue a flexionar su cadera y con la ayuda del compañero, que lo sostiene desde las axilas, sentarse en el suelo. 98 _ El péndulo: variante del anterior, pero reemplazamos a la pared por un compañero. El del medio relajado pero sin perder su posición de parado se deja caer hacia atrás y hacia delante. 99 _ Los cuatro puntos cardinales: cuatro compañeros colocados en los puntos cardinales mirando hacia el centro del cuadrilátero y un compañero en el centro que se deja caer hacia cualquier lado. Es importante que el compañero del centro mantenga su posición de erguido, que esté relajado y que esté con sus pies juntos bien apoyados, sin caminar. Se debe intentar que todos transiten por la experiencia de recibir. En este ejercicio, si el grupo se encuentra preparado, se puede aumentar el número de integrantes; es importante que la rueda no sea de más de ocho participantes, dado que si no la distancia entre el ejecutante y los receptores sería mucho mayor que el largo de sus brazos.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 162,
        "nombre": "Paracaidistas",
        "descripcion": "todos en ronda, tomados mano_muñeca de los compañeros contiguos y con una apertura de pies básica (igual distancia entre los pies que la existente entre hombros) se les pide que estiren sus brazos e inclinen su cuerpo hacia atrás sin quebrar la columna, sosteniéndose por el grado de tensión de la ronda. Luego vuelven al eje y se les pide que apoyen palma con palma aproximadamente a la altura de los hombros con los compañeros contiguos y que trasladen el eje hacia delante sosteniéndose por la tensión de la ronda. En una segunda fase se agrupan de a 5 ó 6 compañeros y jugarán con estas posiciones cambiando el nivel, la cantidad de puntos de apoyo, buscando nuevos equilibrios grupales, como paracaidistas en el aire. 101 _ La hamaca: dos compañeros enfrentados se toman de las manos o de las muñecas (derecha con derecha e izquierda con izquierda), formando una hamaca donde van a alojar a otro compañero sentado al que llevan a pasear.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 163,
        "nombre": "Sin parar",
        "descripcion": "de a uno por vez deben pasar y comenzar a hablar de un determinado tema; si en el transcurso del discurso varía el tema, esto no es de mayor importancia, sino que lo que debemos tomar en cuenta es el tiempo que cada uno logra estar hablando frente a los demás. Si es necesario, se le puede sugerir que accione con uno o más elementos. El coordinador debe tomar el tiempo de cada compañero y luego decírselo. El objetivo dé este juego es que logren la mayor exposición personal frente al grupo. Este trabajo, si bien implica la confianza, no es de confianza corporal como la progresión antes desarrollada.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 164,
        "nombre": "Espejo simple",
        "descripcion": "por parejas, enfrentados a una distancia de aproximadamente un metro, un compañero se mira en el espejo y el otro hará de reflejo. Deberá tratarse de no hacer movimientos muy rápidos, que son difíciles de seguir, como también movimientos ocultos tras la espalda. A la orden del coordinador se realizarán cambios de roles para lograr que la pareja entre en sintonía. Una vez realizados varios cambios, la pareja irá efectuando independientemente los cambios sin hablar y sin acordarlos previamente, sino que cada uno comenzará su rol según las necesidades de cada pareja en ese momento. Lo que se intentará construir es un movimiento espontáneo hecho de a dos a la vez. Lo que recomendamos para los integrantes es no estar sordo a lo que propone el otro y no estar mudo en una actitud pasiva. El coordinador podrá incentivar el trabajo proponiendo cambios de niveles y distancias, como así también velocidades.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 165,
        "nombre": "Espejo grupal",
        "descripcion": "se disponen dos hileras por parejas enfrentadas y se delimita una zona en el piso, a la que no se puede transgredir, que hará de espejo. La estructura por parejas es similar a la anterior, lo que se agrega son los desplazamientos laterales (derecha, izquierda) del espejo. Como a ambos lados hay compañeros trabajando a los que se los puede molestar (sin tocarlos) habrá que estar bien concentrados. Recomendamos especial atención a los giros que se hacen difíciles de seguir, como también a determinadas posiciones de la cabeza o ponerse de espaldas, que como ya dijimos antes dificulta sobremanera el seguimiento del trabajo.",
        "etiquetas": ["Caldeamiento", " Específico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 166,
        "nombre": "Espejo que atrasa",
        "descripcion": "igual dinámica que “el espejo”, pero el compañero que hace el reflejo debe realizar los movimientos un tiempo después. Como variante de este ejercicio podemos hacer que el espejo se oponga al que se mira. Es decir, que a su criterio desarrolle la acción opuesta. Si se para, sentarse; si se aleja, acercarse; etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 167,
        "nombre": "Reflejo",
        "descripcion": "se distribuye al grupo por todo el salón, de manera tal que cada compañero tenga a la vista dos compañeros, es decir, el primero se instala frente a ellos con una mirada panorámica (ver desarrollo de mirada panorámica en Caldeamientos). Previamente se eligen algunos compañeros que a la orden del coordinador empezarán el movimiento. El juego comienza con un movimiento inicial que realizará un compañero, que se irá reflejando uno a uno a lo largo de todo el circuito. Una vez concluido el circuito, se cambia de compañero iniciador del movimiento.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 168,
        "nombre": "Último gana",
        "descripcion": "se dispone al grupo en filas en uno de los extremos más distantes de la sala. Si el grupo es muy numeroso, se arman varias filas, una detrás de la otra, que irán saliendo con una diferencia de unos segundos, una de la otra. El dispositivo es idéntico a una carrera deportiva, pero a diferencia de ésta el que va a ganar va a ser el último en llegar. La carrera se realiza en cámara lenta, es decir, el movimiento debe ser fluido y constante, sin cortes o detenciones, pero a la menor velocidad posible.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 169,
        "nombre": "Más allá del horizonte",
        "descripcion": "en colectivo y simultáneo, se dividen por parejas, cada uno de los miembros de la pareja debe instalarse en el opuesto más lejano de su compañero y mantener una conversación, sin gritar, ni utilizar la mímica. Es importante destacar que este ejercicio tiene como objeto desarrollar volumen, cuerpo de la voz y proyección.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 170,
        "nombre": "Todo a pulmón",
        "descripcion": "en ronda, el docente explicará cómo es la respiración costodiafragmática de la siguiente manera: los pulmones tienen forma piramidal y se encuentran apoyados en el único músculo transversal del cuerpo que es el “diafragma”, que a su vez divide al pecho del estómago. Cuando inspiramos debemos dirigir el aire que entra, hacia la zona lateral y baja, es decir hacia las costillas flotantes. De esta manera aprovechamos al máximo la capacidad de nuestros pulmones, ya que los llenamos desde su base hacia arriba. Es importante que para largar el aire lo hagan en forma de soplo suave y constante. Luego, por parejas, reiniciamos el ejercicio, pero uno de los compañeros debe colocar sus manos sobre los hombros del otro, para evitar que mientras éste realiza el ejercicio, no eleve sus hombros. No cargue de aire la zona superior, evitando de esta manera tensiones innecesarias. Colocará ambas manos sobre las costillas flotantes, para concientizar y sensibilizar la zona a la que debe dirigirse el aire. Realizar esta operación varias veces cambiando de roles. 120 _ El globo: parados todos en ronda, pies bien apoyados, determinando entre los pies una distancia similar a la de la cadera o la existente entre los hombros, colocamos las manos frente a la boca en posición de rezo. Luego respiramos costodiafragmáticamente y largamos el aire en forma constante y fluida en soplo. Este aire deberá ir separando nuestras manos, es decir deberemos crear una sintonía perfecta entre el soplo y la apertura de las manos, simulando que inflamos un globo. El objetivo de este ejercicio es que con la práctica, logremos cada vez inflar globos más grandes. Del simple globo de cumpleaños a la piñata. Como dijimos anteriormente, este ejercicio va a ser operativo en la medida en que el ritmo sea constante y no variable porque sólo así lograremos ampliar nuestra capacidad pulmonar. Dado que este ejercicio requiere de mucha práctica es recomendable que el docente lo enseñe en clase, pero que el alumno lo incorpore a su entrenamiento cotidiano. Como variante de estos ejercicios para la práctica hogareña también podemos realizar: la vela: colocamos una vela encendida a la distancia de nuestro brazo extendido. Con nuestro soplo debemos lograr mover la llama en forma constante, hasta que se acabe el aire, luego volver a realizar una respiración costodiafragmática y alejar la vela 10 cm. El objetivo del ejercicio es, en distancias cada vez más largas, lograr mantener la inclinación de la llama constante. La bombilla: colocar en un vaso transparente una bombilla y llenar la mitad de su contenido con agua. El objetivo de este ejercicio consiste en soplar por la bombilla para lograr burbujas de igual tamaño durante el mayor tiempo posible.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 171,
        "nombre": "Lenguado",
        "descripcion": "en circulo, el docente invitará a los integrantes a explorar las posibilidades de su lengua. Además de entrenar lo vocal, particularmente la articulación, estaremos trabajando también la desinhibición, ya que nuestra lengua se encuentra siempre íntimamente escondida y ahora la sacamos a jugar. Los ejercicios se realizan varias veces y les pedimos que saquen la lengua afuera e intenten con la punta tocarse el mentón, lo mismo para tocar la punta de la nariz; lo mismo, pero para tocarse de a una por vez las orejas; dibujen círculos con la punta de la lengua (distantes y próximos a la boca); escriban palabras en el aire con la lengua (imprenta y cursiva); exploren con la lengua la cavidad bucal; realicen un círculo cuyo perímetro sea el espacio existente entre dientes y labios; realicen rulos con la lengua (dentro y fuera de la boca) tomando como eje la línea media, tanto horizontal como vertical; prueben máxima tensión y relajación total.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 172,
        "nombre": "Dando aliento",
        "descripcion": "bien parados, con un buen apoyo, comenzamos relajando el cuello y los hombros haciendo leves rotaciones hacia un lado y el otro. Luego movilizamos la cara ablandándola (ver ejercicios específicos). Tomamos aire intentando llevarlo a la zona costodiafragmática, que largaremos lentamente colocando la boca en forma de o, bien redonda (de esta manera calentamos las cuerdas vocales). Realizamos esta operación como mínimo 5 veces. Después repetimos la operación con las otras vocales. Las inspiraciones se deben realizar Por nariz y las espiraciones por la boca. En forma lenta, pausada y consciente. Sin tensionar la zona de la garganta.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 173,
        "nombre": "Goma de mascar",
        "descripcion": "Con la boca cerrada comenzamos a masticar una goma de mascar imaginaria trasladándola por todo el interior de la boca, a esta masticación se le agrega el sonido de una M, tratando de llevar la vibración a la zona alta de la cabeza y soltando lentamente el aire por la nariz. De esta manera lo que calentamos son los resonadores.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 174,
        "nombre": "Mimantra",
        "descripcion": "este ejercicio siempre debe realizarse después de un caldeamiento fonal. Masticar la M. Luego emitirla anteponiéndola a una vocal, por ejemplo: MAAAAAA, manteniendo la intensidad del aire. Continuar con todas las vocales. El trabajo de caldeamiento vocal sirve también para “ablandar” las palabras de los textos a trabajar. Es decir, luego de realizase este ejercicio, podemos comenzar a trabajarlo con palabras sueltas y luego con un texto escrito.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 175,
        "nombre": "Trabalalenguas",
        "descripcion": "el coordinador previamente debe repartir el material, donde cada uno reciba por lo menos un trabalenguas. Luego, reunidos por parejas los deben practicar. Para mostrarlo existen dos posibilidades de acuerdo con el grado de desinhibición del grupo: en ronda; en forma individual; a modo de ejemplo: Al arzobispo de Constantinopla, lo quieren desarzobisconstantinopolizar. El que lo desarzobisconstantinopolizara, buen desarzobisconstantinoplizador será. El cielo está engarambintintangulado. ¿Quién lo engarambintintanguló? ¡Quién lo desengarambintintangulara! Un cielo desenganrambintintangulado nos mostrará. Alda ata la lata alta, la lata alta Alda la ata Como Alda ata la lata alta La lata alta está atada. Toto trota y tropa trata; Trata tropa y trota Toto.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      },
      {
        "Id": 176,
        "nombre": "Mini trabalenguas",
        "descripcion": "como variante del ejercicio: Trabalalenguas, les podemos pedir a los integrantes del grupo que memoricen una pequeña oración y que la repitan lo más rápidamente posible exagerando la articulación. A modo de ejemplo: caruhé cuarenta; compré pocas copas; tres tristes tigres. Como progresión del mismo podemos solicitarles que mientras dicen ininterrumpidamente esta frase, desarrollen alguna actividad simple. Como por ejemplo: acomodar cajas; doblar ropa; armar estatuas con un grupo de compañeros; etc.",
        "etiquetas": ["Caldeamiento", " Inespecífico"],
        "referencia": "Manual de juegos y ejercicios teatrales, Holowatuck, J. y Astrosky, D."
      }
    ]
  },
  {
    "tipodeejercicio": "Ambos",
    "ejercicios": [{
        "Id": 177,
        "nombre": "Juego de las imágenes del poder",
        "descripcion": "En el «espacio estético», los actores forman algunas imágenes de poder, de autoridad. Después, uno a uno, se colocan en relación con esas imágenes, siendo comentado el significado de cada una: proximidad o distancia, arriba o abajo, relación con ésta o aquélla. ¿Cuál es mi lugar? El director coloca en el «espacio estético» (zona de juego) una serie de objetos dispuestos de forma tal que signifiquen mayor o menor poder, usando mesas y sillas, libros, ropa y hasta el cubo de la basura. A continuación, hace tres preguntas a los participantes, siendo dadas las respuestas por los actores a través de la colocación dentro de la escena en una u otra posición (nunca verbalmente). Las tres preguntas son las siguientes: a) ¿Cuál es el lugar en el que más te gustaría estar en ese espacio? b) ¿Cuál es el lugar en el que no te gustaría estar en ningún caso? c) ¿Cuál es el lugar que consideras tuyo? Después, se comenta quién ha elegido qué y por qué motivo. Se puede también sugerir que los actores que pueden acumularse en algunos lugares privilegiados tengan derecho a una modificación, desplazándose hacia otro lugar: el mejor lugar puede variar cuando varía la posición de los compañeros.",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 178,
        "nombre": "Voz de la imagen y la imagen de la voz",
        "descripcion": "Se trata de una técnica aún en estudio, en la cual se tiende a crear diferentes voces o sonidos posibles para una imagen, voces y sonidos que combinen con esa imagen y, después, lo contrario: imágenes para sonidos y voces.",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 179,
        "nombre": "Espacio, el volumen y el territorio",
        "descripcion": "El espacio es infinito, mi cuerpo es finito. Mi cuerpo finito tiene un volumen que ocupa cierto espacio. Alrededor de mi cuerpo, sin embargo, está mi territorio, que es subjetivo. Si alguien se acerca a veinte centímetros de mis ojos, aunque no me toque, invade mi territorio, que se extiende más allá de mi cuerpo; en cada cultura, el concepto de territorio puede variar. Una mujer está sentada en un vagón de metro repleto de gente. Todos los asientos están ocupados, salvo el que está a su lado. Un hombre entra, ve el asiento vacío junto a ella y se sienta: el territorio de la mujer no ha sido invadido. La misma mujer está sentada en el mismo asiento, y todo el vagón está vacío. El mismo hombre entra y se sienta al lado de ella: está invadiendo su territorio. En este ejercicio-foro, los espec-actores sustituyen a la mujer y muestran diferentes maneras de recuperar su territorio. Otros ejemplos: un hombre en una cabina telefónica: si en la fila que está detrás de él las personas mantienen cierta distancia, no estarán invadiendo su territorio; si están muy cerca, sin embargo, oyendo lo que dice, se habrá configurado la invasión. Lo mismo ocurrirá en un banco, con las personas haciendo cola detrás de alguien que está en la caja; o con una pareja que se besa en un parque, con alguien sentado frente a ellos observando lo que hacen. Peor aún: si algunos hombres hacen cola detrás del hombre que besa a su novia...En ninguno de esos casos se llega a tocar los cuerpos de los protagonistas, pero sus territorios subjetivos han sido incuestionablemente invadidos. ¿Qué podemos hacer? Se realiza el foro.",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 180,
        "nombre": "Intercambio de máscaras",
        "descripcion": "Los actores realizan un ritual bien conocido y después cambian de papeles dentro de ese ritual: por ejemplo, los hombres representando según las máscaras usuales de las mujeres, etc., o el jefe y el empleado, el profesor y el alumno, el latifundista y el campesino, el policía y el ladrón, etc.; manteniendo todas las acciones del ritual, los dos actores cambian de máscara.",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
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
        "Id": 182,
        "nombre": "Imagen del caos",
        "descripcion": "Esta técnica se parece bastante al circuito de rituales y máscaras y puede utilizarse después de la imagen de la hora. Con esta técnica vemos al protagonista en varios momentos de su vida, momentos máximos o mínimos de placer, energía o dolor, certeza o confusión. En la imagen del caos, el protagonista observa esa disparidad y reestructura lo que es susceptible de ser modificado. Primera etapa: la improvisación. El protagonista cuenta una escena donde intervienen varios personajes: por ejemplo, una cena en familia a la que asistió y donde se habló de algo importante. Segunda etapa: el protagonista sustituye a los personajes por funciones. El protagonista elige para cada personaje una función que le corresponda: el Padre puede ser -si efectivamente lo es en la óptica del protagonista- un Capitán; el Tío, un Patrón; la Madre, una Buena Samaritana; la Hermana, una «sesentayochista»; el Hermano, un Terrorista fanático. Y así sucesivamente, siempre según la impresión del protagonista: Árbitro de fútbol, Economista del Banco Mundial, Presidente de una república bananera, Prostituta, Enfermera, Monja, Basurero, etc. En una segunda improvisación, los actores tendrán que interpretar las funciones que, como metáforas, se les han atribuido, pero conservando los lazos familiares o sociales.",
        "etiquetas": ["Ambos"],
        "referencia": "El ArcoIris del Deseo, Augusto Boal"
      },
      {
        "Id": 183,
        "nombre": "Imagen de la transición",
        "descripcion": "Un debate con medios visuales, sin palabras. El modelo Se establece el modelo, que ha de ser aceptado por la totalidad del grupo. Este modelo de lo real ha de tener por tema una opresión propuesta por el grupo; modelo real de opresión. Se pide al grupo que construya a continuación el modelo ideal, del que se elimina la opresión. Después se vuelve a la imagen real, imagen de la opresión, y se empieza la dinamización. La dinamización El animador informa a los participantes de que cada uno puede dar su opinión sobre los medios de pasar de la imagen real (opresiva) a la imagen ideal (no opresiva), haciendo como un escultor, modificando lo que juzgue necesario para transformar la realidad. Mientras que uno de los participantes está cambiando la imagen, los demás se limitan a comunicar sus impresiones o decir si juzgan la solución realizable o mágica. Una vez compuestas las imágenes de la transición (reveladoras de ideologías, expectativas, esperanzas), se procede a su comprobación práctica: a cada señal del animador, cada personaje tendrá derecho a hacer un gesto o un movimiento, y sólo uno, para liberarse u oprimir (en el caso de los opresores). Deben realizar los movimientos de acuerdo con los personajes, y no como actores. Después de varios movimientos, el director sugerirá que los participantes continúen a cámara lenta. El movimiento se detendrá cuando se hayan mostrado visualmente todas posibilidades de liberación, quedando la imagen en reposo y los conflictos resueltos, con o sin final feliz. ",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      }, {
        "Id": 184,
        "nombre": "Carrusel de las imágenes",
        "descripcion": "Pequeña técnica, modesta pero muy útil cuando se trabaja con grupos pequeños. Primera etapa: la improvisación Como de costumbre, a partir de una propuesta del protagonista. Segunda etapa: el carrusel Supongamos que trabajamos con un grupo de cinco, el participante n° 1 es el protagonista, el n° 2 el antagonista. Los otros tres observan. Una vez terminada la escena, el protagonista ocupa el lugar del antagonista, y el participante n° 3 se convierte en protagonista. Luego, el verdadero protagonista, que ahora interpreta al antagonista, sale; el n° 3 ocupa su lugar para mostrar cómo ha visto al verdadero antagonista, y el n° 4 ocupa el lugar del protagonista; y así sucesivamente hasta que todos los participantes hayan actuado, durante toda la escena o parte de ella, tanto un personaje como el otro. El carrusel puede hacerse también en el otro sentido: el primero en salir es el protagonista, cuyo papel será interpretado por el antagonista, reemplazado a continuación por el participante n° 3, continuando la rotación en ese sentido. Tercera etapa: ping-pong Después de la primera improvisación, todos pueden intervenir sustituyendo a uno u otro, el número de veces que deseen y en los momentos juzgados oportunos. El animador intervendrá solamente para garantizar que cada uno disponga del tiempo suficiente para desarrollar la acción, como protagonista o como antagonista. Primera variante Esta variante consiste en la formación de dos equipos después de la improvisación: cada equipo se encargará de sustituir sólo al uno o al otro, como en un juego, un partido, un combate. Segunda variante Los actores no hablan y utilizan su cuerpo para dialogar. No se trata de mimar, sino de utilizar el cuerpo de manera expresiva, somatizando las emociones: una comunicación sísmica. Tercera variante : Esta variante se ha transformado poco a poco en técnica de pleno derecho: 1. cuatro actores construyen su imagen de opresión y se sitúan en ella como oprimidos; sus «testigos» los observan a cámara lenta, tratan de librarse de su opresión, y los demás personajes presentes se comportan según lo que crean que representan: opresores o aliados; 2. cada actor-oprimido sale de su imagen y se integra en la siguiente, en el lugar del oprimido (en una opresión distinta de la suya); lo siguen sus testigos. Se toma un minuto para sentir esa nueva imagen y después se procede como antes; 3. después de haber recorrido las otras tres imágenes, los actores regresan a la imagen que crearon. Los testigos les dicen entonces lo que han observado en su comportamiento en las demás imágenes, y los actores de su propia imagen les dirán lo que los otros actores-oprimidos han hecho en ella; 4. se prueba una vez más. Se cierra la técnica con un intercambio de ideas entre todos los participantes.",
        "etiquetas": ["Ambos"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      },
      {
        "Id": 185,
        "nombre": "Imagen de la hora",
        "descripcion": "Esta técnica, de naturaleza prospectiva, es sencilla y resulta útil para la movilización rápida de un grupo y la comprobación estética de los elementos comunes a su miembros. Primera etapa: el juego El animador pide al grupo que camine por la sala. De vez en cuando, dará tres tipos de consignas: 1) el horario; 2) la imagen; 3) la acción. El horario será una secuencia sucesiva de momentos clave. A veces, se determinará la hora con precisión: mediodía, las catorce horas, las dieciséis, las veintidós, medianoche, las tres de la mañana, las ocho. En otras ocasiones, quedará imprecisa: el comienzo de la tarde, la llegada a casa después del trabajo, después de una cena, después de una fiesta, etc. Cuando al animador le parezca importante, podrá especificar el día de la semana: sábado por la noche, domingo por la tarde. También puede evocar fechas especiales: las seis de la tarde un día de elecciones cuando van a cerrar las urnas, la mañana del día de nuestro cumpleaños, quince segundos antes de medianoche el 31 de diciembre. También puede proponer fechas excepcionales: el día de la muerte de un presidente en ejercicio, el 7 de septiembre en Brasil, el 14 de julio en Francia, el 11 de septiembre en Nueva York, cuando el atentado contra las Torres Gemelas. El animador pedirá también, preferentemente hacia el final del juego, que formen la imagen de la cosa más desagradable que tienen que hacer con cierta regularidad, sin importar la hora o el día de la semana, y luego la de la segunda cosa más desagradable, para formar a continuación la imagen de la cosa más agradable y la de la segunda cosa más agradable. La repetición promueve la sinceridad. El animador anuncia la hora y los participantes se preparan. Dirá «imagen» y los participantes formarán, simultáneamente, la imagen congelada de lo que habitualmente hacen ese día a esa hora. A continuación, el animador dirá «acción» y los participantes comenzarán un diálogo con los personajes imaginados, con los que habitualmente están en contacto ese día a esa hora. Cada actor quedará circunscrito a su propio mundo particular, sin contacto con los demás, y deberá mostrar todos los movimientos de su cuerpo: las manos, las piernas, la boca, los dedos. Todos los movimientos que tienden a repetirse a cualquier hora del día. Esas repeticiones que conllevan la mecanización del cuerpo. Segunda etapa: el debate El director instaura el debate sobre las diferencias ocurridas y otros temas: ¿en qué momento se han sentido al máximo de su energía? ¿En qué momento disminuyó ésta? ¿Qué momentos han sido los más agitados? ¿Cuándo se sintieron más móviles? ¿Y más tranquilos? ¿Qué relaciones han establecido con los demás personajes (imaginarios)? ¿Y con animales? ¿Con objetos? ¿Teléfono, ordenador, vasos y platos, las mascotas, los amigos, la televisión? ¿En qué momento han iniciado una acción por deseo propio y cuándo han obedecido a obligaciones? ¿Cuándo se han sentido oprimidos y cuándo felices? ¿Cuándo se han sentido iguales que los demás y cuándo se han sentido originales?",
        "etiquetas": ["Ambos", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
      }
    ]
  },
  {
      "tipodeejercicio": "Temas",
      "ejercicios": [{
		"Id": 186,
		"nombre": "Múltiple imagen de la opresión",
        "descripcion": "La técnica anterior permite al grupo concentrarse muy directamente en un único problema, una única forma de opresión, un único caso concreto. La sociedad se representa en bloque, en una sola imagen. El macrocosmos se presenta en forma microcósmica. Este puede ser un modo muy efectivo de alcanzar más sucintamente y, a veces, más detalladamente el análisis de este microcosmos. Sin embargo, suele ocurrir que las posibles soluciones del problema sólo puedan ser encontradas en el macrocosmos social, y no en el microcosmos: en la multiplicidad en vez de en la unicidad. Ésta es la función de la cuarta técnica de la imagen. El modelo En este caso no es único, es múltiple. Cualquiera que sea el tema, el objetivo no es mostrar una, sino muchas imágenes que lo representen. En lugar de una imagen, el grupo puede preparar simultáneamente cinco, siete o diez. Las imágenes no deben repetirse; cuanto más variadas sean, mejor. Dinamización una vez establecido el modelo múltiple, la dinamización se hace en tres etapas. Primera: los escultores deben entrar en sus propias imágenes, con el fin de darnos su perspectiva de la opresión. Deben sustituir a la persona que los representa en la imagen, para que se advierta el punto de vista del escultor. En el modelo, vemos la opresión tal como la siente el escultor. Segunda: a una señal del director, los participantes, en cámara lenta, deben realizar la transición hacia la imagen ideal del escultor. Entonces, exclusivamente mediante movimientos autónomos (nadie es guiado por el escultor, cada persona actúa según su propia sensibilidad), se puede comprobar el carácter mágico (en el sentido de imposible y no de soñador...) o viable de la propuesta del escultor. Si la imagen ideal que el escultor desea lograr, o la transición hacia este ideal, está en los dominios de lo imposible, ese rasgo se revelará en lo ridículo de los movimientos. Tercera: la imagen vuelve al modelo original. Una vez más, a una señal del director, las figuras se mueven, pero ahora no necesariamente en dirección al ideal: cada figura debe actuar de acuerdo con el personaje que interpreta. Ello hará posible determinar hasta qué punto la propuesta del escultor era, en verdad, realizable. Esa imagen múltiple de la opresión casi siempre aclara el pensamiento del grupo. Es una de las técnicas más reveladoras. En este momento, debo insistir en que las reglas del juego deben fijarse, claras y sencillas, desde el principio. Si algo no se describe como prohibido en la presentación de las reglas, no habrá entonces prohibiciones. Si algunos participantes creen que determinada cosa ha de prohibirse, se debe a las interdicciones que han interiorizado y no al juego. En Hamburgo, por ejemplo, usé esta técnica. El tema elegido fue la familia. Las imágenes que constituían el modelo eran casi todas terribles: violencia, agresión física y psicológica. En el momento de la dinamización, me di cuenta de que los participantes buscaban soluciones para sus problemas dentro de cada imagen; se golpeaban, se agredían, cada uno dentro de su grupo. Nadie intentó dejar el microcosmos de su familia para buscar soluciones en el macro- cosmos social, en la multiplicidad de otras familias, otros grupos, otras personas. Cuando todos los movimientos llegaron a su fin (con muchos «muertos» y «heridos»), pregunté a los participantes por qué habían permanecido dentro de sus grupos particulares, cuando, en este caso, la libertad sólo podría encontrarse más allá de estos límites inmediatos. Casi todos dieron la misma respuesta: «¡Pensábamos que estaba prohibido dejar a nuestros grupos [sus familias]!». ¿Quién lo había prohibido? La técnica de la múltiple imagen está abierta a todos, incluido mundo exterior. Las personas son libres de unirse a otras imágenes: este juego no se reduce al interior de nuestros pequeños mundos. Es muy común que nosotros mismos nos sometamos a la opresión. Estamos tan oprimidos que nos oprimimos incluso cuando la opresión está ausente, o no existe. Llevamos dentro nuestra propia policía. Lo opuesto a la experiencia de Hamburgo ocurrió en Montélimar, donde las personas que interpretaban imágenes de niños escaparon por la ventana... Con esta técnica se producen también cosas reveladoras, inesperadas. Me acuerdo de que en Bari, en la costa adriática de Italia, alguien sugirió tratar el tema de la violencia sexual contra las mujeres (sólo en 1979 se produjeron más de veintiséis mil casos de violación en Italia, sin contar los miles de casos no denunciados por las mujeres, por miedo o vergüenza). Muchas imágenes evocaron este tipo de agresión. Me acuerdo especialmente de la imagen de Angelina: tres hombres la atacaban brutalmente. En la dinamización, pensamos que apartaría violentamente a sus agresores. Pero, para nuestro asombro, Angelina se limitó a modificar sus expresiones fisonómicas, dándoles ternura en lugar de odio. Esencialmente, no obstante, la escena era la misma. Cuando sus colegas la cuestionaron, Angelina respondió: «Para mí, el elemento más terrible de la violación es la violencia física del acto y no el sexo...». Vaya uno a saber... En los casos en los que esta técnica se usa y el tema divide a los participantes, como, por ejemplo, con respecto a la opresión del hombre sobre la mujer, y viceversa, es más enriquecedor presentar las escenas sucesivamente: primero, las mujeres muestran lo oprimidas que están; después los hombres, sus múltiples imágenes de opresión, también numerosas... Hay también un cuarto tipo de dinamización en casos como éste: los hombres muestran imágenes de lo que consideran una opresión ejercida sobre las mujeres, y las mujeres muestran imágenes de lo que consideran opresión de ellas mismas sobre los hombres. Padres e hijos frente a frente; profesores y alumnos, etc. Siempre que la situación lo permite, ese tipo de dinamización del modelo ofrece nuevas posibilidades de conocimiento del tema y de los participantes.",
        "etiquetas": ["Tema", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
    },
    {
		"Id": 187,
		"nombre": "Imagen de transición",
        "descripcion": "La tercera técnica consiste en trabajar un modelo, produciendo una discusión, sólo por medios visuales. Más que nunca, es vital que se prohíban las palabras, pero no la discusión, que debe ser lo más rica y profunda posible. El modelo se sigue el mismo camino del ejercicio: Ilustrar un tema con el propio cuerpo, para acercarse a un modelo que todo el grupo (o la mayoría) acepte. El tema de ese modelo debe ser una opresión, de cualquier tipo, sugerida por el propio grupo. Éste es el modelo real. Se pide después al grupo que construya un modelo ideal en el que haya sido eliminada y que todos, dentro de ese modelo ideal, lleguen a un equilibrio aceptable; una situación que no sea opresiva para ninguno de los personajes. Después se vuelve a la imagen real, la imagen de la opresión, y comienza la dinamización. Dinamización El director debe dejar claro que todos los participantes están autorizados a opinar sobre las formas de paso de la imagen real (opresiva) a la ideal (no opresiva). Cada participante actúa como un escultor y cambia todo lo que crea necesario para transformar la realidad y eliminar la opresión. Por turno. Los otros deben decir si consideran cada solución aportada realizable o mágica (¡es decir, fantástica, imposible de realizarse!), pero sin utilizar palabras, dado que la discusión debe hacerse sólo a través de las imágenes. Una vez que cada uno haya mostrado sus imágenes de transición (revelando sus pensamientos, sus esperanzas), se hace una comprobación práctica de lo que se ha discutido. A una señal del director, los personajes de la imagen comienzan a moverse. Siempre que el director dé unas palmadas, cada personaje (cada actor dentro de la imagen) tiene derecho a hacer un movimiento, sólo uno, orientado a su liberación (si está interpretando a uno de los oprimidos), o para romper la opresión (si está interpretando a uno de los opresores). Los movimientos deben hacerse de acuerdo con los personajes y no con quien los interpreta. Habiendo batido palmas varias veces, el director sugiere que todos los personajes continúen sus movimientos en cámara lenta, y a cada palmada (en un ritmo más lento) miran a su alrededor para poder situarse en relación con los demás. El movimiento cesa cuando todas las posibilidades de liberación se hayan estudiado visualmente; cuando la imagen se detiene, los conflictos están resueltos...",
        "etiquetas": ["Tema", " Específico"],
        "referencia": "Juegos para actores y no actores, Augusto Boal"
    },
    {
		 "Id": 188,
		 "nombre": "Ilustrar un tema con el propio cuerpo",
 		"descripcion": "El modelo puede desarrollarse de dos maneras: 1er método: el director invita a voluntarios para que muestren de forma visual un tema elegido. Cada uno trabaja sin mirar lo que hacen los demás, para que no haya influencias. Cada uno va al centro y, usando solamente el cuerpo, expresa el tema dado. Cuando todos los que lo deseen ya han ido al centro, el director inicia la dinamización de esas imágenes. 2º método: cuando se trata de pequeños grupos (y solamente en esos casos), el director puede sugerir que los participantes formen una rueda y, a una señal dada, todos juntos representan con sus cuerpos su versión del tema. La imagen que ofrece cada participante debe ser una imagen estática, aunque presuponga movimiento; el actor puede mostrar una imagen estática de algo captado en medio del movimiento. Cada imagen es aislada, aunque presuponga la presencia de otras personas u objetos, etc. Dinamización una vez construido el modelo, el director propone que sea dinamizado. Esto se hará en tres etapas. 1a dinamización: a una señal del director, todos los participantes que hayan ido al centro volverán y presentarán exactamente la misma imagen de antes, pero ahora todos juntos, y no uno a uno. ¿Qué ocurre? Primero cada actor mostró su propia imagen de una forma personal, subjetiva, como él veía el tema. Ahora todas esas visiones individuales juntas nos dan una visión múltiple del tema; en otras palabras, una visión general, una visión objetiva. En esta primera parte de la dinamización, el objetivo no es saber qué piensa cada uno, sino qué piensa el grupo. Unos pocos ejemplos pueden dejarlo claro. En Florencia, uno de los participantes sugirió que el tema fuese la religión. Primero, muchas personas construyeron imágenes religiosas y piadosas para ilustrar el tema: Cristo crucificado, la Virgen llorando, santos y santas, penitentes, padres y fieles... y así sucesivamente; a continuación, otros actores fueron al escenario y mostraron amantes en las iglesias, mendigos pidiendo limosna, sacerdotes severos y finalmente turistas que fotografiaban tranquilamente todo. En una ciudad del sur de Francia, un profesor pidió que sus alumnos representasen a personas famosas, reales o ficticias, como Juana de Arco, Berenice, Napoleón, etc. ¡Descubrió muchas cosas con esas imágenes! Todo lo que había enseñado en el aula a propósito de esos personajes apareció, no como lo había enseñado, sino como cada niño o adolescente había comprendido a partir de sus propios marcos de referencia y experiencia. No es raro que, por ejemplo, Juana de Arco aparezca en la cocina, oyendo voces de Dios, friendo huevos, y Napoleón repasando sus cuentas bancarias... Son ideas de niños... pero son ideas. Ideas reveladas por la imagen. Otro ejemplo: en Brasil, alguien sugirió que se abordase el tema de la violencia. Río de Janeiro es una de las ciudades más violentas del mundo, con un elevado índice de asaltos y asesinaos... Entonces no me sorprendió que alguien del grupo (en un curso que organicé en diciembre de 1979, cuando, promulgada la amnistía, pude visitar Brasil por una semana) sugiriese la violencia como tema. Pero ocurrió algo que me pareció extraordinario: todos, sin excepción, interpretaron los papeles de las víctimas de la violencia... ¡y no sin razón! Violencia en todos los niveles: física (agresión policial y militar), económica (precios abusivos de los alquileres), religiosa (penitencia), escolar (profesores uránicos), sexual (violación)..., pero era siempre la víctima quien aparecía en las imágenes: ¡al curso en cuestión asistían veinticuatro víctimas! En la dinamización, como veremos más adelante, se mostraron las causas. 2a dinamización: a una señal del director, los participantes intentan relacionarse entre sí en escena. En otras palabras, no se trata simplemente de mostrar sus imágenes, sino intentar vincularse con los demás. Cada persona puede elegir una o más imágenes, acercarse o alejarse, lo que quiera, siempre que su posi- ción se vuelva significativa en relación con los demás y los objetos que por casualidad se hayan incluido en las diversas imágenes. Si al principio cada imagen era válida por sí sola, ahora lo más importante es la interrelación, el conjunto, el macrocosmos. No es meramente una visión social, sino una visión social organizada, orgánica. La imagen no muestra más múltiples puntos de vista yuxtapuestos, sino sólo uno, global y totalizador. Por ejemplo, en un curso alguien sugirió el teatro francés como tema. Los participantes, en su mayoría actores profesionales o aficionados, no estaban muy entusiasmados con esa idea, entonces, en la construcción del modelo, propusieron imágenes bastante negativas. Alguien mirándose maravillado el ombligo; otro intentando besarse el culo; un tercero que intentaba localizar a alguien (¡probablemente un espectador!) con prismáticos; un cuarto contando su calderilla; un quinto bostezando un sexto durmiendo, etc. ¡En resumen, no estaban felices! En la primera dinamización, no ocurrió nada sorprendente; se quedara frente a los espectadores, en una imagen única de desánimo aburrimiento. ¡En la segunda, en cambio, ocurrió algo de verdad impactante! Todas las imágenes que, de una u otra forma simbolizaban a los artistas, entraron en contacto entre sí, pero ninguna se aproximó a las que representaban al público, que a su vez continuaba en un rincón bostezando y murmurando. El actor que contemplaba su ombligo fue hacia aquel que contaba su calderilla, la persona que se besaba el culo se alió con la mujer que mostraba sus senos... y así sucesivamente, pero nadie, repito, nadie hizo el menor esfuerzo para relacionarse con el público... que, a su vez, tampoco hizo ningún esfuerzo por acercarse al grupo de artistas. Debemos evitar las generalizaciones. Este incidente ocurrió en una ocasión particular, en un curso, con un grupo concreto. Pero... era un grupo integrado en una totalidad. 3a dinamización: frecuentemente ocurre, como en Río, que los participantes muestran solamente los efectos y no las causas; el resultado de la violencia, pero no su origen. En ese caso, todos los participantes eran víctimas del mismo sistema represivo. Entonces, cuando en la segunda dinamización intentaron for- mar un conjunto, el macrocosmos social, las imágenes que surgieron eran primero de ausencia de solidaridad, de unidad entre las víctimas, y de ausencia de los agentes de la violencia. Todos prefirieron interpretar sus propios papeles, en vez de mostrar a sus enemigos. En algunos casos, es una buena idea usar el tercer método de dinamización del modelo. El director da una señal y, las imágenes de las víctimas, los agredidos (objetos), se «forman en agresores (sujetos). La joven violada debe mostrar Ia imagen del violador; el hombre que paga mostrará a aquel que cobra; el mendigo, a quien le da limosna; el ciudadano, al policía; y así sucesivamente. Se trata de mostrar siempre a aquel que tiene enfrente. En el primer momento, el actor muestra uno de los dos polos Hel conflicto (él mismo) y, en el segundo momento, el polo opuesto (el otro, el agresor, el opresor). Hay aún otro aspecto interesante del trabajo, que puede ser una ayuda considerable en términos de lectura de los pensamientos, las emociones y la ideología del grupo. Si, al mostrarse a sí mismos, los participantes generalmente usan imágenes reales, cuando muestran a sus enemigos tienen la tendencia a retratarlos con imágenes subjetivas (diría incluso expresionistas), distorsionadas. Distorsionadas, pero no desde un punto de vista caprichoso, sino desde uno que revela la agresión sufrida. Las imágenes dejan de ser realistas, se vuelven deformadas, monstruosas. Todos se revelan como son (o como piensan que son), y al enemigo como lo ven o como piensan que es. Ése es, en mi opinión, uno de los temas más importantes del teatro. ¿Existe la objetividad del realismo? ¿Es realmente posible mostrar la vida tal como es? ¿Puede existir tal representación? No creo que exista, a menos que algún artista fuese capaz de expresar un punto de vista cósmico... Pero estamos en la Tierra. Los artistas son también parte de la sociedad, y para ellos no es posible ver el mundo de otra forma sino la de su propio punto de vista. El estilo realista es tan subjetivo como cualquier otro, solo que más peligroso, pues se afirma lo contrario. Me gusta la visión que las víctimas tienen de sus verdugos: si los ven de esa manera, es porque son así. Para nosotros son como los vemos. Cuando digo nosotros, quiero decir que, en el proceso estético debemos identificarnos con alguien: nosotros o el otro, no hay alternativa. En este trabajo, cuanto más víctimas sean las víctimas, cuanto más opresión sufran, más distorsionarán sus imágenes Sin embargo, el término distorsión puede usarse aquí en el sentid opuesto al usado normalmente en el sentido de restaurar la verdadera imagen. Por ejemplo: el torturador tiene una apariencia normal, se comporta con normalidad, llega a parecer un ser humano de verdad. Su imagen realista no es diferente de la de los otros hombres. Su imagen real es la que la persona torturada nos muestra. En verdad, él es como lo ve el torturado, aunque, en el estilo realista, parezca ser como cualquier otra persona. Siempre he desconfiado del realismo, y cuanto más trabajo con las imágenes, cuanto más veo lo que apenas miraba, más me aparto de ese estilo. Es importante subrayar que nuestro objetivo no es crear un estilo neoexpresionista, subjetivo, delirante e individualista. En esta construcción de imágenes, lo que importa no es ver cómo una persona oprimida ve a un opresor, sino cómo los oprimidos ven a los opresores. Si nos viésemos forzados a dar nombre a este proceso, tendríamos que llamarlo, contradictoriamente, expresionismo social, expresionismo objetivo, etc.",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "Juegos para actores y no actores, Augusto Boal"
 	},
     {
		 "Id": 189,
		 "nombre": "Ilustrar un tema con el cuerpo del otro",
 		"descripcion": "Los recursos de la primera técnica son limitados: los actores pueden usar solamente sus cuerpos. En esa segunda técnica, pueden usar los cuerpos de los otros, tantos cuantos sean necesarios. El modelo El director pide voluntarios que ilustren un tema propuesto por el grupo. Terminado el modelo, el director consulta al grupo que puede disentir de la imagen presentada (se deshace totalmente el modelo), estar de acuerdo (se conserva el modelo) o admitirla parcialmente (se modifica el modelo hasta llegar a un consenso). En este caso director consulta al grupo y elimina a los que el grupo considera que no tienen función alguna o que no convienen al sentido de la imagen. El grupo debe ser consultado en todo momento, siendo, en último análisis, el constructor de la imagen colectiva del tema. Es importante que la persona que construye la imagen trabaje rápidamente, para que no se sienta tentada a pensar con palabras (lenguaje verbal) y, por tanto, a traducir palabras en imágenes (lenguaje visual). Las imágenes no deben ser una traducción, sino el propio original. De lo contrario, se empobrecerán. Algunas veces, el grupo no produce una imagen colectiva, con la que todos estén de acuerdo. Por ejemplo, en Turín, un grupo intentaba presentar la imagen de la familia, pero las versiones eran tan numerosas y variadas, que no se llegaba a ningún acuerdo. Al principio, me sentí un poco desconcertado, pero luego me explicaron la causa: Turín tiene una población de cerca de dos millones de habitantes, de los cuales menos de la cuarta parte son turineses verdaderos; los demás, atraídos por la oferta industrial de Turín (especialmente en las fábricas de la Fiat), llegan de todas partes de Italia, principalmente del sur. Es decir, el grupo estaba formado por italianos, pero de culturas totalmente diferentes -Calabria, Milán, Nápoles, Sicilia, etc.-, y está claro que cada escultor estaba pensando en su familia, en su cultura. El tema de la. familia es, por otra parte, una constante en la trayectoria del Teatro del Oprimido, siendo tal vez el más discutido. en todas las sociedades existe familia. ¿Cuál? En cada una, se trata de una familia diferente, dependiendo de la cultura, clase, país, régimen, edad del escultor, etc. Como ya he comentado antes y aun arriesgándome a repetirme doy aquí algunos de los muchos ejemplos que existen: Una familia portuguesa (en la ciudad de Oporto, al norte del país): hombre presidiendo la mesa, comiendo; una mujer de pie a su lado, sirviéndole la comida; dos chicos y dos chicas, sentados a la mesa, comiendo y mirando a la figura masculina central, que ejerce todos los poderes. Una familia portuguesa (en Lisboa, capital del país): la misma imagen alrededor de la mesa, con la diferencia de que todos están ahora mirando al mismo punto fijo, un mueble distante de la mesa (el televisor). Las dos chicas se sientan ahora en el suelo. Han cambiado muchas cosas y muchas se han conservado: la figura masculina sigue siendo la figura central, el hombre conserva su lugar, la mujer sigue sirviéndolo, pero esa figura ya no monopoliza las atenciones generales, ni el poder de información, que ahora pertenece a los medios de comunicación de masas. Una familia sueca: en 1977, durante un curso que realicé en Estocolmo, como parte del Festival de Skeppsholm, los participantes conformaron una imagen de la familia; dos años después, en el Teatro Municipal de Norrkóping, otro grupo reprodujo exactamente la misma imagen: una mesa en el centro, con dos o tres personas a su alrededor, pero de espaldas a ella y de espaldas unas a otras; al fondo, cerca de la puerta, una mujer de espaldas a la mesa y a todos, mirando por la ventana, hacia fuera. Un grupo de personas reunidas alrededor de la mesa, sin verse, sin mirarse, todas calladas. Una familia en Godrano (Sicilia): la mesa nuevamente, con hombres, sólo hombres, jugando una partida de cartas; en una silla distante, una mujer acaricia (agobiándola) a una joven de unos veinte años, apretándola contra su pecho como si fuese un recién nacido; otra mujer, más distante, sentada, cosiendo el ajuar. No se necesitan mayores explicaciones para que podamos comprender las relaciones patriarcales y machistas en esta sociedad. Una familia estadounidense: me presentaron esta imagen en Nueva York, Berkeley, Milwaukee, Illinois. De norte a sur, de este a oeste, por todas partes y tantas veces que es casi un cliché: un hombre sentado en una silla (hay una mesa, pero arrinconada en la pared) y alrededor del personaje masculino, una mujer y varios jóvenes, todas las cabezas casi juntas y todos mascando chicle... Sólo estoy contando lo que he visto. Una familia alemana: primero fue en Hamburgo en 1979. Un hombre sentado, aparentemente al volante de un automóvil, concentrado en la tarea de conducir. A su lado, una mujer, orgullosa del coche, pero preocupada por los tres niños en el asiento trasero, peleándose, dándose empujones y golpes. Ante esta imagen, primero pensé que estaban exagerando: el hombre parecía tan orgulloso de su coche que ni siquiera prestaba atención a su familia. Hice un comentario y alguien respondió, con una risa de aprobación de todo el grupo: «Aquí en Alemania las preocupaciones masculinas, en orden decreciente, son: el coche, la mujer, el perro... y finalmente los niños». Todos rieron, pero aun así no estaba convencido hasta que unos meses más tarde, trabajando en Berlín con un grupo completamente diferente, volví a ver exactamente la misma imagen. Y, al comentarla, alguien corrigió: «Sólo que la segunda preocupación no es la mujer, sino el Perro...». Claro que no es así, pero también está claro que oí bien lo que se dijo. 82 Una familia florentina: una fila camino de la iglesia. Las abuelas guían a los abuelos, las mujeres a sus maridos, las madres a sus hijos..., una larga fila camino de la iglesia, con poca religiosidad en los rostros. Todos coincidieron con la imagen, aclarando que faltaba un elemento vital: un hombre meando en el muro... ¡libertad! Una familia mexicana: en el centro, una imagen de la Virgen María, con los brazos extendidos, con una mujer de cada lado, a sus pies, rezando. De un lado, la figura de un hombre, borracho, golpeando a una mujer que se defendía. Detrás de él, tres chicos hacían gestos semejantes de agresión: en realidad, estaban cumpliendo con su iniciación en la edad adulta; al lado de la mujer que intentaba defenderse, tres chicas también aprendían a defenderse. Toda la escena se da bajo la mirada complaciente de la Virgen María... México es un país muy religioso. Una familia lésbica: es evidente que no siempre las imágenes son universales. En Suecia, vi a dos mujeres cogidas de la mano acompañadas de una niña. Algunas personas protestaron: «Eso no es una familia». La actriz replicó: «Es mi familia...», y continuó tranquilamente esculpiendo su imagen, que acentuaba en los menores detalles la dulzura de la fisonomía. Era su familia y estaba feliz. No era una familia típicamente sueca, pero eso no importaba. Una familia egipcia: un cuadro espléndido. Una mujer sentada con los brazos levantados, como si estuviese sujetando un plato; un hombre de pie, detrás de ella, comiendo del plato que ella sujetaba y, al mismo tiempo, manteniendo distante a un grupo de chicos y chicas, sentados en el suelo, uno detrás del otro, en una fila sólida (cada uno sentado entre las piernas del que estaba detrás), con los brazos extendidos hacia el plato prohibido, esperando las sobras. Una familia argentina: conmovedora, triste, indignante-Muchas personas sentadas en torno a una mesa; otras, la mayoría de pie; una silla vacía y todos mirándola: añoranzas de su ocupante ausente. Viví exiliado en Argentina durante cinco años. Conozco decenas, tal vez centenares de familias argentinas. No conozco una, ni siquiera una! que no tenga en su casa una silla vacía, una silla que había pertenecido a alguien asesinado, sometido a tortura, por el régimen militar; a algún desaparecido (según Amnistía Internacional, fueron más de treinta mil), o a alguien que huyó o se exilió. Esa imagen de la silla vacía fue hecha por un argentino, pero perfectamente podría haber sido obra de un uruguayo o chileno, paraguayo o boliviano, de cualquier país de este continente cubierto de sangre. Podría haber sido hecha en nuestro país, principalmente alrededor de 1971, cuando me detuvieron y cuando Brasil sufría el período más fascista de la represión. Una familia brasileña: una mesa patas arriba, con diez o doce personas apiñándose en ella, como náufragos que se aferran a una tabla de madera. Dinamización (varias posibilidades) 1a dinamización: hacer un movimiento rítmico, contenido dentro de la imagen. Ejemplo: la imagen estática de un hombre comiendo ofrece cierta cantidad de informaciones: es una imagen que habla. No obstante, hay miles de ritmos, miles de maneras de comer. En esta fase de la dinamización, la imagen debe comer con un ritmo que nos dará más informaciones, ampliando lo que ya estaba contenido en la imagen estática: ¿come rápidamente o despacio?; ¿devora la comida o saborea cada bocado? 2da dinamización: la imagen, al mismo tiempo que ejecuta un movimiento rítmico, dice una frase que, en la visión del actor, Presenta al personaje presentado. Seamos claros: quien habla es el personaje y no el actor. Así, si un actor, de buen carácter, hace el papel de una persona mala, es ésta quien tiene la palabra no el actor de buen carácter. 3a dinamización: la imagen hace su gesto rítmico, diciendo su frase, y comienza también a hacer algo, algún movimiento relacionado con la imagen estática; en otras palabras, si la imagen está comiendo, ¿qué hará después? Si está andando, ¿hacia dónde va? Si está agrediendo a alguien, ¿cuáles son las consecuencias?",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "Juegos para actores y no actores, Augusto Boal"
 	},
     {
		 "Id": 190,
		 "nombre": "Recordando una opresión actual",
 		"descripcion": "El mismo ejercicio. Ahora el copiloto debe solamente sugerir posibles acciones capaces de, eventualmente, ayudar a romper con la opresión que se está contando. Es el protagonista que, en su imaginación, aun bajo las indicaciones del copiloto, debe romper con esa opresión. Este ejercicio se convirtió, más tarde, en la serie de Arco iris del deseo, en la Técnica de la imagen y contraimagen.",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "Juegos para actores y no actores, Augusto Boal",
         "ejerciciosrelacionados":["Memoria: recordando el día de ayer","Memoria y emoción: recordando un día del pasado","Memoria, emoción  e imaginación","Recordando una opresión actual"]
 	},
     {
		 "Id": 191,
		 "nombre": "Gran juego del poder",
 		"descripcion": "Una mesa, seis sillas colocadas junto a la mesa y, encima de ésta, una botella. Se invita a los participantes a que, por turno, acomode los objetos de manera que una de las sillas alcance una posición superior, más fuerte, de mayor evidencia o mayor poder, en relación con las demás, la mesa y la botella. Cualquiera de esos objetos puede ser movido y colocado sobre otros, o al lado, o en cualquier lugar, pero ninguno llevado fuera del espacio. El grupo trabajará, sin interrupción, un gran número de variaciones en las estructuras posibles, intentando comprobar cómo una estructura espacial contiene puntos fuertes y débiles: se trata siempre de una estructura de poder. En cualquier lugar donde estemos, vivimos siempre en estructuras espaciales de poder. Cuando vamos al banco, si entramos en la cola del cajero, tenemos muy poco poder; si nos sentamos a la mesa con el gerente, crece nuestro poder; si el gerente, para colmo, tiene una sala reservada, nuestro poder será aún mayor: nos ha recibido el jefe. Estructuras espaciales de poder existen en todas partes: en el aula, en la iglesia y hasta dentro de casa. ¿Dónde está el lugar del padre?: ¿cerca de la nevera o cerca del televisor, o presidiendo la mesa? ¿Y el de la madre?: ¿cerca de la puerta de la cocina? ¿Y el de cada hijo? Muchas veces, los niños pelean para conquistar tal o cual lugar en la mesa: están luchando por el poder, no por el lugar, porque la comida es la misma... Después de cada organización del espacio, cada uno debe decir por qué siente que esta o la otra es más fuerte, más poderosa: claro que no hace falta llegar a un acuerdo: la pluralidad de sentimientos y opiniones se vuelve estimulante y creativa. Se elige después una estructura determinada, que puede ser una de las que han sido creadas u otra cualquiera, como, por ejemplo, una silla detrás de la mesa frente a dos pares de sillas y una más en el medio, atrás, y se pide a los actores que, uno a uno, entren en esa estructura espacial y coloquen su propio cuerpo en una posición donde reciba el máximo de poder de esa estructura: ¿sentado en una de las sillas, de pie o debajo de la mesa, dónde? cuando se llega a la elección de una de las posiciones, se invita a los demás actores, siempre uno a uno, a que entren en la estructura donde ya está el actor que ha formado la imagen más poderosa y, colocando sus propios cuerpos en algún lugar, intenten conquistar para sí el poder. Cuando éste sea el caso, los dos actores se quedan inmóviles en sus posiciones, y un tercero intenta conquistar para sí el poder que el segundo ha arrebatado. Después, siempre que alguien conquista ese poder, permanece en escena, aumentando el número de personas que participan de la estructura espacial. Por poder se entiende aquí volverse el centro de atención, como la imagen de Kennedy muerto en su coche es la imagen más poderosa de la foto, o la del Papa tras recibir un disparo en su automóvil: uno está muerto, otro gravemente herido, pero ambos atraen la atención de quien mira las fotos: ¡ambos tienen poder! Este juego sensibiliza a los participantes porque permite que tomen conciencia de que ninguna estructura espacial es inocente: todas tienen un significado y una desigual distribución de poder: que se aproveche o no es otro asunto...",
 		"etiquetas": ["Tema"," Específico"],
         "referencia": "Juegos para actores y no actores, Augusto Boal"
 	},
    {
		 "Id": 192,
		 "nombre": "La imagen de las imágenes",
 		"descripcion": "Esta técnica pretende crear relaciones entre las opresiones individuales y las vividas por el conjunto del grupo. Primera etapa: las imágenes individuales Se forman subgrupos de cuatro o cinco personas; dentro de cada subgrupo cada persona tiene dos minutos para traducir en imagen una opresión actual sentida o sufrida en el pasado, pero que sigue estando presente en su memoria emotiva. Para construir esa imagen, utiliza a los demás miembros del grupo y los objetos disponibles en el sitio donde estemos. La imagen puede ser realista o surrealista, simbólica o metafórica: lo importante es que sea verdadera o que el protagonista la sienta así. Después de escupir la imagen, el protagonista ocupa su lugar en ella, es decir, el del oprimido. No se puede hablar durante el proceso; -estamos utilizando el lenguaje de la imagen que, en este caso, excluye las palabras. Para hacerse entender durante la construcción de la imagen, cada actor puede utilizar el lenguaje del espejo, produciendo él mismo el gesto o la expresión del rostro que desea ver reproducidos por la estatua, o el lenguaje del modelado, tocando las estatuas con las manos, como haría un escultor. La prohibición del uso de la palabra permite a los participantes ver la imagen, que es lenguaje en sí misma. Si se traduce en palabras, todas las proyecciones e interpretaciones que podrían haber hecho los observadores quedan reducidas a una sola: se destruye la polisemia de la imagen. Es precisamente en esa polisemia donde reside la riqueza de este lenguaje. La relativa rapidez con la que deben construirse las imágenes no sólo sirve para dotar de ritmo al trabajo, sino sobre todo para evitar que el actor, al disponer de más tiempo, piense en palabras para a continuación traducirlas en imágenes: si lo limitamos a dos minutos, tenderá a pensar en imágenes. Segunda etapa: el desfile de las imágenes En el espacio estético cada subgrupo muestra al grupo grande, una por una, las imágenes que ha hecho. Los participantes hacen comentarios objetivos - lo que todos pueden ver- o subjetivos: esto me recuerda... eso me evoca... parece que esto es... El animador debe dejar claro que esas afirmaciones subjetivas son percepciones individuales que, bajo ningún pretexto, deben entenderse como interpretaciones. Componen el espejo múltiple de la mirada de los demás, que es la base esencial de las técnicas introspectivas presentadas en este libro. Debemos señalar y hacer ver a los participantes las formas que se repiten en las distintas imágenes, los detalles recurrentes. Si el grupo es homogéneo, es probable que muchos gestos y relaciones físicas sean parecidas y se repitan insistentemente. Tercera etapa: la imagen de las imágenes A continuación el grupo grande forma con esas imágenes una imagen única que contenga los elementos recurrentes de todas ellas, y también aquellas que más los hayan impresionado: es la imagen de las imágenes, una imagen sintética. Se empieza por la imagen del oprimido mismo: los participantes muestran con sus cuerpos la imagen que se hacen del oprimido, la que más los estimula. Se elige la imagen más representativa, que habrá obtenido el consenso del grupo. Si dos imágenes son igualmente representativas y bien distintas una de otra, podemos elegir las dos, duplicando el proceso, que a partir de ese momento se llevará en paralelo. Elegir tres imágenes vuelve el ejercicio demasiado lento y pesado. Alrededor de la imagen central del oprimido se construirán las demás, representativas del caleidoscopio de las imágenes mostradas anteriormente. Se forma así la imagen síntesis de las imágenes individuales, que debe contener todas las imágenes de opresión, sin excluir las posibles alianzas. Cuarta etapa: las dinamizaciones Antes de dinamizar la imagen síntesis, el director ha de comprobar la adecuación entre las imágenes presentadas y los actores. ¿Se identifican los intérpretes con las imágenes que interpretan? Los que responden afirmativamente permanecen en la escultura, los que responden negativamente deben ceder su lugar a los que se identifiquen con las imágenes, aunque, por ser de otro grupo, no figurasen en la imagen original. Si no hay ningún participante que identifique determinadas imágenes, el director preguntará si alguien puede al menos reconocerlas. Como antes, se procederá a la sustitución por los que las reconocen: los actores que reconozcan claramente la imagen formarán parte de ella. Si, caso rarísimo, alguna imagen no ha sido identificada ni reconocida, el director preguntará -primero, como siempre, a los actores que están en escena, y después a los demás- si alguien siente algún tipo de resonancia con ellas, procediendo seguidamente a la sustitución. Primera dinamización: el monólogo interior Durante dos minutos, tiempo aproximado, variable según la creatividad del grupo, todos los actores de la imagen dirán en voz alta, sin detenerse, los pensamientos que les vengan a la mente como si pertenecieran a sus personajes, es decir, no como actores, sino como personajes; en cierto modo, su monólogo interior. Resulta difícil, pero los actores se acostumbran, y a menudo sucede que transcurridos los dos minutos los actores todavía tienen cosas que decir. Esta etapa da vida a las imágenes: informa la forma. Segunda dinamización: el diálogo Durante otros dos minutos, los actores, inmóviles, podrán dialogar. Como no pueden moverse, si alguno desea hablar con otro al que no ve, deberá encontrar la manera de sortear esa dificultad. Tercera dinamización: el deseo a cámara lenta A cámara lenta y sin hablar, sin emitir ningún sonido, los actores se moverán y, mediante sus gestos y movimientos, revelarán los deseos de sus personajes, expresados anteriormente con palabras a través del diálogo y el monólogo. Variante: en lugar de trabajar sobre la imagen sintética de un solo grupo, cada subgrupo crea su propia imagen-síntesis, y el resto del proceso es idéntico, sólo que multiplicado. ",
 		"etiquetas": ["Tema"," Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
     {
		 "Id": 193,
		 "nombre": "Imagen y contra-imagen",
 		"descripcion": "Esta técnica tiene un enorme poder de movilización, pone a todo el grupo en marcha y presenta la ventaja de prepararlo para realizar nuevas técnicas, además de «estetizar» más claramente los temas y problemas que van a discutirse y analizarse. Primera etapa: las historias El animador explica la técnica y pregunta a qué participantes les gustaría contar la historia de una opresión vivida aceptando que el grupo la trabaje. El grupo se divide en dos: la mitad de los participantes cuenta las historias y la otra mitad escucha. Así, cada protagonista tiene su copiloto, única persona que escuchará la historia tal como aquél la cuente, en voz baja. Se forman las parejas y se reparten por la sala. Es importante que todos mantengan los ojos cerrados. Si el protagonista ve a su copiloto, verá también sus reacciones, lo que podría influir en su narración; se centraría más en el juicio del copiloto que en la historia que está reviviendo. Igualmente, es importante que el copiloto mantenga los ojos cerrados, para concentrarse también él en la historia, que podrá sentir e imaginar mejor, y no en la persona del protagonista. Si le faltan elementos de comprensión, el copiloto puede y debe hacer preguntas: ¿Cuándo? ¿Cómo? ¿Dónde? ¿De qué color? ¿Fue violento? ¿Hacía calor? ¿De quién era la casa? ¿Había más gente alrededor? ¿Adonde ibas? ¿Por qué decidiste comportarte así? ¿Era alguien grande o más bien pequeño? El copiloto hace las preguntas que quiera, sin juicios de valor, e intentando no desviar al piloto de la historia que realmente tiene ganas de revivir. Quince minutos son suficientes para esta etapa. Cuando el director ve que la mayoría ha terminado, advierte a los demás de que el tiempo ha transcurrido, dejando unos minutos suplementarios a los que no hayan acabado sus relatos. Hay que evitar herir la sensibilidad del narrador y su confidente. Secunda etapa: la formación de dos imágenes Una vez terminados los relatos, el director reúne a los participantes y pregunta qué parejas, compuestas por el protagonista-piloto y el copiloto, han conseguido formarse imágenes claras y profundas de la historia contada. Es importante que el copiloto haya sido un verdadero copiloto realizando el mismo viaje que el protagonista; que no haya reducido su papel al de simple voyeur. Se elige a la primera pareja. Sin mirarse, construyen sus imágenes con los cuerpos y objetos disponibles en la sala (todo es vocabulario en este lenguaje visual, los cuerpos humanos y las cosas, las líneas y los colores). El protagonista construirá la imagen de lo que ha contado y el copiloto la imagen de lo que ha escuchado. No se trata de construir imágenes realistas, sino imágenes reales, vivas y subjetivas. No es un reportaje fotográfico sino una elaboración poética, verdadera, íntima, que muestra cómo cada uno ha vivido la escena. El protagonista ocupará su lugar en su propia imagen y el copiloto ocupará el lugar del protagonista en la suya. Tercera etapa: observaciones sobre las dos imágenes El animador estimula el intercambio de observaciones acerca de los parecidos y diferencias entre las imágenes, la posición del protagonista respecto de sí mismo y de los demás, la distancia entre los personajes, cuáles están presentes aquí, ausentes allá, su número, etc. Hay que distinguir siempre dos niveles de comentarios: el objetivo -indiscutible, pues todos lo ven- y el subjetivo, de tipo «Me parece que...», «Esto me recuerda a...», etc. También resulta interesante escuchar lo que tienen que decir los constructores de las imágenes sobre lo que han hecho, y conocer sus impresiones sobre la imagen del otro, sin hacer ningún juicio de valor, despreciativo o valorizador; se trata sólo de destacar este o aquel aspecto. Esta etapa excita siempre la curiosidad y habrá siempre algún participante que quiera conocer la historia origen de las imágenes. El animador se opondrá a ello. La única persona que debe conocer la historia es el copiloto. Es la única forma que tenemos de trabajar con la realidad de la imagen, es decir, con la imagen que tenemos ante nosotros, real y concreta, y no con la imagen de la realidad, que pertenece exclusivamente al protagonista y al copiloto. Si por casualidad conociéramos la historia, esta etapa se desvirtuaría y el intercambio de ideas se transformaría en una simple tentativa adivinatoria, en un juego de sociedad. Cuarta etapa: las dinamizaciones Pueden ser múltiples y diversas, según la naturaleza de las imágenes y el interés del grupo. Los tres deseos En el modo de los tres deseos, el protagonista puede modificar su imagen tres veces, mostrando lo que quiere transformar de su realidad, materializada en la imagen. El animador informa al copiloto de que a partir de la posición de protagonista que ocupa en su imagen, y en la misma secuencia de los tres deseos, podrá expresar lo que a su juicio son los tres deseos del protagonista o bien expresar sus propios deseos, es decir, lo que a su juicio serían sus deseos si él fuese el protagonista. Al final de los tres deseos, habrá un intercambio de observaciones sobre lo que hayan hecho uno y otro: el camino recorrido por cada uno, las dudas, las elecciones. Se respetarán siempre los dos niveles de observación: «Esto se ha hecho así, todos hemos podido verlo» y «Me parece que esto quiere significar aquello...». No habrá ninguna explicación oficial, definitiva, pero todos tendrán derecho a expresar sus opiniones, sus sentimientos; ¡nuestro método se basa en el espejo múltiple de la mirada de los demás! La comprobación del deseo posible y del deseo utópico El director pide a los constructores de imágenes que retomen sus posiciones iniciales. A cámara lenta, el protagonista y el copiloto intentarán ejecutar los mismos movimientos y las mismas modificaciones realizadas en la dinamización de los tres deseos. Pero, esta vez, los demás personajes que forman parte de la imagen -tratando de sentir quiénes son, lo que representan, y obrando según esa intuición- tendrán derecho a moverse, también a cámara lenta, intentando contrariar los deseos del protagonista y del copiloto cuando sientan que deben hacerlo, o ayudarlos si sienten que son sus aliados. Finalizada esta comprobación, habrá un nuevo intercambio de ideas e impresiones. El intercambio de pilotos Todos regresan a sus posiciones iniciales y el director pide al protagonista y al copiloto que intercambien sus puestos. A continuación, se repiten las dos dinamizaciones anteriores.",
 		"etiquetas": ["Tema"," Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
     {
		 "Id": 194,
		 "nombre": "imágenes de la imagen",
 		"descripcion": "No debe confundirse esta técnica con «la imagen de las imágenes», en la que se pretende crear una sola imagen, sintética, de todas las imágenes esculpidas por los participantes. Aquí se trata de hacer lo opuesto: los participantes deben esculpir imágenes diferentes a partir de una imagen original. Primera etapa: la improvisación El protagonista explica cómo habrán de improvisar los participantes, proporcionándole a cada uno su motivación (su voluntad, su deseo), pero también su caracterización (cómo se ejerce ese deseo, con qué características). Segunda etapa: la formación de imágenes Después de la improvisación, tres, cuatro o cinco participantes esculpirán, a su vez, una imagen de la escena tal y como la hayan percibido, utilizando a los mismos actores que formaban parte de la imagen inicial. Cuando el primer participante haya acabado de esculpir su imagen, los actores improvisarán la misma escena, conservando la imagen tal y como ha sido esculpida: pueden realizar los movimientos que deseen sin alterar la imagen o las relaciones existentes entre su imagen y las de los demás. La estructura general ha de permanecer equivalente. Seguidamente, el segundo participante realizará su imagen, con la que se hará una nueva improvisación. Se repetirá el proceso hasta llegar al último participante. De este modo, tendremos la misma improvisación original «reimprovisada» varias veces, según las imágenes construidas. Cada «reimprovisación» mostrará la misma escena bajo una nueva luz, desde un nuevo ángulo. Las mismas palabras y las mismas frases tendrán sentidos nuevos y a veces antagónicos, o solamente matizados; la imagen «filtra» las palabras, dándoles un nuevo color, desvelando otras significaciones.",
 		"etiquetas": ["Tema"," Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
	 {
		 "Id": 195,
		 "nombre": "Imagen caleidoscópica ",
 		"descripcion": "Esta técnica pretende explorar las imprecisiones, las ambigüedades, las polisemias que pueden existir en la percepción de un acontecimiento. A veces necesitamos conocer los límites de una escena con precisión. En otros casos, no debemos buscar líneas exactas de demarcación, sino, por contrario, superposiciones, lo borroso, el «quizá», el «¿quién sabe?», porque es justamente ahí, en lo supuesto, en lo vago, donde se esconde algo, un conocimiento que quizá podrá ser revelado estéticamente. Independientemente del efecto terapéutico que pueda tener el Teatro del Oprimido, dicho efecto, en la medida en que se trata de arte, sólo podrá obtenerse a través de los medios estéticos, a través de los sentidos. Esta técnica habla de lo circunstancial y de lo aleatorio, trabaja con la materia bruta y no con el producto refinado; con el trigo y el salvado, con el mármol bruto de donde surgirán los trazos de la estatua. Ya no se trata de decidir que esto no es aquello, sino que esto es esto y aquello. Primera etapa: la improvisación. El protagonista improvisa su historia, en la que interpreta su propio papel. Elige a los demás actores, que seguirán sus indicaciones y deberán crear dentro de los límites establecidos por él. Una improvisación consiste en la combinación de consignas dadas al actor y de experiencias ya vividas por él. Segunda etapa: la formación de imágenes. Los actores forman con sus propios cuerpos imágenes individuales suscitadas por la improvisación inicial. Las imágenes pueden consistir en una identificación con el protagonista (soy como él...), un simple reconocimiento (no soy yo, pero sé quién es...), o una simple resonancia (esto me recuerda a...). Las imágenes, creadas a partir de la improvisación inicial, serán estatuas inmóviles. Tercera etapa: la formación de parejas con testigos. Cada imagen busca, de manera subjetiva, su complemento. Si dos actores eligen al mismo actor como complemento, será este quien decida con quién formará pareja. Para que sea posible hacer un caleidoscopio, se deben formar por lo menos cinco pares. A continuación, se asignará un testigo a cada pareja. El testigo ejerce una doble función: reforzar el espacio estético con su mirada y aportar su testimonio. Fortifica el espacio estético porque, debido a su presencia, los dos actores tendrán plena conciencia de que están siendo observados. Vivirán la escena y, simultáneamente, se la estarán mostrando a un testigo. Cuarta etapa: la feria. En esta cuarta etapa, las parejas constituidas improvisarán sus escenas, cada una ante su testigo. Esta multiplicidad de improvisaciones presenta igualmente una doble función: libera a los actores de la excesiva presión ejercida por la presencia de un público, y crea una intimidad solitaria, pues cada uno se preocupa de su propia escena. El testigo se hallará en la misma intimidad solitaria que los actores. Las improvisaciones pueden hacerse de dos maneras: sin que los actores revelen lo que las imágenes significan para ellos -improvisación totalmente aleatoria- o de una manera mucho más directiva, decidiendo por ejemplo sobre el decorado donde tendrá lugar la improvisación, nombrando las imágenes creadas o revelando lo que cada uno desea obtener del otro. El protagonista y el antagonista de cada escena tienen derecho a pasearse por esta feria, comunicándose eventualmente con los personajes de las otras escenas. Los testigos deben observar las relaciones entre ambos, pero también los movimientos de una escena a otra, observar lo que atrae a cada uno en las demás escenas y los movimientos del cuerpo del protagonista, que constituyen en sí mismos un discurso, una escritura, que después serán leídos, para que el protagonista pueda tomar conciencia de lo que ha hecho y de cómo lo ha hecho. Para evitar una confusión excesiva, después de unos minutos de improvisación libre el director pide a las parejas que sigan con mayor delicadeza y armonía: lenta y suavemente. Los actores, que ya estarán estimulados, tendrán la oportunidad de ahondar aún más en sus percepciones, sentimientos y emociones. Quinta etapa: las «reimprovisaciones». Después de la feria, se procede a las «reimprovisaciones». Cada pareja se presenta ante el conjunto del grupo y su testigo cuenta lo que ha visto, -cómo lo ha visto, lo que ha sentido, lo que ha percibido. Después del testimonio, la pareja vuelve a improvisar la escena sin hacer comentarios sobre lo que ha dicho el testigo, intentando esta vez mostrar con mayor intensidad lo que improvisaron anteriormente, ya sea para reforzar lo que ha dicho el testigo, ya para negarlo. De este modo, una por una y precedidas por sus testigos, todas las parejas pasarán ante el grupo para que todos los participantes en las improvisaciones transmitan lo que han percibido y sentido. Podrán expresar su admiración ([12]2) por lo que han visto, dejando a otros la posibilidad de hacer lo mismo. No se puede contradecir, sólo hacer contra-propuestas; ése es el sentido de admirar y de admiración. Sexta etapa: el debate. El director propone debatir sobre el conjunto de la experiencia, ya que en general el intercambio de ideas justo después de las representaciones se centra únicamente en lo que acaba de suceder, sin referencia al conjunto de las improvisaciones.",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
     {
		 "Id": 196,
		 "nombre": "Gesto ritual",
 		"descripcion": "Modelo.El animador pide que alguien realice un gesto ritual, es decir, un gesto que pertenezca a una determinada estructura social de acciones ritualizadas. Los demás lo observan. Cuando alguien crea haber averiguado a qué ritual pertenece el gesto, lo completará con otro, igualmente ritualizado. Una segunda persona, una tercera, y todas las que crean haber comprendido el gesto inicial y los gestos derivados, formarán una imagen estática del ritual propuesto por el primer gesto. Los participantes sólo podrán comprender y completar los gestos rituales que pertenezcan a una sociedad determinada, a una cierta cultura o a un momento histórico dado. Dinamización del modelo. Ritmo, palabra, movimiento. A la señal del animador, los que integran la imagen tienen que producir un ritmo, sugerido por la posición que ocupan. El ritmo enriquece la información sobre la imagen. A otra señal, cada uno dice y repite la misma frase, para que ninguno influya sobre los demás. El animador pide a cada participante que repita su frase, que será del personaje y no del actor. Durante esta etapa, el gesto ritual original puede estar mal interpretado. En ese caso, sus intérpretes pronuncian frases sin relación con la imagen compleja. Aun así, la imagen es reveladora: ¿por qué ese malentendido? ¿Qué tipo de ambigüedad existe en el gesto ritual para que pueda comprenderse mal? ¿Qué relaciones existen entre lo que se ha entendido y lo que quería darse a entender? El error artístico es de distinto tipo que el error científico: el menor error en un cálculo matemático invalida resultado final; en el arte, dicho error puede ser fuente riquezas. Debemos analizarlo y extraer las enseñanzas que contenga. Nueva señal del animador. Cada participante procede como si la imagen estática se transformara en una película; el fotograma se convierte en película. El gesto ritual se transforma en ritual: movimientos, acciones, palabras y gestos mecanizados. Un ritual es un conjunto de gestos, acciones y reacciones previstas, predeterminadas. Para facilitar la comprensión de los participantes, a veces se permite al actor que va a interpretar el gesto ritual que haga todos los movimientos de ese ritual. Los participantes que hayan entendido de qué ritual se trata levantan la mano y esperan la señal del animador invitándolos a colocarse en escena.",
 		"etiquetas": ["Tema"," Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
	 {
		 "Id": 197,
		 "nombre": "Imagen del antagonista",
 		"descripcion": "Esta técnica se utiliza en el estudio de las relaciones de a dos. El conflicto central puede incluir a otros personajes, pero sólo será posible estudiarlo si todas esas interrelaciones se concentran en el conflicto principal, protagonista versus antagonista. Primera etapa: la imagen de uno mismo. Esta técnica puede realizarse con un solo conflicto o según el modo feria, donde todo el grupo puede formar diversos núcleos conflictuales. Aquí presentaremos el modo feria. El proceso es el mismo cuando se trata de un único individuo. El grupo elige el tema con el que quiere trabajar, en el ámbito de las relaciones interpersonales. Cuando trabajo por primera vez con un grupo, me gusta proponer como tema el miedo. ¿Por qué? Porque a través del miedo aceptamos convertirnos en oprimidos. Una persona sin miedo nunca estará oprimida. Un suboficial del ejército boliviano trató sin respeto al Che Guevara, preso, herido y desarmado. Sin vacilar, éste le escupió a la cara. Fue asesinado, pero en ningún momento tuvo miedo; conservaba su valor desarmado y rodeado de enemigos. Raras son entre nosotros las personas capaces de tanto heroísmo. Como no somos héroes, sentimos miedo. Miedo a perder nuestro empleo (a veces aceptamos condiciones de trabajo inaceptables); miedo a perder el amor de alguien (una vez más, aceptamos lo inaceptable); miedo a la muerte, y llenamos nuestra vida de angustias. Tenemos miedo, seamos o no conscientes de ello: el miedo está ahí, al acecho, marcando nuestra vida con su sello. El animador propone a los participantes que se pongan en círculo, dejando algo de espacio entre cada uno, y que se giren todos hacia fuera. Deben pensar en una situación concreta, que los oponga a un antagonista, y en la que sentirían miedo. Una situación concreta y clara: el uno contra el otro. No un miedo difuso a la sociedad, sino el miedo provocado por uno de sus agentes. No miedos metafísicos (el ser y la nada), sino miedos sociales. Cada participante pensará en una situación concreta y en la imagen de su cuerpo cuando sintió ese miedo. A continuación se van girando hacia el interior del círculo, sin mostrar la imagen hasta que todos se hayan girado. Entonces el animador pide al conjunto de los participantes que hagan sus imágenes a la vez, para que nadie influya en los demás o se sienta influido por ellos. Segunda etapa: la formación de familias de imágenes El animador pide a los participantes que, sin abandonar las imágenes, se acerquen a otras que les parezcan similares y se alejen de las demás, formando así pequeñas familias de imágenes. Tercera etapa: la elección de las imágenes Una vez formadas las familias, el animador pedirá a cada subgrupo que elija una imagen que sea no la mejor - no se trata de una competición- sino la que contenga a las demás o las sintetice. Aquella que contenga el mayor número de elementos presentes en el conjunto de la familia. La sensibilidad de los participantes guiará esta elección, no unos fríos ordenadores. Se elegirán tres, cuatro o cinco imágenes como imagen de los miedos del grupo en su conjunto, ese día y en ese momento precisos. Cuarta etapa: la dinamización Las imágenes se presentan ante el resto del grupo y el animador pide a éste que haga observaciones sobre lo que ve. Aunque puedan ser contradictorios, los comentarios se dicen sólo con el fin de que queden expuestos y no con el objetivo de llegar a una conclusión. Cada uno expone sus sensaciones, y el animador subrayará los elementos objetivos: si están de pie o sentados, qué hacen con las manos y los ojos, cuál es la posición del cuerpo, etc. No se trata de interpretar, sino de mirar lo que vemos. El animador dirá «¡ritmo!» y los actores mostrarán el ritmo de sus imágenes, desarrollando sus sentimientos ante ese momento particular de miedo. Después de la imagen y el ritmo, el director pedirá que, sin abandonar la cadencia, los actores digan una frase que surja en el pensamiento de los personajes que interpretan. Primero todos juntos, para que de nuevo nadie influya en los demás, y después por turnos, para que todos puedan dar testimonio. Tendremos así imagen, ritmo y frase. Entonces el animador pide a cada protagonista que realice una metamorfosis: si está produciendo esa imagen, ese ritmo y esa frase es porque tiene ante sí, real y concreto, a un antagonista preciso. ¿Cuál es la imagen de ese antagonista? El protagonista efectúa una lenta transformación que parte de su propia imagen para llegar a la de su antagonista: veremos cómo a cámara lenta cada uno se transforma en la imagen de su opresor. El animador recomienza el proceso. Pide a cada uno que dé un ritmo a la imagen del antagonista y que diga una frase que corresponda con sus deseos, en el momento preciso que está reproduciendo con su cuerpo. Al final de esta etapa, habremos visto la imagen de los protagonistas, su ritmo y su frase, y la imagen de los antagonistas, con su ritmo y su frase. Quinta etapa: identificaciones o reconocimientos El animador preguntará al grupo quiénes se identifican con esos antagonistas opresores, o quiénes los reconocen. Quien se identifique con una de esas imágenes o la reconozca, quizá porque se trata de uno de sus propios opresores, sustituirá al actor que representa la imagen. El protagonista que la había creado quedará así libre para volver a su propia imagen inicial de oprimido. Cuando todos hayan sido reemplazados, tendremos de tres a cinco parejas de protagonistas-antagonistas, oprimidos- opresores. Los primeros, identificados con las imágenes dado que son ellos mismos; los segundos, identificados o en resonancia con los personajes, sabiendo de quiénes se trata y dispuestos a vivir la improvisación que seguirá. Una vez que las parejas están frente a frente, empieza una nueva etapa. Sexta etapa: la improvisación en dos modos El animador dará cuatro consignas sucesivas: «¡Imagen!», y todos los participantes harán imágenes de sus protagonistas o antagonistas respectivos. «¡Ritmo!», y darán una cadencia a las imágenes. «¡Frase!», y repetirán las frases iniciales. «¡Acción!», y a partir de ese momento, en el modo feria, las parejas improvisarán sus escenas. Las parejas conocen el punto de partida pero no el de llegada, pues no se trata de reproducir una escena vivida, sino de realizar una experiencia volcada hacia el futuro: el protagonista trata de liberarse de la opresión y el miedo; el antagonista, un actor que conoce a ese tipo de opresor, trata de mostrar cómo oprimiría en su lugar. En esta etapa surge un problema que en realidad no es tal. El actor que encarna al antagonista tiene una referencia en su vida: alguien a quien él mismo conoce. Alguien concreto parecido a aquel que ha inspirado al protagonista. Parecido, pero no idéntico. Siempre existirá una diferencia entre el antagonista imaginado por alguien y el antagonista reconocido por otra persona. El protagonista puede haber pensado en su padre y el actor que encarna al padre, por su parte, habrá pensado en el sargento de su cuartel. Un surrealismo de superficie. Uno dirá «Papá» para oír cómo le responden «¡Soldado!». En realidad, el actor-antagonista no hace sino percibir el aspecto sargento en la imagen del padre. Las imágenes son polisémicas y ahí reside su riqueza principal. No debemos, por falsa coherencia, por realismo superficial, abandonar esas riquezas como si fueran incoherencias. Pasados unos minutos, esta técnica, intensa y conflictual, puede llegar a estallar en una explosión de enfrentamientos. El animador propondrá el modo delicado y suave: lento y bajo. Imbuidos por la primera parte de improvisación libre, los actores tenderán a ser más creativos. Séptima etapa: la segunda improvisación Transcurridos dos minutos, el animador interrumpirá las improvisaciones y solicitará a los demás participantes para que reemplacen al primer grupo de antagonistas, con la determinación de mostrar una nueva forma de opresión, ausente durante la primera improvisación: el protagonista se verá confrontado con una nueva técnica del arsenal de la opresión, se enfrentará a esa nueva manera de oprimir. También aquí puede surgir un surrealismo de fachada. De fachada, porque se trata de una dimensión real de la primera imagen. El padre se convirtió en sargento, y ahora puede convertirse en profesor o cura, hermano o patrón: todos ellos pueden estar contenidos en la imagen inicial del padre. Tiene lugar una segunda improvisación, en dos tiempos; modo normal y modo delicado y suave: lento y bajo. Puede hacerse una tercera o una cuarta improvisación, siempre que entre los participantes haya alguno que reconozca al antagonista (diferentes características de ese antagonista) y esté dispuesto a estudiar esos conflictos. Se recomiendan las sustituciones del antagonista sobre todo cuando se trata de trabajar una única situación de un único protagonista. En ese caso, también se puede centrar el trabajo en ese protagonista y, tras varias improvisaciones con el miedo como tema, volver a empezar poniendo por tema otras palabras, otras emociones e ideas. Octava etapa: el intercambio de impresiones Una vez terminadas las improvisaciones, el animador conducirá el debate, el intercambio de opiniones e impresiones, los testimonios de los participantes.",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
	 {
		 "Id": 198,
		 "nombre": "Imagen analítica",
 		"descripcion": "Una de las técnicas más intensas y complejas del arsenal del Teatro del Oprimido. Debe utilizarse cuando el protagonista está realmente dispuesto a usarla, cuando conoce todas las etapas. No ha de obligarse al protagonista a hacerla entera; el animador debe decirle claramente que puede abandonarla durante el desarrollo de la misma, en el momento en que desee hacerlo. Primera etapa: la improvisación. Una improvisación normal, en la que el protagonista e°de quién encarna cada papel y los actores interpretan personaje dentro de las consignas fijadas por él, recuerdo a su sensibilidad y experiencia para completarlas, técnica es más eficaz cuando la escena sólo consta del protagonista y un antagonista, y será más útil cuando se que una situación en la que el propio protagonista no 187 comprenda lo que le sucede, o presente una cierta ona • dad hacia sí mismo. Segunda etapa: la formación de imágenes. Los participantes tendrán que dejarse estimular por la improvisación, no como espectadores, riendo o aplaudiendo con una actitud de consumidores pasivos, sino que al contrario, lo ideal sería que observaran el más estricto silencio. Como espect-actores dispuestos a intervenir, dejándose penetrar por los estímulos externos y permitiendo que estos den forma a su cuerpo e informen su sensibilidad. Tras la improvisación se invita a los espect-actores a hacer imágenes de cómo han sentido las acciones del protagonista y el antagonista. Imágenes que han de ser el producto de la percepción de un detalle oculto, disimulado por la actitud general de uno y otro, y que fragiliza al protagonista, dejándolo vulnerable y dando más fuerza a las armas del antagonista. Puede suceder que la escena muestre una situación que no constituya claramente una relación evidente de oprimido-opresor. En ese caso, las imágenes serán lo que los participantes hayan conseguido desvelar de los elementos escondidos. Las imágenes no serán nunca realistas: no se trata de reproducir lo que todos pueden ver, sino sólo lo que cada participante haya sentido individualmente, al adoptar voluntariamente una actitud de simpatía con uno u otro y haberse puesto en relación con ellos por identidad o reconocimiento. Las imágenes serán metafóricas, pleonásticas, surrealistas, expresionistas, magnificadas, deformadas, en fin, todo, con tal de que sean verdaderas. No realistas: verdaderas, sentidas, vividas. Tenemos un compromiso real, no con el realismo, que con frecuencia esconde más que revela la realidad. Se hacen cinco imágenes de cada personaje. Tercera etapa: la formación de parejas. Una vez hechas las imágenes, cada actor-imagen buscará su complemento en el grupo opuesto, formando parejas de imágenes complementarias. La elección complementaria es aleatoria, sin una razón clara, y pueden hacerla los actores o los demás participantes. Cuarta etapa: las «reimprovisaciones». Hechas las parejas, cada una dispondrá de un tiempo bastante corto para volver a improvisar la escena, y cada actor mantendrá la imagen tal como la había mostrado. Por ejemplo, si una de las imágenes mostraba al protagonista en la actitud de un boxeador, el actor deberá mantener esa actitud durante la improvisación. Puede moverse pero no puede modificar la imagen, que funcionará como un filtro: lo que el actor diga quedará connotado por esa imagen, que es la visualización magnificada de un elemento del comportamiento del personaje. En la «reimprovisación» los actores podrán decir no sólo las frases pronunciadas durante la improvisación original, sino también pensamientos y acciones coherentes con la escena original, réplicas que constituyen la exteriorización, monólogo interior. La «reimprovisación» mezcla memoria e imaginación. El protagonista y el antagonista observan atentamente las «improvisaciones», pues tendrán que volver a escena. Quinta etapa: el protagonista asume las imágenes. Terminada la etapa precedente, las parejas vuelven a escena alternativamente para improvisar una vez más la misma situación, esta vez con las mismas palabras y acciones que la primera vez, los mismos movimientos; pero ahora el protagonista se colocará al lado de su imagen, asumiéndola y repitiendo lo que el actor diga o haga, como un eco. El actor-imagen, al haber sido mimetizado por un aspecto, un detalle del comportamiento del protagonista, ha creado una imagen amplificada de ese detalle; en esta etapa, se produce el proceso inverso: el protagonista va a ser mimetizado por la imagen del mimetismo anterior, en otras palabras, mimetizado por sí mismo; va a magnificar un detalle que se supone que es suyo, y ese detalle se convertirá en el todo. No es una caricatura: la caricatura exagera lo que ya es exagerado; aquí se trata de descubrir lo que está escondido y desvelarlo. Transcurrido un cierto tiempo, el animador dirá «¡sal!» y el actor-imagen saldrá de escena, dejando al protagonista a solas con el actor-imagen del antagonista. Durante un rato, el protagonista deberá mantener la misma imagen y proseguir la escena según el mismo comportamiento del actor-imagen, como si fuera él. A continuación, el animador dirá «¡puedes cambiar!», y, si el protagonista está satisfecho con la imagen, la mantendrá y continuará la improvisación, libre ahora de no limitarse a seguir reproduciendo lo que el actor-imagen ha hecho antes que él. Si, por el contrario, piensa que la imagen no le conviene, que lo confina en un rol que no desea, podrá hacer una lenta metamorfosis, transformándose en una imagen muy distinta, opuesta, que a su juicio le sería más útil para afrontar la situación: la imagen de lo que querría ser. Se repite este proceso con cada pareja: en un primer momento, el protagonista reproducirá siempre la imagen y el comportamiento del actor, continuándolo cuando éste sale de escena, para finalmente poder elegir o continuar igual o cambiar al extremo opuesto. Sexta etapa: el protagonista afronta simultáneamente todas las imágenes del antagonista. El protagonista vuelve a escena, ahora solo, y afronta todas las imágenes del antagonista juntas, que improvisarán concertadamente, como si formaran un solo personaje; en realidad, son aspectos de una misma persona, el antagonista: son el producto del análisis operado por el grupo de participantes. Las imágenes pueden hablar a la vez, pero nunca unas con otras. El protagonista puede dirigirse hacia una en particular o hacia el conjunto. En ambos casos, el animador dirá al protagonista cuáles fueron sus movimientos, sus certezas y sus dudas en el conflicto con cada imagen. Séptima etapa: el turno del antagonista. Ahora le toca al antagonista afrontar las cinco imágenes del protagonista, en las mismas condiciones que en la etapa anterior. El protagonista observará la escena y tratará de ver cuál de sus imágenes lo debilita y cómo; cuál lo hace más fuerte y por qué. Octava etapa: nueva improvisación. El protagonista y el antagonista vuelven a escena para hacer una nueva improvisación de la misma situación. Si la escena mostrada es una escena de opresión, ahora el protagonista deberá intentar quebrarla. Los actores que crearon las imágenes que el protagonista rechazó por juzgarlas negativas para él, se colocarán de manera que éste los vea. Si consideran que tiene una recaída en dirección de las imágenes rechazadas, emitirán un sonido, una sirena de alarma: «AAAAAH». Informado así de su recaída, el protagonista intentará repetir la metamorfosis de las etapas anteriores. Se puede hacer lo mismo con las imágenes que sí gustaron al protagonista: los actores tratarán de estimularlo cuando piensen que el protagonista va por buen camino. Novena etapa: el intercambio de ideas. El animador coordina el debate entre los participantes.",
 		"etiquetas": ["Tema", " Específico"," Complejo"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
     {
		 "Id": 199,
		 "nombre": "Circuito de rituales y máscaras",
 		"descripcion": "Esta técnica se basa en la hipótesis de que si bien es cierto que los rituales de la vida cotidiana nos imponen a todos una máscara adaptada a ellos, con el objetivo de disminuir los enfrentamientos entre las personas y las acciones que éstas deben realizar, del mismo modo la negativa a utilizar esa máscara o la utilización de una máscara no conforme con él podrán desmontar el ritual o modificarlo, o también revelar su inadaptación. En realidad, entre el ritual y la persona siempre se produce una lucha: la máscara es el resultado de esa lucha. Primera etapa: las improvisaciones ritualizadas El protagonista improvisará de cuatro a cinco escenas, cada una en un espacio diferente de la sala, y en las que deberá mostrar opresiones suyas. Se representará a sí mismo e indicará a los actores los elementos esenciales de los conflictos; los actores seguirán sus indicaciones básicas, pero conservando su libertad de improvisación, pues en caso contrario no sería tal... Es necesario que, en las diferentes escenas, el protagonista tenga conciencia de estarse comportando de diferentes maneras. Por ejemplo, con su mujer se comportará de manera totalmente distinta que con su psicoanalista; con su padre, diferente que con el frutero de la esquina, etc. Antes de cada escena el animador preguntará al protagonista qué QUIERE de los demás personajes y qué quieren éstos de él: cada personaje ha de emplear toda su voluntad en obtener aquello que desea -en otras palabras, ¡debe hacer acciones!-y no sólo mostrar «cómo es». Repito: el personaje es acción, ¡es verbo y no adjetivo! Es querer y no sólo esencia, es un «yo quiero». Exteriormente, podemos convertirlo en un adjetivo, pero él nunca debe hacer esto consigo mismo. El actor debe amar (verbo) y entonces diremos que es un amante (adjetivo). No debe mostrarse amante: debe mostrar al personaje amando. Después de cada improvisación, el animador preguntará al grupo cómo ha visto la escena y al protagonista dentro de ella: cuáles fueron sus características predominantes, cuál era su máscara. Los espect-actores expresarán sus opiniones con el cuerpo; varios espect-actores podrán mostrar diversas máscaras, y el grupo elegirá la más pertinente para cada escena. Una vez terminada la primera escena ritual, el protagonista pasa a la segunda; los actores de la primera se «desactivan» y se quedan en su zona. Activamos la segunda escena, se hace la segunda improvisación y el animador pregunta cuáles fueron las características principales -y diferentes del protagonista en esta segunda improvisación; se hablará con el cuerpo y no sólo con las palabras. Se pasa a la tercera escena y así sucesivamente. Segunda etapa: el refuerzo de la máscara Acabadas las improvisaciones, el animador hará un breve recordatorio de las características (máscaras) percibidas por el grupo en cada escena, para que sean magnificadas en una segunda improvisación. Donde el protagonista mostró buen corazón, que muestre una bondad desbordante; donde fue intolerante, que sea «intolerantísimo»; donde fue violento, que se convierta en asesino. Ante él, el actor que encarna la imagen elegida por el grupo se mostrará aún más convincente para ayudarlo en su proceso de magnificación. Tercera etapa: el conflicto de las máscaras contra los rituales En la tercera etapa, el animador propone que el protagonista comience una escena con la máscara correspondiente, exacerbada; a continuación, conservando la misma máscara, improvisa todas las demás escenas, una por una, con esa máscara que evidentemente no se adapta a ellas. Los actores de cada escena reaccionarán de acuerdo con su nuevo comportamiento, y así podremos comprobar «qué pasaría si—». ",
 		"etiquetas": ["Tema", " Específico"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
     {
		 "Id": 200,
		 "nombre": "Imagen de los «polis» en la cabeza y sus anticuerpos",
 		"descripcion": "Primera etapa: la improvisación. El protagonista improvisa la escena de origen ayudado por los actores que necesite. Es bueno recordar que el protagonista siempre deberá dejar muy claro lo que quiere de cada personaje: ¡el verbo y no el adjetivo! Siempre, antes de comenzar una acción, los actores han de producir durante dos o tres minutos el «monólogo interior» de sus personajes. Segunda etapa: la formación de imágenes. El animador pide al protagonista que con los cuerpos de los participantes esculpa imágenes expresivas de los «polis» (policías, censores, opresores) que estaban presentes en su memoria o en su imaginación durante la improvisación. Imágenes de personas concretas, reales, conocidas; no abstracciones, tipo la familia (sino un padre, una madre o una tía); no la sociedad (sino un patrón, un abogado o un capataz); no la Iglesia (sino un cura o una vecina beata), y así sucesivamente. Personajes invisibles para nosotros, pero presentes en la cabeza del protagonista y que lo provocan, que se hallan en el origen de sus miedos, deseos y fobias. Personajes de los que se acuerda durante la improvisación. Cuando el protagonista ya haya construido cinco o seis imágenes, el animador preguntará a los participantes si consiguen ver otros «polis» en su cabeza, o si los perciben en la suya propia; cada uno, con su propio cuerpo, hará una imagen. Si los participantes han visto esas imágenes es porque conocen a esos «polis»; es porque, por simpatía, están en relación con ellos. No obstante, el protagonista aceptará sólo las imágenes que despierten en él el recuerdo de alguien real y concreto. Los «polis» son personajes reales y concretos, y no abstracciones. Tercera etapa: la constelación. A petición del animador, el protagonista organiza esas estatuas en una constelación donde ocupará la posición central: es el sol de la constelación. ¿Qué relación mantiene con él cada imagen? ¿Se muestran cercanas o distantes? Le dan la cara o están de espaldas? ¿De pie o sentadas? ¿Insoportablemente cerca o lejos hasta la desesperación? ¿Qué relación mantienen entre sí las imágenes? ¿Los personales invisibles pueden verse entre sí o, por el contrario, se esconden? ¿Hay conflictos entre ellos o hablan con una misma voz? Antes de comenzar la etapa siguiente, el animador debe hacer notar los detalles objetivos de la constelación: detalles de cada estatua y de la estructura de la constelación, del espacio donde se sitúan los personajes visibles (los de la improvisación) y los invisibles (los «polis»). Hará observaciones sobre la relación del protagonista con sus imágenes, y hablará siempre a título personal, animando a los participantes a expresar sus opiniones del mismo modo, aunque sean contradictorias. No hay que intentar resolver las contradicciones, sino clarificarlas. Hay que tender a la observación objetiva de las imágenes para separarse progresivamente de lo que sólo depende de nuestras proyecciones («eso me hace pensar en...», «parece estar haciendo...», etc.). Todo puede decirse si mantenemos clara en mente la distinción entre «lo que es» y «lo que me parece»: lo que existiría aunque yo no me diera cuenta y lo que depende de mi percepción. Cuarta etapa: dando información a las imágenes. Es una de las etapas más bellas, la más teatral y emocionante . El animador pide al protagonista que se acerque a cada imagen de la constelación por orden de preferencia (sólo a las imágenes de los personajes invisibles y no a los actores que participaron en la improvisación), y que en voz baja pero audible, le diga a cada una algo relacionado con el pasado y que tanto el protagonista como la persona representada conocen. Cada encuentro debe empezar por las palabras «Te acuerdas de cuando...» y terminar por «... pues por eso...»: en otras palabras, se debe evocar un hecho real acaecido entre los dos, o del que ambos han sido testigos, y que ha tenido consecuencias. Por ejemplo: «Papá, ¿te acuerdas de cuando me pegaste en la espalda con el cinturón? ¡Pues por eso, hasta hoy, tengo miedo de que las personas que quiero tengan reacciones inesperadas!». El actor que vive la imagen no ha de tener reacciones visibles; debe comportarse como una estatua de un museo de cera o como una fotografía inanimada. Sobre esa foto o estatua el protagonista proyectará recuerdos o emociones. El actor, que en el momento de ser esculpido fue formado, es ahora informado. Provisto de esa. forma y de esa información, podrá vivir su personaje en la próxima etapa. Uno a uno, el protagonista les contará a todos sus recuerdos, sus emociones, sus miedos, sus deseos, sus frustraciones, y ellos deberán respetar el silencio más absoluto. Son secretos que se nos desvelan, y tenemos la ocasión de ser todos sus testigos. Estos monólogos del protagonista con cada imagen son revelaciones, que han de ser recibidas sin aplauso ni censura. Quinta etapa: la «reimprovisación» con las imágenes. El animador propone que se improvise la escena de nuevo. El antagonista o los antagonistas tratarán de conseguir que la escena acabe de nuevo del mismo modo. Por contrario, el protagonista tratará de modificarla según deseos. Pero a la vez que tiene lugar esta nueva interpretación realista, las imágenes también improvisan, en un segundo nivel estilístico, de manera surrealista: manifestarán los deseos que tienen en el pensamiento, motivadas no por la forma y la información que el protagonista les ha dado y por sus propios conocimientos, sensibilidad, inteligencia, etc. Las imágenes de los «polis» no se mueven: hablan en voz baja, lejanas pero audibles para el protagonista. Éste tiene derecho a desplazarlas: ellas no obedecerán a los gestos simbólicos pero tampoco ofrecerán ninguna resistencia a los movimientos del protagonista. No obstante, si son desplazadas, volverán a cámara lenta a su posición inicial. Tendremos así dos niveles de actuación en escena: realista, para los actores y el protagonista; surrealista, para este último y las imágenes. Sólo el protagonista actuará plenamente en los dos niveles, sólo él tendrá derecho a hablar tanto a las imágenes como a los actores. Los demás no dialogarán entre sí. El animador debe tener la sensibilidad suficiente como para garantizar que el protagonista disponga del tiempo suficiente para liberarse de sus fantasmas sin quedar, no obstante, completamente extenuado: para el protagonista resulta sumamente agotador vivir estos dos niveles, estos dos estilos, tanto más cuanto que esos «fantasmas» tenderán siempre a repetir los mismos gestos y acciones. Como en la vida real. Es una tensión difícil de vivir. Esta técnica realmente propone una vigorosa gimnasia intelectual. Sexta etapa: el foro relámpago. Transcurridos unos minutos, el animador organiza el foro relámpago, pidiendo a algunos participantes que formen una cola para entrar en escena uno por uno, dejándoseles un minuto o dos para reemplazar al protagonista y tratar de ejecutar, en ese cortísimo lapso de tiempo, una acción que les parezca eficaz. El protagonista observa estas intervenciones. El foro, precisamente porque es relámpago, presenta la ventaja de facilitar la participación de la casi totalidad del grupo, lo que permite al protagonista ver soluciones acabadas o simples bosquejos, toda una gama de pensamientos, opiniones y sensaciones. Acabado el foro relámpago, el director invita al protagonista a retomar su papel y se pasa a la etapa siguiente. Séptima etapa: la creación de anticuerpos. Esta vez, cuando regrese al corazón del conflicto, el protagonista vivirá solamente en el nivel surreal, el de los «polis». Enriquecido con las opiniones y deseos de los demás participantes, habitado por sus sugerencias, intentará mostrar cómo cree que cada «poli» puede ser desarmado. Mostrará al público su solución: luchará con el «poli» magnificando el combate, haciendo una demostración de ese combate. Cuando alguien del público comprenda su estrategia, sus acciones y argumentos, lo sustituirá, saliendo de escena ese «poli» y continuando el conflicto fuera del espacio único central. El protagonista pasará a un segundo «poli», tratando de mostrar lo que cree que se necesita para desarmarlo; entonces otro espect-ador ocupará su lugar. Y así sucesivamente hasta que todos los «polis» tengan delante a anticuerpos. En ese momento la escena habrá explosionado, se habrá repartido en varias subescenas con un «poli» y un anticuerpo cada una. Y todas ellas, a partir de formas e informaciones originarias (las estatuas, los monólogos breves, las intervenciones de los espect-actores, etc.), estarán desarrollando auténticos personajes de una pieza, contemplados en una situación compleja. Octava etapa: la feria. Cuando sienta que alguno pierde fuerzas, el animador deberá estimular a unos y otros para conseguir aumentar la tensión y la creatividad en cada una de las diferentes escenas, en cada uno de los diferentes combates simultáneos. E invitará al protagonista a pasearse por la feria así formada, interesándose por aquella escena o deteniéndose ante esta otra, yendo de conflicto en conflicto sin descuidar ninguno. Los movimientos del protagonista durante este «paseo» son una escritura que, en la etapa siguiente, el director y los demás participantes descifrarán y leerán para él, pudiendo estar todos de acuerdo o no: se trata simplemente de devolverle la imagen múltiple de la mirada de los demás. Variante: identificación de los cuarteles de donde salen los «polis» En los últimos años, he preferido utilizar una variante cuyo objetivo es la identificación de los cuarteles: si tengo «polis» en la cabeza, necesariamente han salido de algún cuartel, pues no nacieron conmigo. Así, cada anticuerpo que sale de escena con un «poli» prepara rápidamente con él una escena de su propia cosecha. En esta nueva escena, otro personaje, completamente diferente del que se supone que representa el «poli» en la improvisación de origen, utiliza la misma ideología que él. En otras palabras: la misma ideología en un personaje diferente, en una escena diferente, con diferentes condiciones sociales, etc. Pero la ideología es la misma y las armas de que sirven los «polis» son idénticas. Una vez elegidos estos elementos básicos, cada pareja «poli»-anticuerpo (en su situación y circunstancias nuevas) improvisa su escena, en la que el anticuerpo trata de romper la opresión que sufre. Cuanto más elaborada esté la escena en cuanto a imágenes, mejor: si es posible, los personajes tendrán vestuario y se moverán en decorados construidos por ellos mismos. Hay que evitar que los actores se sienten en sillas iguales a las de los espectadores, que usen mesas que también se hallan en la sala. Es necesario vestir el espacio estético. Igualmente, en los últimos años he adoptado la costumbre de hacer un mini-foro al final de cada una de estas escenas. ¿Qué objetivo persigo con ello? Pasar del caso particular de un protagonista al caso general, plural, de los participantes del grupo. Nunca vamos en sentido opuesto, del caso general al caso singular de ese protagonista, que es individuo. Lo que pretendemos es detectar ideologías que se infiltran en las personas más diversas en las circunstancias más extremas; lo que queremos es clarificar, denunciar la ideología, y jamás a ese u otro individuo. Novena etapa: el debate. Acabada la feria, los participantes intercambian impresiones sin pretender ganar un debate o establecer la verdad; simplemente buscamos el espejo múltiple. Es importante que los participantes se asombren de las acciones y reacciones del protagonista y que no escondan su asombro; pero es igualmente importante que el protagonista se asombre del asombro de ellos. No ha de tener miedo ni pretender que lo juzguen. El ejercicio sólo será productivo si el protagonista se sorprende de las sorpresas que puede provocar. En todas las técnicas del Teatro del Oprimido, pero especialmente en algunas -y entre ellas, ésta-, la sorpresa y el asombro son los elementos esenciales para la adquisición de un conocimiento. Sorprenderse significa aprender algo nuevo, inusitado, insólito, ¡algo posible! ",
 		"etiquetas": ["Tema", " Específico"," Complejo"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
	 {
		 "Id": 201,
		"nombre": "Imagen del «poli» en la cabeza de los espectadores",
 		"descripcion": "Idéntica a la imagen de los «polis» en la cabeza y sus anticuerpos, con la única diferencia de que son los espect-actores quienes construyen las imágenes de sus «polis» en la cabeza, y no el protagonista; serán capaces de hacerlo gracias a la identificación, el reconocimiento o la resonancia que hayan podido sentir respecto de la improvisación realizada. La mayoría de las veces el protagonista reconoce como suyas las imágenes presentadas, pues casi siempre se instaura la simpatía.",
 		"etiquetas": ["Tema", "Ambos"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	},
	 {
		 "Id": 202,
		 "nombre": "Imagen del arco iris del deseo",
 		"descripcion": "La técnica. Ninguna emoción, sensación, apetencia o deseo se manifiesta en el ser humano en estado puro. Todo es contradictorio, complejo. El amor de Romeo y Julieta no está exento de agresividad y resentimiento: ella nunca hace nada de lo que él le pide sin exigir algo a cambio. El amor y el odio, la tristeza y la euforia, el miedo y el valor, todo se mezcla y se confunde en proporciones diferentes. Lo que vemos socialmente no es sino la dominante de todas las fuerzas que, continuamente, luchan entre sí en el alma humana. Esta técnica ayuda a clarificar los deseos, las apetencias, las sensaciones y las emociones. Permite al protagonista verse no «uno», como le devuelve la imagen del espejo, sino múltiple: las imágenes reflejadas en ese caleidoscopio que son los participantes, que forman el espejo múltiple de la mirada de los demás. Las pasiones del protagonista se muestran repartidas en sus colores invisibles a simple vista, como la luz blanca del sol, que, al atravesar la lluvia, se transforma en arco iris. Gracias a él, podemos ver los colores que la luz blanca disimula. ¿«Claro como la luz del día»? No, más bien deberíamos decir «oscuro», pues la luz del día miente; sólo el arco iris dice la verdad. Primera etapa: la improvisación. Dirigida por la persona-personalidad que interpretará el papel de protagonista. Los participantes, personas-personajes, interpretarán los demás papeles. Siempre, antes del encuentro, se realizará durante unos minutos un monólogo interior, con el fin de movilizar a los actores y activarlos en los personajes que van a representar. Nunca hay que empezar sin hacer previamente un monólogo interior. Segunda etapa: el arco iris. El animador invita al protagonista a que cree imágenes de los deseos, estados de ánimo y emociones que ha sentido durante la escena y que, a su juicio, son importantes para el estudio de las relaciones interpersonales que quiere analizar. El protagonista muestra con su cuerpo imágenes de sus emociones y deseos, y los participantes que se identifiquen con ellos o los reconozcan, o en los que produzcan una resonancia intensa, los encarnarán. Es importante que los participantes quieran hacer esas imágenes y no que se limiten a aceptar los papeles. Cuando el protagonista haya acabado de esculpir sus imágenes, el animador pide a los demás que propongan otras imágenes que hayan sentido ellos. Cada uno mostrará su imagen con el cuerpo, y al protagonista le tocará aceptarlas cuando se reconozca en ellas, o rechazarlas en caso contrario. Las imágenes han de desvelar los deseos del protagonista, y no sus «polis» en la cabeza: éstos son los deseos de los demás, y en esta técnica lo que estudiamos son los deseos del propio protagonista. Tercera etapa: monólogo, confidencias, primera constelación. El protagonista hace a cada imagen una confidencia que explica su relación con ella, recordándole un incidente acaecido entre ambos, un recuerdo. Ha de revelar por qué se siente así, cuáles fueron las consecuencias de ese encuentro o de ese acontecimiento, y también por qué ha creado o aceptado cada imagen. Al mismo tiempo, pone la imagen en relación física con el antagonista, según cómo crea que éste la percibe y no como a él le gustaría que fuera: cómo cree el protagonista que lo ve su antagonista. Una vez realizada esta primera constelación, el animador pide a los participantes que comenten lo que ven: comentarios objetivos (quién está cerca de quién, sentado o de pie) o subjetivos («esto me hace pensar en...»). Cuarta etapa: la parte asume el todo. Las imágenes se colocan en línea, fuera del espacio estético, y el protagonista empieza a enviarlas a escena, una a una, en el orden que desee. Cada una tendrá dos minutos para enfrentarse al antagonista sola, como si fuera el protagonista entero; los actores utilizarán la memoria de lo que han visto en escena, pero también, y sobre todo, la imaginación. Improvisan como si una parte fuera el todo, como si ese color aislado fuera el arco iris entero: ¿qué efectos tendría ese combate monocromático? ¿Qué consecuencias? ¿Qué caminos seguiría la relación si el protagonista fuera sólo esa imagen, ese deseo, ese tono? El antagonista debe reaccionar como si el personaje cambiara de personalidad en cada momento. Quinta etapa: el arco iris completo. Las imágenes vuelven a escena para no abandonarla ya: como son partes constitutivas del protagonista, éste no puede ignorarlas, hacer como si no existieran. Pero, por el contrario, puede intentar modificarlas. Una a una, dispondrá las imágenes en una segunda constelación que tendrá por referencia al antagonista, situándolas cerca o lejos, de perfil o de frente, visibles o escondidas. La particularidad de esta segunda constelación es que el protagonista la dispondrá como le gustaría ser percibido por el antagonista. De esta manera, el protagonista podrá medir la importancia que desea atribuir a cada una de las características (deseo o emoción) encarnadas por cada imagen. Si cree que hay que atenuar una imagen violenta, la situará lejos del antagonista, donde tenga menos visibilidad, y así sucesivamente. Una vez en escena, la imagen actuará en voz baja, dirigiéndose al antagonista como si estuviera a solas con él. Éste deberá afrontarlas una a una, sucesivamente, como si fueran siempre la misma persona: el protagonista. Observación: los movimientos del protagonista –al poner las imágenes en escena, sus dudas y certezas- constituyen en sí mismos una escritura que hay que descifrar y debatir. Cuando se halla en escena organizando el arco iris, el protagonista no puede observarse a sí mismo: resulta útil decirle cómo se ha conducido durante la disposición de las imágenes. El comportamiento del antagonista con cada imagen contiene también determinadas significaciones: ¿cómo se comportaría si el protagonista fuera sólo esa u otra imagen? Cuando se enfrenta con el protagonista en la improvisación, lo afronta como a un todo: ahora que lo ve parcialmente, ha de elegir con quién quiere relacionarse y cómo. Sexta etapa: el protagonista ocupa el lugar del antagonista. En cuanto el protagonista se dé por satisfecho y haya acabado de organizar la constelación -su arco iris- tal como desea ser visto la próxima vez, y ya no sienta la necesidad de modificarlo, el animador le pedirá que se ponga junto al antagonista o detrás de él. De este modo podrá ver y sentir el arco iris de su deseo desde la misma perspectiva que el antagonista: ¡ver cómo lo ven! Cuando hablamos, sabemos lo que decimos, pero conocemos muy mal lo que se oye. ¡La palabra pronunciada nunca es igual a la palabra escuchada! Cuando realizamos una acción, sabemos lo que hacemos, pero nunca cómo los demás la han percibido o sentido. En esta etapa, a partir de esa perspectiva, el protagonista podrá percibir de qué manera es percibido. El animador pide al antagonista que salga dejando en la escena, como si fuera él mismo, al protagonista, solo, que deberá comportarse mostrando cómo se comporta, a su juicio el verdadero antagonista. Variante: todos se callan y, uno por uno, sólo actúa con el protagonista el deseo con el que quiera hablar. Séptima etapa: voluntad contra deseo. Estimulando su voluntad consciente, el protagonista se enfrentará con cada uno de sus deseos, uno por uno, en un diálogo enérgico, utilizando su voluntad; la voluntad es consciente; el deseo, no siempre. Aquélla es moral, hace elecciones; éste es amoral, es lo que es. El protagonista tratará de reforzar el deseo cuando esté de acuerdo con él, o reducirlo al silencio en caso contrario: en este diálogo vigoroso, los actores que interpretan los deseos se verán incitados a reafirmarse cada vez más en el entendimiento o el conflicto con el protagonista, sea cual sea la relación existente entre ambos; los deseos no son nunca corderitos, y aquí deberán exacerbarse. Los que la voluntad apruebe deberán exaltarse aún más; aquellos que repruebe se reforzarán igualmente con el careo. Un deseo es un deseo, que puede identificarse, o no, con la voluntad consciente. Esta etapa ha de ser dinamizadora. Octava etapa: el ágora de los deseos. El animador pide al protagonista que se retire, dejando a las imágenes solas. Se inicia así el ágora de los deseos: las imágenes, que antes se ignoraban mutuamente, podrán dialogar e interactuar unas con otras. En esta ágora, el enfrentamiento continúa. Es necesario que cada imagen, aunque sólo sea por un instante, reconozca la existencia de todas las demás y establezca una relación con cada una de ellas, aunque sea breve. Hay que examinar y experimentar todas las relaciones entre todas las imágenes, de dos en dos. Durante el ágora, el protagonista circulará por el espacio de la representación para mirar y escuchar mejor las alternativas, opiniones y soluciones. Variante de esta etapa. Con los deseos colocados en semicírculo, los espect-actores decidirán cuáles son los más antagónicos, formando parejas con ellos; cada pareja tendrá dos minutos para improvisar su combate en presencia del protagonista; transcurrido un tiempo el animador dirá: «¡Toma partido!», y el protagonista deberá decidir en qué lado quiere quedarse, u oponerse a los dos, o alternar y participar activamente en el combate. Novena etapa: la «reimprovisación». Se vuelve a improvisar la escena original. Esta vez se anima al protagonista a que imponga su voluntad. El resultado puede ser distinto de la primera improvisación o no. Décima etapa: el espejo múltiple de la mirada de los demás. Todos los presentes expondrán lo que han sentido o percibido durante el proceso, hayan sido participantes directos o no. El animador coordinará el intercambio de ideas y sensaciones, sin pretender nunca interpretar o descubrir la verdad, sino, simplemente, señalando la originalidad, las curiosidades, los aspectos estéticos de cada intervención, los significantes y los significados, el espejo múltiple de la mirada los demás.",
 		"etiquetas": ["Tema", " Específico"," Complejo"],
         "referencia": "El ArcoIris del Deseo, Augusto Boal"
 	}
]
  },
  {
  "tipodeejercicio": "Modos",
  "ejercicios": [{
    "Id": 203,
    "nombre": "Improvisación",
    "descripcion": "propone una escena sacada de su vida real- cuenta al grupo una historia o una situación en la que se siente oprimido o incómodo y que desea comprender. A continuación, los participantes hacen preguntas que les permitirán sentir la situación expuesta. El protagonista elige entre los participantes a aquellos que van a representar los personajes... indicará las características de cada personaje y explicará lo que quiere del antagonista y lo que supone que éste quiere de cualquier otro. La voluntad es esencial: sin ella, no existe ningún personaje. El teatro es un conflicto de voluntades, conscientes de los medios que utilizan para conseguir sus objetivos. El personaje es Verbo, es «quiero», es acción... En su narración, el protagonista contará la historia desde el comienzo de la escena, con la acción que desemboca en la crisis, y la crisis hasta el desenlace... describe el lugar donde tuvo lugar la escena... hay que precisar en qué habitación de esa casa, en qué lugar de trabajo, en qué zona de esa calle, en qué mesa de aquel restaurante, en qué rincón del barrio, etc. Cuantas más precisiones se den, más se estimulará a los participantes a dar rienda suelta a su creatividad. Estos elementos son intrínsecos a la escena; no se trata de construir decorados suntuosos sino de poblar la escena con objetos significantes. «¡Monólogo!», y durante unos dos minutos cada actor deberá expresar, en voz alta, la secuencia de pensamientos de su personaje; se prohíbe el silencio, hay que hablar todo el tiempo, aunque se repitan ideas. Este monólogo es necesario no sólo para que los actores se calienten (nunca deberían salir a escena «fríos») sino para que puedan profundizar en el conocimiento de sus respectivos personajes. Una vez comenzada, el protagonista' no puede interrumpir la improvisación con el pretexto de que «eso no sucedió realmente así»... Una improvisación sucede siempre aquí y ahora y es ese aquí y ahora, que se desarrolla ante nosotros, el que vamos a estudiar. La acción presente y no la del pasado.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  },
  {
    "Id": 204,
    "nombre": "Romper la opresión",
    "descripcion": "La experiencia demuestra que, por el hecho de contar una historia verdadera, que ha vivido, el protagonista desvela ya su deseo de revivirla, de transformarla, de examinar alternativas. Por consiguiente, hay que pedirle que muestre lo que debería haber hecho por segunda vez, o su deseo de hacer algo diferente de lo que hizo, como si estuviéramos ya en pleno teatro-foro. Al empezar una improvisación, es necesario que tengamos un sentimiento bastante fuerte de que el protagonista tiene posibilidades serias de ensayar alternativas a su opresión actual. Si, por el contrario, su debilidad, su ignorancia o la extrema disparidad de las fuerzas enfrentadas lo condenan al fracaso inexorablemente, no hay que ser masoquista, es preferible esperar a otro momento... Si, por el contrario, su debilidad, su ignorancia o la extrema disparidad de las fuerzas enfrentadas lo condenan al fracaso inexorablemente, no hay que ser masoquista, es preferible esperar a otro momento.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  },
  {
    "Id": 205,
    "nombre": "para y piensa",
    "descripcion": "es sencillo: en cuanto la improvisación se pone en marcha, el director dice «¡Stop!' cada vez que sospecha que un gesto o una pausa, una frase o mirada hacen referencia  a pensamientos y sentimientos no revelados, ocultos por la rapidez del diálogo y las acciones. Los actores se congelan. Si uno de ello está andando y tiene un pie en el aire, deberá dejarlo en el aire y no ponerlo en el suelo. Si otro tiende la mano hacia un tercero, sus manos no deberán tocarse, quedando la palma tendida hacia el otro. Si el «¡Stop!» sorprende a un actor mirando lo que no quisiera ver, deberá asumir esa mirada. Entonces el director dirá: «¡Piensa!». Inmóviles, y sin ningún tipo de censura o autocensura, deberán hablar todos a la vez, transformar en palabras todo lo que les pase por la cabeza y todos los sentimientos que pasen por su corazón. Sin censura o autocensura, deberán dejar que el cuerpo piense; que piense en su posición en el espacio y respecto de los demás personajes y objetos. Después de un tiempo, el director dirá «¡Acción!», y los actores retomarán la improvisación donde la habían dejado, como si no hubiera pasado nada. Durante la ausencia de movimiento, los pensamientos escondidos tendrán ocasión de expresarse. Descubriremos cosas que estaban a punto de desvelarse, en las que pensábamos sin tener conciencia de ellas y que, sin embargo, eran pensamientos, sensaciones y emociones capaces de producir efectos buenos o malos. Este modo nos ayuda a hacer consciente, a verbalizar y transmitir, a hacer comprensible lo oculto o lo diluido.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  },
  {
    "Id": 206,
    "nombre": "Delicado y suave: lento y bajo",
    "descripcion": "A veces, una escena se vuelve demasiado intensa. En ese caso, los actores que la interpretan tienden a ser menos creativos, a gastar su energía en gritos, crispando y tensando los músculos. Es aconsejable que el director proponga el modo «delicado y suave»: los actores hablan lo más bajo posible, con voz apenas audible. Los movimientos se ralentizan. Hablando tan bajo y moviéndose tan lentamente, los actores amplifican su poder de auto-observación, se convierten en espectadores atentos de sí mismos y de sus acciones: cada gesto se magnifica y, en el tono de un secreto que confiamos a alguien, las palabras revelan sus verdaderos contenidos.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 207,
    "nombre": "Foro relámpago",
    "descripcion": "...interrumpir la escena y proponer una alternativa... proporcionar al protagonista una amplia paleta de posibilidades... consiste en una sucesión rápida de intervenciones. Los participantes pasan a escena sucesivamente, ocupando por turnos el lugar del protagonista. Cada uno dispondrá de un minuto para experimentar, de manera condensada pero intensa, su alternativa. Cada nuevo participante retomará la acción en el punto en el que estaba.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 208,
    "nombre": "Ágora",
    "descripcion": "e trata de hacer salir de escena al protagonista y pedir a los demás personajes -a los que encarnen sus deseos- que dialoguen entre sí. El modo «Ágora» puede utilizarse igualmente cuando existan varios antagonistas. En ese caso, el protagonista queda excluido y serán los antagonistas quienes entren en conflicto entre sí, abriendo nuevas posibilidades.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 209,
    "nombre": "Feria",
    "descripcion": "Se desarrollan varias improvisaciones de manera simultánea, permitiendo a los actores concentrarse exclusivamente en aquella en la que están participando. ...quiere decir que dirigimos nuestra atención y nuestra percepción hacia lo que nos interesa con lo cual establecemos una relación intensa, excluyendo completamente los demás estímulos periféricos.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 210,
    "nombre": "Los tres deseos",
    "descripcion": "...construya una imagen fija, utilizando el cuerpo de los actores y algunos objetos necesarios, y mostrando claramente lo que lo inquieta u oprime. ...concede al protagonista el derecho a realizar tres deseos, y dirá: «¡Primer deseo!», y diez segundos después: «¡Stop!». Y así sucesivamente, por tres veces. El protagonista tendrá derecho a modificar la imagen con cada deseo, como un escultor, sin que los actores intervengan o se resistan. Manipulando la imagen, el protagonista hace visibles esos deseos; modificándola físicamente, se modifica a sí mismo. A veces, tras una primera serie, propongo al protagonista que realice tres deseos más, y después otros tres.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 211,
    "nombre": "Para los sordos",
    "descripcion": "Esta técnica resulta especialmente útil cuando una escena descansa demasiado en las palabras, a expensas de la acción o del lenguaje del cuerpo. En ese caso, da la impresión de que estamos haciendo radio ¡y no teatro! Los actores reanudan la improvisación, intentado esta vez hacerla comprensible para espectadores sordos. Los gestos se hacen más significativos, más densos, más fuertes. Sin la ayuda de las palabras, los actores deberán hacer comprensible con sus cuerpos, con sus movimientos físicos, a través de sus sentidos y de los nuestros, lo que antes se traducía en palabras. Cuando no podemos utilizar la palabra, nuestros cuerpos hablan más alto.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }, {
    "Id": 212,
    "nombre": "Desfase",
    "descripcion": "Este modo consiste en separar el monólogo interior del diálogo exterior y del deseo en acción. En un primer momento, se trata de pedir a los actores que están dentro de la imagen que expresen durante unos minutos los pensamientos que les vengan, manteniendo la imagen inmóvil y rígida. En un segundo tiempo, se les pedirá que dialoguen lo más posible, permaneciendo siempre inmóviles. Finalmente, en un tercer tiempo, tendrán que intentar mostrar sus deseos a través de una acción física muda, convirtiéndolos así en realidad: la imagen en movimiento.",
    "etiquetas": ["Modo básico"],
    "referencia": "El ArcoIris del Deseo, Augusto Boal"
  }
]
},
{
    "tipodeejercicio": "Ejercicios relacionados",
    "ejercicios": [{
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
]
},
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
        "subnombre": "Ejercicios y juegos de ritmo",
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
        "subnombre": "Juegos extravertidos",
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
          }
        ]
      },
      {
        "subnombre": "juegosintrovertidos",
        "subejercicio": [{
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
  },
  {
    "titulo": "historias",
    "totalidadejercicios": [{
      "subnombre": "historias",
      "subejercicio": [{
        "Id": 351,
        "nombre": "El canto en el estanque",
        "descripcion": `Si tiramos una piedra, un guijarro, un «canto», en un estanque, produciremos una serie de ondas concéntricas en su superficie que, alargándose, irán afectando los diferentes obstáculos que se encuentren a su paso: una hierba que flota, un barquito de papel, la boya del sedal de un pescador... Objetos que existían, cada uno por su lado, que estaban tranquilos y aislados, pero que ahora se ven unidos por un efecto de oscilación que afecta a todos ellos. Un efecto que, de alguna manera, los ha puesto en contacto, los ha emparentado.
  
        Otros movimientos invisibles se propagan hacia la profundidad, en todas direcciones, mientras que el canto o guijarro continúa descendiendo, apartando algas, asustando peces, siempre causando nuevas agitaciones moleculares. Cuando finalmente toca fondo, remueve el limo, golpea objetos caídos anteriormente y que reposaban olvidados, altera la arenilla tapando alguno de esos objetos y descubriendo otro. Innumerables eventos o microeventos se suceden en un brevísimo espacio de tiempo. Incluso si tuviéramos suficiente voluntad y tiempo, es posible que no fuéramos capaces de registrarlos todos.
        
        De forma no muy diferente, una palabra dicha impensadamente, lanzada en la mente de quien nos escucha, produce ondas de superficie y de profundidad, provoca una serie infinita de reacciones en cadena, involucrando en su caída sonidos e imágenes, analogías y recuerdos, significados y sueños, en un movimiento que afecta a la experiencia y a la memoria, a la fantasía y al inconsciente, y que se complica por el hecho que la misma mente no asiste impasiva a la representación. Por el contrario interviene continuamente, para aceptar o rechazar, emparejar o censurar, construir o destruir. Tomo por ejemplo la palabra «canto», porque sugiere un objeto arrojadizo... Cayendo en la mente, arrastra, golpea, evita, en suma: se pone en contacto —
        
        con todas las palabras que empiezan con «C», aunque no continúen con la «a», como «ceniza», «cien», «conejo»;
        
        con todas las palabras que comienzan con «ca», como «casa», «cabeza», «cabina», «calle», «catedral», «camino»;
        
        con todas las palabras que riman con «anto», como «santo», «manto», «cuanto», «tanto», «otranto»; 
        
        con todas las palabras que ideológicamente se les aproximan, por vía de su significado: «piedra», «guijarro», «roca», «peña», «peñasco», «adoquín», mojón», «ladrillo»; etc. 
        
        Éstas son las asociaciones más fáciles. Una palabra golpea a otra por inercia. Es difícil que esto baste para provocar la «chispa» (pero nunca se sabe).
        
        Pero la palabra continúa cayendo en otras direcciones, profundiza en el mundo del pasado, pone a flote presencias sumergidas. «Canto», en este caso, es para mi «Santa Caterina del Sasso» (Santa Catalina de la Peña), un santuario emplazado sobre un gran peñasco, a la orilla del lago Mayor... Íbamos en bicicleta, íbamos juntos, Amedeo y yo. Nos sentábamos bajo un fresco pórtico, a beber vino blanco y a hablar de Kant. A veces coincidíamos en el tren, ambos éramos estudiantes de música. Amedeo llevaba un gran abrigo azul. Algunos días, bajo el abrigo, se adivinaba el bulto del estuche de su violín. El asa de mi estuche estaba rota y tenía que llevarlo bajo el brazo... Amedeo se alistó en los Alpinos y murió en Rusia.
        
        En otra ocasión, la figura de Amedeo me vino a la mente por una «evolución» de la palabra «ladrillo», que me recordó ciertos hornos o ladrillares, en la llanura lombarda, y largas caminatas en la niebla, o en los bosques... A menudo, Amedeo y yo pasábamos tardes enteras, en esos bosques, hablando de Kant, de Dostoyevski, de Montale, de Alfonso Gatto. Las amistades de los dieciséis años son las que dejan las señales más profundas. Pero esto, aquí no interesa. Lo que interesa es la forma en que una palabra, escogida al azar, funciona como una «palabra mágica» para desenterrar campos de la memoria que yacían sepultados por el polvo del tiempo.
        
        De manera no muy diferente actuaba el sabor de las magdalenas en la memoria Proust. Y, después de él, todos los «escritores de la memoria» han aprendido, y hasta han abusado, de los ecos escondidos en las palabras, los olores, los sonidos. Pero nosotros queremos escribir historias para niños y no narraciones que nos ayuden a recuperar el tiempo perdido. Si acaso, de cuando en cuando, será útil y hasta divertido jugar con los niños al juego de la memoria. Cualquier palabra podrá ayudarlos a recordar «aquella vez que...», a identificarse con el tiempo que pasa, a medir la distancia entre ayer y hoy, aunque sus «ayeres» sean todavía, por suerte, pocos y no muy complicados.
        
        El «tema fantástico», en este tipo de evoluciones a partir de una sola palabra, nace cuando se crean «aproximaciones extrañas», cuando en el complejo movimiento de las imágenes y sus interferencias caprichosas, surgen parentescos imprevisibles entre palabras que pertenecen a cadenas diferentes. «Ladrillo» trae consigo (en una sucesión de imágenes y rimas): «piedra», «mojón», «canto», «canción»...
        
        Ladrillo y canción se me presentan como una pareja interesante, aunque no tan «bella como el fortuito encuentro entre una sombrilla y una máquina de coser sobre una mesa anatómica» (Lautréamont, Los cantos de Maldoror). En el confuso conjunto de las palabras hasta aquí evocadas, «ladrillo» es a «canción», lo que «canto» o «guijarro» (por su rima) es a «guitarro». Aquí, el violín de Amedeo añade probablemente el elemento afectivo y favorece el nacimiento de una imagen musical.
        
        He aquí una casa musical. Construida con ladrillos musicales, con piedras musicales. Sus paredes, tocadas con unos palillos, nos brindan todas las notas posibles. Sé que hay un do sostenido encima del sofá, el fa más agudo está debajo de la ventana, el pavimento suena en si bemol mayor, una tonalidad excitante. Hay una estupenda puerta atonal, serial, electrónica: basta insinuar un ligero toque con los dedos para obtener una escala a la Nono-Berio-Maderna, que haría delirar a Stockhausen (alguien que entra en esta historia con másderecho que nadie por el «haus», «casa», de su apellido).
        
        Pero no se trata sólo de una casa. Hay todo un pueblo musical con una casa-piano, una casa-harpa, una casa-flauta... Es un pueblo-orquesta. Al caer la tarde, sus habitantes, tocando sus casas, ofrecen un maravilloso concierto antes de ir a dormir... De noche, mientras todos duermen, un prisionero toca las barras de su celda... etc. La narración, a partir de aquí, vuela con sus propias alas.
        
        Creo que el prisionero ha hecho su entrada en el cuento gracias a la rima entre «canción» y «prisión», que en un principio me había pasado por alto, y ha acabado por manifestarse por sí misma. Las barras aparecen como una consecuencia lógica. Pero, pensándolo mejor, podría ser que me las haya sugerido el título de una vieja película, que de improviso me ha venido a la mente: Prisión sin barrotes.
        
        La imaginación puede tomar ahora otro camino:
        
        Desaparecen las barras de todas las prisiones del mundo. Escapan todos. ¿También los ladrones? Sí, también los ladrones. Es la prisión la que produce los ladrones. Desaparecida la prisión, acabados los ladrones...
        
        Y aquí noto cómo en el proceso aparentemente mecánico de la creación de la historia, mi ideología va haciendo su aparición, va tomando forma como si se ajustase a un molde, al tiempo que lo modifica. Siento el eco de lecturas antiguas y recientes. Desde sus distintos mundos, los silenciados piden ser nombrados: los orfanatos, los reformatorios, los asilos de ancianos, los manicomios, las aulas docentes. La realidad irrumpe en el ejercicio surrealístico. Al final, si este pueblo-musical llega a convertirse en una historia, puede ser que no se trate tan sólo de una fantasía, sino de un sistema de redescubrir y representar con formas nuevas la realidad.
        
        Pero la exploración de la palabra «canto» no ha acabado. Aún me queda rechazarla en su significado y en su sonido. Tengo que descomponerla en sus letras. Debo descubrir las palabras que he rechazado sucesivamente para llegar a su pronunciación:
        
        Escribo las letras una debajo de la otra:
        -C
        -A
        -N
        -T
        -O
        
        Ahora junto a cada letra puedo escribir la primera palabra que se me ocurra, obteniendo una nueva serie (por ejemplo: «casa-abogado-nariz-tonto-oso»). O puedo —y será más divertido— escribir junto a las cinco letras cinco palabras que formen una frase completa, así:
        
        C - Cada
        A - año
        N - nacen
        T - treinta
        O - ovejas
        
        No sabría qué hacer, en este momento, con treinta ovejas anuales, excepto usarlas para construir un «disparate en verso»:
        
        Treinta ovejas anuales
        son mis rentas actuales... etc.
        
        No hay por qué esperar un resultado positivo a la primera. Hago un nuevo intento, con la misma serie de letras:
        
        C - Coloco
        A - a
        N - nuestros
        T - trescientos
        O - oboes
        
        «Trescientos» es una prolongación automática de la palabra «treinta» de la serie anterior. Los «oboes» se relacionan directamente con la historia musical antes narrada. Y, de cualquier manera, una agencia musical que disponga de trescientos oboes y sea capaz de colocarlos, es una imagen que por su optimismo vale la pena.
        
        Personalmente he inventado muchas historias partiendo de una palabra escogida al azar. Una vez, por ejemplo, partiendo de la palabra «cuchara», obtuve la siguiente cadena: «cuchara-Cocchiara» (pido perdón, ante todo, por el uso arbitrario, aunque no malintencionado, de un nombre ilustre, que lo es también en el campo de la fábula...) - «clara / clara de huevo / oval / órbita / huevo en órbita». Aquí me detuve y escribí una historia titulada: El mundo en un huevo, que está a medio camino entre la ciencia-ficción y la tomadura de pelo.
        
        Podemos dejar ahora la palabra «canto» a su suerte. A pesar de no haber agotado todas sus posibilidades. Paul Valéry ha dicho: «Ninguna palabra resulta comprensible si se la estudia a fondo». Y Wittgenstein: «Las palabras son como la película superficial de las aguas profundas.» Las historias se consiguen, justamente, nadando bajo el agua.
        
        Por lo que se refiere a la palabra «ladrillo», recordaré el test americano de creatividad de que habla Marta Fattori en su libro Creatividad y educación. Con este test, se invita a los niños a dar una lista de todos los usos posibles de un «ladrillo». Tal vez, la palabra «ladrillo» se ha fijado tan insistentemente en mi imaginación por haber leído recientemente sobre este test, en el libro de la Fattori. De cualquier modo, tests como éste no tienen como finalidad el estimular la creatividad infantil, sino el medirla para «seleccionar los niños con más imaginación», como otros tests se realizan para seleccionar a «los mejores en matemáticas». Tendrán su utilidad, no cabe duda, pues sus fines pasan por encima de los intereses de los mismos niños.
        El ejemplo del «canto en el estanque», que acabo de ilustrar, se mueve, en cambio, en sentido contrario: debe servir a los niños, no servirse de ellos.`,
        "etiquetas": ["Ejemplos para incentivar la creatividad en temas complejas"],
        "referencia": "Gramatica de la fantasia. Introducción al arte de inventar historias, Gianni Rodari"
      },
      {
        "Id": 352,
        "nombre": "El binomio fantástico",
        "descripcion": `Hemos visto nacer el tema fantástico -el nacimiento de una historia- en base a una sola palabra. Pero no ha sido más que una ilusión óptica. En realidad, no basta un polo eléctrico para provocar una chispa, hacen falta dos. Una palabra sola «reacciona» («Búfalo. Y el nombre reaccionó...», dice Montale) sólo cuando encuentra una segunda que la provoca y la obliga a salir del camino de la monotonía, a descubrirse nuevas capacidades de significado. No hay vida donde no hay lucha.
  
        Esto se produce porque la imaginación no es una facultad cualquiera separada de la mente: es la mente misma, en su conjunto, que aplicada a una actividad o a otra, se sirve siempre de los mismos procedimientos. Y la mente nace en la lucha, no en la quietud. Ha escrito Henry Wallon, en su libro «Los orígenes del Pensamiento en el Niño», que el pensamiento se forma en parejas. La idea de «blando» no se forma primero ni después que la idea de «duro», sino que ambas se forman contemporáneamente, en un encuentro generador: «El elemento fundamental del pensamiento es esta estructura binaria y no cada uno de los elementos que la componen. La pareja, el par son elementos anteriores al concepto aislado.»
        
        Así tenemos que «en el principio era la oposición». Del mismo parecer se nos muestra Paul Klee cuando escribe, en su «Teoría de la forma y de la figuración», que el concepto es imposible sin su oponente. No existen conceptos aislados, sino que por regla son «binomios de conceptos».
        
        Una historia sólo puede nacer de un «binomio fantástico».
        
        «Caballo-perro» no es un auténtico «binomio fantástico». Es una simple asociación dentro de la misma clase zoológica. La imagen asiste indiferente a la evocación de los dos cuadrúpedos. Es un arreglo de tercera categoría que no promete nada excitante.
        
        Es necesaria una cierta distancia entre las dos palabras, que una sea suficientemente extraña a la otra, y su unión discretamente insólita, para que la imaginación se ponga en movimiento, buscándoles un parentesco, una situación (fantástica) en que los dos elementos extraños puedan convivir. Por este motivo es mejor escoger el «binomio fantástico» con la ayuda de la «casualidad». Las dos palabras deben ser escogidas por dos niños diferentes, ignorante el primero de la elección del segundo; extraídas casualmente, por un dedo que no sabe leer, de dos páginas muy separadas de un mismo libro, o de un diccionario.
        
        Cuando era maestro, mandaba a un niño que escribiera una palabra sobre la cara visible de la pizarra, mientras que otro niño escribía otra sobre la cara invisible. El pequeño rito preparatorio tenía su importancia. Creaba una expectación. Si un niño escribía, a la vista de todos, la palabra «perro», esta palabra era ya una palabra especial, dispuesta para formar parte de una sorpresa, a formar parte de un suceso imprevisible. Aquel «perro» no era un cuadrúpedo cualquiera, era ya un personaje de aventura, disponible, fantástico. Le dábamos la vuelta a la pizarra y encontrábamos, pongamos por caso, la palabra «armario», que era recibida con una carcajada. Las palabras «ornitorrinco» o «tetraedro» no habrían tenido un éxito mayor. Ahora bien, un armario por sí mismo no hace reír ni llorar. Es una presencia inerte, una tontería. Pero ese mismo armario, haciendo pareja con un perro, era algo muy diferente. Era un descubrimiento, una invención, un estímulo excitante.
        
        He leído, años después, lo que ha escrito Max Ernst para explicar su concepto de «dislocación sistemática». Se servía justamente de la imagen de un armario, el pintado por De Chirico en medio de un paisaje clásico, entre olivos y templos griegos. Así «dislocado», colocado en un contexto inédito, el armario se convertía en un objeto misterioso. Tal vez estaba lleno de vestidos y tal vez no: pero ciertamente estaba lleno de fascinación.
        
        Viktor Slokovsky describe el efecto de «extrañeza» (en ruso «ostranenije») que Tolstoi obtiene hablando de un simple diván en los términos que emplearía una persona que nunca antes hubiese visto uno, ni tuviera idea alguna sobre sus posibles usos.
        
        En el «binomio fantástico» las palabras no se toman en su significado cotidiano, sino liberadas de las cadenas verbales de que forman parte habitualmente. Las palabras son «extrañadas», «dislocadas», lanzadas una contra otra en un cielo que no habían visto antes. Es entonces que se encuentran en la situación mejor para generar una historia.
        
        Llegados a este punto, tomemos las palabras «perro» y «armario».
        
        El procedimiento más simple para relacionarlas es unirlas con una preposición articulada. Obtenemos así diversas figuras:
        
        el perro con el armario
        el armario del perro
        el perro sobre el armario
        el perro en el armario
        etcétera.
        
        Cada una de estas situaciones nos ofrece el esquema de algo fantástico.
        
        1. Un perro pasa por la calle con un armario a cuestas. Es su casita, ¿qué se le va a hacer? La lleva siempre consigo, como el caracol lleva su concha. Es aquello de que sarna con gusto no pica.
        
        2. El armario del perro me parece más bien una idea para arquitectos, diseñadores o decoradores de lujo. Es un armario especialmente ideado para contener la mantita del perro, los diferentes bozales y correas, las pantuflas anti-hielo, la capa de borlitas, los huesos de goma, muñecos en forma de gato, la guía de la ciudad (para ir a buscar la leche, el periódico y los cigarrillos a su dueño). No sé si podría contener también una historia.
        
        3. El perro en el armario, a ojos cerrados, es una posibilidad más atractiva. El doctor Polifemo regresa a casa, abre el armario para sacar su batín, y se encuentra con un perro. Inmediatamente se nos presenta el desafío de hallar una explicación a esta aparición. Pero la explicación no es tan urgente. Resulta más interesante, de momento, analizar de cerca la situación. El perro es de una raza difícil de precisar.
        
        Tal vez es un perro de trufas, tal vez es un perro de ciclámenes. ¿De rododendros...? Amable con todo el mundo, mueve alegremente la cola y saluda con la patita, como los perros bien educados, pero no quiere saber nada de salir del armario, por más que el doctor Polifemo se lo implore. Más tarde, el doctor Polifemo va a tomar una ducha y se encuentra otro perro en el armarito del baño. Hay otro en el armario de la cocina, donde se guardan las ollas. Uno en el lavavajillas. Uno en el frigorífico, medio congelado. Hay un caniche en el compartimiento de las escobas, y hasta un chihuahua en el escritorio. Llegado a este punto, el doctor Polifemo podría muy bien llamar al portero para que le ayudase a rechazar la invasión canina, pero no es esto lo que le dicta su corazón de cinófilo. Por el contrario, corre a la carnicería para comprar diez kilos de filete para alimentar a sus huéspedes. Cada día, desde entonces, compra diez kilos de carne. Y así comienzan sus problemas. El carnicero comienza a sospechar. La gente habla. Nacen los rumores. Vuelan las calumnias. Aquel doctor Polifemo... ¿no tendrá en casa algunos espías atómicos?
        
        ¿No estará haciendo experimentos diabólicos con todos aquellos filetes y bistecs? El pobre doctor pierde la clientela. Llegan soplos a la policía. El comisario ordena una investigación en su casa. Y así se descubre que el doctor Polifemo ha soportado inocente tantos problemas por amor a los perros. Etcétera.
        
        La historia, en este punto, es sólo «materia prima». Trabajarla hasta el producto acabado sería el trabajo de un escritor, y lo que aquí nos interesa es poner un ejemplo de «binomio fantástico». El disparate debe permanecer como tal. Ésta es una técnica que los niños llegan a dominar con facilidad, con no poca diversión, como yo mismo he podido comprobar en tantas escuelas de Italia. El ejercicio bien entendido tiene una gran importancia de la que hablaremos más adelante, pero sin olvidar la alegría que proporciona. En nuestras escuelas, hablando generalmente, se ríe demasiado poco. La idea que la educación de la mente deba ser una cosa tétrica es de las más difíciles de combatir. Alguna cosa sabía Giacomo Leopardi cuando escribía, en su Zibaldone, el 1. ° de agosto de 1823:
        
        «La más bella y afortunada edad del hombre, que es la niñez, es atormentada de mil modos, con mil angustias, temores, fatigas de la educación y de la instrucción, tanto que el hombre adulto, incluso si se encuentra en la infelicidad..., no aceptaría volverse niño si había de pasar por todo lo que en su niñez ya pasó.»`,
        "etiquetas": ["Ejemplos para incentivar la creatividad en temas complejas"],
        "referencia": "Gramatica de la fantasia. Introducción al arte de inventar historias, Gianni Rodari"
      }

      ]
    }]
  }

]

obtenerDatos () {
  return this.datos;
}



  constructor() { }
}
