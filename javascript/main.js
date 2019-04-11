  

  var config = {
      apiKey: "AIzaSyATImJcNpEV5fgYSMuHfUBBTj2mlLZgB4M",
      authDomain: "webapp1-a61f0.firebaseapp.com",  
      databaseURL: "https://webapp1-a61f0.firebaseio.com",
      projectId: "webapp1-a61f0",
      storageBucket: "webapp1-a61f0.appspot.com",
      messagingSenderId: "735077960727"
    };

firebase.initializeApp(config);









function adduser(){
alert("adding user!");
var email= document.getElementById("inputEmail3").value;
var password = document.getElementById("inputPassword3").value;
firebase.auth().createUserWithEmailAndPassword(email,
password).catch(function(error) {
// Handle Errors here
var errorCode = error.code;
var errorMessage = error.message;
alert("error"+ error.message);
// ...
});
};


function signIn(){
  alert("Signing In");
  var email= document.getElementById("email1").value;
  var password = document.getElementById("password1").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      alert("Error signing in");
// Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
// ...
});
};



function signOut(){
    firebase.auth().signOut().then(function() {
      alert("Signed out!");
    }).catch(function(error) {
// An error happened.
    });
};


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
// User is signed in.
    // 
    console.log(user.toJSON());
} else {
// No user is signed in.
    // alert("user not signed in");
}
});




