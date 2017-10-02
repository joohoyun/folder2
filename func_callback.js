function login(cb){
    //do something
    cb();
}

function cb(){
    console.log('You have logged in')
}

login(cb);