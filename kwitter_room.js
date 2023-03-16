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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
