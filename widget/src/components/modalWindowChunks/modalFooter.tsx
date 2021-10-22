import Button from "@mui/material/Button";
import STYLES from "../../constants/styles";
import { useModalContext } from "../../containers/modalContainer";

export default function ModalFooter() {
  const { selectedArr, handleClose, onSave } = useModalContext();

  return (
    <div style={STYLES.tools}>
      <Button variant="contained" color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          onSave(selectedArr);
          handleClose();
        }}
      >
        Save
      </Button>
    </div>
  );
}
