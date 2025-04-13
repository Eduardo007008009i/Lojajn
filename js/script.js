document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
    //Masculinos
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
    { id: 37, nome: 'Sir Bourbom', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular37.jpg', categoria: 'masculino' },
    { id: 38, nome: 'Trust', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular38.jpg', categoria: 'masculino' },
    { id: 39, nome: 'Pole Sports', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular39.jpg', categoria: 'masculino' },
    { id: 40, nome: 'Man', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular40.jpg', categoria: 'masculino' },
    { id: 41, nome: 'E`eternite For Man', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular41.jpg', categoria: 'masculino' },
    { id: 42, nome: 'Insigne', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular42.jpg', categoria: 'masculino' },
    { id: 43, nome: 'Indomável', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular43.jpg', categoria: 'masculino' },
    { id: 44, nome: 'Fire Men', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular44.jpg', categoria: 'masculino' },
    { id: 45, nome: 'Bratt', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular45.jpg', categoria: 'masculino' },
    { id: 46, nome: 'Black', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular46.jpg', categoria: 'masculino' },
    { id: 47, nome: 'All Sexes', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular47.jpg', categoria: 'masculino' },
    { id: 48, nome: 'Acqua', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular48.jpg', categoria: 'masculino' },
    { id: 49, nome: '521 Young For Him', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular49.jpg', categoria: 'masculino' },
    { id: 50, nome: 'Magic Candy', preco: 50.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular50.jpg', categoria: 'masculino' },
    { id: 51, nome: 'Bad Man', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular51.jpg', categoria: 'masculino' },
    { id: 52, nome: 'Animals', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular52.jpg', categoria: 'masculino' },
    { id: 53, nome: 'Imortal', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular53.jpg', categoria: 'masculino' },
    { id: 54, nome: 'Amk For Men', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular54.jpg', categoria: 'masculino' },
    { id: 55, nome: 'Fast Car Black', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular55.jpg', categoria: 'masculino' },
    { id: 56, nome: 'Fortune', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular56.jpg', categoria: 'masculino' },
    { id: 57, nome: 'Tom Mister', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular57.jpg', categoria: 'masculino' },
    { id: 58, nome: 'Rb Romântico', preco: 225.00, descricao: 'Perfume masculino, Um ótimo perfume.', imagem: 'imagens/celular58.jpg', categoria: 'masculino' },
    //o id 59 esqueci de colocar.
    //Femininos
    { id: 60, nome: 'World', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular60.jpg', categoria: 'feminino' },
    { id: 61, nome: 'Night´s Lady', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular61.jpg', categoria: 'feminino' },
    { id: 62, nome: 'Fantastic', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular62.jpg', categoria: 'feminino' },
    { id: 63, nome: 'Princess', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular63.jpg', categoria: 'feminino' },
    { id: 64, nome: 'Preciosa', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular64.jpg', categoria: 'feminino' },
    { id: 65, nome: 'Paixão', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular65.jpg', categoria: 'feminino' },
    { id: 66, nome: 'Angelina', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular66.jpg', categoria: 'feminino' },
    { id: 67, nome: 'Party Girl', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular67.jpg', categoria: 'feminino' },
    { id: 68, nome: 'Athena', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular68.jpg', categoria: 'feminino' },
    { id: 69, nome: 'Lady Money', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular69.jpg', categoria: 'feminino' },
    { id: 70, nome: 'Nuit Sombre', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular70.jpg', categoria: 'feminino' },
    { id: 71, nome: 'Mulier', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular71.jpg', categoria: 'feminino' },
    { id: 72, nome: 'Escandalosa', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular72.jpg', categoria: 'feminino' },
    { id: 73, nome: 'Anjos', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular73.jpg', categoria: 'feminino' },
    { id: 74, nome: 'Love', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular74.jpg', categoria: 'feminino' },
    { id: 75, nome: 'Miss', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular75.jpg', categoria: 'feminino' },
    { id: 76, nome: 'Liberté', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular76.jpg', categoria: 'feminino' },
    { id: 77, nome: 'La Lune', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular77.jpg', categoria: 'feminino' },
    { id: 78, nome: 'E`eternite For Woman', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular78.jpg', categoria: 'feminino' },
    { id: 79, nome: 'Joy', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular79.jpg', categoria: 'feminino' },
    { id: 80, nome: 'Je T`aime', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular80.jpg', categoria: 'feminino' },
    { id: 81, nome: 'Hypnotize', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular81.jpg', categoria: 'feminino' },
    { id: 82, nome: 'Intense Girl', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular82.jpg', categoria: 'feminino' },
    { id: 83, nome: 'Green Apple', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular83.jpg', categoria: 'feminino' },
    { id: 84, nome: 'Glamour Sexy', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular84.jpg', categoria: 'feminino' },
    { id: 85, nome: 'Happiness', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular85.jpg', categoria: 'feminino' },
    { id: 86, nome: 'Gd', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular86.jpg', categoria: 'feminino' },
    { id: 87, nome: 'Gabriela', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular87.jpg', categoria: 'feminino' },
    { id: 88, nome: 'Famous For Her', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular88.jpg', categoria: 'feminino' },
    { id: 89, nome: 'Exclusive Code', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular89.jpg', categoria: 'feminino' },
    { id: 90, nome: 'Euphoric', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular90.jpg', categoria: 'feminino' },
    { id: 91, nome: '521 Woman', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular91.jpg', categoria: 'feminino' },
    { id: 92, nome: 'Be You', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular92.jpg', categoria: 'feminino' },
    { id: 93, nome: 'Alen', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular93.jpg', categoria: 'feminino' },
    { id: 94, nome: 'Felina', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular94.jpg', categoria: 'feminino' },
    { id: 95, nome: 'Elegance Blue', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular95.jpg', categoria: 'feminino' },
    { id: 96, nome: 'Caricia', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular96.jpg', categoria: 'feminino' },
    { id: 97, nome: 'Fiore', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular97.jpg', categoria: 'feminino' },
    { id: 98, nome: 'Db', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular98.jpg', categoria: 'feminino' },
    { id: 99, nome: 'Delíce', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular99.jpg', categoria: 'feminino' },
    { id: 100, nome: 'Clô', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular100.jpg', categoria: 'feminino' },
    { id: 101, nome: 'All Sexes', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular101.jpg', categoria: 'feminino' },
    { id: 102, nome: 'Aguas Marinhas', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular102.jpg', categoria: 'feminino' },
    { id: 103, nome: 'Attractive', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular103.jpg', categoria: 'feminino' },
    { id: 104, nome: '521 Vip', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular104.jpg', categoria: 'feminino' },
    { id: 105, nome: 'Caricia', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular105.jpg', categoria: 'feminino' },
    { id: 106, nome: 'Change', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular106.jpg', categoria: 'feminino' },
    { id: 107, nome: 'Addictive', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular107.jpg', categoria: 'feminino' },
    { id: 108, nome: '521 Rose Vip', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular108.jpg', categoria: 'feminino' },
    { id: 109, nome: 'Queen', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular109.jpg', categoria: 'feminino' },
    { id: 110, nome: 'Emoções', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular110.jpg', categoria: 'feminino' },
    { id: 111, nome: 'Clássica', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular111.jpg', categoria: 'feminino' },
    { id: 112, nome: 'Ak Woman', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular112.jpg', categoria: 'feminino' },
    { id: 113, nome: 'Elegance', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular113.jpg', categoria: 'feminino' },
    { id: 114, nome: 'Bouquet', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular114.jpg', categoria: 'feminino' },
    { id: 115, nome: 'Chic Woman', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular115.jpg', categoria: 'feminino' },
    { id: 116, nome: 'Classic', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular116.jpg', categoria: 'feminino' },
    { id: 117, nome: '521 Young For Her', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular117.jpg', categoria: 'feminino' },
    { id: 118, nome: 'Summer Flowers', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular118.jpg', categoria: 'feminino' },
    { id: 119, nome: 'Magic Candy', preco: 50.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular119.jpg', categoria: 'feminino' },
    { id: 120, nome: 'Escandalosa', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular120.jpg', categoria: 'feminino' },
    { id: 121, nome: 'Db Romântica', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular121.jpg', categoria: 'feminino' },
    { id: 122, nome: 'Intense Girl', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular122.jpg', categoria: 'feminino' },
    { id: 123, nome: 'Athena', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular123.jpg', categoria: 'feminino' },
    { id: 124, nome: '521 Vip Rosé Woman', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular124.jpg', categoria: 'feminino' },
    { id: 125, nome: 'Chic Woman', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular125.jpg', categoria: 'feminino' },
    { id: 126, nome: 'Gd', preco: 225.00, descricao: 'Perfume feminino, Uma fragrância elegante.', imagem: 'imagens/celular126.jpg', categoria: 'feminino' },
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

    // Elementos para a funcionalidade de pesquisa
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const listaResultadosPesquisaDiv = document.createElement('div');
    listaResultadosPesquisaDiv.classList.add('lista-resultados-pesquisa', 'oculto');
    document.querySelector('main').insertBefore(listaResultadosPesquisaDiv, document.getElementById('produtos-masculinos'));

    // Função para renderizar os produtos na página inicial por categoria (com funcionalidade de pesquisa)
    function renderizarProdutos(categoria, searchTerm = '') {
        listaProdutosMasculinosDiv.innerHTML = '';
        listaProdutosFemininosDiv.innerHTML = '';
        listaProdutosCapilaresDiv.innerHTML = '';
        listaProdutosNutraceuticosDiv.innerHTML = '';
        listaResultadosPesquisaDiv.innerHTML = '';

        const produtosFiltrados = produtos.filter(produto => {
            const nomeMinusculo = produto.nome.toLowerCase();
            const descricaoMinuscula = produto.descricao.toLowerCase();
            const categoriaMinuscula = produto.categoria.toLowerCase();
            const termoMinusculo = searchTerm.toLowerCase();

            return (
                nomeMinusculo.includes(termoMinusculo) ||
                descricaoMinuscula.includes(termoMinusculo) ||
                categoriaMinuscula.includes(termoMinusculo)
            );
        });

        if (searchTerm && produtosFiltrados.length > 0) {
            // Display search results
            produtosFiltrados.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
                produtoDiv.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}" data-id="${produto.id}">
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <button class="adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
                `;
                listaResultadosPesquisaDiv.appendChild(produtoDiv);
            });
            listaResultadosPesquisaDiv.classList.remove('oculto');
            produtosMasculinosSection.classList.add('oculto');
            produtosFemininosSection.classList.add('oculto');
            produtosCapilaresSection.classList.add('oculto');
            produtosNutraceuticosSection.classList.add('oculto');
        } else if (searchTerm && produtosFiltrados.length === 0) {
            listaResultadosPesquisaDiv.innerHTML = '<p>Nenhum produto encontrado.</p>';
            listaResultadosPesquisaDiv.classList.remove('oculto');
            produtosMasculinosSection.classList.add('oculto');
            produtosFemininosSection.classList.add('oculto');
            produtosCapilaresSection.classList.add('oculto');
            produtosNutraceuticosSection.classList.add('oculto');
        } else {
            // Render products by category as before
            produtosFiltrados.forEach(produto => {
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
            listaResultadosPesquisaDiv.classList.add('oculto');
            // Show the relevant category section if no search term
            if (categoria === 'masculino') produtosMasculinosSection.classList.remove('oculto');
            if (categoria === 'feminino') produtosFemininosSection.classList.remove('oculto');
            if (categoria === 'capilar') produtosCapilaresSection.classList.remove('oculto');
            if (categoria === 'nutraceutico') produtosNutraceuticosSection.classList.remove('oculto');
        }

        // Adicionar evento de clique para ver detalhes do produto
        const produtosImagens = document.querySelectorAll('.lista-produtos-masculinos .produto img, .lista-produtos-femininos .produto img, .lista-produtos-capilares .produto img, .lista-produtos-nutraceuticos .produto img, .lista-resultados-pesquisa .produto img');
        produtosImagens.forEach(img => {
            img.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.dataset.id);
                mostrarDetalhesProduto(produtoId);
            });
        });

        // Adicionar evento de clique para adicionar ao carrinho na listagem
        const botoesAdicionar = document.querySelectorAll('.lista-produtos-masculinos .adicionar-carrinho, .lista-produtos-femininos .adicionar-carrinho, .lista-produtos-capilares .adicionar-carrinho, .lista-produtos-nutraceuticos .adicionar-carrinho, .lista-resultados-pesquisa .adicionar-carrinho');
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
            listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
    });

    finalizarCompraBtn.addEventListener('click', () => {
        if (carrinho.length > 0) {
            homeSection.classList.add('oculto');
            headerSection.classList.remove('oculto');
            carrinhoSection.classList.add('oculto');
            checkoutSection.classList.remove('oculto');
            listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
        } else {
            alert('Seu carrinho está vazio.');
        }
    });

    voltarParaProdutosBtn.addEventListener('click',  (e) => {
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
    });

    voltarParaCarrinhoBtn.addEventListener('click', () => {
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        carrinhoSection.classList.remove('oculto');
        checkoutSection.classList.add('oculto');
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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
        listaResultadosPesquisaDiv.classList.add('oculto'); // Hide search results
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

    // Event listener para o botão de pesquisa
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        renderizarProdutos('', searchTerm);
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        // Hide all category sections when showing search results
        produtosMasculinosSection.classList.add('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
    });

    // Optional: You can also trigger the search when the user presses Enter in the input field
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // Modificar os event listeners para os links da página inicial para limpar qualquer pesquisa anterior
    goMasculinoLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.classList.add('oculto');
        headerSection.classList.remove('oculto');
        produtosMasculinosSection.classList.remove('oculto');
        produtosFemininosSection.classList.add('oculto');
        produtosCapilaresSection.classList.add('oculto');
        produtosNutraceuticosSection.classList.add('oculto');
        renderizarProdutos('masculino');
        listaResultadosPesquisaDiv.classList.add('oculto');
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
        listaResultadosPesquisaDiv.classList.add('oculto');
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
        listaResultadosPesquisaDiv.classList.add('oculto');
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
        listaResultadosPesquisaDiv.classList.add('oculto');
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
    listaResultadosPesquisaDiv.classList.add('oculto'); // Initially hide search results
    atualizarCarrinho();
});