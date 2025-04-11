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
    const cepInput = document.getElementById('cep');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');

    const homeLink = document.querySelector('header nav ul li:nth-child(1) a');
    const produtosLink = document.querySelector('header nav ul li:nth-child(2) a');
    const sobreNosLink = document.querySelector('header nav ul li:nth-child(3) a');
    const contatoLink = document.querySelector('header nav ul li:nth-child(4) a');

    const numeroVendedora = '55649981319697'; // Substitua pelo número real
    let cepTimeout;

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
                mostrarMensagemAdicionado();
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

    // Função para mostrar a mensagem de item adicionado ao carrinho
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

    // Função para validar o CEP e preencher estado e cidade
    function validarCEP(cep) {
        estadoInput.value = '';
        cidadeInput.value = '';
        estadoInput.readOnly = true;
        cidadeInput.readOnly = true;

        // Remove caracteres não numéricos
        cep = cep.replace(/\D/g, '');

        // Verifica se o CEP tem 8 dígitos
        if (cep.length !== 8) {
            if (cep.length > 0) {
                alert('CEP inválido.');
            } else {
                estadoInput.readOnly = false;
                cidadeInput.readOnly = false;
            }
            return;
        }

        // Consulta a API ViaCEP
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

    // Event listener para o input do CEP com debounce
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

    // Inicialmente, desabilita os campos de estado e cidade
    estadoInput.readOnly = true;
    cidadeInput.readOnly = true;

    // Event listeners para navegação
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        produtosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    produtosLink.addEventListener('click', (e) => {
        e.preventDefault();
        produtosSection.classList.remove('oculto');
        detalhesProdutoSection.classList.add('oculto');
        carrinhoSection.classList.add('oculto');
        checkoutSection.classList.add('oculto');
        pedidoConfirmadoSection.classList.add('oculto');
    });

    sobreNosLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Bem-vindo à Jannaina Neves! Nossa loja oferece uma seleção exclusiva de perfumes importados e outros utilitários de alta qualidade para atender às suas necessidades e desejos. Explore nossa coleção e encontre o item perfeito para você!");
    });

    contatoLink.addEventListener('click', (e) => {
        e.preventDefault();
        const linkWhatsApp = `https://wa.me/${numeroVendedora}`;
        window.location.href = linkWhatsApp;
    });

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
        mostrarMensagemAdicionado();
    });

    // Event listeners para cidade e estado para exibir aviso
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


    // Modificação para redirecionar para o WhatsApp
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

        // Construindo a mensagem formatada
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

        // Codificando a mensagem para a URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Criando o link do WhatsApp
        const linkWhatsApp = `https://wa.me/${numeroVendedora}?text=${mensagemCodificada}`;

        // Redirecionando para o WhatsApp
        window.location.href = linkWhatsApp;
    });

    // Inicializar a página com os produtos
    renderizarProdutos();
    atualizarCarrinho();
});