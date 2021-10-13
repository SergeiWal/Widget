import React, { useContext, useState } from "react";
import { itemsContext } from "./app";
import Item from "./item";
import styles from "./styles";

export default function ItemsList(props) {
  const [count, setCount] = useState(0);
  const itemsArray = props.array;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;

  return (
    <ul style={styles.ul}>
      {itemsArray.map((item, index) => {
        return (
          <li key={index}>
            <Item
              content={item}
              isChecked={(check) => {
                if (check) {
                  setCount((prev) => (prev += 1));
                  onAdd(item);
                } else {
                  onRemove(item);
                }
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
