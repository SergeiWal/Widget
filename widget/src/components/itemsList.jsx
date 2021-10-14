import React, { useContext, useEffect, useState } from "react";
import { itemsContext } from "./app";
import Item from "./item";
import styles from "./styles";

export default function ItemsList(props) {
  const itemsArray = props.array;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  const selectedArr = props.selectedArr;
  const maxCount = 3;

  const [count, setCount] = useState(selectedArr.length);
  const [disabled, setDisabled] = useState(
    selectedArr.length === 3 ? true : false
  );

  return (
    <ul style={styles.ul}>
      {itemsArray.map((item, index) => {
        return (
          <li key={index}>
            <Item
              content={item}
              isDisabled={disabled}
              check={selectedArr.indexOf(item) != -1 ? false : true}
              isChecked={(check) => {
                if (check) {
                  if (count < maxCount) {
                    onAdd(item);
                    setCount(count + 1);
                  }
                  if (count >= 2) setDisabled(true);
                } else {
                  if (onRemove(item)) {
                    setCount(count - 1);
                    setDisabled(false);
                  }
                }
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
