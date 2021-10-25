import TextField from "@mui/material/TextField";
import { FILTER_ITEMS } from "../constants/modal";
import STYLES from "../constants/styles";
import { MenuItem } from "@mui/material";
import { useModalContext } from "./modalState";

export default function ModalFilters() {
  const { setFilterValue, setSearchlineValue } = useModalContext();

  return (
    <div style={STYLES.tools}>
      <TextField
        id="searchline"
        label="Search ..."
        variant="outlined"
        sx={{ width: "225px" }}
        size="small"
        onChange={(e) => setSearchlineValue(e.target.value)}
      />
      <TextField
        id="filter"
        label="Filter ..."
        variant="outlined"
        sx={{ width: "225px" }}
        size="small"
        select
        defaultValue={JSON.stringify(FILTER_ITEMS[0].value)}
        onChange={(e) => setFilterValue(JSON.parse(e.target.value))}
      >
        {FILTER_ITEMS.map((option, index) => (
          <MenuItem key={index} value={JSON.stringify(option.value)}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
