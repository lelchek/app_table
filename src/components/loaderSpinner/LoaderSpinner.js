import React from "react";
import Loader from "react-loader-spinner";
import css from "./loaderSpinner.module.css";

const LoaderSpinner = () => (
  <div className={css.container}>
    <div>
      <Loader
        type="Oval"
        color="#2185d0"
        height={100}
        width={100}
        timeout={3000}
        className={css.loader}
      />
    </div>
  </div>
);

export default LoaderSpinner;
