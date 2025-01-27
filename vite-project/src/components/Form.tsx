import React, { useState } from "react";

interface FormProps {
  onFormSubmit: (formInfo: { activityName: string; location: string; description: string; date: string }) => void;
}

function Form({ onFormSubmit }: FormProps) {
  const [error, setError] = useState<string>(""); // State for error message

  function GetAndSendData() {
    // Query the elements
    const activityName = document.querySelector("[name='activityName']") as HTMLInputElement;
    const location = document.querySelector("[name='location']") as HTMLInputElement;
    const description = document.querySelector("[name='description']") as HTMLInputElement;
    const date = document.querySelector("[name='date']") as HTMLInputElement;

    // Check if any input is null or empty
    if (
      !activityName ||
      !location ||
      !description ||
      !date ||
      !activityName.value ||
      !location.value ||
      !description.value ||
      !date.value
    ) {
      setError("Please fill out all fields."); // Set error message if form is incomplete
      return;
    }

    // Clear any existing error message
    setError("");

    // Store as an object if everything is entered
    const formInfo = {
      activityName: activityName.value,
      location: location.value,
      description: description.value,
      date: date.value,
    };
    console.log("Form data is complete", formInfo);

    // Submit form to the parent
    onFormSubmit(formInfo);

    // Empty inputs
    activityName.value = "";
    location.value = "";
    description.value = "";
    date.value = "";
  }

  return (
    <div>
      <p>Activity</p>
      <input name="activityName" placeholder="Enter activity name" />
      <p>Location</p>
      <input name="location" placeholder="Enter location" />
      <p>Description</p>
      <input name="description" placeholder="Enter description" />
      <p>Date</p>
      <input name="date" placeholder="Enter date" />
      <br />
      <br />
      <button onClick={GetAndSendData}>Add</button>
      {error && <p className="error-text" style={{ color: "red" }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default Form;
