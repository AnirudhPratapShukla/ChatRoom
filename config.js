var firebaseConfig = {
    apiKey: "AIzaSyBi7c2U58RpFXjh5hdi011_svehyrJFIw0",
    authDomain: "my-chat-room-337a8.firebaseapp.com",
    databaseURL: "https://my-chat-room-337a8.firebaseio.com",
    projectId: "my-chat-room-337a8",
    storageBucket: "my-chat-room-337a8.appspot.com",
    messagingSenderId: "650921427183",
    appId: "1:650921427183:web:dc29c7050fc9ef35479b1a"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();