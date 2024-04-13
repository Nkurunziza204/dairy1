firebase.auth().onAuthStateChanged(async (user) =>{
    if (user) {

        // logout the user

        document.getElementById("logOut").addEventListener("click", async () =>{
         try{
            await firebase.auth().signOut();
            window.location.href = "/index.html";
         } catch (error){
            console.log(error.message);
         }
        });
    
        // create diary enrty

        document.getElementById("save_entry").addEventListener("click", async () => {
            
            try {
                let save_entry = document.getElementById("save_entry").value;
                let entry = await firebase.firestore().collection("DairyEntries").doc();
                
                entry.set({
                    save_entry,
                    user: user.uid,
                    entry: entry.id
                    
                });
                // window.location.reload();
            }
            catch(error){
                console.error("Error adding enrtry:", error);
            }
        });

        // fetch all dairy entries

       let entries = await firebase.firestore().collection("DairyEntries").get();
       let content = "";

       entries.forEach((entryDoc) => {
        let entryUserId = entryDoc.data().user;
        let entryMessage = entryDoc.data().save_entry;
        let entryId = entryDoc.data().entry;

        // FETCH USER SPECIFIC DAIRY ENTRIES


        let userId = user.uid;

        if (userId == entryUserId) {
            content += `<div class='diaryEntry' onclick='navigateToDisplayPage("${entryId}")'>`;
            content += `<p>${entryMessage}</p>`;
            // content += "<p>" + entryMessage + "</p>";
            content += "</div>";

            // console.log(entryUserId);
            // console.log(entryMessage);
        }
        else{
            console.log("not your secrets");
        }
       })
       $("#entryview").append(content)
    
    Window.navigateToDisplayPage = (entryId) => {
        window.location.href = `display.html?${entryId}`;
    };
    }else{
        window.location.href = "/index.html";
    }
});










// firebase.auth().onAuthStateChanged(async (user) => {
//     if(user) {
//         document.getElementById('logout').addEventListener("click", () => {
//             firebase
//             .auth()
//             .signOut()
//             .then(() => {
//                 window.location.href ="/index.html"
//             })
//             .catch((error) => {
//                 console.log(error.message)
//             })
        
        
//         });
//     }

// document.getElementById("save").addEventListener("click",async () => {
//     let DiaryEntry = document.getElementById('content').value
//     await firebase.firestore().collection ("DiaryEntries").doc().set({
//         save,
//     user: user.uid,
// })
//  window.location.reload()
// }) 



// });



// document.getElementById('save').addEventListener("click", () => {
    
//     let dairy = document.getElementById('content').value
    
//     db.collection("users").doc("message").set({
//      message: dairy

//     })
//     .then(() => {
//         document.getElementById('message').innerHTML = "Document successfully written!"
//         // console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });

// })

