//this file will contain all the functions related to authentication
//we will use firebase for authentication
//and the app will only have login with google
import {firebaseApp} from "../config/firebase";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

//this function will be called when the user clicks on the login button
//it will open a popup window for the user to login with google
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export const login = () => {
  return signInWithPopup(auth, provider);
};

export const logout = async () => {
  const auth = getAuth(firebaseApp);
  await signOut(auth);
};

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return {user, loading, error};
};
