import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDmv4mFXqvGcIaO0QDUIxoj9A2O-8zx_bw",
  authDomain: "braulio-7-0.firebaseapp.com",
  databaseURL: "https://braulio-7-0.firebaseio.com",
  projectId: "braulio-7-0",
  storageBucket: "",
  messagingSenderId: "204041324875",
  appId: "1:204041324875:web:e820364d1b4f61658ac0ce"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;