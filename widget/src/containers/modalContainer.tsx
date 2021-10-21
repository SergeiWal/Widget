import React, { useCallback, useEffect, useState } from "react";
import WidgetModal from "../components/widgetModal";
import { FILTER_ITEMS } from "../constants/modal";
import {
  ModalContextType,
  ModalContainerProps,
  FilterItemValue,
} from "../types/types";
import { MAX_COUNT, DEFAULT_CONTEXT_VALUE } from "../constants/container";

const START_ITEMS_AMOUNT: number = 1000;
//const ITEMS_AMOUNT: number = 100000;

const itemsArray: Array<string> = [];
for (let i: number = 1; i <= START_ITEMS_AMOUNT; ++i) {
  itemsArray.push(`Item ${i}`);
}

export const ModalContext = React.createContext<ModalContextType>(
  DEFAULT_CONTEXT_VALUE
);

export default function WidgetModalContainer({
  onSave,
  resultArray,
}: ModalContainerProps) {
  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState([...itemsArray]);
  const [selectedArr, setSelectedArr] = useState([...resultArray]);
  const [count, setCount] = useState(resultArray.length);
  const [disabled, setDisabled] = useState(
    selectedArr.length === MAX_COUNT ? true : false
  );
  const [searchlineValue, setSearchlineValue] = useState("");
  const [filterValue, setFilterValue] = useState(FILTER_ITEMS[0].value);
  const [filterChange, setFilterChange] = useState(false);

  const concatFilterSearchHandler = useCallback((): void => {
    let arr;
    arr = filter(filterValue);
    arr = search(arr, searchlineValue);
    setFilterChange((prev) => !prev);
    setBaseArr([...arr]);
  }, [filterValue, searchlineValue]);

  useEffect(() => {
    concatFilterSearchHandler();
  }, [concatFilterSearchHandler]);
  useEffect(() => {
    setDisabled(selectedArr.length === MAX_COUNT ? true : false);
    setCount(selectedArr.length);
  }, [selectedArr]);

  const handleOpen = (): void => {
    setOpen(true);
    setBaseArr([...itemsArray]);
    setSelectedArr([...resultArray]);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const onAddHandler = (item: string): void => {
    if (count < MAX_COUNT) {
      setSelectedArr([...selectedArr, item]);
      setCount((prev) => prev + 1);
      if (count >= 2) setDisabled(true);
    }
  };
  const onRemoveHandler = (item: string): void => {
    const id = selectedArr.findIndex((element) => element === item);
    if (id !== -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      setCount((prev) => prev - 1);
      setDisabled(false);
    }
  };
  const search = (arr: Array<string>, value: string): Array<string> => {
    return arr.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  };
  const filter = (value: FilterItemValue): Array<string> => {
    return itemsArray.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
  };

  const ModalContextValue: ModalContextType = {
    baseArr,
    selectedArr,
    count,
    disabled,
    filterChange,
    handleOpen,
    handleClose,
    onSave,
    setSearchlineValue,
    setFilterValue,
    onAddHandler,
    onRemoveHandler,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      <WidgetModal open={open} />
    </ModalContext.Provider>
  );
}
