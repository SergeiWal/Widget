import STYLES from "../../constants/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

type ModalHeaderProps = {
  title: string;
  handleClose: () => void;
};

export default function ModalHeader({
  title = "Dialog title",
  handleClose,
}: ModalHeaderProps) {
  return (
    <div style={STYLES.tools}>
      <div className="headerTitle">{title}</div>
      <div className="headerButton">
        <Button onClick={handleClose}>
          <CloseIcon style={STYLES.icons} />
        </Button>
      </div>
    </div>
  );
}
