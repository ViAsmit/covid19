import React, { useState, useEffect, Fragment } from "react";
import axiosInstance from "../../axios";
import "./List.css";
function List() {
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

  if (data)
    return (
      <Fragment>
        <h2>Oxygen Supplying Shops</h2>
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
              <th>Resources</th>
              <th>Special Notes</th>
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
                <td>{lead.resources}</td>
                <td>{lead.special_remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  else return <div>dfff</div>;
}

export default List;
