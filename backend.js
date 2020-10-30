function createSession(name) {

    var sessionID = createSessionID();


    db.collection(sessionID).doc("RawData").set({
            TextCounter: 0,
            TotalParticipants: 1,
            Name: firebase.firestore.FieldValue.arrayUnion(name)
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    db.collection(sessionID).doc("Chat").set({
            ChatPattern: firebase.firestore.FieldValue.arrayUnion(""),
            DefaultText: "welcome"
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });


    db.collection(sessionID).doc(name).set({
            Text0: "welcome"
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

}

function createSessionID() {
    var d = new Date();

    var SessionID = d.getFullYear().toString() + ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1).toString() + d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();
    console.log(SessionID);
    return SessionID;
}

/* function checkUsername() {
    var createSessName = document.getElementById("createNewSessionName").value;
    var joinSessName = document.getElementById("joinSessionID").value;
    if (createSessName == joinSessName)
        console.log("Name matched");
    else
        console.log("Name doesn't match");
} */

/* function joinSession(jname, jid) {

    db.collection(jid).doc("RawData").set({
            jname: 0,
            TotalParticipants: TotalParticipants + 1
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });

    db.collection(jid).doc("name").set({
            text0 = "Plesase enter your message"
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });



} */