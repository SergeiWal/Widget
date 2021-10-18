import React from "react";
import Item from "./item";
import styles from "./styles";

export default function ItemsList(props) {
  const itemsArray = props.array;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  const selectedArr = props.selectedArr;
  const disabled = props.disabled;
  const searchlineChange = props.searchlineChange;
  const filterChange = props.filterChange;

  return (
    <ul style={styles.ul}>
      {itemsArray.map((item, index) => {
        return (
          <li key={index}>
            <Item
              content={item}
              isDisabled={disabled}
              selectedArr={selectedArr}
              searchlineChange={searchlineChange}
              filterChange={filterChange}
              isChecked={(check) => {
                if (check) {
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
