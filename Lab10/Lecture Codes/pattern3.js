class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }
}

module.exports = new Person('Pattern3 : new Person');