import React from "react";
import Styles from "./index.module.scss";

function PinkButton({ children, onClick }) {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <button onClick={onClick}>{children} </button>
        </div>
      </div>
    </>
  );
}

export default PinkButton;
