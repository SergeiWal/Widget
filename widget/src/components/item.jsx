import React, { useEffect, useState } from "react";
import styles from "./styles";

export default function Item(props) {
  const selectedArr = props.selectedArr;
  const isDisabled = props.isDisabled;
  const content = props.content;
  const searchlineChange = props.searchlineChange;
  const filterChange = props.filterChange;

  const arrOnChange = () => {
    return selectedArr.indexOf(content) !== -1 ? false : true;
  };

  const [isCheck, setCheck] = useState(arrOnChange());
  useEffect(() => {
    setCheck(arrOnChange());
  }, [selectedArr, searchlineChange, filterChange]);

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
      {content}
    </div>
  );
}
