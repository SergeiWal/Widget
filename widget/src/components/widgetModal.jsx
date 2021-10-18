import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ItemsList from "./itemsList";
import { MenuItem } from "@mui/material";
import ItemsViewList from "./selectedItemList";
import { filterItems } from "./filterItems";
import styles from "./styles";

const itemsArray = [];
for (let i = 1; i <= 1000; ++i) {
  itemsArray.push(`Item ${i}`);
}

export default function WidgetModal(props) {
  const onSave = props.onSave;
  const resultArray = props.resultArray;
  const maxCount = 3;

  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState([...itemsArray]);
  const [selectedArr, setSelectedArr] = useState([...resultArray]);
  const [count, setCount] = useState(resultArray.length);
  const [disabled, setDisabled] = useState(
    selectedArr.length === maxCount ? true : false
  );
  const [searchlineValue, setSearchlineValue] = useState("");
  const [filterValue, setFilterValue] = useState(filterItems[0].value);
  const [filterChange, setFilterChange] = useState(false);
  useEffect(() => {
    concatFilterSearchHandler();
  }, [searchlineValue, filterValue]);
  useEffect(() => {
    setDisabled(selectedArr.length === maxCount ? true : false);
    setCount(selectedArr.length);
  }, [selectedArr]);

  const handleOpen = () => {
    setOpen(true);
    setBaseArr([...itemsArray]);
    setSelectedArr([...resultArray]);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onAddHandler = (e) => {
    if (count < maxCount) {
      setSelectedArr([...selectedArr, e]);
      setCount((prev) => prev + 1);
      if (count >= 2) setDisabled(true);
    }
  };
  const onRemoveHandler = (e) => {
    const id = selectedArr.findIndex((item) => item === e);
    if (id !== -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      setCount((prev) => prev - 1);
      setDisabled(false);
    }
  };
  const search = (arr, value) => {
    return arr.filter((item) => item.includes(value));
  };
  const filter = (value) => {
    return itemsArray.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
  };
  const concatFilterSearchHandler = () => {
    let arr;
    arr = filter(filterValue);
    arr = search(arr, searchlineValue);
    setFilterChange((prev) => !prev);
    setBaseArr([...arr]);
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
                id="searchline"
                label="Search ..."
                variant="outlined"
                sx={{ width: "225px" }}
                size="small"
                onChange={(e) => {
                  setSearchlineValue(e.target.value);
                }}
              />
            </div>
            <div className="filterline">
              <TextField
                id="filter"
                label="Filter ..."
                variant="outlined"
                sx={{ width: "225px" }}
                size="small"
                select
                defaultValue={filterItems[0].value}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                }}
              >
                {filterItems.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div style={styles.modalRows}>
            <div style={styles.itemList}>
              <ItemsList
                array={baseArr}
                selectedArr={selectedArr}
                count={count}
                disabled={disabled}
                filterChange={filterChange}
                setCount={setCount}
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
