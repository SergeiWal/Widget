import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "150px",
  background: "#ccc",
  paddingLeft: "10px",
};

export default function ItemView(props) {
  const [isSelect, setSelected] = useState(true);
  return (
    <div style={style}>
      <div className="content">{props.content}</div>
      <div className="item_btn">
        <Button
          style={{ color: "black" }}
          onClick={() => {
            setSelected(!isSelect);
          }}
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
