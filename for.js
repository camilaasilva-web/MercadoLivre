const imagem = ["Produtos/lipbalm.webp", 
    "Produtos/fantasia de unicornio.jpg", 
    "Produtos/lipbalm natura.webp", 
    "Produtos/oboticario.webp", 
    "Produtos/unicornio.webp", 
    "Produtos/lip oil eudora.jpg",];
const nomes = ["Peptide Lip Tint Rhode Hailey Bieber Bálsamo Raspberry Jelly", 
    "Fantasia Infantil Menina Vestido Asa Tiara Festa Unicórnio",
    "Balm Labial Natura Tododia Ameixa",
    "Perfume O Boticario Linda Irresistível 100ml",
    "Kit Protetor Térmico E Body Splash Magia De Unicórnio",
    "Eudora Niina Secrets Lip Oil Rosa Silvestre 7ml",];
const preço = ["R$ 99,90",
    "R$ 79,90",
    "R$ 23,99",
    "R$ 149,99",
    "R$ 93,90",
    "R$ 44,88",
];

const imgElement = document.getElementById("imagem");
const texto = document.getElementById('texto');

for (let i = 0; i < nomes.length; i++) {
    texto.innerHTML += `<div class="caixa"> 
    <img class="foto" src="${imagem[i]}"> 
    <p class="oferta">Oferta do dia</p> <br>
    <p class="nome">${nomes[i]}</p> <br> 
    <p class="preco">${preço[i]}</p> <br>
    <div class="chegar">
    <p>Chegará grátis amanhã</p>
    <img class="full" src=Imagens/full.png <br>
    </div>
    </div>`;
}