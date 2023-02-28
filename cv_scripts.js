
$(document).ready(main);
var contador = 0;
function main() {
    $('.menu').click(function(){
	// $('nav').toggle(); 
        contador = (contador + 1)%2
        if(contador == 1){
            $('nav').animate({
		
                left: '0'
            });
            
        } else {
            
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};



function vermas(id){
boton = id.substring(0,3);
if (boton=="mas"){
nro_boton = id.substring(3,4);
desplegar = ("desplegar" + nro_boton)
mas = ("mas" + nro_boton)

document.getElementById("desplegar" + nro_boton).style.display="block";  
document.getElementById("mas").style.display="none";
}
else{
nro_boton = id.substring(5,6);
desplegar = (desplegar + nro_boton)
menos = ("menos" + nro_boton)

document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}
