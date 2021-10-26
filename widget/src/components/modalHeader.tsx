import STYLES from "../constants/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../context/appContext";
import { ModalHeaderProps } from "../types/types";

export default function ModalHeader({ title }: ModalHeaderProps) {
  const { handleClose } = useAppContext();

  return (
    <div style={STYLES.tools}>
      <div>{title}</div>
      <Button onClick={handleClose}>
        <CloseIcon style={STYLES.icons} />
      </Button>
    </div>
  );
}
