import { createContext, useState } from "react";

export const UserContext =createContext();

export const UserProvider = ({children})=>{
    const [user , setUser]=useState(null);

    const logout =()=>{
        setUser(null);
    };
    
    const login =(name,email)=>{
        setUser({name, email});
    };

    const buttonName= "Hello";
    return(
        <UserContext.Provider value={{user,login,logout,buttonName}}>
            {children}
        </UserContext.Provider>
    );

};