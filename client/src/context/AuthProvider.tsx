import { PropsWithChildren, createContext, useState } from "react";

export interface AuthContextProps {
    auth : {
        nombre? : string,
        apellido? : string,
        token? : string
    };
    alert : {
        msg: string
    };
    handleShowAlert : (msg : string) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


const AuthProvider = ({children} : PropsWithChildren) => {

    const [alert, setAlert] = useState({
        msg : ""
    });

    const handleShowAlert = (msg: string) => {
        setAlert({
            msg
        });
        
        setTimeout(() => {
            setAlert({
                msg : ""
            })
        },3000)
    }
    
    return (
        <AuthContext.Provider
            value={{
                auth : {
                    nombre : "Eric",
                    apellido : "Mena",
                    token : "un_token"
                },
                alert,
                handleShowAlert
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;