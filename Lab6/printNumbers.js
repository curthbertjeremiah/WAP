function printNumbers(x, y) {
    let counterID = setInterval(function () {
        console.log(x++);
        if (x == y+1) {
            clearInterval(counterID);
        }
    }, 1000,x,y)
}

printNumbers(5,10);