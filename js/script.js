document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        { id: 1, nome: 'Animals', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular2.jpg', categoria: 'masculino' },
        { id: 2, nome: '521 Vip Black', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular3.jpg', categoria: 'masculino' },
        { id: 3, nome: '521 Sexy Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular1.jpg', categoria: 'masculino' },
        { id: 4, nome: 'Exclusive code', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular4.jpg', categoria: 'masculino' },
        { id: 5, nome: 'Tom Mister', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular5.jpg', categoria: 'masculino' },
        { id: 6, nome: 'Luke', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular6.jpg', categoria: 'masculino' },
        { id: 7, nome: 'Intense', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular7.jpg', categoria: 'masculino' },
        { id: 8, nome: 'Imortal', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular8.jpg', categoria: 'masculino' },
        { id: 9, nome: 'Strong', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular9.jpg', categoria: 'masculino' },
        { id: 10, nome: 'Smell For Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular10.jpg', categoria: 'masculino' },
        { id: 11, nome: 'Apolo', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular11.jpg', categoria: 'masculino' },
        { id: 12, nome: 'Allur Sport', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular12.jpg', categoria: 'masculino' },
        { id: 13, nome: 'Brave', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular13.jpg', categoria: 'masculino' },
        { id: 14, nome: 'Blue', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular14.jpg', categoria: 'masculino' },
        { id: 15, nome: 'Amahka Silver', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular15.jpg', categoria: 'masculino' },
        { id: 16, nome: 'Aphrodisiao', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular16.jpg', categoria: 'masculino' },
        { id: 17, nome: 'Ak Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular17.jpg', categoria: 'masculino' },
        { id: 18, nome: 'Bee', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular18.jpg', categoria: 'masculino' },
        { id: 19, nome: 'Fortune Lucky', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular19.jpg', categoria: 'masculino' },
        { id: 20, nome: '521 Vip', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular20.jpg', categoria: 'masculino' },
        { id: 21, nome: '521 Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular21.jpg', categoria: 'masculino' },
        { id: 22, nome: 'Jump Life Homme', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular22.jpg', categoria: 'masculino' },
        { id: 23, nome: 'Famous For Him', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular23.jpg', categoria: 'masculino' },
        { id: 24, nome: 'Tedd', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular24.jpg', categoria: 'masculino' },
        { id: 25, nome: 'Sublime', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular25.jpg', categoria: 'masculino' },
        { id: 26, nome: 'Amk For Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular26.jpg', categoria: 'masculino' },
        { id: 27, nome: 'Fortune', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular27.jpg', categoria: 'masculino' },
        { id: 28, nome: 'Fast Car Black', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular28.jpg', categoria: 'masculino' },
        { id: 29, nome: 'Korus', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular29.jpg', categoria: 'masculino' },
        { id: 30, nome: 'Radical Sport', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular30.jpg', categoria: 'masculino' },
        { id: 31, nome: 'Rock', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular31.jpg', categoria: 'masculino' },
        { id: 32, nome: 'Satisfaction', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular32.jpg', categoria: 'masculino' },
        { id: 33, nome: 'Night Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular33.jpg', categoria: 'masculino' },
        { id: 34, nome: 'Mythology', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular34.jpg', categoria: 'masculino' },
        { id: 35, nome: 'Red Man', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular35.jpg', categoria: 'masculino' },
        { id: 36, nome: 'Bad Man', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular36.jpg', categoria: 'masculino' },
        { id: 37, nome: 'Bad Man', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular37.jpg', categoria: 'masculino' },
        { id: 38, nome: 'Animals', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular38.jpg', categoria: 'masculino' },
        { id: 39, nome: 'Imortal', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular39.jpg', categoria: 'masculino' },
        { id: 40, nome: 'Amk For Men', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular40.jpg', categoria: 'masculino' },
        { id: 41, nome: 'Fast Car Black', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular41.jpg', categoria: 'masculino' },
        { id: 42, nome: 'Fortune', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular42.jpg', categoria: 'masculino' },
        { id: 43, nome: 'Tom Mister', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular43.jpg', categoria: 'masculino' },
        // Adicione mais produtos aqui com suas respectivas categorias
    ];

    let carrinho = [];

    // Elementos do DOM
    const homeSection = document.getElementById('home');
    const headerSection = document.querySelector('header');
    const listaProdutosMasculinosDiv = document.querySelector('.lista-produtos-masculinos');
    const listaProdutosFemininosDiv = document.querySelector('.lista-produtos-femininos');
    const listaProdutosCapilaresDiv = document.querySelector('.lista-produtos-capilares');
    const listaProdutosNutraceuticosDiv = document.querySelector('.lista-produtos-nutraceuticos');
    const carrinhoLink = document.getElementById('carrinho-link');
    const carrinhoQuantidadeSpan = document.getElementById('carrinho-quantidade');
    const produtosMasculinosSection = document.getElementById('produtos-masculinos');
    const produtosFemininosSection = document.getElementById('produtos-femininos');
    const produtosCapilaresSection = document.getElementById('produtos-capilares');
    const produtosNutraceuticosSection = document.getElementById('produtos-nutraceuticos');
    const detalhesProdutoSection = document.getElementById('detalhes-produto');
    const carrinhoSection = document.getElementById('carrinho');
    const checkoutSection = document.getElementById('checkout');
    const pedidoConfirmadoSection = document.getElementById('pedido-confirmado');
    const itensCarrinhoDiv = document.getElementById('itens-carrinho');
    const valorTotalSpan = document.getElementById('valor-total');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    const continuarComprandoBtn = document.getElementById('continuar-comprando');
    const voltarParaProdutosBtn = document.getElementById('voltar-para-produtos');
    const voltarParaCarrinhoBtn = document.getElementById('voltar-para-carrinho');
    const voltarParaHomeBtn = document.getElementById('voltar-para-home');
    const formularioCheckout = document.getElementById('formulario-checkout');
    const produtoImagemDetalhe = document.getElementById('produto-imagem-detalhe');
    const produtoNomeDetalhe = document.getElementById('produto-nome-detalhe');
    const produtoPrecoDetalhe = document.getElementById('produto-preco-detalhe');
    const produtoDescricaoDetalhe = document.getElementById('produto-descricao-detalhe');
    const adicionarAoCarrinhoDetalheBtn = document.getElementById('adicionar-ao-carrinho-detalhe');
    const cepInput = document.getElementById('cep');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');

    const homeLinkHeader = document.getElementById('home-link-header');
    const produtosMasculinosLink = document.getElementById('produtos-masculinos-link');
    const produtosFemininosLink = document.getElementById('produtos-femininos-link');
    const produtosCapilaresLink = document.getElementById('produtos-capilares-link');
    const produtosNutraceuticosLink = document.getElementById('produtos-nutraceuticos-link');

    const goMasculinoLink = document.getElementById('go-masculino');
    const goFemininoLink = document.getElementById('go-feminino');
    const goCapilarLink = document.getElementById('go-capilar');
    const goNutraceuticoLink = document.getElementById('go-nutraceutico');

    const numeroVendedora = '5564981319697'; // Substitua pelo número real
    let cepTimeout;

    // Função para renderizar os produtos na página inicial por categoria
    function renderizarProdutos(categoria) {
        listaProdutosMasculinosDiv.innerHTML = '';
        listaProdutosFemininosDiv.innerHTML = '';
        listaProdutosCapilaresDiv.innerHTML = '';
        listaProdutosNutraceuticosDiv.innerHTML = '';

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" data-id="${produto.id}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button class="adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
            `;

            if (produto.categoria === categoria) {
                if (categoria === 'masculino') {
                    listaProdutosMasculinosDiv.appendChild(produtoDiv);
                } else if (categoria === 'feminino') {
                    listaProdutosFemininosDiv.appendChild(produtoDiv);
                } else if (categoria === 'capilar') {
                    listaProdutosCapilaresDiv.appendChild(produtoDiv);
                } else if (categoria === 'nutraceutico') {
                    listaProdutosNutraceuticosDiv.appendChild(produtoDiv);
                }
            }
        });

        // Adicionar evento de clique para ver detalhes do produto
        const produtosImagens = document.querySelectorAll('.lista-produtos-masculinos .produto img, .lista-produtos-femininos .produto img, .lista-produtos-capilares .produto img, .lista-produtos-nutraceuticos .produto img');
        produtosImagens.forEach(img => {
            img.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.dataset.id);
                mostrarDetalhesProduto(produtoId);
            });
        });

        // Adicionar evento de clique para adicionar ao carrinho na listagem
        const botoesAdicionar = document.querySelectorAll('.lista-produtos-masculinos .adicionar-carrinho, .lista-produtos-femininos .adicionar-carrinho, .lista-produtos-capilares .adicionar-carrinho, .lista-produtos-nutraceuticos .adicionar-carrinho');
        botoesAdicionar.forEach(button => {
            button.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.dataset.id);
                adicionarAoCarrinho(produtoId);
                mostrarMensagemAdicionado();
            });
        });
    }

    // Função para mostrar os detalhes de um produto (sem alterações)
    function mostrarDetalhesProduto(id) {
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            produtoImagemDetalhe.src = produto.imagem;
            produtoImagemDetalhe.alt = produto.nome;
            produtoNomeDetalhe.textContent = produto.nome;
            produtoPrecoDetalhe.textContent = `R$ ${produto.preco.toFixed(2)}`;
            produtoDescricaoDetalhe.textContent = produto.descricao;
            adicionarAoCarrinhoDetalheBtn.dataset.id = produto.id;

            homeSection.classList.add('oculto');
            headerSection.classList.remove('oculto');
            produtosMasculinosSection.classList.add('oculto');
            produtosFemininosSection.classList.add('oculto');
            produtosCapilaresSection.classList.add('oculto');
            produtosNutraceuticosSection.classList.add('oculto');
            detalhesProdutoSection.classList.remove('oculto');
            carrinhoSection.classList.add('oculto');
            checkoutSection.classList.add('oculto');
            pedidoConfirmadoSection.classList.add('oculto');
        }
    }

    // Função para adicionar um produto ao carrinho (sem alterações)
    function adicionarAoCarrinho(id) {
        const produtoExistente = carrinho.find(item => item.id === id);
        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            const produto = produtos.find(p => p.id === id);
            if (produto) {
                carrinho.push({ ...produto, quantidade: 1 });
            }
        }
        atualizarCarrinho();
    }

    // Função para remover um item do carrinho (sem alterações)
    function removerDoCarrinho(id) {
        carrinho = carrinho.filter(item => item.id !== id);
        atualizarCarrinho();
    }

    // Função para atualizar a quantidade de um item no carrinho (sem alterações)
    function atualizarQuantidade(id, quantidade) {
        const item = carrinho.find(item => item.id === id);
        if (item) {
            item.quantidade = parseInt(quantidade);
            if (item.quantidade <= 0) {
                removerDoCarrinho(id);
            }
            atualizarCarrinho();
        }
    }

    // Função para renderizar os itens do carrinho (sem alterações)
    function renderizarCarrinho() {
        itensCarrinhoDiv.innerHTML = '';
        if (carrinho.length === 0) {
            itensCarrinhoDiv.innerHTML = '<p>O carrinho está vazio.</p>';
            finalizarCompraBtn.disabled = true;
        } else {
            finalizarCompraBtn.disabled = false;
            carrinho.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item-carrinho');
                itemDiv.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="info-item">
                        <p>${item.nome}</p>
                        <p>R$ ${item.preco.toFixed(2)}</p>
                        <label for="quantidade-${item.id}">Quantidade:</label>
                        <input type="number" id="quantidade-${item.id}" value="${item.quantidade}" min="1">
                    </div>
                    <div class="acoes-item">
                        <button class="remover-item" data-id="${item.id}">Remover</button>
                    </div>
                `;
                itensCarrinhoDiv.appendChild(itemDiv);

                const quantidadeInput = itemDiv.querySelector(`#quantidade-${item.id}`);
                quantidadeInput.addEventListener('change', (event) => {
                    atualizarQuantidade(item.id, event.target.value);
                });

                const removerButton = itemDiv.querySelector('.remover-item');
                removerButton.addEventListener('click', () => {
                    removerDoCarrinho(item.id);
                });
            });
        }
        atualizarTotalCarrinho();
    }

    // Função para atualizar o total do carrinho (sem alterações)
    function atualizarTotalCarrinho() {
        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        valorTotalSpan.textContent = total.toFixed(2);
    }

    // Função para atualizar a exibição do carrinho (sem alterações)
    function atualizarCarrinho() {
        const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        carrinhoQuantidadeSpan.textContent = quantidadeTotal;
        renderizarCarrinho();
    }

    function mostrarMensagemAdicionado2() {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.textContent = 'Por favor, preencha o CEP para que a cidade e o estado sejam preenchidos automaticamente!';
        mensagemDiv.style.position = 'fixed';
        mensagemDiv.style.top = '20px';
        mensagemDiv.style.left = '50%';
        mensagemDiv.style.transform = 'translateX(-50%)';
        mensagemDiv.style.backgroundColor = 'rgba(248, 60, 3, 0.8)';
        mensagemDiv.style.color = 'white';
        mensagemDiv.style.padding = '10px 20px';
        mensagemDiv.style.borderRadius = '5px';
        mensagemDiv.style.zIndex = '1000';
        document.body.appendChild(mensagemDiv);
        setTimeout(() => {
            document.body.removeChild(mensagemDiv);
        }, 3000); // A mensagem desaparece após 3 segundos
    }

    // Função para mostrar a mensagem de item adicionado ao carrinho (sem alterações)
    function mostrarMensagemAdicionado() {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.textContent = 'Item adicionado ao carrinho com sucesso!';
        mensagemDiv.style.position = 'fixed';
        mensagemDiv.style.top = '20px';
        mensagemDiv.style.left = '50%';
        mensagemDiv.style.transform = 'translateX(-50%)';
        mensagemDiv.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
        mensagemDiv.style.color = 'white';
        mensagemDiv.style.padding = '10px 20px';
        mensagemDiv.style.borderRadius = '5px';
        mensagemDiv.style.zIndex = '1000';
        document.body.appendChild(mensagemDiv);
        setTimeout(() => {
            document.body.removeChild(mensagemDiv);
        }, 3000); // A mensagem desaparece após 3 segundos
    }

    // Função para validar o CEP e preencher estado e cidade (sem alterações)
    function validarCEP(cep) {
        estadoInput.value = '';
        cidadeInput.value = '';
        estadoInput.readOnly = true;
        cidadeInput.readOnly = true;

        cep = cep.replace(/\D/g, '');

        if (cep.length !== 8) {
            if (cep.length > 0) {
                alert('CEP inválido.');
            } else {
                estadoInput.readOnly = false;
                cidadeInput.readOnly = false;
            }
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado.');
                    estadoInput.readOnly = false;
                    cidadeInput.readOnly = false;
                } else {
                    estadoInput.value = data.uf;
                    cidadeInput.value = data.localidade;
                }
            })
            .catch(() => {
                alert('Erro ao consultar o CEP.');
                estadoInput.readOnly = false;
                cidadeInput.readOnly = false;
            });
    }

    // Event listener para o input do CEP com debounce (sem alterações)
    cepInput.addEventListener('input', () => {
        clearTimeout(cepTimeout);
        const cepValue = cepInput.value;
        if (cepValue.length > 0) {
            cepTimeout = setTimeout(() => {
                validarCEP(cepValue);
            }, 500); // Espera 500ms após a última digitação
        } else {
            estadoInput.value = '';
            cidadeInput.value = '';
            estadoInput.readOnly = false;
            cidadeInput.readOnly = false;
        }
    });

    // Inicialmente, desabilita os campos de estado e cidade (sem alterações)
    estadoInput.readOnly = true;
    cidadeInput.readOnly = true;

    // Event listeners para navegação
    homeLinkHeader.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.remove('oculto');
        headerSection.classList.add('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    produtosMasculinosLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.remove('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('masculino');
    });

    produtosFemininosLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.remove('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('feminino');
    });

    produtosCapilaresLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.remove('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('capilar');
    });

    produtosNutraceuticosLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('nutraceutico');
    });

    carrinhoLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (carrinho.length > 0) { // Alteração aqui: verifica se há pelo menos um item
            homeSection.classList.add('oculto');
            headerSection.classList.remove('oculto');
            produtosMasculinosSection.classList.add('oculto');
            produtosFemininosSection.classList.add('oculto');
            produtosCapilaresSection.classList.add('oculto');
            produtosNutraceuticosSection.classList.add('oculto');
            detalhesProdutoSection.classList.add('oculto');
            carrinhoSection.classList.remove('oculto');
            checkoutSection.classList.add('oculto');
            pedidoConfirmadoSection.classList.add('oculto');
        } else {
            alert('Seu carrinho está vazio.');
        }
    });

    continuarComprandoBtn.addEventListener('click', (e) => {
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.remove('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('masculino'); // Exibe a primeira categoria por padrão
    });

    finalizarCompraBtn.addEventListener('click', () => {
        if (carrinho.length > 0) {
            homeSection.classList.add('oculto');
            headerSection.classList.remove('oculto');
            carrinhoSection.classList.add('oculto');
            checkoutSection.classList.remove('oculto');
        } else {
            alert('Seu carrinho está vazio.');
        }
    });

    voltarParaProdutosBtn.addEventListener('click',  (e) => {
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.remove('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
        renderizarProdutos('masculino'); // Exibe a primeira categoria por padrão
    });

    voltarParaCarrinhoBtn.addEventListener('click', () => {
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        carrinhoSection.classList.remove('oculto');
        checkoutSection.classList.add('oculto');
    });

    voltarParaHomeBtn.addEventListener('click', () => {
        homeSection.classList.remove('oculto');
        headerSection.classList.add('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    adicionarAoCarrinhoDetalheBtn.addEventListener('click', (event) => {
        const produtoId = parseInt(event.target.dataset.id);
        adicionarAoCarrinho(produtoId);
        mostrarMensagemAdicionado();
    });

    cidadeInput.addEventListener('focus', () => {
        if (cepInput.value.length !== 8 && (estadoInput.readOnly || cidadeInput.readOnly)) {
            mostrarMensagemAdicionado2();
            cidadeInput.blur(); // Remove o foco para impedir a escrita
        } else if (cepInput.value.length === 0 && (estadoInput.readOnly || cidadeInput.readOnly)) {
            mostrarMensagemAdicionado2();
            cidadeInput.blur(); // Remove o foco para impedir a escrita
        }
    });

    estadoInput.addEventListener('focus', () => {
        if (cepInput.value.length !== 8 && (estadoInput.readOnly || cidadeInput.readOnly)) {
            mostrarMensagemAdicionado2();
            estadoInput.blur(); // Remove o foco para impedir a escrita
        } else if (cepInput.value.length === 0 && (estadoInput.readOnly || cidadeInput.readOnly)) {
            mostrarMensagemAdicionado2();
            estadoInput.blur(); // Remove o foco para impedir a escrita
        }
    });

    formularioCheckout.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;
        const cep = cepInput.value;
        const cidade = cidadeInput.value;
        const estado = estadoInput.value;
        const pagamento = document.getElementById('pagamento').value;

        if (!nome) {
            alert('Por favor, preencha o seu nome.');
            return;
        }

        if (nome.length < 3) {
            alert('Por favor, insira um nome com pelo menos 3 caracteres.');
            return;
        }

        if (!nome.includes(' ')) {
            alert('Por favor, insira seu nome completo (nome e sobrenome).');
            return;
        }

        if (!cep || !estado || !cidade) {
            alert('Por favor, preencha o CEP corretamente para validar o estado e a cidade.');
            return;
        }

        let mensagem = `Ola, Novo pedido:\n\n`;
        mensagem += `Meus Dados:\n`;
        mensagem += `Nome: ${nome}\n`;
        mensagem += `Email: ${email}\n`;
        mensagem += `Endereço: ${endereco}\n`;
        mensagem += `CEP: ${cep}\n`;
        mensagem += `Cidade: ${cidade}\n`;
        mensagem += `Estado: ${estado}\n`;
        mensagem += `Forma de Pagamento: ${pagamento}\n\n`;

        mensagem += `Itens do Carrinho:\n`;
        carrinho.forEach(item => {
            mensagem += `- ${item.nome} (Quantidade: ${item.quantidade}, Preço Unitário: R$ ${item.preco.toFixed(2)})\n`;
        });

        const totalPedido = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2);
        mensagem += `\nTotal do Pedido: R$ ${totalPedido}\n`;

        const mensagemCodificada = encodeURIComponent(mensagem);
        const linkWhatsApp = `https://wa.me/${numeroVendedora}?text=${mensagemCodificada}`;
        window.location.href = linkWhatsApp;
    });

    // Inicializar a página exibindo a seção home
    homeSection.classList.remove('oculto');
    headerSection.classList.add('oculto');
    produtosMasculinosSection.classList.add('oculto');
    produtosFemininosSection.classList.add('oculto');
    produtosCapilaresSection.classList.add('oculto');
    produtosNutraceuticosSection.classList.add('oculto');
    detalhesProdutoSection.classList.add('oculto');
    carrinhoSection.classList.add('oculto');
    checkoutSection.classList.add('oculto');
    pedidoConfirmadoSection.classList.add('oculto');
    atualizarCarrinho();

    // Event listeners para os links da página inicial
    goMasculinoLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.remove('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        renderizarProdutos('masculino');
    });

    goFemininoLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosFemininosSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        renderizarProdutos('feminino');
    });

    goCapilarLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosCapilaresSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        renderizarProdutos('capilar');
    });

    goNutraceuticoLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosNutraceuticosSection.classList.remove('oculto');
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        renderizarProdutos('nutraceutico');
    });
});