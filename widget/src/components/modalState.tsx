import React, { useContext, useEffect, useState } from "react";
import WidgetModal from "./widgetModal";
import { FILTER_ITEMS } from "../constants/modal";
import { ModalContextType, ModalContainerProps } from "../types/types";
import { MAX_COUNT, DEFAULT_CONTEXT_VALUE } from "../constants/container";
import { ITEMS_AMOUNT } from "../constants/app";

const ModalContext = React.createContext<ModalContextType>(
  DEFAULT_CONTEXT_VALUE
);
export const useModalContext = () => useContext(ModalContext);

const itemsArray: Array<string> = [];
for (let i: number = 1; i <= ITEMS_AMOUNT; ++i) {
  itemsArray.push(`Item ${i}`);
}

export default function ModalState({
  onSave,
  resultArray,
}: ModalContainerProps) {
  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState(itemsArray);
  const [selectedArr, setSelectedArr] = useState(resultArray);
  const [count, setCount] = useState(resultArray.length);
  const [disabled, setDisabled] = useState(selectedArr.length === MAX_COUNT);
  const [searchlineValue, setSearchlineValue] = useState("");
  const [filterValue, setFilterValue] = useState(FILTER_ITEMS[0].value);
  const [filterChange, setFilterChange] = useState(false);

  useEffect(() => {
    let arr = itemsArray.filter(
      (item, index) => index > filterValue.start - 1 && index <= filterValue.end
    );
    arr = arr.filter((item) =>
      item.toLowerCase().includes(searchlineValue.toLowerCase())
    );
    setFilterChange((prev) => !prev);
    setBaseArr(arr);
  }, [filterValue, searchlineValue]);

  useEffect(() => {
    setDisabled(selectedArr.length === MAX_COUNT);
    setCount(selectedArr.length);
  }, [selectedArr]);

  const handleOpen = (): void => {
    setOpen(true);
    setBaseArr(itemsArray);
    setSelectedArr(resultArray);
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
