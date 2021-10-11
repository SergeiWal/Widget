import * as React from "react";
import Item from "./item";

const ulStyle = {
  listStyle: "none",
  padding: "0px",
};

const itemsArray = [];
for (let i = 1; i < 11; ++i) {
  itemsArray.push(<Item number={i} />);
}

export default function ItemsList(props) {
  return (
    <div>
      <ul style={ulStyle}>
        {itemsArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
