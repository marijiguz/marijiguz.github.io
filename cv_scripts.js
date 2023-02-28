
$(document).ready(main);

var contador = 1;

function main(){
	$('.menu').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};


function vermas(id){
switch (id) {
  case "mas":
  document.getElementById("desplegar").style.display="block"; 
  document.getElementById("mas").style.display="none";
  break;
  case "mas3":
  document.getElementById("desplegar3").style.display="block"; 
  document.getElementById("mas3").style.display="none";
  break;
  case "mas2":
  document.getElementById("desplegar2").style.display="block"; 
  document.getElementById("mas2").style.display="none";
  break;
  case "mas1":
  document.getElementById("desplegar1").style.display="block"; 
  document.getElementById("mas1").style.display="none";
  break;
  case "menos":
  document.getElementById("desplegar").style.display="none";
  document.getElementById("mas").style.display="inline";
  break;
  case "menos3":
  document.getElementById("desplegar3").style.display="none";
  document.getElementById("mas3").style.display="inline";
  break;
  case "menos2":
  document.getElementById("desplegar2").style.display="none";
  document.getElementById("mas2").style.display="inline";
  break;
  case "menos1":
  document.getElementById("desplegar1").style.display="none";
  document.getElementById("mas1").style.display="inline";
  break;
  default:
  document.getElementById("desplegar").style.display="none";
  document.getElementById("mas").style.display="inline";
  break;
}

}
