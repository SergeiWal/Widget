import React, { useState } from "react";
import ItemsViewList from "./selectedItemList";
import WidgetModal from "./w_modal";

export function App(props) {
  const [resultArray, setResultArray] = useState([]);
  const saveResultHandler = (arr) => {
    setResultArray([...arr]);
  };
  const onRemoveHandler = (e) => {
    const id = resultArray.findIndex((item) => item === e);
    if (id != -1) {
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
