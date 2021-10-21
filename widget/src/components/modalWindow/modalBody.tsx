import STYLES from "../../constants/styles";
import ItemsViewList from "../itemViewsList";
import ItemsList from "../itemsList";
import { ModalContext } from "../../containers/modalContainers";

type ModalBodyProps = {
  baseArr: Array<string>;
  selectedArr: Array<string>;
  disabled: boolean;
  filterChange: boolean;
  onAddHandler: (item: string) => {};
  onRemoveHandler: (item: string) => {};
};

export default function ModalBody({}: ModalBodyProps) {
  return (
    <ModalContext.Consumer>
      {({ selectedArr, onAddHandler, onRemoveHandler }) => {
        return (
          <div>
            <div style={STYLES.modalRows}>
              <div style={STYLES.itemList}>
                <ItemsList onAdd={onAddHandler} onRemove={onRemoveHandler} />
              </div>
              <div></div>
            </div>
            <div className="selected_items">
              <div className="selected_header">Selected items:</div>
              <div className="selected_list">
                <ItemsViewList arr={selectedArr} onRemove={onRemoveHandler} />
              </div>
            </div>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
