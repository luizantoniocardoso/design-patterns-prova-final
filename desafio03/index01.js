// exemplo Do O no solid 

class Bird {
    move() {
      throw new Error("Método move() não implementado.");
    }
}
  
class Sparrow extends Bird {
    move() {
      console.log("O pardal está voando!");
    }
}
  
class Penguin extends Bird {
    move() {
      console.log("O pinguim está nadando!");
    }
}
  
function fazerPássaroSeMover(bird) {
    bird.move();
}

const sparrow = new Sparrow();
fazerPássaroSeMover(sparrow);

const penguin = new Penguin();
fazerPássaroSeMover(penguin); 