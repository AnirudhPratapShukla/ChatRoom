$("#createNewSessionSubmitButton").click(function() {
    var name = document.getElementById("createNewSessionName").value;
    console.log(name);
    createSession(name);

});


$("#joinSessionSubmitButton").click(function() {
    var jname = document.getElementById("joinSessionName").value;
    var jid = document.getElementById("joinSessionId").value;
    console.log(jname);
    console.log(jid);
    joinSession(jname);
    joinSession(jid);
});


// Hide to the joinSession  

$("#createNewSessionPage").ready(function() {
    $("#joinSessionPage").hide(1000)
});



$("#createNewSessionSubmitButton").click(function() {
    $("#createNewSessionPage").hide(0);
    $("#joinSessionPage").show(0);
});


$("#joinSessionPageButton").click(function() {
    $("#createNewSessionPage").hide(0);
    $("#joinSessionPage").show(0);
});

$("#createSessionPageButton").click(function() {
    $("#joinSessionPage").hide(0);
    $("#createNewSessionPage").show(0);
});