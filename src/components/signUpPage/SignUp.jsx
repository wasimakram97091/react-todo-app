import React, { useState } from "react";
import Styles from "./index.module.scss";
import PinkButton from "../../common/PinkButton";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../features/counter/authSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [signUpUserData, setSignUpUserData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [signUpError, setSignUpError] = useState({ firstNameError: "", lastNameError: "", emailError: "", passwordError: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidation = () => {
    const errors = {};

    // Validate first name (at least 4 characters)
    if (signUpUserData.firstName.length < 4) {
      errors.firstNameError = "First name must be at least 4 characters*";
    }

    if (signUpUserData.lastName.length < 4) {
      errors.lastNameError = "Last name must be at least 4 characters*";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpUserData.email)) {
      errors.emailError = "Invalid email address*";
    }

    // Validate password (at least 5 characters)
    if (signUpUserData.password.length < 5) {
      errors.passwordError = "Password must be at least 5 characters*";
    }

    setSignUpError(errors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(errors).length === 0;
  };

  const handleSignUp = () => {
    if (handleValidation()) {
      // Form is valid, proceed with sign-up
      const userData = [
        {
          firstName: signUpUserData.firstName,
          lastName: signUpUserData.lastName,
          email: signUpUserData.email,
          password: signUpUserData.password,
        },
      ];

      let existUsers = JSON.parse(localStorage.getItem("user"));

      if (existUsers) {
        // localStorage.clear("user");
        let updatedUsers = [...existUsers, ...userData];
        localStorage.setItem("user", JSON.stringify(updatedUsers));
        dispatch(userSignUp(existUsers));
      } else {
        dispatch(userSignUp(userData));
        localStorage.setItem("user", JSON.stringify(userData));
      }
      navigate("/success");
    } else {
      // Form is not valid, display error messages
      // You can also choose to display a general error message here
    }
  };

  const backToSign = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <h2>SIGN UP</h2>
            <input type="text" placeholder="First Name" value={signUpUserData.firstName} onChange={(e) => setSignUpUserData({ ...signUpUserData, firstName: e.target.value })} />
            {signUpError.firstNameError && <p className={Styles.error}>{signUpError.firstNameError}</p>}
            <br />
            <input type="text" placeholder="Last Name" value={signUpUserData.lastName} onChange={(e) => setSignUpUserData({ ...signUpUserData, lastName: e.target.value })} />
            {signUpError.lastNameError && <p className={Styles.error}>{signUpError.lastNameError}</p>}
            <br />
            <input type="email" placeholder="Email Id" value={signUpUserData.email} onChange={(e) => setSignUpUserData({ ...signUpUserData, email: e.target.value })} />
            {signUpError.emailError && <p className={Styles.error}>{signUpError.emailError}</p>}
            <br />
            <input type="password" placeholder="Password" value={signUpUserData.password} onChange={(e) => setSignUpUserData({ ...signUpUserData, password: e.target.value })} />
            {signUpError.passwordError && <p className={Styles.error}>{signUpError.passwordError}</p>}
            <PinkButton onClick={handleSignUp}>Create Account</PinkButton>
            <div className={Styles.main__container__content__p}>
              <p>
                Already have an Account ? <span onClick={backToSign}>Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
