// Começamos com um array vazio
let produtos = [];

// Adicionando produtos com .push()
produtos.push({ nome: "Leite", preco: 4.50 });
produtos.push({ nome: "Pão", preco: 3.20 });
produtos.push({ nome: "Queijo", preco: 12.75 });

// Listando produtos com .forEach()
console.log("Lista de Produtos:");
produtos.forEach((produto, index) => {
  console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});

// Somando o valor total dos produtos
let total = 0;
for (let produto of produtos) {
  total += produto.preco;
}

console.log(`\nValor total da lista: R$ ${total.toFixed(2)}`);
