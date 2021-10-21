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

export type ItemViewProps = {
  content: string;
  onRemove: (item: string) => void;
};

export type ItemViewsListProps = {
  arr: Array<string>;
  onRemove: (item: string) => void;
};

export type WidgetModalProps = {
  open: boolean;
};

export type FilterItemValue = {
  start: number;
  end: number;
};

export type FilterItem = {
  label: string;
  value: FilterItemValue;
};

export type ModalContainerProps = {
  onSave: (arr: Array<string>) => void;
  resultArray: Array<string>;
};

export type ModalContextType = {
  baseArr: Array<string>;
  selectedArr: Array<string>;
  disabled: boolean;
  filterChange: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  onSave: (arr: Array<string>) => void;
  setSearchlineValue: (value: string) => void;
  setFilterValue: (value: FilterItemValue) => void;
  onAddHandler: (item: string) => void;
  onRemoveHandler: (item: string) => void;
};
