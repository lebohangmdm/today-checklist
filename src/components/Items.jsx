import { useState } from "react";
import Item from "./Item";
import AddItem from "./AddItem";

const Items = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    return setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    return setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <section className="bg-blue-200 w-[900px] px-8 py-4">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl text-center">Add your items for today✍️</h2>
      </div>
      <AddItem onAddItem={addItem} />

      <div className="mt-8 space-y-3">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={deleteItem}
              onPackItem={toggleItem}
            />
          );
        })}
      </div>
      <div className="text-center mt-12">
        <button
          className="bg-red-600 py-2 px-4 text-white"
          onClick={() => setItems([])}
        >
          Clear List
        </button>
      </div>
    </section>
  );
};

export default Items;
