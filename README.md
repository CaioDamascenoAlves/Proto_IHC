# Sistema de Denúncia de Animais Abandonados

Este projeto é um protótipo de alta fidelidade desenvolvido utilizando React e Material-UI. Ele visa facilitar a denúncia de animais abandonados, promovendo um meio rápido e eficiente para que usuários possam reportar casos de abandono ou maus-tratos a animais diretamente pelo aplicativo. Além disso, o sistema oferece suporte à funcionalidade de câmera em dispositivos móveis, permitindo que os usuários enviem fotos como parte de suas denúncias.

## Tecnologias Utilizadas

- React
- Material-UI
- Vite
- Node.js

## Pré-requisitos

Para executar este projeto localmente, você deve ter o Node.js instalado em sua máquina. A instalação do Node.js pode ser feita através do site oficial: [https://nodejs.org/](https://nodejs.org/).

## Instalação

Clone o repositório para a sua máquina local usando:

```bash
git clone <url-do-repositorio>
```
Após clonar o repositório, navegue até a pasta do projeto e instale as dependências necessárias executando:
```bash
npm install
```

## Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Isso iniciará o servidor local na porta 5173. Você pode acessar o aplicativo navegando para http://localhost:5173 no seu navegador.

## Utilizando ngrok para Testar em Dispositivos Móveis
Para testar a funcionalidade de câmera em dispositivos móveis, você pode utilizar o ngrok para expor seu servidor local na internet. Isso permite testar o aplicativo em um dispositivo móvel sem necessidade de deploy.

Primeiro, navegue até a pasta Ngrok incluída no projeto e execute o seguinte comando:

```bash
ngrok http localhost:5173
```

O ngrok irá fornecer um domínio com certificado, tornando possível acessar seu servidor local de qualquer dispositivo. Use a URL fornecida pelo ngrok para acessar o aplicativo em seu dispositivo móvel e testar a funcionalidade de câmera.

## Contribuições
Contribuições são sempre bem-vindas! Por favor, sinta-se à vontade para abrir um pull request ou uma issue no repositório GitHub do projeto.
