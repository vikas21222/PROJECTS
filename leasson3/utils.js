
export function wait(ms){
    return new Promise(resolve =>(setTimeout(resolve, ms)));
}

export function add(a,b){
    return a+b;
}

