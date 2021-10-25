import { useEffect, useState } from "react";
import STYLES from "../constants/styles";
import { ItemProps } from "../types/types";

const arrOnChange = (arr: Array<string>, item: string): boolean => {
  return arr.indexOf(item) !== -1 ? false : true;
};

export default function Item({
  selectedArr,
  isDisabled,
  content,
  filterChange,
  isChecked,
}: ItemProps) {
  const [isCheck, setCheck] = useState(arrOnChange(selectedArr, content));

  useEffect(() => {
    setCheck(arrOnChange(selectedArr, content));
  }, [filterChange, selectedArr, content]);

  const onChangeHandler = (): void => {
    setCheck(!isCheck);
    isChecked(isCheck);
  };

  return (
    <div style={STYLES.item}>
      <input
        type="checkbox"
        onChange={onChangeHandler}
        checked={!isCheck}
        disabled={isDisabled && isCheck}
      />
      {content}
    </div>
  );
}
