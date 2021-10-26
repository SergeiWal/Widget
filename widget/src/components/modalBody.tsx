import STYLES from "../constants/styles";
import ItemsViewList from "./itemViewsList";
import ItemsList from "./itemsList";
import { useAppContext } from "../context/appContext";

export default function ModalBody() {
  const { count, selectedArr, baseArr, onAddHandler, onRemoveHandler } =
    useAppContext();

  return (
    <div style={STYLES.modalBody}>
      <div style={STYLES.modalRows}>
        <ItemsList
          baseArr={baseArr}
          onAdd={onAddHandler}
          onRemove={onRemoveHandler}
        />
      </div>
      <div style={STYLES.selectedItemsBox}>
        <div
          style={
            count > 0
              ? STYLES.selectedItemsTitle
              : STYLES.selectedItemsTitleEmpty
          }
        >
          Selected items:
        </div>
        <div>
          <ItemsViewList arr={selectedArr} onRemove={onRemoveHandler} />
        </div>
      </div>
    </div>
  );
}
