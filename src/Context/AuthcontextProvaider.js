import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '.././Firebase_config/Firebase.confige.js'
export const UserContext = createContext()
const auth = getAuth(app)

const AuthcontextProvaider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

const login=(email,password)=>{
  setLoading(true)
return signInWithEmailAndPassword(auth,email,password)

}

const uptadeUser=(info)=>{
  setLoading(true)
   return updateProfile(auth.currentUser,info)
}



const logout=()=>{
  setLoading(true)
    return signOut(auth)
}


useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser)
        setLoading(false)
     })
     return ()=>{
        unsubscribe()
     }


},[])

  const info = {
    createUser,
    login,
    uptadeUser,
    logout,
    user,
    loading,
  }
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>
}

export default AuthcontextProvaider
