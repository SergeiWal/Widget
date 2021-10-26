import Item from "./item";
import STYLES from "../constants/styles";
import { useAppContext } from "../context/appContext";
import { ItemsListProps } from "../types/types";

export default function ItemsList({
  baseArr,
  onAdd,
  onRemove,
}: ItemsListProps) {
  const { selectedArr, disabled, filterChange } = useAppContext();

  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <div style={STYLES.itemList}>
      <ul style={STYLES.ul}>
        {baseArr.map((item) => {
          return (
            <li key={item}>
              <Item
                content={item}
                isDisabled={disabled}
                selectedArr={selectedArr}
                filterChange={filterChange}
                isChecked={(check) => isCheckedHandler(check, item)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
