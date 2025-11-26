const produtos = [
  // Cremes
  {
    nome: "Americana",
    categoria: "cremes",
    preco: 7.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/AMERICANA-e1665513208545.jpg",
    descricao: "Nossa receita original com creme batido"
  },
  {
    nome: "Banana Split",
    categoria: "cremes",
    preco: 8.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/BANANA-SPLIT.jpg",
    descricao: "Com doce de leite tradicional e pedacinhos de chocolate meio amargo"
  },
  {
    nome: "Chocotorta",
    categoria: "cremes",
    preco: 9.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/07/CHOCOTORTA-1.jpg",
    descricao: "Com biscoitos de chocolate e doce de leite natural"
  },
  {
    nome: "Coco com Doce de Leite",
    categoria: "cremes",
    preco: 9.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/COCO-DDL.jpg",
    descricao: "Com coco das Filipinas e doce de leite tradicional"
  },
  {
    nome: "Freddo Oreo Cookies & Cream",
    categoria: "cremes",
    preco: 10.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/FREDDO-OREO-COOKIES-CREAM-e1666730300305.png",
    descricao: "Creme americano com doce de leite tradicional e Mini Oreo"
  },
  {
    nome: "Mascarpone",
    categoria: "cremes",
    preco: 11.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/MASCARPONE.jpg",
    descricao: "Com calda de framboesa da Patagônia"
  },
  {
    nome: "Menta Granizado",
    categoria: "cremes",
    preco: 9.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/MENTA-GRANIZADO.jpg",
    descricao: "Creme com pedacinhos de chocolate meio amargo"
  },
  {
    nome: "Pistacchio",
    categoria: "cremes",
    preco: 12.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/Pistacchio.jpg",
    descricao: "Pistache da Sicília"
  },
  {
    nome: "Tramontana",
    categoria: "cremes",
    preco: 11.00,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/TRAMONTANA.jpg",
    descricao: "Gelato de creme com biscoitos banhados em chocolate e doce de leite tradicional"
  },
  {
    nome: "Amarena",
    categoria: "cremes",
    preco: 11.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2024/07/Amarena-textura-400x368.jpg",
    descricao: "Gelato de baunilha, cerejas italianas e pedaços de chocolate"
  },
  {
    nome: "Café al Cioccolato",
    categoria: "cremes",
    preco: 10.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/01/textura-web-cafe-al-cioccolato.jpg",
    descricao: "Gelato de café com pedacinhos de chocolate"
  },

  // Chocolates
  {
    nome: "Branco Patagônico",
    categoria: "chocolates",
    preco: 13.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/blanco-patagonico.jpg",
    descricao: "Com pedacinhos de chocolate e frutas vermelhas"
  },
  {
    nome: "Chocolate Clássico",
    categoria: "chocolates",
    preco: 14.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-clasico.jpg",
    descricao: "Chocolate meio amargo da Colômbia"
  },
  {
    nome: "Dupla Tentação",
    categoria: "chocolates",
    preco: 15.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-tentacion.jpg",
    descricao: "Com pedacinhos de chocolate e doce de leite tradicional"
  },
  {
    nome: "Chocolate Intenso",
    categoria: "chocolates",
    preco: 16.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-intenso.jpg",
    descricao: "Chocolate belga intenso com cacau 70%"
  },

  // Frutais
  {
    nome: "Maracujá",
    categoria: "frutais",
    preco: 9.80,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/Mousse-de-maracuya.jpg",
    descricao: "Com suco de maracujá natural"
  },
  {
    nome: "Frutilla a la Crema",
    categoria: "frutais",
    preco: 10.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/04/FRUTILLA-A-LA-CREMA-1.jpg",
    descricao: "Sorvete cremoso de morango com pedaços da fruta"
  },
  {
    nome: "Frutilla al Agua",
    categoria: "frutais",
    preco: 9.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/FRUTILLA-AL-AGUA.jpg",
    descricao: "Gelato frutal refrescante"
  },
  {
    nome: "Framboesa",
    categoria: "frutais",
    preco: 9.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/helado-frambuesa-e1666635213807.png",
    descricao: "Com framboesas selecionadas"
  },

  // Doce de Leite
  {
    nome: "Doce de Leite Clássico",
    categoria: "doce de leite",
    preco: 10.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-Clasico.jpg",
    descricao: "A nossa receita original desde 1969"
  },
  {
    nome: "Doce de Leite Granizado",
    categoria: "doce de leite",
    preco: 11.00,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-granizado.jpg",
    descricao: "Com pedacinhos de chocolate meio amargo"
  },
  {
    nome: "Doce de Leite Mini Oreo",
    categoria: "doce de leite",
    preco: 11.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-minioreo.jpg",
    descricao: "Com biscoitos Mini Oreo e doce de leite tradicional"
  },
  {
    nome: "Doce de Leite Tentação",
    categoria: "doce de leite",
    preco: 11.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-tentacion.jpg",
    descricao: "Com doce de leite tradicional"
  },

  // Premium
  {
    nome: "Chocolate Dubai",
    categoria: "premium",
    preco: 18.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-chocolate-dubai.jpg",
    descricao: "Gelato de chocolate intenso com cobertura de pistache e autêntico kadaif"
  },
  {
    nome: "Lemon Pie",
    categoria: "premium",
    preco: 17.99,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-lemon-pie.jpg",
    descricao: "Gelato de crostata al limone com cobertura de merengue"
  },
  {
    nome: "Frutilla com Gianduia",
    categoria: "premium",
    preco: 19.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-frutilla-con-gianduia-1.jpg",
    descricao: "Gelato de morango com cobertura de creme de avelã"
  },
  {
    nome: "Doce de Leite ao Chocolate Crocante",
    categoria: "premium",
    preco: 19.00,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-ddl-al-cioccolato-crocante-1.jpg",
    descricao: "Gelato de doce de leite com cobertura crocante de chocolate"
  },
  {
    nome: "Pistacchio Bianco",
    categoria: "premium",
    preco: 18.50,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-pistacchio-bianco.jpg",
    descricao: "Pistache com cobertura crocante de chocolate branco"
  },
  {
    nome: "Fiordilatte al Pistacchio",
    categoria: "premium",
    preco: 19.00,
    imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-fiordilatte-al-pistacchio.jpg",
    descricao: "Creme americano com cobertura de creme de pistache"
  }
];


