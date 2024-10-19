# Desafio: Escrevendo as Classes de Um Jogo 🎮

Este projeto faz parte de um desafio prático da [DIO](https://www.dio.me/), onde o objetivo era criar classes para representar heróis de um jogo de aventura e implementar um método de ataque personalizado para cada tipo de herói.

## Objetivo 🎯

O objetivo deste desafio foi colocar em prática os conceitos de:
- 📦 Variáveis
- ➕ Operadores
- 🔄 Laços de repetição
- 🔀 Estruturas de decisão
- 🛠️ Funções
- 🏰 Classes e Objetos

## Requisitos 📜

A classe deve representar um herói com as seguintes propriedades:
- **nome**: o nome do herói
- **idade**: a idade do herói
- **tipo**: o tipo de herói (guerreiro, mago, monge, ninja)

Além disso, a classe deve ter um método chamado `heroAttack()` que exibe uma mensagem específica conforme o tipo do herói:
- **Mago**: "usou magia"
- **Guerreiro**: "usou espada"
- **Monge**: "usou artes marciais"
- **Ninja**: "usou shuriken"

## Estrutura do Código 💻

### Classe `Hero`

A classe `Hero` tem as seguintes propriedades e métodos:

```javascript
class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  heroAttack() {
    let attack = "";
    if (this.tipo === "Mago") {
      attack = "magia";
    } else if (this.tipo === "Guerreiro") {
      attack = "espada";
    } else if (this.tipo === "Monge") {
      attack = "artes marciais";
    } else if (this.tipo === "Ninja") {
      attack = "shuriken";
    }

    console.log(`O ${this.tipo} atacou usando ${attack}`);
  }
}

```

## Exemplo de uso 🦸‍♂️

```javascript
let selectHero = new Hero("Merlin", 526, "Mago");
selectHero.heroAttack(); // Saída: O Mago atacou usando magia
```

## Como usar 🚀
### Clone este repositório para sua máquina local:
```bash
git clone git@github.com:AndreFelipefer/Desafio-Escrevendo-as-Classes-de-Um-Jogo.git
````

### Navegue até o diretório do projeto:
```bash
cd Desafio-Escrevendo-as-Classes-de-Um-Jogo
```

Abra o projeto em seu editor de código ou execute o script diretamente em um ambiente Node.js ou navegador.

Saída Esperada 📢
Dependendo do tipo do herói, o método heroAttack() exibirá uma das seguintes mensagens:

O Mago atacou usando magia

O Guerreiro atacou usando espada

O Monge atacou usando artes marciais

O Ninja atacou usando shuriken

## Tecnologias Utilizadas 🛠️

JavaScript (ES6+)
Node.js (para executar o código localmente)
