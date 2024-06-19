// script.js

window.onload = function() {
    alert("Bem-vindo à página de introdução ao Vue.js!");
};// Script para animar o Mega Man
window.onload = function() {
    var megaMan = document.getElementById('megaMan');

    // Adicionar classe para animar o Mega Man
    megaMan.classList.add('animateMegaMan');
}
document.addEventListener('DOMContentLoaded', function() {
    const megaMan = document.getElementById('megaMan');
    const step = 10; // Quantidade de pixels para mover o boneco
    let currentPositionY = 0; // Posição vertical inicial do boneco
    let isMoving = false; // Variável para controlar se o boneco está se movendo

    // Inicializa a posição inicial do boneco
    updatePosition();

    // Movimentação horizontal do boneco
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            moveLeft();
        } else if (event.key === 'ArrowRight') {
            moveRight();
        } else if (event.key === 'ArrowUp') {
            moveUp();
        } else if (event.key === 'ArrowDown') {
            moveDown();
        }
    });

    // Para o movimento quando soltar a tecla
    document.addEventListener('keyup', function(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            isMoving = false;
        }
    });

    // Atualiza a posição vertical do boneco com base no scroll da página
    window.addEventListener('scroll', function() {
        updatePosition();
    });

    function moveLeft() {
        const currentPositionX = parseFloat(window.getComputedStyle(megaMan).left);
        megaMan.style.left = (currentPositionX - step) + 'px';
        isMoving = true;
    }

    function moveRight() {
        const currentPositionX = parseFloat(window.getComputedStyle(megaMan).left);
        megaMan.style.left = (currentPositionX + step) + 'px';
        isMoving = true;
    }

    function moveUp() {
        currentPositionY -= step;
        megaMan.style.top = currentPositionY + 'px';
        isMoving = true;
    }

    function moveDown() {
        currentPositionY += step;
        megaMan.style.top = currentPositionY + 'px';
        isMoving = true;
    }

    // Função para atualizar a posição vertical do boneco com base no scroll da página
    function updatePosition() {
        if (!isMoving) {
            return; // Para a função se o boneco não estiver se movendo
        }
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        currentPositionY = scrollTop + (window.innerHeight / 2); // Centraliza o boneco verticalmente na janela
        megaMan.style.top = currentPositionY + 'px';
    }

    // Animação ao clicar no boneco
    megaMan.addEventListener('click', function() {
        megaMan.classList.add('pulando');
        setTimeout(function() {
            megaMan.classList.remove('pulando');
        }, 1000);
    });
});
