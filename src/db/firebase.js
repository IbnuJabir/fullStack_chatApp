import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-app-5b0fd.firebaseapp.com",
  projectId: "chat-app-5b0fd",
  storageBucket: "chat-app-5b0fd.appspot.com",
  messagingSenderId: "88782793471",
  appId: "1:88782793471:web:67504da7750121807b7aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage()
export const provider = new GoogleAuthProvider()
// export default db

export function SignUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export function LogIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}
export function LogOut(){
    toast.warn("A user Logged out")
    return signOut(auth)
}

// Custom Hook
export function UseAuth(){
    const [currentUser, setCurrentUser] = useState()
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>setCurrentUser(user))
        return unsub
    }, [])
    return currentUser;
}

// Storage
export async function Upload(file, setLoading, currentUser) {
    const fileRef = ref(storage, currentUser.uid, '.png')

    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file)
    
    const photoURL = await getDownloadURL(fileRef)
    updateProfile(currentUser, {photoURL: photoURL})

    setLoading(false)

    alert('profile uploaded successfully')
} 