import Item from "./item";
import STYLES from "../constants/styles";

type ItemsListProps = {
  itemsArray: Array<string>;
  selectedArray: Array<string>;
  disabled: boolean;
  isFilterChange: boolean;
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
};

export default function ItemsList({
  itemsArray,
  onAdd,
  onRemove,
  selectedArray,
  disabled,
  isFilterChange,
}: ItemsListProps) {
  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <ul style={STYLES.ul}>
      {itemsArray.map((item, index) => {
        return (
          <li key={index}>
            <Item
              content={item}
              isDisabled={disabled}
              selectedArr={selectedArray}
              filterChange={isFilterChange}
              isChecked={(check) => isCheckedHandler(check, item)}
            />
          </li>
        );
      })}
    </ul>
  );
}
