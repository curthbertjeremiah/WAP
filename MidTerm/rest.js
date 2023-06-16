function average(...num){
    if(num == NaN||num<1) {
        console.log('error');
        return;
    }
    let avg = num.reduce((initial,current,index,array)=>initial+(current/array.length),0);
    console.log(avg);
}

average(a,g,c)