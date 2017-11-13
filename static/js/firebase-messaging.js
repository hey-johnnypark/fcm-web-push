// Initialize Firebase
var config = {
  apiKey: "AIzaSyDEQXcffTHo9WpEE2VUr-SAzp-9__JZQiw",
  authDomain: "wooning-app.firebaseapp.com",
  databaseURL: "https://wooning-app.firebaseio.com",
  projectId: "wooning-app",
  storageBucket: "wooning-app.appspot.com",
  messagingSenderId: "775890007847"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
  console.log("Permission granted")
  return messaging.getToken();
})
.then(function(token){
  console.log("Token: " + token);
})
.catch(function(err){
  console.log("Permission not granted")
})

messaging.onMessage(function(msg){
    console.dir(msg)
})
