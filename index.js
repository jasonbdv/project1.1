// Document object

let animal = {kind: "Mammal", type:"Dog", breed:"Golden Retriever"};

let arr = [this.kind, this.type, this.breed];

let displayAnimal = function(kind, type, breed){
    document.write(`kind: ${this.kind}, type: ${this.type}, breed: ${this.breed}`);
}

displayAnimal.apply(animal, arr);