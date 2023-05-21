import { Link } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className='login-component'>
        <div className="login-container">
            <h1>LOGIN</h1>
            <label className="login-labels">EMAIL</label>
            <input type="email" />
            <label className="login-labels">PASSWORD</label>
            <input type="password" />
            <button className="primary-btn my-2">LOGIN</button>
            <Link to="/signup" className="forgot-pwd">Create a New Account?</Link>
        </div>
    </div>
  )
}