// Exemplo Do I do solid
class Walkable {
    walk() {
      throw new Error("Este animal não pode andar.");
    }
  }
  
  class Flyable {
    fly() {
      throw new Error("Este animal não pode voar.");
    }
  }
  
  class Swimmable {
    swim() {
      throw new Error("Este animal não pode nadar.");
    }
  }
  
  class Dog extends Walkable {
    walk() {
      console.log("O cachorro está andando.");
    }
  }
  
  class Bird extends Walkable {
    fly() {
      console.log("O pássaro está voando.");
    }
  
    walk() {
      console.log("O pássaro está andando.");
    }
  }
  
  class Fish extends Swimmable {
    swim() {
      console.log("O peixe está nadando.");
    }
  }
  
  function fazerAnimalAndar(animal) {
    animal.walk();
  }
  
  function fazerAnimalVoar(animal) {
    animal.fly();
  }
  
  function fazerAnimalNadar(animal) {
    animal.swim();
  }
  
  const dog = new Dog();
  fazerAnimalAndar(dog);
  
  const bird = new Bird();
  fazerAnimalAndar(bird); 
  fazerAnimalVoar(bird); 
  
  const fish = new Fish();
  fazerAnimalNadar(fish);
  