document.getElementById('login').addEventListener('click' , async() => {
    try{
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
 
        let userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

        console.log(userCredential);
        window.location.href = '/home.html'
    } catch (error){
        console.log(error.message);
    }
})