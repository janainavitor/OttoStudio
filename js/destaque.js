// window.onload = function() {

// criar um array heightlights que vai ter 3 objetos
var highlights = [
{path:"http://www.lorempixel.com/960/300/transport/5", txt:"Ford a marca que nao te ford"},
{path:"http://www.lorempixel.com/960/300/transport/3", txt:"Revisoes"},
{path:"http://www.lorempixel.com/960/300/transport/7", txt:"Promocoes"}
];

var start = 0,
    end = highlights.length -1,
    i = 0;

// setTimeout(function() {
// 	console.log("executou");

// },5000);

// setInterval(function() {
// 	console.log("executou", i);
// 	i++;
// },5000);


setInterval(function() {
	console.log("chamou")
	if(i <= end) {
		// console.log(i)
		exibeDestaque(i);
		i++;
	} else {
		i = 0;
	}
},10000);

function exibeDestaque(pos){
	var imgAtual = document.querySelector("#highlight img");
	var txtAtual = document.querySelector("#highlight figcaption");
	// console.log(imgAtual);

imgAtual.src = highlights[pos].path;
txtAtual.textContent = highlights[pos].txt;

}








// }