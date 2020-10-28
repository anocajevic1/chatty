import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAH0NFY6yCU5JNKQ93RTpJ3xAPKbliNkqs",
  authDomain: "chatty-ace.firebaseapp.com",
  databaseURL: "https://chatty-ace.firebaseio.com",
  projectId: "chatty-ace",
  storageBucket: "chatty-ace.appspot.com",
  messagingSenderId: "978834290380",
  appId: "1:978834290380:web:aee10ff3c91be995d77469",
  measurementId: "G-WN9CWH688E"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

}

function ChatRoom() {
  
}

export default App;
