
import { useEffect, useState } from "react";
import styles from "./SystemSize.module.scss";

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
            <h1 style={{ marginBottom: 20 }}>System size</h1>
            {/* <div className={styles["container"]}> */}
              {/* <h2>System size</h2> */}
              <form id="glassForm">
                <div className={styles["input-group"]}>
                    <label >Compressor size [kW]</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Cold storage temperature [C]</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Cold storage size [L]</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Hot storage temperature [C]</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Hot storage size [L]</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Project name</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-group"]}>
                    <label >Description</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                {/* <button type="submit">Submit</button> */}
              </form>
            {/* </div> */}

            <div className="d-grid">
                <button className={styles["btn-primary"]} type="button">Save</button>
            </div>
      </div>
      </div>
    </div>
  );
}