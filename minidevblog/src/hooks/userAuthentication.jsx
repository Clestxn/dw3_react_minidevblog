import { db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from "react"

const auth = getAuth()

export const userAuthentication =() =>{

}

async function createUser(data){

}

const logout = () =>{

}

const login = async (data) =>{

}

return {
    auth,
    error,
    loading,
    createUser,
    logout,
    login
}