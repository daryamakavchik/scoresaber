import React from "react";
import { Form } from "../form/form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserId, sendUserId } from "../services/actions/index";
import { useDispatch } from "react-redux";
import styles from "./home-page.module.css";

export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputValue = useSelector((store) => store.data.userInputValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(sendUserId(inputValue));
    navigate(inputValue);
    document.getElementById("useridform").reset();
  };

  const handleInputChange = (e) => {
    if (e.target.value.length < 17) {
      document.getElementById("submitbutton").disabled = true;
    } else {
      document.getElementById("submitbutton").disabled = false;
    }
    dispatch(setUserId(e.target.value));
  };

  return (
    <div className={styles.appcontainer}>
      <h1 className={styles.apptitle}>get song recommendations</h1>
      <h2 className={styles.apptitle}>compare to other players</h2>
      <h2 className={styles.apptitle}>and more...</h2>
      <Form
        id="userid"
        submitFunc={handleFormSubmit}
        inputChangeFunc={handleInputChange}
        text="enter your scoresaber id"
      />
    </div>
  );
}
