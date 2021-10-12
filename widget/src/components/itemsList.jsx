import React, { useState } from "react";
import Item from "./item";

const ulStyle = {
  listStyle: "none",
  padding: "0px",
};

const itemsArray = [];
for (let i = 1; i < 11; ++i) {
  itemsArray.push(`Item ${i}`);
}

function deleteItem(arr, element) {
  const index = arr.findIndex((item) => {
    return element === item;
  });
  if (index == -1) {
    return false;
  }
  arr.splice(index, 1);
  return true;
}

export default function ItemsList(props) {
  const [selectedArr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <div>
      <ul style={ulStyle}>
        {itemsArray.map((item, index) => {
          return (
            <li key={index}>
              <Item
                content={item}
                isChecked={(state) => {
                  if (state) {
                    if (count < 3) {
                      setCount((prev) => (prev += 1));
                      selectedArr.push(item);
                    }
                  } else {
                    if (deleteItem(selectedArr, item)) {
                      console.log(item);
                      setCount((prev) => (prev -= 1));
                    }
                  }
                  console.log(selectedArr);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
