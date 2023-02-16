// Obtener el elemento de texto y su posición en relación con la parte superior de la ventana
const text1 = document.getElementById('texto1');
const text2 = document.getElementById('texto2');

const cargarTexto = (entradas,observador) => {
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      console.log("texto en pantalla")
      entrada.target.classList.add('scroll');
    }
  });
}

const observador = new IntersectionObserver(cargarTexto,{
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.3 
});

observador.observe(text1);
observador.observe(text2);
