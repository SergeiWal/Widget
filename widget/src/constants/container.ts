import { FilterItemValue } from "../types/types";

export const MAX_COUNT = 3;

export const DEFAULT_CONTEXT_VALUE = {
  count: 0,
  open: false,
  baseArr: [],
  selectedArr: [],
  resultArr: [],
  disabled: false,
  filterChange: false,
  onSave: (value: Array<string>) => {},
  handleOpen: () => {},
  handleClose: () => {},
  setSearchlineValue: (value: string) => {},
  setFilterValue: (value: FilterItemValue) => {},
  onAddHandler: (item: string) => {},
  onRemoveHandler: (item: string) => {},
  onRemoveFromResultHandler: (item: string) => {},
};
