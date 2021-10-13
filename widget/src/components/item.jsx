import React, { useState } from "react";
import styles from "./styles";

export default function Item(props) {
  const [check, setCheck] = useState(true);
  return (
    <div style={styles.item}>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check);
          props.isChecked(check);
        }}
      />
      {props.content}
    </div>
  );
}
