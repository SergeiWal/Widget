import React, { useContext, useState } from "react";
import { itemsContext } from "./app";
import ItemView from "./itemsView";
import styles from "./styles";

export default function ItemsViewList(props) {
  const arr = props.arr;
  const onRemove = props.onRemove;

  return (
    <div>
      <ul style={styles.itemViewList}>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              <ItemView content={item} onRemove={onRemove} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
