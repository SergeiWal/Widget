import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import STYLES from "../constants/styles";
import { useAppContext } from "../context/appContext";
import ModalHeader from "./modalHeader";
import ModalFilters from "./modalFilters";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";

export default function WidgetModal() {
  const { open, handleOpen, handleClose } = useAppContext();

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
}
