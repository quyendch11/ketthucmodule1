class Animal{
    name;
    weight;
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName (name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        console.log(" i'm " + this.name +" "+  this.weight + " kg")
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName('elephent');
objAnimal1.getName();
objAnimal1.setWeight(45.6);
objAnimal1.getWeight();
console.log(objAnimal1.toString());
let objAnimal2 = new Animal();
objAnimal2.setName('mouse');
objAnimal2.getName();
console.log(objAnimal2.toString())