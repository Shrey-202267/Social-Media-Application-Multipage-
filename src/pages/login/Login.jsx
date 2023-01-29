import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { useContext } from "react";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quae
            totam iure, quaerat aperiam ea nemo dolorem, similique voluptate
            quod ipsum doloribus! Perspiciatis?
          </p>
          <span>Do you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
