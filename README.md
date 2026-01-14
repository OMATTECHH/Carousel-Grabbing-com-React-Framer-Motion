🎠 Project The Framer

Um projeto visual e interativo feito com React + Vite + Framer Motion que mostra um carrossel de imagens arrastável (drag) com animações suaves e responsivas 🖱️✨

🖼️ Preview

Projeto com animações de entrada, título animado e um carrossel horizontal que pode ser arrastado com o mouse 🧲

🚀 Tecnologias usadas

⚛️ React

⚡ Vite

🎞️ Framer Motion

🎨 Tailwind CSS

🧠 JavaScript moderno (ES6+)

✨ Funcionalidades

✅ Carrossel horizontal arrastável (drag)

✅ Animação suave ao carregar a página

✅ Layout totalmente responsivo 📱💻

✅ Imagens com lazy loading para performance ⚡

✅ Cálculo automático do limite de arraste

🧠 Como funciona?

O carrossel:

Usa useRef para pegar o tamanho real do container 📏

Usa useEffect para calcular:

scrollWidth - offsetWidth


Isso define até onde o carrossel pode ser arrastado ⛓️

O Framer Motion controla:

🎯 Animações

🖱️ Drag horizontal

🧲 Limites do movimento

📁 Estrutura do projeto
src/
 ├── assets/          🖼️ Imagens do projeto
 ├── components/
 │    └── Conteudo.jsx
 ├── App.jsx
 └── main.jsx
public/
index.html

🛠️ Como rodar o projeto localmente
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

2️⃣ Entre na pasta
cd seu-repo

3️⃣ Instale as dependências
npm install

4️⃣ Rode o projeto
npm run dev

🌍 Deploy

O projeto foi publicado usando:

✅ GitHub Pages

🧩 Possíveis melhorias futuras

🔘 Adicionar botões de navegação

📱 Suporte a gestos no mobile

🔄 Autoplay opcional

🖼️ Modal ao clicar na imagem

🎛️ Indicadores de posição (bolinhas)

🧑‍💻 Autor

Projeto desenvolvido por teus 😎🔥
Com foco em estudos de animação, interação e UI moderna.

🖤 Considerações finais

Esse projeto é um ótimo exemplo de como animações bem usadas transformam uma interface simples em algo muito mais vivo ✨
React + Framer Motion é uma combinação poderosa ⚛️🎞️
