import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBUnzhwaZlYyU79CsJdE60fEMUeoR1Gu0s",

    authDomain: "react-coderhouse-70f3a.firebaseapp.com",
  
    projectId: "react-coderhouse-70f3a",
  
    storageBucket: "react-coderhouse-70f3a.appspot.com",
  
    messagingSenderId: "512837172329",
  
    appId: "1:512837172329:web:9181e5cae3f378f4ac36f8"
  
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){
    
    return firebase.firestore(app)
}
