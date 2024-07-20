
import { useEffect, useState } from "react";
import { ColourOption } from "../interfaces/interfaces";
import styles from "./Results.module.scss";

const SERVER = process.env.REACT_APP_BASE_URL;

export default function SystemSize() {

  

  useEffect(() => {
    // fetchData();
  }, []);


  return (
    <div className={styles["results"]}>
      <div className={styles["results-container"]}>
        <div className={styles["header"]}>
          <div className={styles["navbar"]}>
            <p className={styles["link"]} style={{ fontWeight: "bolder", color: "#14b8a6" }}>System size</p>
            <p className={styles["link"]}>Simulation parameters</p>
            <p className={styles["link"]}>Results</p>
          </div>
            <h1 style={{ marginBottom: 10 }}>Energy streams</h1>
      </div>
      </div>
    </div>
  );
}