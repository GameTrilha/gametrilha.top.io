var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();

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
	res.render(__dirname + "/paginas/jogar.html");
});
//Link para o css
app.use('/css', express.static(__dirname + '/css'));

app.use(express.static('imagens'));

//porta que o servidor vai rodar
var port = 3000;
app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
})