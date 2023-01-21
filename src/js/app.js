const unidades = document.querySelector(".unidades");
unidades.addEventListener("click", function(e){
    mostrarFormulario(e.target.id);
});
    

    function mostrarFormulario(unidad){
        const contenido1 = `
        <div class="teoria">
            <h1>LOGICA DE PREPOSICIONES 1</h1>
            <p>1.3. INTERPRETACION
            Dada una fórmula proposicional compuesta, la interpretación define
            qué fórmulas atómicas del lenguaje de proposiciones son falsas (0) y
            qué fórmulas son verdaderas (1).
            Definición:
            Sea Var el conjunto de átomos del lenguaje L
            Una interpretación es una función de Var  {0,1},
            (asigna a cada elemento de Var un 0 o un 1)
            28
            Var = {p1
            , p2
            , p3
            , p4
            , … }
            Ejemplo:
            Sea Var = { p, q, r } ; una interpretación I1
            , puede estar dada
            por: I1 = { p }
            Significa que la imagen de p es 1, mientras los restantes átomos
            (elementos) de Var tienen como imagen 0
            Si I2 = { q, r } significa que la imagen de q es 1 y la de r es 1
            también, mientras la de p es 0
            Si I3 = { p, q, r } significa que la imagen de p, q y r es 1
            29
            Definición:
            - Sea I una interpretación.
            - Sea Form el conjunto de fórmulas de L
            Una valuación bajo una interpretación I, es cualquier función
            vI de Form en {0,1}, que satisface las siguientes reglas:
            v.1) vI
            (pn
            ) = I(pn
            ) para cada variable proposicional.
            Cuando la fórmula es una variable proposicional, su
            valuación coincide con la asignación que le hace su
            interpretación.
            30
            v.2) Si ϕ y ρ son fbf arbitrarias, se define θ según la siguiente
            tabla:
            Ejemplo:
            Sea Var = { p, q, r } y J una interpretación dada por: J = { q }.
            La valuación de la fórmula:
            Porque: vJ
            (p) = 0
            31
            y la interpretación I = { p }
            porque: vI
            (p) = 1 y vI
            (q) = 0
            32
            Sea
            para la interpretación I = { p, q, r }
            porque: vI
            (p) = 1, vI
            (q) = 1 y vI
            (r) = 1
            Valuaciones de θ1
            y θ2 para diferentes interpretaciones de
            Var = {ϕ, ρ} (valuaciones de ϕ y ρ). Reconozca cada una de
            las interpretaciones para las diferentes valuaciones de θ
            33
            Ejercicios:
            Sea Var = { p, q }. Encuentre la valuación de la fórmula θ para
            las interpretaciones dadas en cada caso
            34
            1.4 FORMULAS SATISFACIBLES
            Sea θ una fórmula y sea I una interpretación.
            θ es verdadera bajo I, si su valor de verdad (valuación) es 1
            se dice que I satisface a θ;
            o que θ es satisfacible por I
            Si θ es falsa bajo I, cuando su valor de verdad es 0
            se dice que I no satisface a θ
            Definición:
            35
            Ejercicio:
            Diga en qué caso
            a)
            b)
            c)
            d)
            36
            1.5 MODELOS – TAUTOLOGIAS - CONTRADICCIONES
            Sea θ una fórmula y sea I una interpretación.
            I es un modelo para θ si I satisface a θ;
            se dice también que θ tiene como modelo a I
            Definición
            Definición
            θ es tautología si todas las interpretaciones son modelos para θ
            Las tautologías se denotan con T0
            Si una fórmula θ es tautológica, se escribe:
            37
            38
            Los tipos mas importantes de Tautología son:
            Las equivalencias lógicas
            Las implicaciones lógicas
            Se utilizan como esquemas de sustitución en procesos de
            razonamiento
            Se utilizan como esquemas de razonamientos válidos
            Definición
            θ es contradicción, insatisfacible o inconsistente si es falsa para
            todas las interpretaciones.
            Las contradicciones se denotan con F0
            Una contradicción no tiene interpretaciones que sean modelos.
            Una fórmula lógica que no es tautología ni contradicción se
            denomina contingencia
            Una contingencia es satisfacible pero no es tautología;
            significa que para alguna(s) interpretación(es) tiene valor de
            verdad 1, pero no para otras.
            39
            contingencia tautología contradicción tautología
            Fórmulas
            Insatisfacibles
            Fórmulas
            Satisfacibles
            Tautologías
            40
            Sea S un conjunto de fórmulas de manera que
            y una valuación.
            La valuación es modelo para S
            si es modelo para todas las fórmulas de S </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido2 = `
        <div class="teoria">
            <h1>Relaciones de Recurrencia</h1>
            <p>SUCESIONES
            Definición 1. Una sucesión es una función que va de
            Naturales en Reales; si va de Naturales en Enteros se
            llama Sucesión entera
            S: a1
            , a2
            , a3
            ,…, an o S: {an
            : n∈N } o S: {an
            }
            Los elementos a1
            , a2
            , a3
            , … son términos de la sucesión.
            a1 es el primer término de la sucesión, a2 es el segundo
            término de la sucesión y así siguiendo an es el término nésimo de la sucesión.
            2019 4
            Si se incluye el cero en el dominio de la sucesión,
            a0
            será el primer elemento de la sucesión y
            an
            será el término (n+1)-ésimo de la sucesión.
            Por ejemplo: en la sucesión 2, 4, 6, … la fórmula para
            determinar el n-ésimo término es relativamente simple.
            bn = 2n
            2019 5
            Si necesitamos calcular b7
            se resolverá 2∙7 = 14
            Es claro que para conocer b7 no ha sido necesario
            conocer los términos anteriores
            Consideremos las siguientes sucesiones:
            S1
            :1, 2, 3, 4, 5, 6, …
            S2
            : 1, 4, 9, 16, 25, 36, …
            S3
            :1, 3, 5, 7, 9, 11,…
            2019 6
            Sin embargo no en todas las sucesiones es posible
            conocer una fórmula explícita para el término n-ésimo,
            por ejemplo
            S4
            : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 . . .
            Relaciones de Recurrencia
            Hay series donde es posible conocer una expresión para el
            término n-ésimo, pero este no es una función explícita de n.
            2019 7
            La sucesión de Fibonacci
            S5
            : 1, 1, 2, 3, 5, 8, 13, 21, . . .
            cada término es la suma de los dos anteriores
            a1=1, a2=1, an= an-1 + an-2 n ≥ 3
            No tiene una fórmula explícita para an
            ;
            para conocer el valor de a7 es necesario conocer los
            valores de a6
            y de a5
            ; para conocer el valor de a6 es
            necesario conocer los valores de a5
            y de a4
            ; y así
            siguiendo.
            a7 = a6 + a5
            a7 = a5 + a4 + a4 + a3 = a5 + 2a4 + a3
            a7 = a4 + a3 + 2(a3 + a2
            ) + a2 + a1 = a4 + 3a3 + 3a2 + a1
            a7 = a3 + a2 + 3a3 + 3a2 + a1 = 4a3 + 4a2 + a1
            a7 = 4a2 + a1 + 4a2 + a1 = 8a2 + 5a1
            pero: a1 = a2 = 1
            entonces: a7 = 8∙1 + 5∙1 = 13
            Para calcular el término n-ésimo es necesario conocer
            los términos anteriores.
            2019 8
            2019 9
            Fórmula de Binet
            (para calcular términos de Fibonacci)
            (número áureo o número de oro)
            Definición 2
            Si en una sucesión S: a1
            , a2
            , a3
            ,…,an
            el término an puede ser expresado en función de los
            términos anteriores an-1
            , an-2
            , an-3
            ,…,a1
            ;
            la expresión es una relación de recurrencia y se puede
            expresar:
            an= F(an-1
            , an-2
            , an-3
            ,…,a1
            )
            En general, para poder calcular los términos de una
            sucesión, es necesario conocer al menos un término de
            la misma. 2019 10
            Definición 3
            Sea k el entero menor para el cual tenemos asignados
            valores de a1
            ,a2
            ,…,ak
            an= F(an-1
            , an-2
            , an-3
            ,…,a1
            )
            permite calcular valores únicos para an
            si n>k.
            2019 11
            Los valores de a1
            ,a2
            ,…,ak
            se llaman condiciones iniciales
            o condiciones de frontera de la relación.
            Las condiciones iniciales con la relación de recurrencia
            generan unívocamente la sucesión. </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido3 = `
        <div class="teoria">
            <h1>Estructuras Algebraicas Finitas</h1>
            <p>Objetivo
            Se analizarán las operaciones binarias y sus propiedades dentro de una estructura algebraica.
            Definición de operación binaria
            Operaciones como la suma, resta, multiplicación o división de números son consideradas
            operaciones binarias, ya que asocian a un par de números con un resultado. En general, una
            operación binaria tiene dos características esenciales:
            • Se aplica a un par de elementos con una naturaleza determinada.
            • Asocia a dicho par con otro único elemento de la misma naturaleza determinada; la
            asociación se realiza por medio de un criterio definido.
            En forma general, una operación binaria definida en un conjunto S no vacío es una función 𝑆 × 𝑆
            que relaciona un par de elementos (𝑎, 𝑏) ∀ 𝑎, 𝑏 ∈ 𝑆 con una imagen 𝑐 ∈ 𝑆.
            Ejemplo 7.1. Si se considera al conjunto de los números racionales y la suma, se tendrá que dicha
            operación asocia a un par de números racionales otro único número racional; es decir, para el par
            de números racionales �
            𝑎
            𝑏 ,
            𝑐
            𝑑
            �, existe un único número denotado como 𝑎
            𝑏 + 𝑐
            𝑑 que se conoce como
            la suma de 𝑎
            𝑏 y 𝑐
            𝑑
            . El criterio para obtener la suma de dos números racionales es
            𝑎
            𝑏 +
            𝑐
            𝑑 = 𝑎𝑑 + 𝑏𝑐
            𝑏𝑑
            Además de las operaciones tradicionales, es posible expresar otras operaciones binarias.
            Ejemplo 7.2. La tabla 7.1 especifica la operación binaria AND, que establece una operación lógica
            utilizada en la electrónica y la computación
            · 0 1
            0 0 0
            1 0 1
            Tabla 7.1. Operación AND.
            En este caso, el criterio que se establece para realizar la operación es la misma tabla, y el conjunto
            sobre el cual se aplica es {0, 1}; en este caso se tendría:
            0 · 1 = 0 1 · 0 = 0
            1 · 1 = 1 0 · 0 = 0
            Álgebra 2012
            127 Elaboró: Ing. Aldo Jiménez Arteaga
            Que son los resultados que la operación puede asignar.
            Las operaciones binarias también pueden definirse por medio de reglas de correspondencia, y
            haciendo uso de las operaciones binarias tradicionales.
            Ejemplo 7.3. Sea la siguiente operación binaria
            𝑥 ‡ 𝑦 = 𝑥𝑦 ∀ 𝑥, 𝑦 ∈ ℤ
            Se puede obtener un resultado para la pareja (−1, 6):
            −1 ‡ 6 = (−1)6
            Cuyo resultado es 1.
            Propiedades de las operaciones binarias
            Cuando un conjunto tiene definida una operación binaria se puede formar un sistema algebraico
            que posee una estructura definida, la cual está ligada a las diferentes propiedades que posea la
            operación binaria.
            Los niveles y diferentes tipos de estructuras algebraicas están sujetos a la naturaleza de las
            propiedades que se cumplen para una operación en un conjunto dado. Así, las estructuras de
            grupo, anillo y campo se diferencian por el número de operaciones y las propiedades que éstas
            cumplen en un conjunto numérico dado.
            La primera de estas propiedades es inherente al concepto de operación binaria: a cada par de
            elementos de cierta naturaleza se le asigna un resultado de ésa misma naturaleza.
            Ejemplo 7.4. Si se aplica la suma a los números naturales, el resultado será otro número natural:
            𝑚 + 𝑛 = 𝑝 ∀ 𝑚, 𝑛, 𝑝 ∈ ℕ
            Si se tuviesen los números naturales 3 y 4, el resultado de su suma es 7, otro número natural.
            Esto quiere decir que una operación binaria es cerrada; o sea, una operación definida en un
            conjunto S da como resultado un elemento de ese conjunto S.
            Cerradura
            Si el resultado de aplicar una operación binaria (∗) está definido en un conjunto S, entonces se
            dice que S es cerrado con respecto a dicha operación binaria; es decir,
            𝑎 ∗ 𝑏 ∈ 𝑆, ∀ 𝑎, 𝑏 ∈ 𝑆
            Ejemplo 7.5. Sea la operación binaria 𝑥 ‡ 𝑦 = 𝑥𝑦 ∀ 𝑥, 𝑦 ∈ ℤ. Se obtiene un resultado que puede o
            no pertenecer a los números enteros. Si el operando y fuese mayor a cero, el resultado es un
            número entero; por ejemplo, (−2,3) arrojaría el siguiente resultado:
            −2 ‡ 3 = (−2)−3
            Álgebra 2012
            128 Elaboró: Ing. Aldo Jiménez Arteaga
            Que es −8 ∈ ℤ. En cambio si la pareja a operar fuese (3, −2), el resultado sería
            3 ‡ −2 = (−3)−2
            Que es el número fraccionario 1
            9 ∉ ℤ, ya que es un número racional; por lo tanto, la operación (‡)
            no es cerrada para el conjunto de los números enteros.
            Ejemplo 7.6. Sea el conjunto 𝑋 = {𝑎̈, 𝑜̈, 𝑢̈} y la operación definida por la tabla 7.2.
            ß ä ö ü
            ä ä ö ü
            ö ö ö ä
            ü ä ö ü
            Tabla 7.2. Operación Eszett definida para X.
            Al aplicar la operación a una pareja de elementos, se puede observar que la operación es cerrada,
            ya que siempre se obtendrá como resultado un elemento del conjunto X.
            𝑎̈ß 𝑜̈= 𝑜̈ 𝑢̈ß 𝑢̈= 𝑢̈ 𝑜̈ß 𝑢̈= 𝑎̈
            Asociatividad
            Al momento de definir una operación binaria se precisó que sólo podía realizarse con dos
            elementos de un solo conjunto; es decir, al tratar de operar tres elementos, primero se debe
            realizar la operación con dos de ellos, y después trabajar con el resultado y el tercer elemento.
            Este proceso de asociar elementos para operarlos se define como propiedad asociativa.
            Para una operación binaria (∗) definida en el conjunto S, la asociación de elementos especifica
            que:
            (𝑎 ∗ 𝑏) ∗ 𝑐 = 𝑎 ∗ (𝑏 ∗ 𝑐)
            Ejemplo 7.7. En la suma de números enteros se tiene la asociación cumplida.
            (𝑎 + 𝑏) + 𝑐 = 𝑎 + (𝑏 + 𝑐) ∀ 𝑎, 𝑏, 𝑐 ∈ ℤ
            Que a su vez es extensión de la suma en los números naturales.
            Ejemplo 7.8. Para el conjunto X y la operación de la tabla 7.2, la asociación no puede cumplirse ya
            que
            𝑜̈ß (𝑜̈ß 𝑢̈) = 𝑜̈ß 𝑎̈⇒ 𝑜̈
            (𝑜̈ß 𝑜̈) ß 𝑢̈= 𝑜̈ß 𝑢̈⇒ 𝑎̈
            Que son dos resultados completamente diferentes.
            Álgebra 2012
            129 Elaboró: Ing. Aldo Jiménez Arteaga
            Ejemplo 7.9. Para las matrices de orden 𝑚 × 𝑛 y la operación de suma, es posible asociar los
            elementos que se operarán:
            (𝐴𝑚×𝑛 + 𝐵𝑚×𝑛) + 𝐶𝑚×𝑛 = 𝐴𝑚×𝑛 + (𝐵𝑚×𝑛 + 𝐶𝑚×𝑛)
            Y el resultado no se verá alterado.
            Existencia del elemento neutro
            Si existe un elemento e dentro de un conjunto, que tiene la propiedad de no alterar a otro
            elemento a cuando se les aplica una operación binaria, entonces se habla de un elemento neutro.
            Si se define la operación binaria (∗) dentro del conjunto S, y existe un elemento 𝑒 ∈ 𝑆 tal que
            • 𝑎 ∗ 𝑒 = 𝑎, ∀ 𝑎 ∈ 𝑆, entonces e es un elemento neutro por la derecha.
            • 𝑒 ∗ 𝑎 = 𝑎, ∀ 𝑎 ∈ 𝑆, entonces e es un elemento neutro por la izquierda.
            • 𝑎 ∗ 𝑒 = 𝑒 ∗ 𝑎 ⇒ 𝑎, ∀ 𝑎 ∈ 𝑆, entonces e es un elemento neutro para (∗).
            Esto quiere decir que un conjunto dado tendrá, al menos, un elemento neutro si éste es neutro
            por la izquierda y por la derecha.
            Ejemplo 7.10. Si se considera al conjunto de las matrices de orden 𝑚 × 𝑛 y la operación de
            multiplicación, se verifica que el elemento neutro sería la matriz identidad:
            𝐼𝑚𝐴𝑚×𝑛 = 𝐴𝑚×𝑛
            Donde 𝐼𝑚 es la matriz identidad de orden m, la cual es un elemento neutro por la izquierda.
            𝐼𝑛𝐴𝑛×𝑚 = 𝐴𝑛×𝑚
            Donde 𝐼𝑛 es la matriz identidad de orden n, la cual es un elemento neutro por la derecha.
            Estas son las propiedades que cumple la matriz identidad y que se estudiaron en el tema de
            matrices y determinantes.
            Ejemplo 7.11. El elemento neutro para la operación de suma en los números complejos sería el
            número 0 + 0𝑖, ya que
            (𝑥 + 𝑦𝑖) + (0 + 0𝑖) = 𝑥 + 𝑦𝑖 ∀ 𝑥 + 𝑦𝑖 ∈ ℂ
            Por medio de la conmutación en ℂ, se verifica que 0 + 0𝑖 es neutro por la izquierda y por la
            derecha.
            Ejemplo 7.12. En el conjunto X del ejemplo 7.6 y la operación de la tabla 7.2, se puede verificar que
            existen dos elementos neutros por la izquierda: ä y ü.
            𝑎̈ß 𝑎̈= 𝑎̈ 𝑎̈ß 𝑜̈= 𝑜̈ 𝑎̈ß 𝑢̈= 𝑢̈
            𝑢̈ß 𝑎̈= 𝑎̈ 𝑢̈ß 𝑜̈= 𝑜̈ 𝑢̈ß 𝑢̈= 𝑢̈
            Álgebra 2012
            130 Elaboró: Ing. Aldo Jiménez Arteaga
            En cambio, estos elementos no son neutros por la derecha.
            𝑎̈ß 𝑎̈= 𝑎̈ 𝑜̈ß 𝑎̈= 𝑜̈ 𝑢̈ß 𝑎̈= 𝑎̈
            𝑎̈ß 𝑢̈= 𝑢̈ 𝑜̈ß 𝑢̈= 𝑎̈ 𝑢̈ß 𝑢̈= 𝑢̈
            Y por lo tanto, la operación ß no posee elementos neutros.
            Existencia de elementos inversos
            Los elementos inversos se relacionan directamente con el elemento neutro. En este caso, si el
            resultado de la operación binaria es el elemento neutro, entonces los dos elementos que
            intervinieron en la operación son inversos uno del otro.
            Al definir la operación binaria (∗) dentro del conjunto S, y tomando en cuenta la existencia del
            elemento neutro 𝑒 ∈ 𝑆, se dice que
            • 𝑎 ∗ 𝑎� = 𝑒, ∀ 𝑎 ∈ 𝑆, entonces 𝑎� es el elemento inverso de a por la derecha.
            • 𝑎� ∗ 𝑎 = 𝑒, ∀ 𝑎 ∈ 𝑆, entonces 𝑎� es el elemento inverso de a por la izquierda.
            • 𝑎 ∗ 𝑎� = 𝑎� ∗ 𝑎 ⇒ 𝑒, ∀ 𝑎 ∈ 𝑆, entonces 𝑎� es el elemento inverso de a para (∗).
            Por lo tanto, si el inverso por la izquierda y por la derecha es el mismo, entonces es un elemento
            inverso único para a. Además, un conjunto tendrá para cada elemento su correspondiente inverso
            en una operación binaria.
            Ejemplo 7.13. En la multiplicación de matrices de orden n, y que son no-singulares, se tiene que
            𝐼𝑛𝐴𝑛 = 𝐴𝑛𝐼𝑛 ⇒ 𝐴𝑛
            Donde 𝐼𝑛 define al elemento neutro. En consecuencia, el elemento inverso de A por la izquierda
            será el mismo que el inverso por la derecha:
            Ejemplo 7.14. Cada elemento del conjunto de los números reales tiene un solo inverso definido
            para la operación de multiplicación:
            𝑥 · 𝑥−1 ∀ 𝑥 ≠ 0 ∈ ℝ
            Sabiendo que 1 es el elemento neutro en ℝ para la multiplicación, y que el cero es el único
            elemento que no posee inverso.
            Conmutatividad
            Cuando una operación binaria permite que el orden de los elementos no influya en el resultado
            que se obtendrá, se dice que la operación permite la conmutación. </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido4 = `
        <div class="teoria">
            <h1>ALGEBRA DE BOOL</h1>
            <p>Algebra de Boole
            Operadores Lógicos:
            Así como los operadores matemáticos (+, -, x,/, etc.) los operadores
            lógicos son los que interrelacionan a las variables lógicas de entrada
            entre sí.
            Estos son:
            AND cuyo símbolo es “●” ó “
            ∧” ó “&”
            OR cuyo símbolo es “+” ó “
            ∨” ó “#”
            NOT cuyo símbolo es “¯” ó “/” ó “!”
            EJEMPLOS:
            A ● B = A
            ∧ B = A & B = A B (sólo hay una separación entre variables)
            C + D = C
            ∨ D = C # D
            A = /A = !A
            Con combinaciones entre estos 3 operadores se pueden implementar
            cualquier función lógica posible.
            Algebra de Boole
Operadores Lógicos:
Así como los operadores matemáticos (+, -, x,/, etc.) los operadores
lógicos son los que interrelacionan a las variables lógicas de entrada
entre sí.
Estos son:
AND cuyo símbolo es “●” ó “
∧” ó “&”
OR cuyo símbolo es “+” ó “
∨” ó “#”
NOT cuyo símbolo es “¯” ó “/” ó “!”
EJEMPLOS:
A ● B = A
∧ B = A & B = A B (sólo hay una separación entre variables)
C + D = C
∨ D = C # D
A = /A = !A
Con combinaciones entre estos 3 operadores se pueden implementar
cualquier función lógica posible. </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido5 = `
        <div class="teoria">
            <h1>GRAFOS</h1>
            <p>Algebra de Boole
            Operadores Lógicos:
            Así como los operadores matemáticos (+, -, x,/, etc.) los operadores
            lógicos son los que interrelacionan a las variables lógicas de entrada
            entre sí.
            Estos son:
            AND cuyo símbolo es “●” ó “
            ∧” ó “&”
            OR cuyo símbolo es “+” ó “
            ∨” ó “#”
            NOT cuyo símbolo es “¯” ó “/” ó “!”
            EJEMPLOS:
            A ● B = A
            ∧ B = A & B = A B (sólo hay una separación entre variables)
            C + D = C
            ∨ D = C # D
            A = /A = !A
            Con combinaciones entre estos 3 operadores se pueden implementar
            cualquier función lógica posible. </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido6 = `
        <div class="teoria">
            <h1>ARBOLES</h1>
            <p>Un grafo conectado que contiene circuitos no simples se llama árbol. En el año de 1857 Arthur Cayley, matemático inglés, los empleó para contabilizar componente químicos, no obstante, es importante señalar que no solo es una herramienta de la química sino que se han utilizado en diversas áreas, por ejemplo, conforme el propio interés de la materia encaminado hacia las ciencias de la computación, se utiliza para la construcción de las redes.
            6.1.1. Propiedades de los árboles
            Entre las propiedades más importantes de los árboles está la presencia de un paseo entre cualquiera de dos vértices del árbol; segundo, que el número de vértices no es menor al número de aristas del árbol y que un árbol con más de dos vértices tiene por lo menos dos hojas.
            
             
            
            Un ejemplo claro de los árboles en la vida cotidiana son los árboles genealógicos. Para este caso, los vértices representan a los miembros de la familia y los arcos representan la relación de parentesco. Conforme los conocimientos adquiridos con anterioridad, el árbol no deja de ser un grafo, pero es del tipo no dirigido.
            
             
            
            Ejemplo de árbol genealógico:
            
            En este ejemplo cabe señalar que los recuadros representan los vértices del grafo y los arcos son las líneas que representan las relaciones de parentesco conforme a esta familia: </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const contenido7 = `
        <div class="teoria">
            <h1>LENGUAJES FORMALES Y AUTOMATAS</h1>
            <p>La teoría de autómatas es una rama de la teoría de la computación que estudia las máquinas abstractas y los problemas que éstas son capaces de resolver. La teoría de autómatas está estrechamente relacionada con la teoría del lenguaje formal ya que los autómatas son clasificados a menudo por la clase de lenguajes formales que son capaces de reconocer. También son de gran utilidad en la teoría de la complejidad computacional.

            Un autómata es un modelo matemático para una máquina de estado finito (FSM sus siglas en inglés). Una FSM es una máquina que, dada una entrada de símbolos, "salta" a través de una serie de estados de acuerdo a una función de transición (que puede ser expresada como una tabla). En la variedad común "Mealy" de FSMs, esta función de transición dice al autómata a qué estado cambiar dados unos determinados estado y símbolo.
            
            La entrada es leída símbolo por símbolo, hasta que es "consumida" completamente (piense en ésta como una cinta con una palabra escrita en ella, que es leída por una cabeza lectora del autómata; la cabeza se mueve a lo largo de la cinta, leyendo un símbolo a la vez) una vez la entrada se ha agotado, el autómata se detiene.
            
            Dependiendo del estado en el que el autómata finaliza se dice que este ha aceptado o rechazado la entrada. Si este termina en el estado "acepta", el autómata acepta la palabra. Si lo hace en el estado "rechaza", el autómata rechazó la palabra, el conjunto de todas las palabras aceptadas por el autómata constituyen el lenguaje aceptado por el mismo. </p>
        
            <button type="button" class="cerrar-modal">Cerrar</button>
            </div>
      `;
        const modal = document.createElement("DIV");
        modal.classList.add("modal");
        switch (unidad) {
            case "unidad1":
                modal.innerHTML= contenido1;
                break;
            case "unidad2":
                modal.innerHTML= contenido2;
                break;
            case "unidad3":
                modal.innerHTML= contenido3;
                break;
            case "unidad4":
                modal.innerHTML= contenido4;
                break;
            case "unidad5":
                modal.innerHTML= contenido5;
                break;
            case "unidad6":
                modal.innerHTML= contenido6;
                break;
        
            case "unidad7":
                modal.innerHTML= contenido7;
                break;
        
            default:
                break;
        }
        
      setTimeout(() => {
            const teoria = document.querySelector(".teoria");
            teoria.classList.add("animar");
      }, 0);
      modal.addEventListener("click",function(e){
        e.preventDefault();
        if(e.target.classList.contains("cerrar-modal")){
            const teoria = document.querySelector(".teoria");
            teoria.classList.add("cerrar");
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
      })
     
        if(unidad){
      document.querySelector(".contenido-main").appendChild(modal);
    }

    }

 