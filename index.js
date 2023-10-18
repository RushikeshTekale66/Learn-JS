function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registerd");
            resolve();
        }, 2000)
    })

}
function email() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email");
            resolve();
        }, 2000);
    })

}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 2000);
    })


}
function getuserdata() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("getuserdata");
            resolve();
        }, 3000);
    })
    

}
function displayuserdata() {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("displayuserdata");
            res();
        },2000);
    })
    
}

register().then(email).then(login).then(getuserdata).then(displayuserdata);

console.log("good work");