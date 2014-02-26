// este eh o embrulho do jquery 
$(document).ready(function(){
	// aqui muda a classe no menu para active fazendo mudar o bg
	$("#menu li").click(function(){
		$("#menu li.active").removeClass();
		$(this).addClass("active");
	})
    
    // aqui muda a img de destaque conforme clica
	$("#highlight img").on('click',function(){
		$(this).attr("src", "http://www.lorempixel.com/960/300/transport");
	})

	// aqui muda a cor do menu secundario
	$("aside li a").on("mouseover", function() {
		$(this).css({"background":"orange","color":"black"});
	}).on("mouseout", function() {
		$(this).css("background","");
	}).on("click", function() {
		$(this).slideUp();
	});



})
