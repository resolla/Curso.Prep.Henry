// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    var arrOut = []
    for (var propiedad in objeto) {
        arrOut.push([propiedad, objeto[propiedad]]);
    }
    return (arrOut)
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí


    var objeto = {};
    var count = 0;
    for (let i = 0; i < string.length; i++) {
        count = 0;
        if (!objeto[string[i]]) {
            for (let j = 0; j < string.length; j++) {
                if (string[i] === string[j]) {
                    count++;
                }
            }
            objeto[string[i]] = count;
        }
    }
    return objeto;

}





function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí

    sMay = ""
    sMin = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === s[i]) {
            sMay = sMay.concat(s[i]);
        } else {
            sMin = sMin.concat(s[i]);
        }
    }

    return (sMay.concat(sMin));


}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var strPalabras = str.split(' ')
    var strEspejo = "";
    var sp = " "
    for (let i = 0; i < strPalabras.length; i++) {
        if (i === (strPalabras.length - 1)) {
            sp = "";
        }

        strEspejo = strEspejo + (strPalabras[i].split("").reverse().join(""));
        strEspejo = strEspejo + sp;

    }


    return strEspejo
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    // http://elrincondeneutron.blogspot.com/2012/04/capicua-o-palindromo-en-javascript.html
    // String.prototype.reverse = function() { return this.split("").reverse().join(""); }

    var numCapicua = ""
    var numStr = numero.toString();

    for (let i = numStr.length - 1; i >= 0; i--) {

        numCapicua = numCapicua + numStr[i];
    }
    if (numCapicua === numStr) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }

}



function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    var nCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i];
        if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
            nCadena = nCadena + cadena[i];
        }
    }
    return nCadena;
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí

    var len = 0;
    var cambio = ""
    var unorder = true;
    len = arr[0].length;
    while (unorder === true) {
        unorder = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length < arr[i - 1].length) {
                len = arr[i];
                unorder = true;
                cambio = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = cambio;
            }

        }

    }
    return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  

    var ret = [];
    for (var i = 0; i < arreglo1.length; i++) {
        for (var j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] == arreglo2[j]) {
                ret.push(arreglo2[j]);
                break;
            }
        }
    }
    return ret
}






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};