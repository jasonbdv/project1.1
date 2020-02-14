class Ibon{
    constructor(name, wingspan){
        this.name = name;
        this.wingspan = wingspan;
    }

    static lipad (distansya) {
        console.log(`Ang ${this.name} ay nakakalipad ng ${distansya} miles...`)
    }
}

let bird1 = new Ibon("Agila", 1.5);

Ibon.lipad(1000);