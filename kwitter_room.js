var firebaseConfig = {
      apiKey: "AIzaSyCO2ONB6Ir3H2E2O9Xz3lk8dmE_b_ottu0",
      authDomain: "classkwitter.firebaseapp.com",
      databaseURL: "https://classkwitter-default-rtdb.firebaseio.com",
      projectId: "classkwitter",
      storageBucket: "classkwitter.appspot.com",
      messagingSenderId: "502319638260",
      appId: "1:502319638260:web:08bf1f9e71d767aabe60a1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
