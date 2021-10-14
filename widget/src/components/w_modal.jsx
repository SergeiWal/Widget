import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ItemsList from "./itemsList";
import ItemsView from "./selectedItemList";
import { itemsContext } from "./app";
import ItemsViewList from "./selectedItemList";
import styles from "./styles";

const itemsArray = [];
for (let i = 1; i < 1000; ++i) {
  itemsArray.push(`Item ${i}`);
}

export default function WidgetModal(props) {
  const onSave = props.onSave;
  const resultArray = props.resultArray;

  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState(itemsArray);
  const [selectedArr, setSelectedArr] = useState([...resultArray]);

  const handleOpen = () => {
    setOpen(true);
    setSelectedArr([...resultArray]);
  };
  const handleClose = () => setOpen(false);
  const onAddHandler = (e) => {
    setSelectedArr([...selectedArr, e]);
  };
  const onRemoveHandler = (e) => {
    const id = selectedArr.findIndex((item) => item === e);
    if (id != -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      return true;
    }
    return false;
  };

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
        <Box sx={styles.modal}>
          <div style={styles.tools}>
            <div className="headerTitle">Dialod title</div>
            <div className="headerButton">
              <Button onClick={handleClose}>
                <CloseIcon style={styles.icons} />
              </Button>
            </div>
          </div>
          <div style={styles.tools}>
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
          <div style={styles.modalRows}>
            <div style={styles.itemList}>
              <ItemsList
                array={baseArr}
                selectedArr={selectedArr}
                onAdd={onAddHandler}
                onRemove={onRemoveHandler}
              />
            </div>
            <div></div>
          </div>
          <div className="selected_items">
            <div className="selected_header">Selected items:</div>
            <div className="selected_list">
              <ItemsViewList arr={selectedArr} onRemove={onRemoveHandler} />
            </div>
          </div>
          <div style={styles.tools}>
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
        </Box>
      </Modal>
    </div>
  );
}
