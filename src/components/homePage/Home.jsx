import React from "react";
import Styles from "./index.module.scss";
import PinkButton from "../../common/PinkButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <div className={Styles.main__container__content__text}>
              <h2>Welcome to Todo List</h2>
              <div className={Styles.main__container__content__text__img}>
                <img src="https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg" alt="todo img" />
              </div>
              <Link to="/login">
                {" "}
                <PinkButton>
                  Continue <i className="fa-solid fa-arrow-right"></i>
                </PinkButton>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
