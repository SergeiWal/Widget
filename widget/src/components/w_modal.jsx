import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ItemsList from "./itemsList";
import { MenuItem } from "@mui/material";
import ItemsViewList from "./selectedItemList";
import styles from "./styles";

const currencies = [
  {
    label: "No filter",
    value: {
      start: 0,
      end: 1000,
    },
  },
  {
    label: ">10",
    value: {
      start: 10,
      end: 1000,
    },
  },
  {
    label: ">100",
    value: {
      start: 100,
      end: 1000,
    },
  },
  {
    label: ">200",
    value: {
      start: 200,
      end: 1000,
    },
  },
  {
    label: ">300",
    value: {
      start: 300,
      end: 1000,
    },
  },
  {
    label: ">400",
    value: {
      start: 400,
      end: 1000,
    },
  },
  {
    label: ">500",
    value: {
      start: 500,
      end: 1000,
    },
  },
  {
    label: ">600",
    value: {
      start: 600,
      end: 1000,
    },
  },
  {
    label: ">700",
    value: {
      start: 700,
      end: 1000,
    },
  },
  {
    label: ">800",
    value: {
      start: 800,
      end: 1000,
    },
  },
  {
    label: ">900",
    value: {
      start: 900,
      end: 1000,
    },
  },
];

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
  useEffect(() => {
    setDisabled(selectedArr.length === maxCount ? true : false);
    setCount(selectedArr.length);
  }, [selectedArr]);

  const handleOpen = () => {
    setOpen(true);
    setSelectedArr([...resultArray]);
  };
  const handleClose = () => setOpen(false);
  const onAddHandler = (e) => {
    if (count < maxCount) {
      setSelectedArr([...selectedArr, e]);
      setCount((prev) => prev + 1);
      if (count >= 2) setDisabled(true);
    }
  };
  const onRemoveHandler = (e) => {
    const id = selectedArr.findIndex((item) => item === e);
    if (id != -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      setCount((prev) => prev - 1);
      setDisabled(false);
    }
  };
  const searchHandler = (value) => {
    const arr = itemsArray.filter((item) => item.includes(value));
    setBaseArr([...arr]);
  };
  const filterHandler = (value) => {
    const arr = baseArr.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
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
                  searchHandler(e.target.value);
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
                onChange={(e) => {
                  filterHandler(e.target.value);
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
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
