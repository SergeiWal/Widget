import React, { useState } from "react";

const style = {
  background: "#ccc",
  width: "200px",
  margin: "10px 0px",
};

export default function Item(props) {
  let [check, setCheck] = useState(true);
  return (
    <div style={style}>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check);
        }}
      />
      Item {props.number}
    </div>
  );
}
