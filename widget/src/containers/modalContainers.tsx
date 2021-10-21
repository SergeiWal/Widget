import React, { useEffect, useState } from "react";
import WidgetModal from "../components/widgetModal";
import { FILTER_ITEMS, FilterItemValue } from "../constants/modals";

const MAX_COUNT = 3;

const itemsArray: Array<string> = [];
for (let i: number = 1; i <= 1000; ++i) {
  itemsArray.push(`Item ${i}`);
}

type ModalProps = {
  onSave: (arr: Array<string>) => void;
  resultArray: Array<string>;
};

type ModalContextType = {
  baseArr: Array<string>;
  selectedArr: Array<string>;
  disabled: boolean;
  filterChange: boolean;
  setSearchlineValue: (value: string) => void;
  setFilterValue: (value: FilterItemValue) => void;
  onAddHandler: (item: string) => void;
  onRemoveHandler: (item: string) => void;
};

export const ModalContext = React.createContext<ModalContextType>({
  baseArr: [],
  open: false,
  selectedArr: [],
  disabled: false,
  filterChange: false,
  onSave: (arr: Array<string>) => {},
  handleOpen: () => {},
  handleClose: () => {},
  setSearchlineValue: (value: string) => {},
  setFilterValue: (value: FilterItemValue) => {},
  onAddHandler: (item: string) => {},
  onRemoveHandler: (item: string) => {},
});

export default function WidgetModalContainer({
  onSave,
  resultArray,
}: ModalProps) {
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

  useEffect(() => {
    concatFilterSearchHandler();
  }, [searchlineValue, filterValue]);
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
    return arr.filter((item) => item.includes(value));
  };
  const filter = (value: FilterItemValue): Array<string> => {
    return itemsArray.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
  };
  const concatFilterSearchHandler = (): void => {
    let arr;
    arr = filter(filterValue);
    arr = search(arr, searchlineValue);
    setFilterChange((prev) => !prev);
    setBaseArr([...arr]);
  };

  const ModalContextValue: ModalContextType = {
    open,
    baseArr,
    selectedArr,
    disabled,
    filterChange,
    handleOpen,
    handleClose,
    setSearchlineValue,
    setFilterValue,
    onAddHandler,
    onRemoveHandler,
    onSave,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      <WidgetModal />
    </ModalContext.Provider>
  );
}
