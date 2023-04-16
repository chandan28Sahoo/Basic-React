import React, { useState } from "react";
function Creator() {
  const [arr, setArr] = useState(["Chandan", "Sahoo", "Shabid","Khan"]);
//   const [arr2, setArr1] = useState(["Chandan", "Sahoo", "Shabid","Khan"]);
  return (
    <div style={{ backgroundColor: "red", height: "100px", width: "700px" }}>
      {arr.map((item) => (
        <h1 style={{ color: "blue" }}>{item}</h1>
      ))}
      {/* <h1 style={{ color: "blue" }}>Chandan</h1> */}
      {/* <h1 style={{ color: "green" }}>Sahoo</h1>
      <h1 style={{ color: "blue" }}>Shabid</h1>
      <h1 style={{ color: "green" }}>Khan</h1> */}
    </div>
  );
}

export default Creator;