// --- Configurações ---
let config = {
    mostrarTutorial: true
};

// --- Controles de Tamanho de Fonte ---
let nivelFonte = 0; // 0 = padrão
const maxNivel = 3;
const minNivel = -3;

function atualizarFonte() {
    document.body.classList.remove('fonte-muito-grande', 'fonte-grande', 'fonte-pequena', 'fonte-muito-pequena');

    switch(nivelFonte) {
        case 3: document.body.classList.add('fonte-muito-grande'); break;
        case 2: document.body.classList.add('fonte-grande'); break;
        case 1: document.body.classList.add('fonte-grande'); break;
        case 0: break; // padrão
        case -1: document.body.classList.add('fonte-pequena'); break;
        case -2: document.body.classList.add('fonte-pequena'); break;
        case -3: document.body.classList.add('fonte-muito-pequena'); break;
    }
}

// --- Elementos DOM ---
const produtosContainer = document.getElementById('produtos-container');
const filtro = document.getElementById('filtro');
const modal = document.getElementById('modalProduto');
const tutorial = document.getElementById('tutorialAcessibilidade');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');
const btnAcessibilidade = document.getElementById('btnAcessibilidade');
const btnTema = document.getElementById('darkModeToggle');

// --- Funções de Modal ---
function abrirModalProduto(produto) {
    document.getElementById('modal-img').src = produto.imagem;
    document.getElementById('modal-img').alt = produto.nome;
    document.getElementById('modalTitulo').textContent = produto.nome;
    document.getElementById('modalDescricao').textContent = produto.descricao;
    document.getElementById('modalPreco').textContent = `R$ ${produto.preco.toFixed(2)}`;
    if(modal) modal.classList.add('mostrar');
}

