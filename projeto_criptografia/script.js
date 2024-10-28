import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

// Gerando par de chaves (pública e privada) usando o RSA 
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // Tamanho da chave
});

// Função para criptografar a mensagem
function criptografarMensagem(mensagem) {
  const bufferMensagem = Buffer.from(mensagem, 'utf-8');
  const mensagemCriptografada = publicEncrypt(publicKey, bufferMensagem);
  return mensagemCriptografada.toString('base64');
}

// Função para descriptografar a mensagem
function descriptografarMensagem(mensagemCriptografada) {
  const bufferMensagemCriptografada = Buffer.from(mensagemCriptografada, 'base64');
  const mensagemOriginal = privateDecrypt(privateKey, bufferMensagemCriptografada);
  return mensagemOriginal.toString('utf-8');
}

export default { criptografarMensagem, descriptografarMensagem };