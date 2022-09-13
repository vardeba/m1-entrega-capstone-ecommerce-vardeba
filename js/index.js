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

let listaFiltrada = [];

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
    tagH4.innerText = `R$ ${produtoPrice}`;
    
    const tagButton = document.createElement('button');
    tagButton.classList.add('adicionarAoCarrinho');
    tagButton.setAttribute('id', `${produtoId}`)
    tagButton.innerText = 'Adicionar ao carrinho';

    tagDiv.append(tagSpan, tagH2, tagP, tagH4, tagButton);
    tagFigure.appendChild(tagImg);
    tagLi.append(tagFigure, tagDiv);

    return tagLi;
}

// document.addEventListener('click', )







