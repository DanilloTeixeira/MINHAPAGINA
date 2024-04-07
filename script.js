// Menu Fixo
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 200) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

// Galeria de Imagens (Exemplo Simples)
const imagens = document.querySelectorAll('#galeria img');
const galeriaAtual = document.querySelector('#galeria-atual');
const indicadorAtual = document.querySelector('#indicador-atual');

let imagemAtual = 0;

imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => {
    mostrarImagem(index);
  });
});

function mostrarImagem(index) {
  imagens.forEach((imagem) => {
    imagem.style.opacity = '0';
  });

  imagemAtual = index;
  galeriaAtual.src = imagens[imagemAtual].src;
  indicadorAtual.innerHTML = `0${imagemAtual + 1}/0${imagens.length}`;

  setTimeout(() => {
    imagens[imagemAtual].style.opacity = '1';
  }, 500);
}
