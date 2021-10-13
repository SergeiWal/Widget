import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles";

export default function ItemView(props) {
  const onRemove = props.onRemove;
  const item = props.content;
  return (
    <div style={styles.itemView}>
      <div className="content">{item}</div>
      <div className="item_btn">
        <Button
          style={{ color: "black" }}
          onClick={() => {
            onRemove(item);
          }}
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
