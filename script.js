const hideORshow = document.getElementById("mario");

hideORshow.addEventListener("click", function () {

  const container = document.querySelector('.game-board');

  if(container.style.display === "none"){
    container.style.display = "block";
  } else {
    container.style.display = "none"
  }

});

// INI ---> FUNÇÕES PARA ALTERAR O TAMANHO DOS ELEMENTOS DO CARROSSEL + ROLAR SLIDE

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


// --------------------------- LóGICA JOGO MARIO ---------------------------------

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

// função para fazer o personagem pular conforme pressiona teclas no teclado
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}

document.addEventListener('keydown', jump);

// função que verifica se o personagem 'esbarrou' no pipe
const loop = setInterval(() =>{

  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.right = `${cloudsPosition}px`;

    mario.src = './assets/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); //para parar a função loop

  }

}, 10)

