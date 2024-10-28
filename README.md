# Projeto de Criptografia Assimétrica com Node.js e JavaScript ![alt text](image.png)

Este projeto demonstra o uso de criptografia assimétrica em JavaScript com a biblioteca crypto do Node.js, criando uma interface web para criptografar e descriptografar mensagens. A criptografia assimétrica utiliza um par de chaves (pública e privada), permitindo que uma mensagem seja criptografada com a chave pública e descriptografada apenas com a chave privada, garantindo a segurança dos dados.

## Estrutura do Projeto ![alt text](image-1.png)

- **criptografar.html**: Página onde o usuário digita uma mensagem para criptografar. Ao enviar, o texto é criptografado.

- **descriptografar.html**: Página onde o usuário insere um texto criptografado para ver a mensagem original após descriptografar.

- **script.js**: Script Node.js que gera o par de chaves RSA e contém funções de criptografia e descriptografia.

- **server.js**: Servidor Express que fornece endpoints para criptografar e descriptografar as mensagens.

## Funcionalidades

1. **Criptografia**: A mensagem é criptografada usando a chave pública e convertida para base64 para facilitar o compartilhamento.

2. **Descriptografia**: O texto criptografado é convertido de volta à mensagem original com a chave privada.

## Como Executar

1. Instale as dependências:
   ```bash
   npm install

2. Inicie o servidor:
   ```bash
   node server.js

3. Abra os arquivos criptografar.html e descriptografar.html no navegador para interagir com o sistema.

## Tecnologias Utilizadas

- Node.js e módulo crypto
- Express para criação de servidor
- HTML e JavaScript para a interface web
