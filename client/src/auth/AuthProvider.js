import { Children, useState } from "react";
import { createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export const AuthContext = createContext()

export default function AuthProvider({children}){
       const [user, setUser] = useState(null)


       const contextValue = {

        user
       }



    return(
       <AuthContext.Provider value={contextValue}>
         {children}
       </AuthContext.Provider>


    )
}