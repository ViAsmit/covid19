import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const initialFormData = {
    username: "",
    usernumber: "",
    name: "",
    phone: "",
    city: "",
    state: "",
  };

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.name === "" || formData.name === null)
      formData.name = "default";
    if (formData.city === "" || formData.city === null)
      formData.city = "default";
    if (formData.state === "" || formData.state === null)
      formData.state = "default";
    formData.phone.length === 10
      ? axiosInstance
          .post("", {
            name: formData.name,
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            resources: "default",
            special_remarks: "default",
          })
          .then((res) => {
            console.log(res);
            history.push("/list/");
          })
          .catch((err) => {
            console.log("***");
            console.log(err.response.data);
            err.response.data["phone"] && alert(err.response.data["phone"]);
          })
      : alert("Please enter number with 10 digits!");
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        <fieldset>
          <label>
            <p>Your Name</p>
            <input type="text" onChange={handleChange} name="username" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Your number</p>
            <input type="number" onChange={handleChange} name="usernumber" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Name</p>
            <input type="text" onChange={handleChange} name="name" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Number</p>
            <input type="number" onChange={handleChange} name="phone" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>City</p>
            <input type="text" onChange={handleChange} name="city" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>State</p>
            <input type="text" onChange={handleChange} name="state" />
          </label>
        </fieldset>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default Form;
