import { useEffect, useState } from "react";
import ItemsViewList from "./components/itemViewsList";
import ModalState from "./components/modalState";
import { LOCAL_STORAGE_KEY } from "./constants/app";

const initFromLocalStorage = (): Array<string> => {
  const localItem: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
  return localItem && localItem.length > 0 ? localItem.split(",") : [];
};

export default function App() {
  const [resultArray, setResultArray] = useState(initFromLocalStorage());

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, resultArray.join(","));
  }, [resultArray]);

  const saveResultHandler = (arr: Array<string>): void => {
    setResultArray(arr);
  };

  const onRemoveHandler = (item: string): void => {
    const id = resultArray.findIndex((element) => element === item);
    if (id !== -1) {
      resultArray.splice(id, 1);
      setResultArray([...resultArray]);
    }
  };

  return (
    <div className="widget">
      <div>Selected items:</div>
      <div>
        <ItemsViewList arr={resultArray} onRemove={onRemoveHandler} />
      </div>
      <ModalState resultArray={resultArray} onSave={saveResultHandler} />
    </div>
  );
}
