import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./display.js";

function App() {
  const [state, setState] = useState({
    check0: " ",
    check1: " ",
    check2: " ",
  });
  const [previous, setPrevious] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState({
    file: " ",
  });
  const [radio, setRadio] = useState("");
  const [check, setCheck] = useState("");

  const changeHandlername = (e) => {
    setName(e.target.value);
  };

  const changeHandleremail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const changeHandlerimage = (e) => {
    // setImage(e.target.files[0]);
    const [file] = e.target.files;
    console.log(file);
    setImage(URL.createObjectURL(file));
  };

  const changeHandlerradio = (e) => {
    e.preventDefault();
    //setRadio(e.target.value);
    if (e.target.value === "male") {
      setState({
        ...state,
        radio1: e.target.value,
      });
      setRadio(state.radio1);
    } else {
      setState({
        ...state,
        radio2: e.target.value,
      });
      setRadio(state.radio2);
    }
    console.log(radio);
  };

  let values = [];
  const changeHandlercheck1 = (e) => {
    let checkboxes = document.getElementsByName("skills");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
        values.push(checkboxes[i].value + "        ");
      }
      setCheck(values);
    }
  };

  let file = " ";
  const submitHandler = (e) => {
    e.preventDefault();
    let display_values = [name, email, image, radio, check];
    let newPrevious = [display_values, ...previous];
    setPrevious(newPrevious);
    let randomString = Math.random().toString(36);
    let checkboxes = document.getElementsByName("skills");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
        checkboxes[i].checked = false;
      }
    }
    setName("");
    setEmail("");
    setState({
      theInputKey: randomString,
      radio1: " ",
      radio2: " ",
      check0: " ",
      check1: " ",
      check2: " ",
    });
  };

  const ResetHandler = (e) => {
    window.location.reload();
  };

  return (
    <>
      <center className="title">Registration Form</center>
      <div className="grid-box">
        <form className="first_grid_item">
          <div className="container">
            <div className="flex-box">
              <p>Name</p>
              <input
                type="text"
                className="input_box"
                name="name"
                maxLength="20"
                value={name}
                onChange={changeHandlername}
              />
            </div>
            <div className="flex-box">
              <p>Email</p>
              <input
                type="email"
                className="input_box"
                name="email"
                value={email}
                maxLength="30"
                onChange={changeHandleremail}
              />
            </div>

            <div className="flex-box">
              <p>Image</p>
              <div className="image">
                <input
                  type="file"
                  key={state.theInputKey || ""}
                  name="photo"
                  className="input_box-2"
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={changeHandlerimage}
                  id="file_button"
                />
              </div>
            </div>
            <div className="flex-box">
              <label>Gender</label>
              <div className="gender">
                <p>
                  <input
                    type="radio"
                    onChange={changeHandlerradio}
                    key={state.radio1 || ""}
                    name="gender"
                    value="male"
                  />
                  Male
                </p>
                <p>
                  <input
                    type="radio"
                    onChange={changeHandlerradio}
                    name="gender"
                    key={state.radio2 || ""}
                    value="female"
                  />
                  Female
                </p>
              </div>
            </div>
            <div className="flex-box">
              <label>Skills</label>
              <div className="skills">
                <label>
                  <input
                    type="checkbox"
                    key={state.check0 || ""}
                    onChange={changeHandlercheck1}
                    name="skills"
                    value="HTML"
                  />
                  HTML
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={changeHandlercheck1}
                    name="skills"
                    key={state.check1 || ""}
                    value="CSS"
                  />
                  CSS
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={changeHandlercheck1}
                    name="skills"
                    key={state.check2 || ""}
                    value="Javascript"
                  />
                  Javascript
                </label>
              </div>
            </div>
            <center>
              <button className="btn-1 btn" onClick={submitHandler}>
                submit
              </button>
              <button className="btn-2 btn" onClick={ResetHandler}>
                Reset
              </button>
            </center>
          </div>
        </form>
        <Display previous={previous} />
      </div>
    </>
  );
}

export default App;
