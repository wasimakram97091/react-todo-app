import React from "react";
import Styles from "./index.module.scss";
import PinkButton from "../../common/PinkButton";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleToExit = () => {
    navigate("/");
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <h2>You're Logged Out</h2>
            <p>
              Thanks for Visiting{" "}
              <span>
                <i className="fa-solid fa-face-smile-beam"></i>
              </span>
            </p>
            <PinkButton onClick={handleToExit}>
              Exit <i className="fa-solid fa-right-from-bracket"></i>
            </PinkButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
