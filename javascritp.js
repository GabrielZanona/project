function botao_01(){
    var a=window.prompt("Informe o primeiro numero:");
    var b=window.prompt("Informe o segundo numero:");

    if(a>b){
    document.getElementById("resultado").innerHTML = ("O numero "+a+" é maior que o numero  "+b+". Em ordem crescente fica "+b+  "," +a);
    }
    
    if(a<b){
        document.getElementById("resultado").innerHTML = ("O numero "+b+" é maior que o numero  "+a+". Em ordem crescente fica "+a+  "," +b);
        }
        

}

function botao_02(){

    var genero=window.prompt("1 MASCULINO, 2 FEMININO:");
    var altura=window.prompt("Quantos de altura você tem (USE PONTO AO INVES DE VIRGULA)");
    var peso_ideal

if(genero==1){
    peso_ideal=(72.7 * altura) - 58;
    document.getElementById("resultado").innerHTML=("O seu peso ideal é:"+peso_ideal);
}
if(genero==2){
 peso_ideal=(62.1 * altura) - 44.7;
   document.getElementById("resultado").innerHTML=("O seu peso ideal é:"+peso_ideal);
}
}



function botao_03(){

var a=window.prompt("Informe o primeiro numero:");
var b=window.prompt("Informe o segundo numero:");
var c=window.prompt("Informe o terceiro numero:");

if(a<b && a<c){
    var num=a;
    document.getElementById("resultado").innerHTML=("O menor numero entre os 3 é o:"+num);
}

if(b<a && b<c){
    var num=b;
    document.getElementById("resultado").innerHTML=("O menor numero entre os 3 é o:"+num);
}

if(c<a && c<b){
    var num=c;
    document.getElementById("resultado").innerHTML=("O menor numero entre os 3 é o:"+num);
}


}

function botao_04(){
 var num=window.prompt("Informe o numero:");

 if(num>0){

    if(num % 2 == 0){
        document.getElementById("resultado").innerHTML=("O seu numero positivo "+num+". É PAR!"); 
    } 
    else{
        document.getElementById("resultado").innerHTML=("O seu numero positivo "+num+". É IMPAR!");
    }

 }
 if(num<0){
    document.getElementById("resultado").innerHTML=("O valor absoluto de seu numero negativo "+num+". É "+num*-1);
 }

}

function botao_05(){
    var num=window.prompt("Informe um numero inteiro:");

    if(num%2==0 && num%3==0){
        document.getElementById("resultado").innerHTML=("Esse numero é divisivel por 2 e por 3!   NUMERO:"+num);
    }
    else{
        document.getElementById("resultado").innerHTML=("Esse numero não é divisivel por 2 e por 3!   NUMERO:"+num);
    }
 
    }


    function botao_06(){
        var num=window.prompt("Informe um numero inteiro:");
    
        if(num%2==0  || num%7==0){
            
            if(num%2==0){ document.getElementById("resultado").innerHTML=("Esse numero é divisivel por 2!   NUMERO:"+num);}
          
            else{document.getElementById("resultado").innerHTML=("Esse numero é divisivel por 7!  NUMERO:"+num);}

        }

        else{
            document.getElementById("resultado").innerHTML=("Esse numero não é divisivel por 2 e nem por 7!  NUMERO:"+num);
        }
     
        }



    function botao_07(){
        
        var num=window.prompt("Informe um numero de 1 a 7:");

        switch(num) {
            case "1":
              document.getElementById("resultado").innerHTML=("Numero escolhido(1) : Dia da semana correspondente a DOMINGO!");
              break;
            case "2":
                document.getElementById("resultado").innerHTML=("Numero escolhido(2) : Dia da semana correspondente a SEGUNDA!");
              break;
            case "3":
                document.getElementById("resultado").innerHTML=("Numero escolhido(3) : Dia da semana correspondente a  TERÇA!");
            break;
            case "4":
                document.getElementById("resultado").innerHTML=("Numero escolhido(4): Dia da semana correspondente a  QUARTA!");
            break;
            case "5":
                document.getElementById("resultado").innerHTML=("Numero escolhido(5) : Dia da semana correspondente a QUINTA!");
            break;
            case "6":
                document.getElementById("resultado").innerHTML=("Numero escolhido(6) : Dia da semana correspondente a  SEXTA!");
            break;
            case "7":
                document.getElementById("resultado").innerHTML=("Numero escolhido(7) : Dia da semana correspondente a  SABADO!");
            break;
            default:
                document.getElementById("resultado").innerHTML=("Numero incorreto!");
                  break;
          }

    }

function botao_08(){
    
    var soma=0;

    for (var i= 0; i<=20; i++) {
       
       if(i%2==0){ soma=soma+i;}
    }
    document.getElementById("resultado").innerHTML=("O resultado da soma dos pares é: "+soma);
}
         
function botao_09(){
    var num=window.prompt("Informe um numero:");
    
    document.getElementById("resultado").innerHTML=(num+"x 1 ="+(num*1)+", "+num+"x 2 ="+(num*2)+", "+num+"x 3 ="+(num*3)+", "+num+"x 4 ="+(num*4)+", "+num+"x 5 ="+(num*5)+", " +num+"x 6 ="+(num*6)+"," +num+"x 7 ="+(num*7)+"," +num+"x 8 ="+(num*8)+"," +num+"x 9 ="+(num*9)+"," +num+"x 10 ="+(num*10));
  
  
    // for (var i= 1; i<=10; i++) {
    //     document.getElementById("resultado").innerHTML=(num+"x"+i+"="+num*i+","); 
    // }
}

function botao_10(){
    var fatorial=window.prompt("Informe um numero:");
    var resultado= fatorial;

    if(fatorial==0 ){
        document.getElementById("resultado").innerHTML=("O fatorial de 0 É =1");
    }
    if(fatorial==1 ){
        document.getElementById("resultado").innerHTML=("O fatorial de 1 É =1");
    }
    

    for (var i  = 1; i < fatorial; i++) {
        
        resultado=resultado*i;
        document.getElementById("resultado").innerHTML=("O fatorial de"+fatorial+ " : " +resultado);
    }
    
}