import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import App from "./components/PhoneBook/App";
import ThemeContext from "./components/theme/ThemeContext";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);
