import TextField from "@mui/material/TextField";
import { FILTER_ITEMS } from "../../constants/modal";
import STYLES from "../../constants/styles";
import { MenuItem } from "@mui/material";
import { ModalContext } from "../../containers/modalContainer";

export default function ModalFilters() {
  return (
    <ModalContext.Consumer>
      {({ setFilterValue, setSearchlineValue }) => {
        return (
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
                onChange={(e) => setFilterValue(JSON.parse(e.target.value))}
              >
                {FILTER_ITEMS.map((option, index) => (
                  <MenuItem key={index} value={JSON.stringify(option.value)}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
