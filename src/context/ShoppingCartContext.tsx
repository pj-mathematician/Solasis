import { createContext, useContext, useState } from "react";
import { Product } from "../data/data";

interface IShoppingCartContext {
  items: Map<string, [Product, number]>;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  count: (id: string) => number;
  clear: () => void;
  total: () => number;
  totalItemsCount: () => number;
  read: () => {
    name: string;
    qty: number;
    total: number;
  }[];
}

const shoppingCartContext = createContext<IShoppingCartContext>({
  items: new Map(),
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  total: () => 0,
  count: () => 0,
  totalItemsCount: () => 0,
  read: () => [],
});

export function useShoppingCartContext() {
  const context = useContext(shoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartProvider"
    );
  }

  return context;
}

export function ShoppingCartProvider(props: any) {
  const [items, setItems] = useState<Map<string, [Product, number]>>(new Map());

  function addItem(item: Product) {
    const newItems = new Map(items);
    const existingItem = newItems.get(item.id);

    if (existingItem) {
      newItems.set(item.id, [item, existingItem[1] + 1]);
    } else {
      newItems.set(item.id, [item, 1]);
    }

    setItems(newItems);
  }

  function removeItem(item: Product) {
    const newItems = new Map(items);
    const existingItem = newItems.get(item.id);

    if (existingItem) {
      if (existingItem[1] === 1) {
        newItems.delete(item.id);
      } else {
        newItems.set(item.id, [item, existingItem[1] - 1]);
      }
    }

    setItems(newItems);
  }

  function clear() {
    setItems(new Map());
  }

  function total() {
    let total = 0;
    items.forEach((item) => {
      total += item[0].price * item[1];
    });
    return total;
  }

  function count(id: string) {
    const item = items.get(id);
    return item ? item[1] : 0;
  }

  function totalItemsCount() {
    let total = 0;
    items.forEach((item) => {
      total += item[1];
    });
    return total;
  }

  function read() {
    // return { name, qty, total }[]

    const itemsArray = Array.from(items.values());

    return itemsArray.map((item) => {
      return {
        name: item[0].name,
        qty: item[1],
        total: item[0].price * item[1],
      };
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clear,
        count,
        total,
        totalItemsCount,
        read,
      }}
      {...props}
    />
  );
}
