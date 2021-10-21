import Button from "@mui/material/Button";
import STYLES from "../../constants/styles";
import { ModalContext } from "../../containers/modalContainers";

type ModalFooterProps = {
  handleClose: () => void;
  onSave: (arr: Array<string>) => void;
};

export default function ModalFooter({ handleClose, onSave }: ModalFooterProps) {
  return (
    <div style={STYLES.tools}>
      <Button variant="contained" color="error" onClick={handleClose}>
        Cancel
      </Button>
      <ModalContext.Consumer>
        {({ selectedArr }) => {
          return (
            <Button
              variant="contained"
              onClick={() => {
                onSave(selectedArr);
                handleClose();
              }}
            >
              Save
            </Button>
          );
        }}
      </ModalContext.Consumer>
    </div>
  );
}
