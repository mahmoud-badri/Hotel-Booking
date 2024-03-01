import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import './Athorization.css'
import Input from "../../component/Input/Input";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Register() {
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
    username: "",
    confirmpass: "",
  });
  //for show password
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  //  this field is required
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
            : !validRegister.email && "please enter a valid email",
      });
    } else if (e.target.name === "password") {
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; 
      setShowPasswordRegister((prev) => !prev);
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
    }
  };

  return (
    <div classNameName="tabbar col-6">
      
         


          <div className="row">
            <div className="col-5 col-sm-4">
            </div>
            <div className="col-5 col-sm-4">
            <form className="form-horizontal" onSubmit={(e) => submitRegister(e)}>
                <div className="form-group text-center">
                    <label id="reg"><h1>Register</h1></label>
                    <hr />
                </div>
                    <Input 
                    text="Email"
                    label="email"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.emailError}
                    />

                    <Input 
                    text="Username"
                    label="username"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.usernameError}
                    />

                    <div className="form-group mb-3">
                        <label for="password" className="d-flex justify-content-start">Who are you:</label>
                        {/* <input type="text" className="form-control" id="password" /> */}
                        <select className="form-select" aria-label="Default select example"> 
                            <option value={1}>User</option>
                            <option value={2}>Company</option>

                        </select>
                    </div>

                    <Input 
                    text="Password"
                    label="password"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.passwordError}
                    />

                    <Input 
                    text="Repeat password"
                    label="confirmpassword"
                    onChange={(e) => chageUserRegister(e)}
                    error={errosRegister.confirmpassError}
                    />
                    
                    <br />
                <button id ="reg" type="submit" className="submitRegister btn btn-default form-control">Register</button>
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
