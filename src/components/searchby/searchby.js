import React, { useState, useEffect, Fragment } from "react";
import axiosInstance from "../../axios";
function Searchby() {
  const [formData, setFormData] = useState({ city: "", state: "" });
  const [data, setData] = useState({
    shops: [],
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      setData({
        shops: res.data,
      });
      console.log("====================================");
      console.log(data);
    });
  }, [setData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.city) {
      setData({
        shops: data.shops.filter((d) => d.city === formData.city),
      });
      console.log("===");
    } else if (formData.state) {
      setData({
        shops: data.shops.filter((d) => d.state === formData.state),
      });
    }
  };
  return (
    <Fragment>
      <form>
        <fieldset>
          <label>
            <p>City</p>
            <input type="text" onChange={handleChange} name="city" />
          </label>
        </fieldset>
        <br />
        <h1>OR</h1>
        <br />
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
        <br />
      </form>

      <h2>Oxygen Supplying Shops</h2>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>State</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.shops.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.city}</td>
              <td>{lead.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Searchby;
