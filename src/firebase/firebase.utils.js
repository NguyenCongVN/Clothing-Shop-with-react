import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDTZpwxh2G7HMDUkfSxPuHYcUV7Xz2An_k",
    authDomain: "crwn-db-be1c3.firebaseapp.com",
    databaseURL: "https://crwn-db-be1c3.firebaseio.com",
    projectId: "crwn-db-be1c3",
    storageBucket: "crwn-db-be1c3.appspot.com",
    messagingSenderId: "1035061808112",
    appId: "1:1035061808112:web:0e33d02b5f09f4df316b35",
    measurementId: "G-NP4JYBQ083"
  };
firebase.initializeApp(config);

export const createUserProfile = async (userAuth , additionalData) =>
{
    if(!userAuth)
    {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try
        {
            
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log("There're err");
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;