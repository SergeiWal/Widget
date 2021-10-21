import Item from "./item";
import STYLES from "../constants/styles";
import { ModalContext } from "../containers/modalContainer";
import { ItemsListProps } from "../types/types";

export default function ItemsList({ onAdd, onRemove }: ItemsListProps) {
  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <ModalContext.Consumer>
      {({ baseArr, selectedArr, disabled, filterChange }) => {
        return (
          <ul style={STYLES.ul}>
            {baseArr.map((item, index) => {
              return (
                <li key={index}>
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
        );
      }}
    </ModalContext.Consumer>
  );
}
