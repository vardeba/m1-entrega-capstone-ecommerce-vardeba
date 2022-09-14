let produto = [
    {
        id: 1,
        img: "../img/zelda_breath_01.webp",
        nameGame: "The Legend of Zelda: Breath of the Wild",
        description: "O novo jogo da famosa série que veio para romper barreiras.",
        price: 299.00,
        tag: ["Zelda"]
    }
];

let listaTemp = [];

let carrinho = [];

const tagUl = document.querySelector('.ulVitrine');

montaVitrine(games, tagUl);

function separaGames(lista, chave){
    for (let i = 0; i < lista.length; i++) {
        let jogo = lista[i];
        if (jogo.tag[0].toLowerCase() === chave.toLowerCase()){
            listaFiltrada.push(jogo);
        }
    }
}

function montaVitrine(lista, referenciaHtml){
    for (let i = 0; i < lista.length; i++) {
        let jogo = lista[i];
        let cardMontado = montaCardVitrine(jogo);
        referenciaHtml.appendChild(cardMontado);
    }
}

function montaCardVitrine(produto){
    let produtoId = produto.id;
    let produtoImg = produto.img;
    let produtoNameGame = produto.gameName;
    let produtoDescription = produto.description;
    let produtoPrice = produto.price;
    let produtoTag = produto.tag[0];

    const tagLi = document.createElement('li');
    tagLi.classList.add('cardVitrine');

    const tagFigure = document.createElement('figure');
    tagFigure.classList.add('figureCard')
    
    const tagImg = document.createElement('img');
    tagImg.classList.add('imgCard');
    tagImg.setAttribute('src', `${produtoImg}`);
    tagImg.setAttribute('alt', `Imagem do jogo ${produtoNameGame}`);
    
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('divCardInfo');
    
    const tagSpan = document.createElement('span');
    tagSpan.classList.add('categoria')
    tagSpan.innerText = `${produtoTag}`

    const tagH2 = document.createElement('h2');
    tagH2.classList.add('titleName');
    tagH2.innerText = `${produtoNameGame}`;

    const tagP = document.createElement('p');
    tagP.classList.add('descriptionGame');
    tagP.innerText = `${produtoDescription}`;
    
    const tagH4 = document.createElement('h4');
    tagH4.classList.add('price');
    tagH4.innerText = `R$ ${produtoPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    
    const tagButton = document.createElement('button');
    tagButton.classList.add('adicionarAoCarrinho');
    tagButton.setAttribute('id', `${produtoId}`)
    tagButton.innerText = 'Adicionar ao carrinho';

    tagDiv.append(tagSpan, tagH2, tagP, tagH4, tagButton);
    tagFigure.appendChild(tagImg);
    tagLi.append(tagFigure, tagDiv);

    return tagLi;
}

const btnAdicionarAoCarrinho = document.querySelector('.ulVitrine');

const tagUlCarrinho = document.querySelector('.ulCarrinho');

btnAdicionarAoCarrinho.addEventListener('click', function(event){
    let idProdutoVitrine = event.target.id;
    for (let i = 0; i < games.length; i++){
        if (games[i].id == idProdutoVitrine){
            carrinho.push(games[i]);
        }
    }
    limpaCarrinho();
    montaCarrinho(tagUlCarrinho);
});

tagUlCarrinho.addEventListener('click', function(event){
    let idProdutoCarrinho = event.target.id;
    for (let i = 0; i < carrinho.length; i++){
        if (carrinho[i].id != idProdutoCarrinho){
            listaTemp.push(carrinho[i]);
        }
    }
    limpaCarrinho();
    atualizaCarrinho();
    montaCarrinho(tagUlCarrinho);
});

function limpaCarrinho(){
    tagUlCarrinho.innerHTML = '';
}

function atualizaCarrinho(){
    carrinho = listaTemp;
}

function montaCarrinho(referenciaHtml){
    for (let i = 0; i < carrinho.length; i++) {
        let itemCarrinho = carrinho[i];
        let cardCarrinhoMontado = montacardCarrinho(itemCarrinho);
        referenciaHtml.appendChild(cardCarrinhoMontado);
    }
}

function montacardCarrinho(produto){
    let itemCarrinhoId = produto.id;
    let itemCarrinhoImg = produto.img;
    let itemCarrinhoNome = produto.gameName;
    let itemCarrinhoPreco = produto.price;
    
    const tagLiCarrinho = document.createElement('li');
    tagLiCarrinho.classList.add('liCarrinho');
    
    const tagFigureCarrinho = document.createElement('figure');
    tagFigureCarrinho.classList.add('figureImgCarrinho');
    
    const tagImgCarrinho = document.createElement('img');
    tagImgCarrinho.classList.add('imgCarrinho');
    tagImgCarrinho.setAttribute('src', `${itemCarrinhoImg}`);
    tagImgCarrinho.setAttribute('alt', `Imagem do jogo ${itemCarrinhoNome}`);
    
    const tagH3Carrinho = document.createElement('h3');
    tagH3Carrinho.classList.add('titleGameCarrinho');
    tagH3Carrinho.innerText = `${itemCarrinhoNome}`;
    
    const tagH4Carrinho = document.createElement('h4');
    tagH4Carrinho.classList.add('priceGameCarrinho');
    tagH4Carrinho.innerText = `R$ ${itemCarrinhoPreco.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;

    const tagFigureLixeiraCarrinho = document.createElement('figure');
    tagFigureLixeiraCarrinho.classList.add('figureExcluirDoCarrinho');
    
    const tagImgLixeiraCarrinho = document.createElement('img');
    tagImgLixeiraCarrinho.classList.add('lixeiraCarrinho');
    tagImgLixeiraCarrinho.setAttribute('id', `${itemCarrinhoId}`);
    tagImgLixeiraCarrinho.setAttribute('src', './img/lixeira.png');
    tagImgLixeiraCarrinho.setAttribute('alt', 'Lixeira');
    tagImgLixeiraCarrinho.setAttribute('title', 'Remover do carrinho');

    tagFigureLixeiraCarrinho.appendChild(tagImgLixeiraCarrinho);
    tagFigureCarrinho.appendChild(tagImgCarrinho);
    tagLiCarrinho.append(tagFigureCarrinho, tagH3Carrinho, tagH4Carrinho, tagFigureLixeiraCarrinho);

    return tagLiCarrinho;
}




