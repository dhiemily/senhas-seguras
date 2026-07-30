const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
if (tamanhoSenha > 1) {
// tamanhoSenha = tamanhoSenha-1;
tamanhoSenha--;// Reduz o tamanho em 1
}

numeroSenha.textContent = tamanhoSenha;// Atualiza o número na tela
geraSenha();// Gera uma nova senha com o novo tamanho
}

function aumentaTamanho() {
if (tamanhoSenha < 20) {
// tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;// Atualiza o número na tela
geraSenha();// Gera uma nova senha com o novo tamanho
}

for (let i = 0; i < checkbox.length; i++) {
checkbox[i].onclick = geraSenha;
}

geraSenha();
function geraSenha() {
let alfabeto = ''; // Armazena todos os caracteres permitidos escolhidos pelo usuário

if (checkbox[0].checked) {
alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked) {
alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked) {

alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked) {
alfabeto = alfabeto + simbolos;
}
let senha = ''; // Armazena a senha final sendo construída

for (let i = 0; i < tamanhoSenha; i++) {
let numeroAleatorio = Math.random() * alfabeto.length; // Gera número decimal entre 0 e o tamanho do alfabeto
numeroAleatorio = Math.floor(numeroAleatorio); // Arredonda o número para baixo para virar um índice válido
senha = senha + alfabeto[numeroAleatorio]; // Adiciona o caractere sorteado à senha
}

campoSenha.value = senha; // Exibe a senha final no campo de texto da tela
classificaSenha(alfabeto.length); // Chama a função para avaliar a segurança da senha
}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
console.log(entropia); // Exibe o valor do cálculo no console do navegador
forcaSenha.classList.remove('fraca', 'media', 'forte');
}