import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ItemsList from "./itemsList";
import Item from "./item";
import ItemView from "./itemsView";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const tools = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const iconStyle = {
  color: "black",
};

const input = {
  fontSize: "18px",
  height: "10px",
  padding: "0px",
};

const itemsList = {
  height: "200px",
  scrollBehavior: "smooth",
};

export default function WidgetModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box sx={style}>
          <div style={tools}>
            <div className="headerTitle">Dialod title</div>
            <div className="headerButton">
              <Button onClick={handleClose}>
                <CloseIcon style={iconStyle} />
              </Button>
            </div>
          </div>
          <div style={tools}>
            <div className="searchline">
              <TextField
                id="outlined-basic"
                label="Search ..."
                variant="outlined"
                size="small"
              />
            </div>
            <div className="filterline">
              <TextField
                id="outlined-basic"
                label="No filter"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div>
            <ItemsList />
          </div>
          <div className="selected_items">
            <div className="selected_header">Selected items:</div>
            <div className="selected_list"></div>
          </div>
          <div style={tools}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
