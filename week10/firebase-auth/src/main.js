// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_PUBLIC_API_KEY,

	authDomain: import.meta.env.VITE_PUBLIC_AUTH_DOMAIN,

	projectId: import.meta.env.VITE_PUBLIC_PROJECT_ID,

	storageBucket: import.meta.env.VITE_PUBLIC_STORAGE_BUCKET,

	messagingSenderId: import.meta.env.VITE_PUBLIC_MSG_SENDER_ID,

	appId: import.meta.env.VITE_PUBLIC_APP_ID,
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("User:", user.email, "is signed in");
		return;
	}
	console.log("No user signed in");
});
document.getElementById("login-btn").onclick = () => {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			console.log("signed in:", email);
		})
		.catch((error) => {
			console.log(error);
		});
};

document.getElementById("signup-btn").onclick = () => {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			console.log("signed in:", email);
		})
		.catch((error) => {
			console.log(error);
		});
};
document.getElementById("googleSignin").onclick = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log("user:", result.user);
		})
		.catch((error) => {
			console.log(error);
		});
};
document.getElementById("signOut").onclick = () => {
	signOut(auth)
		.then(() => {
			console.log("signed out");
		})
		.catch((error) => {
			console.log(error);
		});
};
