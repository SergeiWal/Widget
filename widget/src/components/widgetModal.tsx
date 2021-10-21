import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import STYLES from "../constants/styles";
import { ModalContext } from "../containers/modalContainer";
import ModalHeader from "./modalWindowChunks/modalHeader";
import ModalFilters from "./modalWindowChunks/modalFilters";
import ModalBody from "./modalWindowChunks/modalBody";
import ModalFooter from "./modalWindowChunks/modalFooter";
import { WidgetModalProps } from "../types/types";

export default function WidgetModal({ open }: WidgetModalProps) {
  return (
    <ModalContext.Consumer>
      {({ handleOpen, handleClose }) => {
        return (
          <div>
            <Button onClick={handleOpen} variant="contained">
              Change
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={STYLES.modal}>
                <ModalHeader title="Dialog title" />
                <ModalFilters />
                <ModalBody />
                <ModalFooter />
              </Box>
            </Modal>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
