
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBuWzExCdjXNw6exEkIMDgaiT_cnzqHA_c",
  authDomain: "lets-chat-web-app-2a6f7.firebaseapp.com",
  projectId: "lets-chat-web-app-2a6f7",
  storageBucket: "lets-chat-web-app-2a6f7.appspot.com",
  messagingSenderId: "607625585221",
  appId: "1:607625585221:web:fe6ba899bf21093595792c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);  

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
}
function getData() {
  Room_name = room_name;
 
console.log("Room Name- ", Room_name);
row= "<div class = 'room_name' id=" + Room_name + "onclick= 'redirectToRoomName(this.id)'> #"+Room_name+ "</div><hr>";
document.getElementById("output").innerHTML+= row;
 
 };
getData();
function redirectToRoomName(name) {
  console.log(name);  
  localStorage.setItem("room_name", name);
  window.location = "firebase.html";
}