function fecharModal() {
    if(modal) modal.classList.remove('mostrar');
    if(tutorial) tutorial.classList.remove('mostrar');
}

// --- Tutorial ---
function abrirTutorial() { if(tutorial) tutorial.classList.add('mostrar'); }
function fecharTutorial() { if(tutorial) tutorial.classList.remove('mostrar'); config.mostrarTutorial = false; salvarConfig(); }

// --- Configurações ---
function salvarConfig() { localStorage.setItem('configAcessibilidade', JSON.stringify(config)); }
function carregarConfig() { 
    const salvo = localStorage.getItem('configAcessibilidade'); 
    if(salvo) config = JSON.parse(salvo);
}

// --- Tema ---
function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-tema');
    const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.setAttribute('data-tema', novoTema);
    localStorage.setItem('tema', novoTema);
    if(btnTema) btnTema.textContent = novoTema === 'escuro' ? '☀️' : '🌙';
}

// --- Menu Acessibilidade ---
function toggleMenuAcessibilidade() { menuAcessibilidade.classList.toggle('mostrar'); }
function fecharMenuAcessibilidade() { menuAcessibilidade.classList.remove('mostrar'); }

// --- Renderização de Produtos ---
function renderizarProdutos(produtosParaRenderizar = produtos) {
    if(!produtosContainer) return;
    produtosContainer.innerHTML = '';

    produtosParaRenderizar.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('aria-label', `Clique para ver detalhes de ${produto.nome}`);
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Foto do sabor ${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
        `;
        card.addEventListener('click', () => abrirModalProduto(produto));
        produtosContainer.appendChild(card);
    });
}

// --- Filtro ---
function inicializarFiltro() {
    if(!filtro) return;

    filtro.addEventListener('change', function() {
        const valor = this.value;
        if(valor === 'todos') { renderizarProdutos(); return; }

        const filtrados = produtos.filter(produto => 
            produto.categoria.toLowerCase().includes(valor.toLowerCase())
        );
        renderizarProdutos(filtrados);
    });
}

// === FUNCIONALIDADE DE BUSCA ===

// Elementos da busca
let campoBusca;
let btnLimparBusca;
let searchInfo;

// Estado da busca
let termoBuscaAtual = '';
let filtroAtual = 'todos';

function inicializarBusca() {
    campoBusca = document.getElementById('campoBusca');
    btnLimparBusca = document.getElementById('btnLimparBusca');
    searchInfo = document.createElement('div');
    searchInfo.className = 'search-info';
    searchInfo.style.display = 'none';
    
    // Insere o indicador após o container de busca
    const searchContainer = document.querySelector('.search-container');
    searchContainer.parentNode.insertBefore(searchInfo, searchContainer.nextSibling);

    // Event listeners
    campoBusca.addEventListener('input', debounce(handleBusca, 300));
    btnLimparBusca.addEventListener('click', limparBusca);
    
    // Tecla ESC para limpar busca
    campoBusca.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            limparBusca();
        }
    });
}

function handleBusca(e) {
    termoBuscaAtual = e.target.value.trim().toLowerCase();
    
    if (termoBuscaAtual === '') {
        limparBusca();
        return;
    }

    // Mostrar botão limpar
    btnLimparBusca.style.display = 'flex';
    
    // Aplicar busca e filtro combinados
    aplicarFiltrosCombinados();
}

function aplicarFiltrosCombinados() {
    let produtosFiltrados = produtos;

    // Aplicar filtro de categoria primeiro
    if (filtroAtual !== 'todos') {
        produtosFiltrados = produtos.filter(produto => 
            produto.categoria.toLowerCase().includes(filtroAtual.toLowerCase())
        );
    }

    // Aplicar busca no texto
    if (termoBuscaAtual) {
        produtosFiltrados = produtosFiltrados.filter(produto => 
            produto.nome.toLowerCase().includes(termoBuscaAtual) ||
            produto.descricao.toLowerCase().includes(termoBuscaAtual) ||
            produto.categoria.toLowerCase().includes(termoBuscaAtual)
        );
    }

    renderizarProdutosComBusca(produtosFiltrados);
}

function renderizarProdutosComBusca(produtosParaRenderizar) {
    if (!produtosContainer) return;
    produtosContainer.innerHTML = '';

    if (produtosParaRenderizar.length === 0) {
        produtosContainer.innerHTML = `
            <div class="nenhum-resultado" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--cor-texto-sec);">
                <p style="font-size: 1.2em; margin-bottom: 10px;">Hmm... não encontramos nada...</p>
                <p>Tente outros termos ou categorias</p>
            </div>
        `;
        searchInfo.style.display = 'none';
        return;
    }

    // Atualizar info de resultados
    searchInfo.textContent = `${produtosParaRenderizar.length} sabor(es) encontrado(s)${termoBuscaAtual ? ` para "${termoBuscaAtual}"` : ''}`;
    searchInfo.style.display = 'block';

    produtosParaRenderizar.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('aria-label', `Clique para ver detalhes de ${produto.nome}`);
        
        // Destacar termo da busca no nome
        const nomeComDestaque = destacarTermoBusca(produto.nome, termoBuscaAtual);
        const descricaoComDestaque = destacarTermoBusca(produto.descricao, termoBuscaAtual);
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Foto do sabor ${produto.nome}">
            <h3>${nomeComDestaque}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p style="font-size: 0.9em; color: var(--cor-texto-sec); margin-top: 5px;">${descricaoComDestaque}</p>
        `;
        card.addEventListener('click', () => abrirModalProduto(produto));
        produtosContainer.appendChild(card);
    });
}

