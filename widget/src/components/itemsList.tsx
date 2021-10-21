import Item from "./item";
import STYLES from "../constants/styles";
import { ModalContext } from "../containers/modalContainer";
import { ItemsListProps } from "../types/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

type CountObject = {
  prev: number;
  next: number;
};

export default function ItemsList({
  baseArr,
  onAdd,
  onRemove,
}: ItemsListProps) {
  const [count, setCount] = useState<CountObject>({ prev: 0, next: 10 });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(baseArr.slice(count.prev, count.next));
  const getMoreData = (): void => {
    if (current.length === baseArr.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(baseArr.slice(count.prev + 10, count.next + 10))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <ModalContext.Consumer>
      {({ selectedArr, disabled, filterChange }) => {
        return (
          <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={""}
          >
            <div style={STYLES.itemList}>
              <ul style={STYLES.ul}>
                {baseArr.map((item, index) => {
                  return (
                    <li key={index}>
                      <Item
                        content={item}
                        isDisabled={disabled}
                        selectedArr={selectedArr}
                        filterChange={filterChange}
                        isChecked={(check) => isCheckedHandler(check, item)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </InfiniteScroll>
        );
      }}
    </ModalContext.Consumer>
  );
}
