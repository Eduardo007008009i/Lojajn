document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        { id: 1, nome: 'Animals', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular1.jpg' },
        { id: 2, nome: '521 Vip Black', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular2.jpg' },
        { id: 3, nome: '521 Sexy Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular3.jpg' },
        // Adicione mais produtos aqui
    ];

    let carrinho = [];

    // Elementos do DOM
    const listaProdutosDiv = document.querySelector('.lista-produtos');
    const carrinhoLink = document.getElementById('carrinho-link');
    const carrinhoQuantidadeSpan = document.getElementById('carrinho-quantidade');
    const produtosSection = document.getElementById('produtos');
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


    // Função para renderizar os produtos na página inicial
    function renderizarProdutos() {
        listaProdutosDiv.innerHTML = '';
        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" data-id="${produto.id}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button class="adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
            `;
            listaProdutosDiv.appendChild(produtoDiv);
        });

        // Adicionar evento de clique para ver detalhes do produto
        document.querySelectorAll('.produto img').forEach(img => {
            img.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.dataset.id);
                mostrarDetalhesProduto(produtoId);
            });
        });

        // Adicionar evento de clique para adicionar ao carrinho na listagem
        document.querySelectorAll('.adicionar-carrinho').forEach(button => {
            button.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.dataset.id);
                adicionarAoCarrinho(produtoId);
            });
        });
    }

    // Função para mostrar os detalhes de um produto
    function mostrarDetalhesProduto(id) {
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            produtoImagemDetalhe.src = produto.imagem;
            produtoImagemDetalhe.alt = produto.nome;
            produtoNomeDetalhe.textContent = produto.nome;
            produtoPrecoDetalhe.textContent = `R$ ${produto.preco.toFixed(2)}`;
            produtoDescricaoDetalhe.textContent = produto.descricao;
            adicionarAoCarrinhoDetalheBtn.dataset.id = produto.id;

            produtosSection.classList.add('oculto');
            detalhesProdutoSection.classList.remove('oculto');
            carrinhoSection.classList.add('oculto');
            checkoutSection.classList.add('oculto');
            pedidoConfirmadoSection.classList.add('oculto');
        }
    }

    // Função para adicionar um produto ao carrinho
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

    // Função para remover um item do carrinho
    function removerDoCarrinho(id) {
        carrinho = carrinho.filter(item => item.id !== id);
        atualizarCarrinho();
    }

    // Função para atualizar a quantidade de um item no carrinho
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

    // Função para renderizar os itens do carrinho
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

                // Adicionar eventos para atualizar quantidade e remover item
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

    // Função para atualizar o total do carrinho
    function atualizarTotalCarrinho() {
        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        valorTotalSpan.textContent = total.toFixed(2);
    }

    // Função para atualizar a exibição do carrinho (quantidade no header e renderização dos itens)
    function atualizarCarrinho() {
        const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        carrinhoQuantidadeSpan.textContent = quantidadeTotal;
        renderizarCarrinho();
    }

    // Event listeners para navegação
    carrinhoLink.addEventListener('click', (e) => {
        e.preventDefault();
        produtosSection.classList.add('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.remove('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    continuarComprandoBtn.addEventListener('click', () => {
        produtosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    finalizarCompraBtn.addEventListener('click', () => {
        if (carrinho.length > 0) {
            carrinhoSection.classList.add('oculto');
            checkoutSection.classList.remove('oculto');
        } else {
            alert('Seu carrinho está vazio.');
        }
    });

    voltarParaProdutosBtn.addEventListener('click', () => {
        produtosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    voltarParaCarrinhoBtn.addEventListener('click', () => {
        carrinhoSection.classList.remove('oculto');
        checkoutSection.classList.add('oculto');
    });

    voltarParaHomeBtn.addEventListener('click', () => {
        produtosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    adicionarAoCarrinhoDetalheBtn.addEventListener('click', (event) => {
        const produtoId = parseInt(event.target.dataset.id);
        adicionarAoCarrinho(produtoId);
    });

    // Modificação para redirecionar para o WhatsApp
    formularioCheckout.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cep = document.getElementById('cep').value;
        const pagamento = document.getElementById('pagamento').value;

        // Número de telefone da vendedora (adicione o número real aqui)
        const numeroVendedora = '55649981319697'; // Substitua pelo número real

        // Construindo a mensagem formatada
        let mensagem = `Novo pedido:\n\n`;
        mensagem += `Dados do Cliente:\n`;
        mensagem += `Nome: ${nome}\n`;
        mensagem += `Email: ${email}\n`;
        mensagem += `Endereço: ${endereco}\n`;
        mensagem += `Cidade: ${cidade}\n`;
        mensagem += `Estado: ${estado}\n`;
        mensagem += `CEP: ${cep}\n`;
        mensagem += `Forma de Pagamento: ${pagamento}\n\n`;

        mensagem += `Itens do Carrinho:\n`;
        carrinho.forEach(item => {
            mensagem += `- ${item.nome} (Quantidade: ${item.quantidade}, Preço Unitário: R$ ${item.preco.toFixed(2)})\n`;
        });

        const totalPedido = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2);
        mensagem += `\nTotal do Pedido: R$ ${totalPedido}\n`;

        // Codificando a mensagem para a URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Criando o link do WhatsApp
        const linkWhatsApp = `https://wa.me/${numeroVendedora}?text=${mensagemCodificada}`;

        // Redirecionando para o WhatsApp
        window.location.href = linkWhatsApp;

        // Não precisamos mais limpar o carrinho nem mostrar a página de confirmação aqui,
        // pois o usuário será redirecionado para o WhatsApp.
        // carrinho = [];
        // atualizarCarrinho();
        // checkoutSection.classList.add('oculto');
        // pedidoConfirmadoSection.classList.remove('oculto');
    });

    // Inicializar a página com os produtos
    renderizarProdutos();
    atualizarCarrinho();
});