import logo from "./logo.svg";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "rsuite";

function App() {
  
  const [progress, setProgress] = useState(0);
  const [screen, setScreen] = useState(1);
  const [radioInputsSelected, setRadioInputsSelected] = useState(new Set());
  const [selectInputsSelected, setSelectInputsSelected]=useState(new Set());
  const [textInputChanged, setTextInputChanged] = useState(new Set());
  const numInputs = 6;

  //  const handleInputChange = () => {
  //     const textInputs = document.querySelectorAll("input[type='text']");
  //     const filledTextInputs = Array.from(textInputs).filter(
  //       (input) => input.value.trim() !== ""
  //     ).length;

  //     const totalradioInputs = document.querySelectorAll("input[type='radio']");
  //     const radioInputs = document.querySelectorAll("input[type='radio']:checked");
  //     const filledRadioInputs = Array.from(radioInputs).length;

  //     const totalInputs = textInputs.length + totalradioInputs.length/2;
  //     const filledInputs = filledTextInputs + filledRadioInputs;

  //     const calculatedProgress = (filledInputs / totalInputs) * 100;
  //     setProgress(calculatedProgress);

  //   };

  const handleInputChange = (e) => {
    console.log(e);

    const progressIncrement = 100 / numInputs;
  
    // If it's a text input and hasn't been changed yet, update the progress
    if (e.target.type === "text") {
      if (!textInputChanged.has(e.target.id)) {
        setProgress(progress + progressIncrement);
        setTextInputChanged((prev) => new Set(prev).add(e.target.id));
      }
    }
  
    // If it's a radio input and has not already been selected, update the progress
    if (e.target.type === "radio") {
      if (!radioInputsSelected.has(e.target.name)) {
        setProgress(progress + progressIncrement);
        setRadioInputsSelected((prev) => new Set(prev).add(e.target.name));
      }
    }
    if (e.target.tagName === "SELECT") {
      if (!selectInputsSelected.has(e.target.name)) {
        console.log('hello');
        setProgress(progress + progressIncrement);
        setSelectInputsSelected((prev) => new Set(prev).add(e.target.name));
      }
    }
  };

  useEffect(() => {
    if (progress >= 50) {
      setScreen(2);
    }
  }, [progress]);

  const onProgressSwitch=ev=>{
    setProgress(0);
    setScreen(1);
    setRadioInputsSelected(new Set());
    setSelectInputsSelected(new Set());
    setTextInputChanged(new Set());
  }
  
  return (
    <>
      {screen === 1 && (
        <div className="container-page">
          <div className="heading">
            <h2>Driving License Renewal</h2>
          </div>

          <div className="container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="container-heading">
              <h4 style={{ color: "red" }}>Let's get Started !</h4>
              <p>Add your details (As per your registered records)</p>
            </div>
            <div>
              <label htmlFor="name" className="label-bold label-left">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label-bold label-left">
                Nature of Driving License
              </label>
              <button>
                <input
                  type="radio"
                  id="private"
                  name="option"
                  value="private"
                  onChange={handleInputChange}
                />
                <label htmlFor="private"> Private </label>
              </button>
              <button>
                <input
                  type="radio"
                  id="commercial"
                  name="option"
                  value="commercial"
                  onChange={handleInputChange}
                />
                <label htmlFor="commercial"> Commercial </label>
              </button>
            </div>
            <div>
              <label className="label-bold label-left">
                Type of Previous Driving License
              </label>
              <button>
                <input
                  type="radio"
                  name="option2"
                  id="paper"
                  value="Paper Driving License"
                  onChange={handleInputChange}
                />
                <label htmlFor="paper"> Paper Driving License </label>
              </button>
              <button>
                <input
                  type="radio"
                  id="smart"
                  value="Smart Driving License"
                  name="option2"
                  onChange={handleInputChange}
                />
                <label htmlFor="smart"> Smart Driving License </label>
              </button>
            </div>
            <div>
              <Button size="large" color="red" appearance="primary">
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
      {screen === 2 && (
        <div className="container-page">
          <div className="heading">
            <h2>Driving License Renewal</h2>
          </div>

          <div className="container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="container-heading">
              <h4 style={{ color: "red" }}>Let's get Started !</h4>
              <p>Add your details (As per your registered records)</p>
            </div>
            <div>
              <label htmlFor="place" className="label-bold label-left">
                Place where driving License was issued
              </label>
              <input
                id="place"
                type="text"
                placeholder="Enter Place Name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label-bold label-left">
                Issued Year of License{" "}
              </label>
              <select name="Issued Year" typeof="select" onChange={handleInputChange}>
                <option value="">Choose Issued Year of License</option>
                <option value="private">Private</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <label className="label-bold label-left">
                Types of previous Driving License
              </label>
              <select name="Expired Year" typeof="select" onChange={handleInputChange}>
                <option value="">Choose Expired Year of License</option>
                <option value="private">Private</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <Button size="large" color="red" appearance="primary" onClick={onProgressSwitch}>
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
