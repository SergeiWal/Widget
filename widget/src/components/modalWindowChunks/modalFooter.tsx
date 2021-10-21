import Button from "@mui/material/Button";
import STYLES from "../../constants/styles";
import { ModalContext } from "../../containers/modalContainer";

export default function ModalFooter() {
  return (
    <ModalContext.Consumer>
      {({ selectedArr, handleClose, onSave }) => {
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
      }}
    </ModalContext.Consumer>
  );
}
