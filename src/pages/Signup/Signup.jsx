import './Signup.css';

export const Signup = () => {
  return (
    <div>
      <div className="signup-component">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <label className="signup-labels">EMAIL</label>
          <input type="email" />
          <label className="signup-labels">PASSWORD</label>
          <input type="password" />
          <button className="primary-btn my-2">SIGN UP</button>
        </div>
      </div>
    </div>
  )
}