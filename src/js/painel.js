const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
/*
quando clicarmos na seta para avançar, temos que
esconder as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {
    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return
    }
    /*
     a imagem atual começa em 0 pq é a primeira imagem, assim que for
     clicado no avançar eu preciso adicionar mais 1 ao contador de iamgens pra poder saber que agora eu vou mostrar a segunda iamgem
    */
   imagemAtual++;

   /*
    esconder todas as imagens
    pegar todas as imagens usando o DOM e remover a classe mostrar
   */

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
     mostrar a próxima imagem
     pegar todas as iamagens, decobrir qual é a próxima, e colocar a classe mostrar nela
    */
   imagensPainel[imagemAtual].classList.add('mostrar')
});

setaVoltar.addEventListener('click', function() {
    
    if(imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');

})
