import ItemsViewList from "./itemViewsList";
import WidgetModal from "./widgetModal";
import { useAppContext } from "../context/appContext";

export default function App() {
  const { resultArr, onRemoveFromResultHandler } = useAppContext();
  return (
    <div className="widget">
      <div>Selected items:</div>
      <div>
        <ItemsViewList arr={resultArr} onRemove={onRemoveFromResultHandler} />
      </div>
      <WidgetModal />
    </div>
  );
}
