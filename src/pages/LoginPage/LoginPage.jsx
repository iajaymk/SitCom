import { Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';

export const LoginPage = () => {

  let email=''
  let pwd = ''

  const loginHandler = async () => {
    console.log(email, pwd)
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: pwd,
      })
      console.log(response)
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken)
      localStorage.setItem('user',JSON.stringify(response.data.foundUser))
    } catch (error) {
      console.log(error)
    }
  }

  const emailHandler = (e) => {
    console.log(e)
    email = e.target.value
  }

  const pwdHandler = (e) => {
    pwd = e.target.value
  }

  return (
    <div className="login-component">
      <div className="login-container">
        <h1>LOGIN</h1>
        <label className="login-labels">EMAIL</label>
        <input
          type="email"
          onInput={(e) => {
            emailHandler(e)
          }}
        />
        <label className="login-labels">PASSWORD</label>
        <input
          type="password"
          onInput={(e) => {
            pwdHandler(e)
          }}
        />
        <button className="primary-btn my-2"
          onClick={(e)=>{loginHandler()}}
        >LOGIN</button>
        <Link to="/signup" className="forgot-pwd">
          Create a New Account?
        </Link>
      </div>
    </div>
  )
}