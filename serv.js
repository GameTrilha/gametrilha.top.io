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
             
              
//casa = 1;
//n1 = random
//n2 = random
//op = '+';
//o = random
//if  (o == 1)"+"
//if  (o == 2)"-"
//if  (o == 3)"*"
//if  (o == 4)"/"

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
app.get("/jogar", function(req, res){
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
    res.write('<nav id="menu">')
    res.write('<img src="logo.png" width="220" height="80">')
    res.write('<ul>')
    res.write('<li><a href="/">HOME</a></li>')
    res.write('<li><a href="jogar">JOGAR</a></li>')
    res.write('<li><a href="sobre">SOBRE</a></li>')
    res.write ('<li><a href="ajuda">AJUDA</a></li>')
    res.write('<li><a href="contato">CONTATO</a></li>')
    res.write('<embed height="60" type="audio/mp3" width="144" src="game.mp3" volume="60" loop="true" autostart="true" />')
    res.write('</ul>')    
    res.write('</nav>')
    res.write('<table class="cont">')
    
// Criação da Trilha
for(i = 0;i<trilha.length;i++){
   res.write('<tr>');
  for(j = 0; j < trilha[i].length;j++){

      if(trilha[i][j]==0){
        res.write(`<td></td>`);
      }
  
      else if(trilha[i][j] ==1){
        res.write('<td class="tab">INICIO</td>');
      }
      else if(trilha[i][j] ==17){
        res.write('<td class="tab">FINAL </td>');
      }
      else {
        res.write(`<td class="tab">${trilha[i][j]}</td>`);
      }
  }
  res.write('</tr>');
}
  res.write('</table>');
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