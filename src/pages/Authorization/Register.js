import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import './Athorization.css'
import Input from "../../component/Input/Input";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
function Register() {
  const history = useHistory();
  
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
    username: "",
    type:"",
    confirmpass: "",
  });
  //for show password
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordR, setShowPasswordR] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePasswordR = () => {
    setShowPasswordR(!showPasswordR);
  };
  // please enter a valid email
  //messages
  const [errosRegister, setErrorsRegister] = useState({
    emailError: "",
    passwordError: "",
    usernameError: "",
    confirmpassError: "",
  });

  const [validRegister, setValidRegister] = useState({
    email: true,
    password: true,
    usernameError: true,
    confirmpassError: true,
  });

  
  const chageUserRegister = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      setValidRegister({
        ...validRegister,
        email: emailRegex.test(e.target.value),
      });

      setUserRegister({
        ...userRegister,
        email: e.target.value,
      });
      setErrorsRegister({
        ...errosRegister,
        emailError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : !validRegister.email ? "please enter a valid email"
            : !(localStorage.getItem(userRegister.email)) && "This email is already sign up before",
      });

    } else if(e.target.name === "type"){
      setUserRegister({
        ...userRegister,
        typr: e.target.value,
      });
    } 
    else if (e.target.name === "password") {
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; 
      // setShowPasswordRegister((prev) => !prev);
      setValidRegister({
        ...validRegister,
        password: passRegex.test(e.target.value),
      });
      setUserRegister({
        ...userRegister,
        password: e.target.value,
      });
      setErrorsRegister({
        ...errosRegister,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !validRegister.password &&
              "please enter at least 8 characters containes special characters",
      });
    } else if (e.target.name == "username") {
      const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setUserRegister({
        ...userRegister,
        username: e.target.value,
      });
      setValidRegister({
        ...validRegister,
        username: nameRegex.test(e.target.value),
      });
      setErrorsRegister({
        ...errosRegister,
        usernameError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : e.target.value.length < 3
            ? "Enter at least three characters"
            : !validRegister.username && "please enter a valid name",
      });
    } else {
      setUserRegister({
        ...userRegister,
        confirmpass: e.target.value,
      });

      setErrorsRegister({
        ...errosRegister,
        confirmpassError:
          e.target.value != userRegister.password && "Doesn't match password",
      });
    }
  };

  const submitRegister = (e) => {
    e.preventDefault();

    if (
      !errosRegister.emailError ||
      !errosRegister.usernameError ||
      !errosRegister.passwordError ||
      !errosRegister.confirmpassError
    ) {
      e.preventDefault();
      localStorage.setItem(userRegister.email, JSON.stringify(userRegister))
      history.push('/Login');
    }
  };

  return (
    <div classNameName="tabbar col-6">
      
          <div className="row ">
            <div className="col-5 col-sm-4">
            </div>
            <div className="col-5 col-sm-4 bg-light my-5">
            <form className="form-horizontal " onSubmit={(e) => submitRegister(e)}>
                <div className="form-group text-center">
                    <label id="reg"><h1>Register</h1></label>
                    <hr />
                </div>
                    <Input 
                    text="Email"
                    label="email"
                    type="email"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.emailError}
                    />

                    <Input 
                    text="Username"
                    label="username"
                    type="text"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.usernameError}
                    />

                    <div className="form-group mb-3">
                        <label for="password" className="d-flex justify-content-start">Who are you:</label>
                        {/* <input type="text" className="form-control" id="password" /> */}
                        <select className="form-select" aria-label="Default select example" > 
                            <option value="Customer" name="type">Customer</option>
                            <option value="Company"  name="type">Company</option>

                        </select>
                    </div>

                    <Input 
                    text="Password"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={(e) => chageUserRegister(e)}
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={handleTogglePassword}
                    error={errosRegister.passwordError}
                    />
                    
                    <Input 
                    text="Repeat password"
                    label="confirmpassword"
                    type={showPasswordR ? 'text' : 'password'}
                    onChange={(e) => chageUserRegister(e)}
                    icon={showPasswordR ? faEyeSlash : faEye}
                    onClick={handleTogglePasswordR}
                    error={errosRegister.confirmpassError}
                    />
                    
                    <br />
                <button id ="reg" type="submit" className=" btn form-control" style={{"backgroundColor":"#FF5A5F"}}>Register</button>
                <div className="d-flex justify-content-start">
                  {/* <!-- Simple link --> */}
                  you have already an account?
                  <Link to="Login">Login</Link>
                </div>
            </form>
            </div>  
            <div className="col-5 col-sm-4">
                
            </div>
    </div>  
        
    </div>
  );
}

export default Register;
