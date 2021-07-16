// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuWzExCdjXNw6exEkIMDgaiT_cnzqHA_c",
    authDomain: "lets-chat-web-app-2a6f7.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2a6f7-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2a6f7",
    storageBucket: "lets-chat-web-app-2a6f7.appspot.com",
    messagingSenderId: "607625585221",
    appId: "1:607625585221:web:fe6ba899bf21093595792c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function send() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "sending message"
    });
}