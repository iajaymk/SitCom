import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const SecuredRoute = ({children}) => {
    const {isLoggedin} = useContext(AuthContext)
    const location = useLocation()
    return isLoggedin ? children:<Navigate to='/login' state={{from:location?.pathname}} />
    
}