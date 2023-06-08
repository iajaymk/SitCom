import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FilterContext } from "../../context/FilterContext"

export const AccountPage = () => {
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem('user'))
    const {dispatch} = useContext(FilterContext)
    const logout = () => {
        localStorage.clear()
        navigate('/')
        dispatch({type:'RESET'})
    }
  return (
    <div>
        <div className="">{userDetails?.firstName}{userDetails?.lastName}</div>
        <div className="">{userDetails?.email}</div>
        <button onClick={(e)=>logout()}>LOGOUT</button>
    </div>
  )
}