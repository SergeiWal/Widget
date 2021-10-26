import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import STYLES from "../constants/styles";
import { ItemViewProps } from "../types/types";

export default function ItemView({ content, onRemove }: ItemViewProps) {
  const onClickHandler = () => {
    onRemove(content);
  };
  return (
    <div style={STYLES.itemView}>
      <div>{content}</div>
      <div>
        <Button style={STYLES.itemViewButton} onClick={onClickHandler}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
