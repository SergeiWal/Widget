import { useEffect, useState } from "react";
import ItemsViewList from "./components/itemViewsList";
import WidgetModalContainer from "./containers/modalContainer";

const LOCAL_STORAGE_KEY = "ResArr";

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
      <div className="select_items_list">
        <ItemsViewList arr={resultArray} onRemove={onRemoveHandler} />
      </div>
      <WidgetModalContainer
        resultArray={resultArray}
        onSave={saveResultHandler}
      />
    </div>
  );
}
