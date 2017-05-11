// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeB0cUPLbZ8YhhMLH3KC0gWQ4CCeDjmkA",
    authDomain: "team5project-168df.firebaseapp.com",
    databaseURL: "https://team5project-168df.firebaseio.com",
    projectId: "team5project-168df",
    storageBucket: "team5project-168df.appspot.com",
    messagingSenderId: "739426590803"
};
  firebase.initializeApp(config);

// Database reference
var database = firebase.database();


// =========================================


// Button for choosing video
$("#submitButton").on("click", function() {

  // Grabs input from user
  var userPick = $("#PLACEHOLDER").val.trim();

  // Upload data to database
  database.ref().push(userPick);
});

// =======================================


//Firebase event for addings vid History to database
    database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val();

    //variable storing
    var userName = childSnapshot.val().name;
    var userHistory = childSnapshot.val().history;

  });