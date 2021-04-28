import React, { useState, useEffect, Fragment } from "react";
import axiosInstance from "../../axios";
function Searchby() {
  const [data, setData] = useState({
    shops: [],
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      setData({
        shops: res.data,
      });
      console.log("====================================");
    });
  }, [setData]);

  console.log(data);

  const handleChange = (e) => {
    console.log(data);
  };

  const handleSubmit = (e) => {
    console.log(data);
  };
    return (
      <Fragment>
        
        <form>
        <fieldset>
          <label>
            <p>City</p>
            <input
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
              type="text"
              onChange={handleChange}
              name="city"
            />
          </label>
        </fieldset>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br/>
        <br/>
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
