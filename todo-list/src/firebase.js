import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBs4lZkcDBYuCgHAhFNw_ruFk9rDfF2kc8",
    authDomain: "todo-crud-964e0.firebaseapp.com",
    projectId: "todo-crud-964e0",
    storageBucket: "todo-crud-964e0.appspot.com",
    messagingSenderId: "1034910497040",
    appId: "1:1034910497040:web:e8074855427f9f3b9f0d95"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};