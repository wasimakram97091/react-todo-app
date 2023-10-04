import React from "react";
import Styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function UserDetails({ name }) {
  const navigate = useNavigate();
  let currentDate;
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    currentDate = `${date} / ${month} / ${year}`;
    return currentDate;
  }
  getDate();

  const handleToLogout = () => {
    navigate("/logout");
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <i className="fa-solid fa-user"></i>
            <h2>Hello , {name} </h2>
            <p>Date : {currentDate}</p>
            <h5>
              <span onClick={handleToLogout}>
                {" "}
                LOG OUT <i className="fa-solid fa-right-from-bracket"></i>{" "}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
