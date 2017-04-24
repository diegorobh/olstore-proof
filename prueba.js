$(document).ready(maquetar);

$(window).resize(maquetar);

function maquetar(){
	var nuevo=$(".nuevo");
	var parrafo=nuevo.find("p");
	var contenedorimagendestacados=$(".contenedor-imagen-destacados");
	var contico=$(".contenedor-icon");
	var contenedor_banner=$(".contenedor_banner");

	var altocontico=Number(contico.width());
	var altodestacados=Number(contenedorimagendestacados.width());
	var altocajanuevo=contenedor_banner.height();
	var padding_iconos_grupo=(altodestacados - altocontico) / 2;

	var hamburgerButton=$("button");
	var slideBar=$(".menu-principal ul");

	nuevo.height(altocajanuevo);
	parrafo.css("margin-top", (altocajanuevo/2.2));
	contico.height(altocontico);
	contenedorimagendestacados/*.css({"padding-top": padding_iconos_grupo, "box-sizing":"border-box !important"})*/.height(altodestacados);
	console.log(contenedorimagendestacados);

	hamburgerButton.click(function(){
		$(this).toggleClass("is-active");
		slideBar.toggleClass("slideToggle");
	});

}

