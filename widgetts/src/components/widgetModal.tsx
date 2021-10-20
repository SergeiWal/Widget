import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ItemsList from "./itemsList";
import { MenuItem } from "@mui/material";
import ItemsViewList from "./itemViewsList";
import { FILTER_ITEMS, FilterItemValue } from "../constants/modals";
import STYLES from "../constants/styles";

const MAX_COUNT = 3;

const itemsArray: Array<string> = [];
for (let i: number = 1; i <= 1000; ++i) {
  itemsArray.push(`Item ${i}`);
}

type WidgetModalProps = {
  onSave: (arr: Array<string>) => void;
  resultArray: Array<string>;
};

export default function WidgetModal({ onSave, resultArray }: WidgetModalProps) {
  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState([...itemsArray]);
  const [selectedArr, setSelectedArr] = useState([...resultArray]);
  const [count, setCount] = useState(resultArray.length);
  const [disabled, setDisabled] = useState(
    selectedArr.length === MAX_COUNT ? true : false
  );
  const [searchlineValue, setSearchlineValue] = useState("");
  const [filterValue, setFilterValue] = useState(FILTER_ITEMS[0].value);
  const [filterChange, setFilterChange] = useState(false);
  useEffect(() => {
    concatFilterSearchHandler();
  }, [searchlineValue, filterValue]);
  useEffect(() => {
    setDisabled(selectedArr.length === MAX_COUNT ? true : false);
    setCount(selectedArr.length);
  }, [selectedArr]);

  const handleOpen = (): void => {
    setOpen(true);
    setBaseArr([...itemsArray]);
    setSelectedArr([...resultArray]);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const onAddHandler = (item: string): void => {
    if (count < MAX_COUNT) {
      setSelectedArr([...selectedArr, item]);
      setCount((prev) => prev + 1);
      if (count >= 2) setDisabled(true);
    }
  };
  const onRemoveHandler = (item: string): void => {
    const id = selectedArr.findIndex((element) => element === item);
    if (id !== -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      setCount((prev) => prev - 1);
      setDisabled(false);
    }
  };
  const search = (arr: Array<string>, value: string): Array<string> => {
    return arr.filter((item) => item.includes(value));
  };
  const filter = (value: FilterItemValue): Array<string> => {
    return itemsArray.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
  };
  const concatFilterSearchHandler = (): void => {
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
        <Box sx={STYLES.modal}>
          <div style={STYLES.tools}>
            <div className="headerTitle">Dialod title</div>
            <div className="headerButton">
              <Button onClick={handleClose}>
                <CloseIcon style={STYLES.icons} />
              </Button>
            </div>
          </div>
          <div style={STYLES.tools}>
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
                defaultValue={FILTER_ITEMS[0].value}
                onChange={(e) => {
                  setFilterValue(JSON.parse(e.target.value));
                }}
              >
                {FILTER_ITEMS.map((option, index) => (
                  <MenuItem key={index} value={JSON.stringify(option.value)}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div style={STYLES.modalRows}>
            <div style={STYLES.itemList}>
              <ItemsList
                itemsArray={baseArr}
                selectedArray={selectedArr}
                disabled={disabled}
                isFilterChange={filterChange}
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
        </Box>
      </Modal>
    </div>
  );
}
