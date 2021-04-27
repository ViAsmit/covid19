import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
function List() {
  const [data, setData] = useState({
    shops: [],
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      setData({
        posts: res.data,
      });
      console.log("====================================");
      console.log(res.data);
    });
  }, [setData]);

  return (
    <div>
      <ol>
        <li>Row 1</li>
        <li>Row 2</li>
        <li>Row 1</li>
        <li>Row 2</li>
        <li>Row 1</li>
        <li>Row 2</li>
        <li>Row 1</li>
        <li>Row 2</li>
        <li>Row 1</li>
        <li>Row 2</li>
      </ol>
    </div>
  );
}

export default List;
