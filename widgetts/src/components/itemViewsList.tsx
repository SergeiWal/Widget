import React from "react";
import STYLES from "../constants/styles";
import ItemView from "./itemView";

type ItemViewsListProps = {
  arr: Array<string>;
  onRemove: (item: string) => void;
};

export default function ItemsViewList({ arr, onRemove }: ItemViewsListProps) {
  return (
    <div>
      <ul style={STYLES.itemViewList}>
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
