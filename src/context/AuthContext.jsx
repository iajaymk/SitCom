const { createContext, useState } = require("react");

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    return (
        <AuthContext.Provider value={isLoggedIn}>
            {children}
        </AuthContext.Provider>
    )
}