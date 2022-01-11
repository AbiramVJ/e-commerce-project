import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCNeqk2D_62K43UDAE_mz4tddz_0fOv1xA",
  authDomain: "crwn-db-22378.firebaseapp.com",
  projectId: "crwn-db-22378",
  storageBucket: "crwn-db-22378.appspot.com",
  messagingSenderId: "23990469955",
  appId: "1:23990469955:web:cb18d3fec74a170e9f1bf6",
  measurementId: "G-RH9FJX9XV1"
  };


  export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get(); // its contain new data of new auth
    console.log(snapShot);
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        console.log(userRef);

      }catch(error){
        console.log('error create user',error.message);
      }
    }

    return userRef;

  }
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


