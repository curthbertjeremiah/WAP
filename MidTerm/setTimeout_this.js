let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
user.sayHi();
setTimeout(()=>user.sayHi.apply(user),2000);