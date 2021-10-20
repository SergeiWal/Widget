import { useEffect, useState } from "react";
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
import { ModalContext } from "../containers/modalContainers";

export default function WidgetModal() {
  return (
    <ModalContext.Consumer>
      {({
        open,
        baseArr,
        selectedArr,
        disabled,
        filterChange,
        onSave,
        handleOpen,
        handleClose,
        setSearchlineValue,
        setFilterValue,
        onAddHandler,
        onRemoveHandler,
      }) => {
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
                      onChange={(e) => setSearchlineValue(e.target.value)}
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
                      onChange={(e) =>
                        setFilterValue(JSON.parse(e.target.value))
                      }
                    >
                      {FILTER_ITEMS.map((option, index) => (
                        <MenuItem
                          key={index}
                          value={JSON.stringify(option.value)}
                        >
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
                    <ItemsViewList
                      arr={selectedArr}
                      onRemove={onRemoveHandler}
                    />
                  </div>
                </div>
                <div style={STYLES.tools}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
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
      }}
    </ModalContext.Consumer>
  );
}
