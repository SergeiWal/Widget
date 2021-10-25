import Item from "./item";
import STYLES from "../constants/styles";
import { useModalContext } from "./modalState";
import { ItemsListProps } from "../types/types";
import { List } from "@mui/material";

export default function ItemsList({
  baseArr,
  onAdd,
  onRemove,
}: ItemsListProps) {
  const { selectedArr, disabled, filterChange } = useModalContext();

  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <div style={STYLES.itemList}>
      <List style={STYLES.ul}>
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
      </List>
    </div>
  );
}
