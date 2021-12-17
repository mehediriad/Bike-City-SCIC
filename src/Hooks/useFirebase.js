import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [authErrorCode, setAuthErrorCode] = useState('');
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password , displayName) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {


          updateProfile(auth.currentUser , {
            displayName: displayName , photoURL: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
          }).then(() => {
          }).catch((error) => {
          });


          saveUserInDb(email,displayName,'POST');
            // Signed in 
            const user = userCredential.user;
            setAuthError('')
            setAuthErrorCode('')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(errorMessage)
            setAuthErrorCode(errorCode)
            // ..
          })
          .finally(()=>setIsLoading(false))

    }
    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
            
          });
          return () => unsubscribed;
    },[auth])


    useEffect(() => {
      fetch(`https://protected-mountain-42023.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user.email])

    const loginUser = (email , password ,location , history)=>{
     setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const destination = location?.state?.from || '/' ;
         history.replace(destination);
          // Signed in 
          setAuthError('')
          setAuthErrorCode('')
          const user = userCredential.user;
          // ...
          console.log(user)
          
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorMessage)
          setAuthErrorCode(errorCode)
          
      })
      .finally(()=>setIsLoading(false))
    }

    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              const user = result.user;
              saveUserInDb(user.email,user.displayName,'PUT');
              setAuthError('');
              const destination = location?.state?.from || '/';
              history.replace(destination);
          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }

    const logOut = ()=>{
         setIsLoading(true)
         signOut(auth).then(() => {
         // Sign-out successful.
         }).catch((error) => {
         // An error happened.
         })
         .finally(()=>setIsLoading(false))
         
     }
     const saveUserInDb = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://protected-mountain-42023.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }
    return{
        user,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        isLoading,
        authError,
        authErrorCode,
        logOut
    }
}
export default useFirebase;