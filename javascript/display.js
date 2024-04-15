firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {

        // signing out the user

        document.getElementById("logOut").addEventListener("click", async () => {
         try {
            await firebase.auth().signOut();
            window.location.href = "/index.html";
         } 
         catch (error) {
            console.error(error.message);
         }
        });

        // fetching userId and document
        let userId = user.uid
        let messageUri =  decodeURIComponent(window.location.search)
        let messageId = messageUri.substring(1)

        // pointing to the collection with all messages
        let selectedMessage = await firebase
        .firestore()
        .collection('DiaryEntries')
        .get()

        let content = ''

        // going through every document i firebase one at a time
        selectedMessage.forEach((message) => {
            // console.log(message)

            // capturin properties from message object from firestore
            let entryId = message.data().entry
            let messageDisplay = message.data().secretEntry
            let entryUserId = message.data().user

//check if the user who is logged in, is the same user who sent the message to firestore
            if (userId == entryUserId && messageId == entryId) {
            content += `<div class='diaryEntry'>`
            content += `<p>${messageDisplay}</p>`
             content += `</div>`   
            }
        })

        $('#secretDisplay').append(content)
    }
})
    