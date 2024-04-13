firebase.auth().onAuthStateChanged(async (user) =>{
    if (user){

        // signing out the user

        document.getElementById("logOut").addEventListener("click", async () => {
         try{
            await firebase.auth().signOut();
            window.location.href = "/index.html";
         } 
         catch (error){
            console.error(error.message);
         }
        });
    }
})
    