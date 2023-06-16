class Person{
    constructor(name = 'Pattern4 Constructor'){
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }
}

module.exports = Person;