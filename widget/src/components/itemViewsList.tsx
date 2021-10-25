import STYLES from "../constants/styles";
import ItemView from "./itemView";
import { ItemViewsListProps } from "../types/types";

export default function ItemsViewList({ arr, onRemove }: ItemViewsListProps) {
  return (
    <div>
      <ul style={STYLES.itemViewList}>
        {arr.map((item) => {
          return (
            <li key={item}>
              <ItemView content={item} onRemove={onRemove} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
