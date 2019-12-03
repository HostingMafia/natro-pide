import React, { useState } from "react";

const Selector = props => {
  const [pideList, setPideList] = useState([
    "Kaşarlı Pide",
    "Kıymalı Pide",
    "Domatesli Pide",
    "Suşili Pide"
  ]);

  return (
    <div>
      <label for="pideSelection">Pide: </label>
      <select {...props} name="pideSelection">
        {pideList.map((pide, pideIndex) => (
          <option>{pide}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
