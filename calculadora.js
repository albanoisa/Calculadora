
function igual() {
   const calc = document.getElementById('visor').innerHTML;
   document.getElementById('visor').innerHTML = eval(calc);

     if('calculadora' === 0){
      alert("Erro");
     }
} 

 function limpar(){
    document.getElementById('visor').innerHTML = "";
 }

 function input(i) {
    const num = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = num + i;
 }