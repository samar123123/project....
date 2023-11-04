//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCPvlEi1b49evMVA5746CP6fgxom2sRg9A",
      authDomain: "kwitter-4918c.firebaseapp.com",
      databaseURL: "https://kwitter-4918c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4918c",
      storageBucket: "kwitter-4918c.appspot.com",
      messagingSenderId: "273670396124",
      appId: "1:273670396124:web:54a9e12960f22373e3bc19"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}