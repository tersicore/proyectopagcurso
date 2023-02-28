var seccion1 = document.getElementById("tecnical")
var seccion2 = document.getElementById("educacion")


function rotulado(entradas, observador){


    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            console.log("Se esta viendo la seccion")
        }
    })
}



const observador = new IntersectionObserver (rotulado,{
    root: null,
    rootMargin: '0px 0px 0px',
    threshold: 1.0,
});

observador.observe(seccion1);
observador.observe(seccion2);