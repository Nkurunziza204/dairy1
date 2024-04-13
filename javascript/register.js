document.getElementById ("register").addEventListener("click",async() => {
    try{   
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        // let username = document.getElementById('username').value
  
        

        await firebase.auth().createUserWithEmailAndPassword(email, password);
//     let userCredential = await firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
//     //let user = userCredential.user;

// await userCredential.user.updateProfile({
//     displayName: username
    
// })

// let userId = userCredential.user.uid

// await firebase.firestore().collection('users').doc(userId).set({
//     email,
//     username,
//     userId
// })



// await firebase.firestore().collection('users').doc(userId).set({
//     email,
//     username,
//     userId,
//     dairy
    
// })

// console.log(userCredential);
document.getElementById('create').innerHTML = "Account Created"
window.location.href = '/home.html'
} catch (error) {

    // console.log(error.code);
    console.log(error.message);
}
});