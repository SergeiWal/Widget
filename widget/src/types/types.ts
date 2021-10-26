export type ModalHeaderProps = {
  title: string;
};

export type ItemProps = {
  selectedArr: Array<string>;
  isDisabled: boolean;
  content: string;
  filterChange: boolean;
  isChecked: (firstParam: boolean) => void;
};

export type ItemsListProps = {
  baseArr: Array<string>;
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
};

export type CountObject = {
  prev: number;
  next: number;
};

export type ItemViewProps = {
  content: string;
  onRemove: (item: string) => void;
};

export type ItemViewsListProps = {
  arr: Array<string>;
  onRemove: (item: string) => void;
};

export type FilterItemValue = {
  start: number;
  end: number;
};

export type FilterItem = {
  label: string;
  value: FilterItemValue;
};

export type ModalContextType = {
  count: number;
  open: boolean;
  baseArr: Array<string>;
  selectedArr: Array<string>;
  resultArr: Array<string>;
  disabled: boolean;
  filterChange: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  onSave: (arr: Array<string>) => void;
  setSearchlineValue: (value: string) => void;
  setFilterValue: (value: FilterItemValue) => void;
  onAddHandler: (item: string) => void;
  onRemoveHandler: (item: string) => void;
  onRemoveFromResultHandler: (item: string) => void;
};
