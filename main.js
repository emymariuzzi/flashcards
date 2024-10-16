function criaCartao(categoria,pergunta,resposta){
    let container= document.getElementById('container');
    let cartao= document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudocartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>`


let respostaestavisivel = false;
function viraCartao(){
    respostaestavisivel = !respostaestavisivel;
    cartao.classList.toggle('active',respostaestavisivel);
}
cartao.addEventListener('click', viraCartao);

container.appendChild(cartao);
}
