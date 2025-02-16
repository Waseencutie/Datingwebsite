// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCU_618YJ8a1PjTyAhGpRW6h-kwBFxJT3w",
    authDomain: "lovehive-c22cb.firebaseapp.com",
    projectId: "lovehive-c22cb",
    storageBucket: "lovehive-c22cb.appspot.com",
    messagingSenderId: "869625534585",
    appId: "1:869625534585:web:12798580584ba7755ba8",
    measurementId: "G-4K1WMKJ2JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
export function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account Created Successfully!");
            window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
