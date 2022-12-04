    <script>
        function ex1(){
        var a = parseInt(prompt("Primeiro Número: "));
        var b = parseInt(prompt("Segundo Número: "));

        while (b <= 0) {
            b = parseInt(prompt("Segundo número novamente: "));
        } 

        var resultado = a+b;
        alert("A soma dos número é " + resultado);
        }

<!-------------------------->

        function ex2(){

        var contagem = 30;

        while (contagem > 0) {
            var texto = "Contagem em " + contagem + "<br>";
            document.write(texto);
            contagem = contagem - 1; 
        }
        document.write("EXPLOSÂO");
        }
        
  <!-------------------------->

        function ex3(){

            var contagem = 10;

        while (contagem > 0) {
            var texto =  contagem + "<br>";
            document.write(texto);
            contagem = contagem - 1;
        }
        }
        
  <!-------------------------->

        function ex4(){
           alert("exercicio 4")
            alert("Calcula a média dos números entre 15 e 100")

            var contagem = 15;
            var soma = 0;

            while (contagem <= 100){
                soma = soma + contagem;
                contagem++;
            }

            let media = soma / 85;
            return(document.write("A média é: " + Math.round(media)))
        }

<!-------------------------->

        function ex5(){
            alert("exercicio 5")
            alert("Escreve a média dos números informados e os números entre eles")

            let number1 = parseInt(prompt("Insira um número"));
            let number2 = parseInt(prompt("Insira um número menor do que o primeiro"));

            while(number2 < number1){

                alert("Numero Invalido, Insira um numero maior do que " + number1 + ".");
                number2 = parseInt(prompt("Insira um número valido"));

            }

            let diferenca = number2 - number1;
            let soma = 0;
            let contador = number1;

            while(contador <= number2){
                document.write(contador + "<br>");
                soma = soma  + contador;
                contador++;

            }

            return(document.write("A média dos numeros entre: " + number1 + ", " + number2 + " é: " + soma / diferenca));

        }

<!-------------------------->


        function ex6(){
            alert("exercicio 6")
            alert("Recebe 2 notas e calcula a média do aluno")

            var a = parseInt(prompt("Primeira nota: "));
            var b = parseInt(prompt("Segunda nota: "));

            var media = (a + b) / 2
            if(media >= 9.5){
                document.write("Aluno aprovado<br>")
            }
            else{
                document.write("Aluno reprovado<br>")
            }

            var opcao = prompt("Quer calcular outra média? S ou N")
            while(opcao == "S"){
                var a = parseInt(prompt("Primeira nota: "));
                var b = parseInt(prompt("Segunda nota: "));

                 var media = (a + b) / 2
                if(media >= 9.5){
                document.write("Aluno aprovado<br>")
                }
                else{
                document.write("Aluno reprovado<br>")
                }

                opcao = prompt("Quer calcular outra média? S ou N")
            }
        }

<!-------------------------->

        function ex7(){
            alert("Exercicio 7")
            alert("Calcula a média do aluno e escreve ele em tela")

            var n1 = prompt("Primeira nota")
            var n2 = prompt("Segunda nota")
            var n3 = prompt("Terceira nota")
            var n4 = prompt("Quarta nota")
            var n5 = prompt("Quinta nota")
            var n6 = prompt("Sexta nota")
            var media = (n1 + n2 + n3 + n4 + n5 + n6) / 6
            if(n1,n2,n3,n4,n5,n6 <= 10){
               alert("sua média é: " + media)
            }
            else{
                (n1,n2,n3,n4,n5,n6<0)
                alert("Informe outro número")
            }
        }
        
  <!-------------------------->

        function ex8(){
            alert("exercicio 8")
            alert("Imprime os números de 1 até o número informado")

            var n = prompt("Escreva um número")
            var contagem = 0
            var texto = ""
           if(n>0){
            while(n>contagem){
                texto = "" + n 
                document.write(texto);
                n = n -= 1;
            }
           }
        }

<!-------------------------->

        function ex9(){
            alert("Exercicio 9")
            alert("Escreve os 10 primeiros números maiores que 100")

            var limite = 110;
            var contagem = 100;
            var texto = "";

            while(limite > contagem){
                texto = "" + limite 
                limite = limite -= 1
            }
        }
        
 <!-------------------------->
        
        function ex10(){
            alert("Exercicio 10")
            alert("Mostra tabuadas do 1 até o número informado")

            var n = parseInt(prompt("Digite um número"));
            var multiplicação = 0;
            var começo = 1;

            while(começo <= n){

            while(multiplicação <= 10){
            document.write(começo + " X " + multiplicação + " = " + (começo * multiplicação) + "<br>");
            multiplicação++;
            }
            começo++;
            multiplicação = 0;
            document.write("<br><br>");
            }
        }
        
  <!-------------------------->

        function ex11(){
            alert("Exercicio 11")
            
        }
    </script>
