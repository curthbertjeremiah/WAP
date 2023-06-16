function f(m, n, l){
    if(l){
        m();
    } else {
        n();
    }
}

f(()=> console.log('Hi'),
    function(){
        console.log('Hello');
    }, ()=>{});