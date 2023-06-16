function askPassword(ok, fail){
   
    const password = "rockstar";
    if(password === "rockstar"){
        ok();
    } else {
        fail();
    }
}

const user = {
    name: 'John',
    loginOk: function(){
        console.log(`${this.name} logs in!`);
    },
    loginFail: function(){
        console.log(`${this.name} Failed..........`);
    }
}

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user), () =>user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () =>user.loginFail.apply(user));
askPassword(() => user.loginOk(user), () =>user.loginFail(user));
// 1. let res1 = user.loginOk.call(user);
// 2. let res2 = user.loginFail.callser);
// 3. askPassword(res1, res2);
