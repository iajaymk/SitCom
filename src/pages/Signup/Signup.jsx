import './Signup.css';
import axios from 'axios'

export const Signup = () => {

  let email= ''
  let pwd=''

  const signupHandler = async () => {
    console.log(email,pwd)
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: email,
        password:pwd,
      })
      console.log(response)
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken)
    } catch (error) {
      console.log(error)
    }
  }

  const emailHandler=(e)=>{
    console.log(e)
    email = e.target.value
  }

  const pwdHandler=(e)=>{
    pwd = e.target.value
  }

  return (
    <div>
      <div className="signup-component">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <label className="signup-labels">EMAIL</label>
          <input type="email" onInput={(e)=>emailHandler(e)}/>
          <label className="signup-labels">PASSWORD</label>
          <input type="password" onInput={(e)=>{pwdHandler(e)}} />
          <button className="primary-btn my-2"
          onClick={(e)=>{signupHandler()}}>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}