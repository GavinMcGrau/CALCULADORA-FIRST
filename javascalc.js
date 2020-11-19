


var numa;
var numb;
var operacion; 




function init(){
    
    alert("                        CALCULADORA PARA LENGUAJE DE MARCAS \n                                                MARC GAVIN GRAU")
    //variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var cuadrado = document.getElementById("cuadrado");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var ruben = document.getElementById("ruben");
    var raiz = document.getElementById("raiz");
    var random = document.getElementById("random");
    //eventos
    uno.onclick=function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick=function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick=function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick=function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick=function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick=function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick=function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick=function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick=function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick=function(e){
        resultado.textContent = resultado.textContent + "0"
    }
    ruben.onclick=function(e){
        resultado.textContent = resultado.textContent + "Hola Ruben"
    }
    random.onclick=function(e){
        resultado.textContent = resultado.textContent + Math.random()* (243) + 2 
    }


    reset.onclick=function(e){
        resetear();
    }

    suma.onclick=function(e){
        numa = resultado.textContent;
        operacion = "+";
        limpiar();

     
    }
    resta.onclick=function(e){
        numa = resultado.textContent;
        operacion = "-";
        limpiar();
    }


    multiplicacion.onclick=function(e){
        numa = resultado.textContent;
        operacion = "*";
        limpiar();
        
     
    }
    division.onclick=function(e){
        numa = resultado.textContent;
        operacion = "/";
        limpiar();
        
     
    }
    igual.onclick=function(e){
        numb = resultado.textContent;
        resolver();
    
    }
    cuadrado.onclick=function(e){
        numa = resultado.textContent;
        operacion = "x²";
        limpiar();
    }

    raiz.onclick=function(e){
        numa = resultado.textContent;
        operacion = "√x";
        limpiar();
    }
}



function limpiar(){
    resultado.textContent="";
}

function resetear (){
    resultado.textContent="";
    numa =0;
    numb =0;
    operacion="";

}

function resolver(){
    var res =0;
    switch(operacion){
        case "+":
            res = parseFloat(numa) + parseFloat(numb);
            break;
            case "-":
                res = parseFloat(numa) - parseFloat(numb);
                break;
                case "*":
                    res = parseFloat(numa) * parseFloat(numb);
                    break;
                    case "/":
                    res = parseFloat(numa) / parseFloat(numb);
                    break;
                    case "x²":
                    res = parseFloat(numa) * parseFloat(numa);
                    break;
                    case "√x":
                    res= Math.sqrt(numa);
                    break;

    }
    resetear();
    resultado.textContent= res;
}
