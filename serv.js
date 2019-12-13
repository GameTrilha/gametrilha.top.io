// Rodando no Servidor/ array tabela
var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();
 
var trilha =   [[0,0,0,0,0,0,16,17],
                [0,0,0,0,0,0,15,0],
                [0,0,0,0,12,13,14,0,0,0],
                [0,0,0,0,11,0,0,0,0,0],
                [0,0,0,0,10,0,0,0,0,0],
                [0,6,7,8,9,0,0,0,0,0],
                [0,5,0,0,0,0,0,0,0,0],
                [0,4,0,0,0,0,0,0,0],
                [0,3,0,0,0,0,0,0,0,0],
                [1,2,0,0,0,0,0,0,0]];
                //Função Random
 var valor1 = 0;
 var valor2 = 0;
 var posicao = 0;
             
//casa = 1;
//n1 = random
//n2 = random
//op = '+';
//o = random
//if  (o == 1)"+"
//if  (o == 2)"-"
//if  (o == 3)"*"
//if  (o == 4)"/"
 
function renderizarJogo() {
  valor1 =  Math.floor((Math.random() * 100) + 1);
  valor2 = Math.floor((Math.random() * 100) + 1);
}
 
app.engine ('html', mustache ());
app.set ('view engine', 'html');
app.set ('views', __dirname + '/paginas');
 
//link para o menu
app.get ('/', function (req, res) {
    res.render ('menu.html', {'nome':'Trilha'});
});
//link pra a pagina Sobre
app.get("/sobre", function(req, res){
    res.render(__dirname + "/paginas/sobre.html");
});
//link pra a pagina Contato
app.get("/contato", function(req, res){
    res.render(__dirname + "/paginas/contato.html");
});
 
//link pra a pagina ajuda
app.get("/ajuda", function(req, res){
    res.render(__dirname + "/paginas/ajuda.html");
});
app.get("/jogar", function(req, res) {
    var resultado = req.query.valor;
        //res.render(__dirname + "/paginas/jogar.html");  
 
    // página jogar
    res.write('<!DOCTYPE html>')
    res.write('<html>');
    res.write('<html lang="pt-br">')
    res.write('<meta charset="UTF-8">')
    res.write('<link rel="stylesheet" type="text/css" href="css/estiloso.css">')
    res.write('<link rel="stylesheet" type="text/css" href="css/jogar.css">')
    res.write('<link rel="stylesheet" type="text/css" href="css/numeros.css">')
    res.write('<link rel="stylesheet"  href="numeos.js">')
    res.write('<title>jogar</title>')
    res.write('</head>')
    res.write('<body>')
    // res.write(`<script>function verificarConta(form) {
    //   var valor = form.valor.value;
    //   console.log(valor);
    // }</script>`)
    res.write('<nav id="menu">')
    res.write('<img src="logo.png" width="220" height="80">')
    res.write('<ul>')
    res.write('<li><a href="/">HOME</a></li>')
    res.write('<li><a href="jogar">JOGAR</a></li>')
    res.write('<li><a href="sobre">SOBRE</a></li>')
    res.write ('<li><a href="ajuda">AJUDA</a></li>')
    res.write('<li><a href="contato">CONTATO</a></li>')
    res.write('</ul>')    
    res.write('</nav>')
    res.write('<table class="cont">')
   
// Criação da Trilha
for(i = 0; i<=17; i++){
   res.write('<tr>');
   if(i==0){
      res.write('<td class="tab">INICIO</td>');
  } else if (i == 17) {
    res.write('<td class="tab">FINAL</td>');
  } else {
    res.write(`<td class="tab" id="myPos${i}">${i}</td>`);
  }
  res.write('</tr>');
  }
  res.write('</table>');
  if (resultado) {
    var conta = valor1 * valor2;
    if (conta != resultado) {
      renderizarJogo();
      res.write(`<div>Errou!</div>`);
      res.write(`<script>var teste = document.getElementById('myPos${posicao > 0 ? posicao -1 : 0}').style ="background-color: white !important";</script>`);
      if (posicao > 0){
        posicao--;
      }
    } else {
      renderizarJogo();
      res.write(`<div>Acertou!</div>`)
      res.write(`<script>document.getElementById('myPos${posicao <= 15 ? posicao +1 : posicao}').style ="background-color: white !important";</script>`);
      if (posicao >= 16) {
        res.write(`<div>Você venceu!</div>`)
      } else {
        posicao++;
      }
    }
  } else {
    renderizarJogo();
  }
  res.write(
    `<div>
      <form>
          <span>${valor1}</span> x
          <span>${valor2}</span> =
          <input type="text" name="valor">
          <input type="submit">
      </form>
    </div>`)
  res.write('</body>');
  res.write('</html>');
  res.end();
 }
             
);
 
 
 
//Link para o css
app.use('/css', express.static(__dirname + '/css'));
 
app.use(express.static('imagens'));
 
//porta que o servidor vai rodar
var port = 3000;
app.listen (port, function () {
    console.log (`Escutando na porta ${port}...`);
})