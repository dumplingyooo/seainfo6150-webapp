import React from "react";
import styles from "./SlugButton.module.css"

const SlugButton = (props) => {
    return (
        <html>
        <div className = {styles.line}>
            <button className = {styles.button} onClick={
                ()=>alert(`${props.slug}`)
            }>{props.buttonText}</button>
        </div>
        </html>
    );
  };

  export default SlugButton;