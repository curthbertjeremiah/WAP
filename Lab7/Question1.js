function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

// askPassword(user.loginOk, user.loginFail);
// the error is because {this.name} refers to the window when it is applied to askPassword.
// the solution would be to bind {this.name} to the user object or to use apply() or call() as shown below

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));