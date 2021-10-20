import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider , onAuthStateChanged, signOut} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

// initializeFirebase
initializeFirebase();

const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true);
//   console.log(user);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const singInUseingGoogle = ()=>{
     return signInWithPopup(auth, googleProvider)
      
     
      .catch((error) => {
          setError(error.message);
        })
        .finally(()=> setIsLoading(false));
  }

   const singInUseingGithub = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
          setUser(result.user)
          
          
          //   const user = result.user
            // console.log(user)s
        })
        .catch((error) => {
            setError(error.message)
          });
        
   }


  useEffect( ()=>{
     const unsubscribed = onAuthStateChanged(auth,(user)=>{
          if (user){
              // console.log('inside state change',user)
              setUser(user)
          }
          setIsLoading(false);
      });
      return() => unsubscribed;
  },[]);

  const logOut = () =>{
      setIsLoading(true)
      signOut(auth)
      .then(()=>{
          setUser({})
      .finally(()=> setIsLoading(false));
      })
  }
  return{
      user,
      isLoading,
      error,
      singInUseingGoogle,
      singInUseingGithub,
      logOut
  }
};


export default useFirebase;