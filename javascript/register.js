document.getElementById ("register").addEventListener("click",async() => {
    try{   
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
       

        await firebase.auth().createUserWithEmailAndPassword(email, password);

// document.getElementById('create').innerHTML = "Account Created"
window.location.href = "/home.html"
} catch (error) {
   
    console.log(error.message);
}
});