
//console.log('haciendo algo');
//console.log('array Pop()');




let elementos = ['yuca', 'papa', 'limon', 'curcuma', 'ajo'];

const contenedor = document.getElementById('contenido');
 function actualizarHTML() {
    let resultHTML = '';
  for (let i = 0; i < elementos.length; i++) {
    resultHTML += '<span>' + elementos[i] + '</span>'; 
  }
}

const resetButton = document.getElementById('resetBtn');
const popButton = document.getElementById('popBtn');

function miFuncionPop() {
    console.log(elementos);
    elementos.pop();

}

function miFuncionReset() {
    elementos = ['yuca', 'papa', 'limon', 'curcuma', 'ajo'];
    console.log(elementos);
}

actualizarHTML();
popButton.addEventListener('click', miFuncionPop); 
resetButton.addEventListener('click', miFuncionReset);
