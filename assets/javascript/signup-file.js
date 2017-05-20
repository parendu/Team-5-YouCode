//  Initialize Firebase;
var config = {
    apiKey: "AIzaSyDPuoLjJiafrM6GYOf-sllWt92WA_0OlF0",
    authDomain: "youcode-f343d.firebaseapp.com",
    databaseURL: "https://youcode-f343d.firebaseio.com",
    projectId: "youcode-f343d",
    storageBucket: "youcode-f343d.appspot.com",
    messagingSenderId: "261028005312"
};
firebase.initializeApp(config);
var database = firebase.database();


//sign-up new user
$("#submit").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // //captured data from Add Train form
    var email = $("#email-id").val();
    var password = $("#pwd-id").val();
    console.log(email);
    console.log("hello" + email + "|" + password);

    //add data to firebase database
    var newUser = {
        email: email,
        password: password

    };
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

}); //onclick button

//existing user login
$("#login").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // //captured data from Add Train form
    var email = $("#email-id").val();
    var password = $("#pwd-id").val();
    console.log(email);
    console.log("hello" + email + "|" + password);

    //add data to firebase database
    var newUser = {
        email: email,
        password: password

    };

    //get user provider data
    //
    var user = firebase.auth().currentUser;

    if (user != null) {
        user.providerData.forEach(function(profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
});


//sign-out 
$("#sign-out").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

});
