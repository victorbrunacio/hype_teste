
// Lista de verbos e adjetivos
const verbos = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
  "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
  "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
  "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
  "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero", "Vela de cera",
  "Quimono", "Bambolê", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte", "Canga"];

const adjetivos = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado", "louvável",
  "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo", "romântico",
  "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio", "zeloso",
  "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor", "perfeccionista",
  "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado", "exigente",
  "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado", "windsurfista",
  "verdadeiro", "melhor", "terno"];

// Função para gerar dados do produto
const gerarProduto = (id) => {
  // Seleciona um verbo e um adjetivo aleatórios
  const verbo = verbos[id - 1];
  const adjetivo = adjetivos[id - 1];

  // Gera uma descrição randômica de 20 a 500 caracteres
  const descricaoLength = Math.floor(Math.random() * (480 - 20 + 1)) + 20;
  const desc = Array.from({ length: descricaoLength }, () => String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)).join('');

  // Calcula o valor usando a fórmula fornecida
  const nameLength = verbo.split(" ").length + adjetivo.split(" ").length;
  const descrLength = desc.length;
  const valor = 10 + nameLength * ((500 - descrLength) / (4 - nameLength));

  // Retorna o objeto do produto
  return {
    id,
    name: `${verbo} ${adjetivo}`,
    desc,
    price: valor.toFixed(2),
    imgUrl: `https://picsum.photos/id/${id}/500/500`
  };
};

// Função para gerar a lista de produtos
 const gerarListaDeProdutos = () => {
   const produtos = [];
  for (let i = 1; i <= 8; i++) {
    produtos.push(gerarProduto(i));
  }
  return produtos;
};
export const products = gerarListaDeProdutos()

