import React from "react";
import styles from "../routes/Home.module.css";

function Loading() {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  )
}

export default Loading;