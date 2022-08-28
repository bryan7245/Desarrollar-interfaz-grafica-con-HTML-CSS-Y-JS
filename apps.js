const listado = document.querySelector('.listado');
const navegar = document.querySelector('.navegar');
const enlances =document.querySelectorAll('.navegar a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    listado.addEventListener('click',()=>{
        if(navegar.classList.contains('ocultar')){
            navegar.classList.remove('ocultar');
        }else{
            navegar.classList.add('ocultar');
        }
    });
}

function cerrarMenu(){
    enlances.forEach(enlance =>{
        enlances.addEventListener('click',(e)=>{
            
            if(e.target.tagName === 'A'){
                navegar.classList.add('ocultar');
            }
        });
    });
}