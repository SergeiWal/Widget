import { useEffect, useState } from "react";
import STYLES from "../constants/styles";

type ItemProps = {
  selectedArr: Array<string>;
  isDisabled: boolean;
  content: string;
  filterChange: boolean;
  isChecked: (firstParam: boolean) => void;
};

export default function Item({
  selectedArr,
  isDisabled,
  content,
  filterChange,
  isChecked,
}: ItemProps) {
  const arrOnChange = (): boolean => {
    return selectedArr.indexOf(content) !== -1 ? false : true;
  };

  const [isCheck, setCheck] = useState(arrOnChange());
  useEffect(() => {
    setCheck(arrOnChange());
  }, [selectedArr, filterChange]);

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
