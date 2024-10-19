class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  heroAttack() {
    let attack = "";
    if (this.tipo == "Mago") {
      attack = "Magia";
    } else if ((this.tipo == "Guerreiro")) {
      attack = "Espada";
    } else if ((this.tipo == "Monge")) {
      attack = "artes marciais";
    } else if ((this.tipo == "Ninja")) {
      attack = "shuriken";
    }

    console.log(`O ${this.tipo} atacou usando o ataque ${attack}`);
  }
}


let selectHero1 = new Hero("Merlin", 526, "Mago");
let selectHero2 = new Hero("Arthur", 35, "Guerreiro");
let selectHero3 = new Hero("Aang", 112, "Monge");
let selectHero4 = new Hero("Naruto", 17, "Ninja");

selectHero1.heroAttack(); 
selectHero2.heroAttack(); 
selectHero3.heroAttack(); 
selectHero4.heroAttack(); 
