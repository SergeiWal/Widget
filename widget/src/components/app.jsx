import React, { useEffect, useState } from "react";
import ItemsViewList from "./selectedItemList";
import WidgetModal from "./w_modal";

const resKey = "ResArr";
const initFromLocalStorage = () => {
  const localItem = localStorage.getItem(resKey);
  return localItem.length > 0 ? localItem.split(",") : [];
};

export function App(props) {
  const [resultArray, setResultArray] = useState(initFromLocalStorage());
  useEffect(() => {
    localStorage.setItem(resKey, resultArray);
  }, [resultArray]);

  const saveResultHandler = (arr) => {
    setResultArray([...arr]);
  };
  const onRemoveHandler = (e) => {
    const id = resultArray.findIndex((item) => item === e);
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
      <WidgetModal resultArray={resultArray} onSave={saveResultHandler} />
    </div>
  );
}
