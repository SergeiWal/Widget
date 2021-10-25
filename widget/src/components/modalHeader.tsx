import STYLES from "../constants/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "./modalState";
import { ModalHeaderProps } from "../types/types";

export default function ModalHeader({ title }: ModalHeaderProps) {
  const { handleClose } = useModalContext();

  return (
    <div style={STYLES.tools}>
      <div>{title}</div>
      <Button onClick={handleClose}>
        <CloseIcon style={STYLES.icons} />
      </Button>
    </div>
  );
}
