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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}