import "./Athorization.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Input from "../../component/Input/Input";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //for show password
  const [showPassword, setShowPassword] = useState(false);
  //  this field is required
  // please enter a valid email
  //messages
  const [erros, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  
  

  const chageUserData = (e) => {
    if (e.target.name === "emailORusername") {
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setValid({
        ...valid,
        email:
          emailRegex.test(e.target.value) || nameRegex.test(e.target.value),
      });

      setUserData({
        ...userData,
        email: e.target.value,
      });
      setErrors({
        ...erros,
        emailError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : !valid.email && "please enter a valid email or username",
      });
    } else if (e.target.name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; ///[\D]*.{8,}/;
      setShowPassword((prev) => !prev);
      setValid({
        ...valid,
        password: passRegex.test(e.target.value),
      });
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setErrors({
        ...erros,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !valid.password &&
              "please enter at least 8 characters containes special characters",
      });
    }
  };
  const submitData = (e) => {
    e.preventDefault();

    if ((!erros.emailError && !erros.usernameError) || !erros.passwordError) {
      e.preventDefault();
    }
  };

  

 
  return (
    <div className="tabbar col-12 " style={{"margin":"auto"}}>
      <div className="row">
            <div className="col-8 col-sm-4">
            </div>
            <div className="col-8 col-sm-4">
            <form className="form-horizontal" onSubmit={(e) => submitData(e)}>
                <div className="form-group text-center">
                    <label id="reg"><h1>Login</h1></label>
                    <hr />
                </div>
                    <Input 
                    text="Email or Username"
                    label="emailORusername"
                    onChange={(e) => chageUserData(e)}
                    error={erros.emailError}
                    />

                    <Input 
                    text="Password"
                    label="password"
                    onChange={(e) => chageUserData(e)}
                    error={erros.passwordError}
                    />
                    
                    <br />
                <button id ="reg" type="submit" className="submitRegister btn btn-default form-control">Login</button>
                 {/* <!-- 2 column grid layout --> */}
                 <div className=" mb-4 d-flex justify-content-between">
                <div className="checkBox">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                      //   onChange={(e) => chageUserData(e)}
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="forgot">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <Link to="Register">Register</Link>
                </p>
              </div>

            </form>
            </div>  
            <div className="col-8 col-sm-4">
            </div>
    </div> 
           
          </div>
        
    
  );
}

export default Login;
