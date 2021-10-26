import { ITEMS_AMOUNT } from "../constants/app";

export const initFromLocalStorage = (key: string): Array<string> => {
  const localItem: string | null = localStorage.getItem(key);
  return localItem && localItem.length > 0 ? localItem.split(",") : [];
};

export const getItemsArray = (): Array<string> => {
  let itemsArray = [];
  for (let i: number = 1; i <= ITEMS_AMOUNT; ++i) {
    itemsArray.push(`Item ${i}`);
  }
  return itemsArray;
};

export const arrOnChange = (arr: Array<string>, item: string): boolean => {
  return arr.indexOf(item) !== -1 ? false : true;
};
