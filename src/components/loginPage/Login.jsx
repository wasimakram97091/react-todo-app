import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import PinkButton from "../../common/PinkButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignUp } from "../../features/counter/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // console.log(user);

  useEffect(() => {
    const allUser = localStorage.getItem("user");
    if (allUser) {
      dispatch(userSignUp(JSON.parse(allUser)));
    } else {
      console.log("user not found");
    }
  }, []);

  const handleToSignUp = () => {
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password*");
      return;
    }

    let existUser = user.find((item) => item.email === formData.email && item.password === formData.password);
    console.log(existUser);
    if (existUser) {
      navigate("/todolist", { state: existUser });
    } else {
      navigate("/error");
    }
    dispatch(userLogin(user));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          <h2>SIGN IN</h2>
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /> <br />
          <div className={Styles.main__container__content__inp}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button onClick={togglePasswordVisibility}>{!showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button>
          </div>
          {error && <p className={Styles.error}>{error}</p>}
          <PinkButton onClick={handleToSignUp}>Login</PinkButton>
          <p>
            New to here?
            <Link to="/signup">
              {" "}
              <span> Create an account</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
