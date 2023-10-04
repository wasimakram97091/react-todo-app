import React from "react";
import Styles from "./index.module.scss";
import PinkButton from "../../common/PinkButton";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <p>
              Account Created <i className="fa-solid fa-check"></i>
            </p>
            <PinkButton onClick={handleToLogin}>
              <i className="fa-solid fa-arrow-left"></i> Back to Login
            </PinkButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