function destacarTermoBusca(texto, termo) {
    if (!termo) return texto;
    
    const regex = new RegExp(`(${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return texto.replace(regex, '<span class="destaque-busca">$1</span>');
}

function limparBusca() {
    if (campoBusca) {
        campoBusca.value = '';
        termoBuscaAtual = '';
        btnLimparBusca.style.display = 'none';
        searchInfo.style.display = 'none';
        aplicarFiltrosCombinados(); // Volta ao estado normal
    }
}

// Atualizar a função de filtro existente para trabalhar com a busca
function inicializarFiltro() {
    if (!filtro) return;

    filtro.addEventListener('change', function() {
        filtroAtual = this.value;
        aplicarFiltrosCombinados();
    });
}

// Atualizar a função debounce se não existir (adicionar se necessário)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// === BUSCA POR VOZ ===

// Elementos de voz
let btnVoz;
let vozStatus;
let reconhecimentoVoz;

// Estado da voz
let vozAtiva = false;

function inicializarBuscaPorVoz() {
    btnVoz = document.getElementById('btnVoz');
    vozStatus = document.getElementById('vozStatus');
    
    // Verificar suporte à Web Speech API
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        btnVoz.style.display = 'none';
        return;
    }

    // Configurar reconhecimento de voz
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    reconhecimentoVoz = new SpeechRecognition();
    
    // Configurações
    reconhecimentoVoz.continuous = false;
    reconhecimentoVoz.interimResults = false;
    reconhecimentoVoz.lang = 'pt-BR';

    // Event listeners
    reconhecimentoVoz.onstart = function() {
        vozAtiva = true;
        btnVoz.classList.add('ouvindo');
        atualizarStatusVoz('ouvindo', 'Ouvindo... Fale agora!');
    };

    reconhecimentoVoz.onresult = function(event) {
        const transcricao = event.results[0][0].transcript;
        btnVoz.classList.remove('ouvindo');
        btnVoz.classList.add('processando');
        
        atualizarStatusVoz('processando', 'Processando...');
        
        // Pequeno delay para feedback visual
        setTimeout(() => {
            processarTranscricaoVoz(transcricao);
        }, 800);
    };

    reconhecimentoVoz.onerror = function(event) {
        vozAtiva = false;
        btnVoz.classList.remove('ouvindo', 'processando');
        
        let mensagemErro = 'Erro no reconhecimento de voz';
        switch(event.error) {
            case 'not-allowed':
            case 'permission-denied':
                mensagemErro = 'Permissão de microfone negada.';
                break;
            case 'network':
                mensagemErro = 'Erro de rede. Verifique sua conexão.';
                break;
            case 'no-speech':
                mensagemErro = 'Nenhuma fala detectada. Tente novamente.';
                break;
            case 'audio-capture':
                mensagemErro = 'Nenhum microfone detectado.';
                break;
        }
        
        atualizarStatusVoz('erro', mensagemErro);
        setTimeout(() => {
            vozStatus.classList.remove('mostrar');
        }, 3000);
    };

    reconhecimentoVoz.onend = function() {
        vozAtiva = false;
        btnVoz.classList.remove('ouvindo', 'processando');
        
        if (!vozStatus.classList.contains('erro') && !vozStatus.classList.contains('sucesso')) {
            vozStatus.classList.remove('mostrar');
        }
    };

    // Event listener do botão de voz
    btnVoz.addEventListener('click', toggleReconhecimentoVoz);
}

function toggleReconhecimentoVoz() {
    if (vozAtiva) {
        reconhecimentoVoz.stop();
        return;
    }

    // Solicitar permissão de áudio
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        atualizarStatusVoz('erro', 'Seu dispositivo não suporta acesso ao microfone');
        return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            // Parar todas as tracks para liberar o microfone
            stream.getTracks().forEach(track => track.stop());
            
            // Iniciar reconhecimento
            reconhecimentoVoz.start();
        })
        .catch(function(err) {
            atualizarStatusVoz('erro', 'Permissão de microfone necessária.');
            console.error('Erro de permissão:', err);
        });
}

function processarTranscricaoVoz(transcricao) {
    // Limpar e processar o texto
    const textoProcessado = transcricao
        .toLowerCase()
        .replace(/[.,!?;:]$/g, '') // Remove pontuação final
        .trim();

    // Atualizar campo de busca
    campoBusca.value = textoProcessado;
    termoBuscaAtual = textoProcessado;
    
    // Mostrar botão limpar
    btnLimparBusca.style.display = 'flex';
    
    // Aplicar busca
    aplicarFiltrosCombinados();
    
    // Feedback de sucesso
    atualizarStatusVoz('sucesso', `Busca por: "${textoProcessado}"`);
    btnVoz.classList.remove('processando');
    
    // Esconder status após 2 segundos
    setTimeout(() => {
        vozStatus.classList.remove('mostrar', 'sucesso');
    }, 2000);
}

function atualizarStatusVoz(tipo, mensagem) {
    vozStatus.textContent = mensagem;
    vozStatus.className = 'voz-status mostrar ' + tipo;
    
    // Leitor de tela
    const statusAria = document.createElement('div');
    statusAria.setAttribute('aria-live', 'polite');
    statusAria.setAttribute('aria-atomic', 'true');
    statusAria.className = 'sr-only';
    statusAria.textContent = mensagem.replace(/<[^>]*>/g, '');
    document.body.appendChild(statusAria);
    
    // Limpar após 1 segundo
    setTimeout(() => {
        document.body.removeChild(statusAria);
    }, 1000);
}

// Atualizar a função inicializarBusca para incluir voz
function inicializarBusca() {
    campoBusca = document.getElementById('campoBusca');
    btnLimparBusca = document.getElementById('btnLimparBusca');
    searchInfo = document.createElement('div');
    searchInfo.className = 'search-info';
    searchInfo.style.display = 'none';
    
    // Insere o indicador após o container de busca
    const searchContainer = document.querySelector('.search-container');
    searchContainer.parentNode.insertBefore(searchInfo, searchContainer.nextSibling);

    // Event listeners da busca normal
    campoBusca.addEventListener('input', debounce(handleBusca, 300));
    btnLimparBusca.addEventListener('click', limparBusca);
    
    // Tecla ESC para limpar busca
    campoBusca.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            limparBusca();
        }
    });

    // Inicializar busca por voz
    inicializarBuscaPorVoz();
}

// Atualizar a função limparBusca para esconder o botão limpar
function limparBusca() {
    if (campoBusca) {
        campoBusca.value = '';
        termoBuscaAtual = '';
        btnLimparBusca.style.display = 'none';
        searchInfo.style.display = 'none';
        aplicarFiltrosCombinados();
    }
}

// Atualizar a função handleBusca para mostrar o botão limpar
function handleBusca(e) {
    termoBuscaAtual = e.target.value.trim().toLowerCase();
    
    // Mostrar/ocultar botão limpar
    btnLimparBusca.style.display = termoBuscaAtual ? 'flex' : 'none';
    
    if (termoBuscaAtual === '') {
        limparBusca();
        return;
    }

    // Aplicar busca e filtro combinados
    aplicarFiltrosCombinados();
}
// --- Inicialização ---
document.addEventListener('DOMContentLoaded', function() {
    carregarConfig();
    
    // Tema
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    document.documentElement.setAttribute('data-tema', temaSalvo);
    if(btnTema) btnTema.textContent = temaSalvo === 'escuro' ? '☀️' : '🌙';

    
    inicializarBusca();
    
    // Renderizar produtos (agora usa a função combinada)
    aplicarFiltrosCombinados();
    
 
    if(btnAcessibilidade) btnAcessibilidade.addEventListener('click', toggleMenuAcessibilidade);
    if(btnTema) btnTema.addEventListener('click', alternarTema);

    // ... demais event listeners
});
document.addEventListener('DOMContentLoaded', function() {
    carregarConfig();
    
    // Tema
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    document.documentElement.setAttribute('data-tema', temaSalvo);
    if(btnTema) btnTema.textContent = temaSalvo === 'escuro' ? '☀️' : '🌙';

    // Renderizar produtos
    renderizarProdutos();
    
    // Botões Acessibilidade
    if(btnAcessibilidade) btnAcessibilidade.addEventListener('click', toggleMenuAcessibilidade);
    if(btnTema) btnTema.addEventListener('click', alternarTema);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const acao = this.getAttribute('data-acao');
            switch(acao) {
                case 'aumentar-fonte':
                    if(nivelFonte < maxNivel) nivelFonte++;
                    atualizarFonte();
                    break;
                case 'reduzir-fonte':
                    if(nivelFonte > minNivel) nivelFonte--;
                    atualizarFonte();
                    break;
                case 'alto-contraste':
                    document.body.classList.toggle('alto-contraste');
                    break;
                case 'mostrar-tutorial':
                    abrirTutorial();
                    break;
            }
            fecharMenuAcessibilidade();
        });
    });

    // Fechar modais
    document.querySelectorAll('.fechar-modal').forEach(btn => btn.addEventListener('click', fecharModal));
    document.querySelectorAll('.modal').forEach(modalEl => {
        modalEl.addEventListener('click', function(e) {
            if(e.target === this) fecharModal();
        });
    });

    // Tutorial primeira visita
    const tutorialVisto = localStorage.getItem('tutorialVisto');
    if(!tutorialVisto && config.mostrarTutorial) {
        setTimeout(abrirTutorial, 1000);
        localStorage.setItem('tutorialVisto', 'true');
    }

    const btnEntendi = document.getElementById('btnEntendi');
    if(btnEntendi) btnEntendi.addEventListener('click', fecharTutorial);

    const btnMostrarNovamente = document.getElementById('btnMostrarNovamente');
    if(btnMostrarNovamente) {
        btnMostrarNovamente.addEventListener('click', function() {
            config.mostrarTutorial = true;
            salvarConfig();
            localStorage.removeItem('tutorialVisto');
            fecharModal();
        });
    }

    // Filtro
    inicializarFiltro();

    // ESC para fechar modais
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
            fecharModal();
            fecharMenuAcessibilidade();
        }
    });
});
