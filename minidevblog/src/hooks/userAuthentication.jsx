import { db } from'../firebasee/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { useState, useEffect }from 'react'

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState (fal)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return 
        }
    }

    async function createUser(data){
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, {
                displayName:data.displayName
            })

            setLoading(false)

            return user
        }catch(error){
            console.log(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error,message.include("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if (error,message.include("email-already")){
                systemErrorMessage = "E-mail já exixte em nossa base de autenticação."
            }else{
                systemErrorMessage = "Ocorreu um erro tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = () =>{
        checkIfIsCancelled()
        signOut(auth)
    }

    const login = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        }catch(error){
            console.error(error.message)
            console.table(typeof error.massage)

            let systemErrorMessage

            if(error,message.include("invalid-login-creadentials")){
                systemErrorMessage = "Esse usuaria esta cadastrado."
            }else if (error,message.include("wrong-password")){
                systemErrorMessage = "Há erro com suas credenciais."
            }else{
                systemErrorMessage = "Ocorreu um erro tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}