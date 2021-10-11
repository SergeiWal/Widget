import React from "react";
import Button from "@mui/material/Button";
import WidgetModal from "./w_modal";

function App(props) {
  return (
    <div className="widget">
      <div>Selected items:</div>
      <div className="select_items_list">Select items list</div>
      <WidgetModal />
    </div>
  );
}

export default App;
