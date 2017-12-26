import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBYplIZS6RbULC5770tXu4GQBqjzHxizic",
    authDomain: "slide-creator.firebaseapp.com",
    databaseURL: "https://slide-creator.firebaseio.com",
    projectId: "slide-creator",
    storageBucket: "slide-creator.appspot.com",
    messagingSenderId: "1019489366872"
};

export const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export const dbProgramRef= db.ref('program');
