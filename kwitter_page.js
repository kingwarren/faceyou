//YOUR FIREBASE LINKS
const firebaseConfig = {     
       apiKey: "AIzaSyBF85xIqFlOtZaMLM2X7OR_xSRzuWxMukw",
authDomain: "faceyou-9ad48.firebaseapp.com",
databaseURL: "https://faceyou-9ad48-default-rtdb.firebaseio.com",
projectId: "faceyou-9ad48",
storageBucket: "faceyou-9ad48.appspot.com",
messagingSenderId: "979923988654",
appId: "1:979923988654:web:08c13cb977868b673fbd3f"

    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }