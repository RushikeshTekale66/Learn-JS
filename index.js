function register(callback) {
    setTimeout(() => {
        console.log("Registerd");
        callback();
    }, 2000)
}
function email(callback) {
    setTimeout(() => {
        console.log("email");
        callback();
    }, 2000);
}
function login(callback) {
    setTimeout(() => {
        console.log("login");
        callback();
    }, 2000);

}
function getuserdata(callback) {
    setTimeout(() => {
        console.log("getuserdata");
        callback();
    }, 3000);

}
function displayuserdata() {
    console.log("displayuserdata");
}

register(() => {
    email(() => {
        login(() => {
            getuserdata(function () {
                displayuserdata();
            });

        });

    })

});


console.log("good work");