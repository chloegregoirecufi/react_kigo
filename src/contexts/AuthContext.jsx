import { createContext, useState, useContext } from "react";
import { USER_INFOS } from "../constants/appConstant";


//creation context authentification
const AuthContext = createContext({
    userId: '',
    email: '',
    lastname:'',
    firstname:'',
    setUserId: () => {},
    setEmail: () => {},
    setLastname: () => {},
    setFirstname: () => {},
    signIn: async () => {},
    signOut: async () => {},
});

//on définit toute la mécanique de notre context
const AuthContextProvider = ({children}) => {
    const [userId, setUserId] = useState('');
    const[email, setEmail] = useState('');
    const[lastname, setLastname] = useState('');
    const[firstname, setFirstname] = useState('');

    const signIn = async (user) => {
        try {
            setUserId(user.userId)
            setEmail(user.email)
            setLastname(user.lastname)
            setFirstname(user.firstname)
            localStorage.setItem(USER_INFOS, JSON.stringify(user))
        } catch (error) {
            throw new Error(`Erreur lors de la connexion : ${error}`)
        }
    }

    const signOut = async () => {
        try {
            setUserId('')
            setEmail('')
            setLastname('')
            setFirstname('')
            localStorage.removeItem(USER_INFOS)
        } catch (error) {
            throw new Error(`Erreur lors de la connexion : ${error}`)
        }
    }

    const value = {
        userId,
        lastname,
        firstname,
        email,
        setUserId,
        setEmail,
        setLastname,
        setFirstname,
        signOut,
        signIn
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//création de notre propre hook pour utiliser le context d'authentification
const useAuthContext = () => useContext(AuthContext)

export {AuthContext, AuthContextProvider, useAuthContext}