
function verificar (){
    var numero1 = document getElementById("n1").innerHTML;
    var numero2 = document getElementById("n2").innerHTML;
    var resultado = document getElementById("n3").value;
     if(numero1*numero2 == resulado){
       alert("Parabéns ande uma casa");
     } else {
       alert("Troxa você errou")
     }
     resetar();
}

function resetar() {
  var x1 = math.floor(Math.random() * 10);
  var x2 = math.floor(Math.random() * 10);
  document.getElementById("n3").value=""
  document.getElementById("n1").innerHTML =  x1;
  document.getElementById("n2").innerHTML =  x2;
}