var config = {
    apiKey: "AIzaSyCNpTWMv3JKhycjKx-SPULYnZNy1h3LySw",
    authDomain: "personal-website-e0a28.firebaseapp.com",
    databaseURL: "https://personal-website-e0a28.firebaseio.com",
    projectId: "personal-website-e0a28",
    storageBucket: "",
    messagingSenderId: "1025900880812"
  };
  firebase.initializeApp(config);
  var db = firebase.database().ref();

  console.log("public.js is loaded");

  $("#submitButton").on("click", function(event) {
    event.preventDefault();
    console.log("database");

    var commentName = $("#commentName").val().trim();
    var commentEmail = $("#commentEmail").val().trim();
    var commentText = $("#commentTextArea").val().trim();

    db.push({
        name: commentName,
        email: commentEmail,
        commentText: commentText,
    });
  });