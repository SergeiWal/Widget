import React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import STYLES from "../constants/styles";

type ItemViewProps = {
  content: string;
  onRemove: (item: string) => void;
};

export default function ItemView({ content, onRemove }: ItemViewProps) {
  const onClickHandler = () => {
    onRemove(content);
  };
  return (
    <div style={STYLES.itemView}>
      <div className="content">{content}</div>
      <div className="item_btn">
        <Button style={{ color: "black" }} onClick={onClickHandler}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
