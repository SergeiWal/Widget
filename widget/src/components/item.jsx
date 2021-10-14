import React, { useState } from "react";
import styles from "./styles";

export default function Item(props) {
  const [isCheck, setCheck] = useState(props.check);
  const isDisabled = props.isDisabled;
  return (
    <div style={styles.item}>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!isCheck);
          props.isChecked(isCheck);
        }}
        checked={!isCheck ? "checked" : ""}
        disabled={isDisabled && isCheck ? "disabled" : ""}
      />
      {props.content}
    </div>
  );
}
