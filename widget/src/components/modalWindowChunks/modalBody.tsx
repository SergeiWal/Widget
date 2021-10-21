import STYLES from "../../constants/styles";
import ItemsViewList from "../itemViewsList";
import ItemsList from "../itemsList";
import { ModalContext } from "../../containers/modalContainer";

export default function ModalBody() {
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
