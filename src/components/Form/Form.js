import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    username: "",
    usernumber: "",
    name: "",
    phone: "",
    city: "",
    state: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    console.log(e.target);
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post("", {
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
      })
      .then((res) => {
        history.push("/list/");
      });
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        <fieldset>
          <label>
            <p>Your Name</p>
            <input
              username="name"
              type="text"
              onChange={handleChange}
              name="username"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Your number</p>
            <input
              userNumber="name"
              type="number"
              onChange={handleChange}
              name="usernumber"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Name</p>
            <input
              supplier="name"
              type="text"
              onChange={handleChange}
              name="name"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Number</p>
            <input
              supplierNumber="name"
              type="number"
              onChange={handleChange}
              name="phone"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>City</p>
            <input
              city="name"
              type="text"
              onChange={handleChange}
              name="city"
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>State</p>
            <input
              state="name"
              type="text"
              onChange={handleChange}
              name="state"
            />
          </label>
        </fieldset>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
