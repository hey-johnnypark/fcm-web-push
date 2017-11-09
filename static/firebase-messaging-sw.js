importScripts("https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js")



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
console.log("Settled up SW: " + messaging)
