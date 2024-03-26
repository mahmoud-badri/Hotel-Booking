import "./Athorization.css";
import { useContext, useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Input from "../../component/input/Input";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LoggedInContext } from "../../Context/loggedUser";
import { useHistory } from 'react-router-dom';
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { AuthContext, AuthProvider } from "../../Context/AuthContext";
import axios from "axios";

function Login() {
  const authContext = useContext(AuthContext);

  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const isLoggedIn = authContext?.isLoggedIn;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //for show password
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
const {contextLoggedIn, setContextLoggenIn} = useContext(LoggedInContext)
let err = false

useEffect(() => {
    if (isLoggedIn) {
     history.push('/');
    }
  }, [history, isLoggedIn]);

  const submitData = async (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(userData.email)
      console.log(storedUser);
      if(storedUser){
        const user = JSON.parse(storedUser)

        if(!erros.emailError || !erros.passwordError){
          e.preventDefault()
          if(userData.email !== user.email || userData.password !== user.password){
            err=true
          }
          else{
            // localStorage.setItem("loginUser", (storedUser))
            // setContextLoggenIn(JSON.parse(storedUser))
            try {
              const response = await axios.post(
                "http://127.0.0.1:8000/api/login",
                userData
              );
              console.log(response)
              console.log(response);
              console.log(localStorage.getItem('token'));
              console.log(response.data.user);
              console.log(response.status);
              if (response.status === 200) {
                authContext?.login(response?.data?.jwt, response?.data?.user);
                localStorage.setItem("userData", JSON.stringify(response.data.user));
                history.push('/');
              } 
            } catch (error) {
              console.log(error)
                // setErrors({
                //   ...erros,
                //   emailError: "Invalid Email",
                //   passwordError: "Invalid Password",
                // });
            }
          };

        }
      } 
  
  else{
    err=true
  }
};

  


  return (
    <div className="tabbar col-12 " style={{"margin":"auto"}}>
      <div className="row">
            <div className="col-8 col-sm-4">
            </div>
            <div className="col-8 col-sm-4 bg-light my-5">
            <form className="form-horizontal" onSubmit={(e) => submitData(e)}>
            <div className={` align-items-center mb-3 pb-1`}>
                    <span className={` fw-bold mb-0 text-danger  ${err && (localStorage.getItem(userData.email)) ? "d-block" : "d-none" }`}> Error in email or incorrect password</span>
                  </div>
                <div className="form-group text-center">
                    <label id="reg"><h1>Login</h1></label>
                    <hr />
                </div>
                    <Input 
                    text="Email or Username"
                    label="emailORusername"
                    type="text"
                    onChange={(e) => chageUserData(e)}
                    error={erros.emailError}
                    />

                    <Input 
                    text="Password"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={handleTogglePassword}
                    onChange={(e) => chageUserData(e)}
                    error={erros.passwordError}
                    />
                    
                    <br />
                <button id ="reg" type="submit" className=" btn btn-default form-control" style={{"backgroundColor":"#FF5A5F"}}>Login</button>
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
