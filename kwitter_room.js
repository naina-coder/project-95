 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAQ9YoxKJMc_rHDTi1WC3-rdw5zAvQQ3FU",
   authDomain: "aesthetic-school-ws.firebaseapp.com",
   projectId: "aesthetic-school-ws",
   storageBucket: "aesthetic-school-ws.appspot.com",
   messagingSenderId: "890987818456",
   appId: "1:890987818456:web:dbc912621b4a35658116ad"
 };

 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 userName = localStorage.getItem("userName");
 document.getElementById("username_update").innerHTML = "Welcome " + userName + "!";

 function addRoom() {
   getRoom = document.getElementById("addRoom").value;
   localStorage.setItem("getRoom", getRoom);

   firebase.database().ref("/").child(getRoom).update({
     purpose: "adding room name"
   });

 }

 function getData() {
   firebase.database().ref("/").on('value',
     function (snapshot) {
       document.getElementById("output").innerHTML =
         "";
       snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         Room_names = childKey;
         //Start code
         row = "<div class='room_name' id="+Room_names+ " onclick = 'redirectToRoomName(this.id)'># "+Room_names + "</div><hr>";
         
         //End code
       });
     });
 }
 getData();

 function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html"
 }