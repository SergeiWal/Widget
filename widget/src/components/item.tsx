import { useCallback, useEffect, useState } from "react";
import STYLES from "../constants/styles";
import { ItemProps } from "../types/types";

export default function Item({
  selectedArr,
  isDisabled,
  content,
  filterChange,
  isChecked,
}: ItemProps) {
  const arrOnChange = useCallback((): boolean => {
    return selectedArr.indexOf(content) !== -1 ? false : true;
  }, [selectedArr, content]);

  const [isCheck, setCheck] = useState(arrOnChange());
  useEffect(() => {
    setCheck(arrOnChange());
  }, [filterChange, arrOnChange]);

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
