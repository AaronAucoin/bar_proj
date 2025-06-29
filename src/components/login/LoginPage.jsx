import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="page-wrapper">
      <div className="login-box">
        <div className="Title">
            Login
        </div>
        <div className="Bottom">
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
