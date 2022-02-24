import React, { useState, useEffect } from "react";

const Test = () => {
  const [Q1, setQ1] = useState(0);
  const [Q2, setQ2] = useState(0);
  const changeRadioQ1 = (e) => {
    console.log(1);
  };
  const changeRadioQ2 = (e) => {
    console.log(2);
  };

  const ppap1 = (e) => {
    console.log(12222222);
  };
  const ppap2 = (e) => {
    console.log(1);
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <p>Q1: What brings you here?</p>
      <label htmlFor="asdf">
        <input
          type="radio"
          id="asdf"
          name="asdf"
          onChange={changeRadioQ1} //클릭하는순간 이녀석이 발동
        ></input>
        asdf
      </label>
      <label htmlFor="asdf3">
        <input
          type="radio"
          id="asdf3"
          name="asdf"
          onChange={changeRadioQ2}
        ></input>
        asdf2
      </label>
    </form>
  );
};

export default Test;
