function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function asdfunc(){
        console.log("some func")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("anon func")
    }
}