import { useState } from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;
    const id = Date.now();
    const newItem = {
      id,
      name,
      packed: false,
    };
    setItems([...items, newItem]);
    setName("");
  };

  return (
    <section className="bg-blue-200 w-[900px] px-8 py-4">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl text-center">Add your items for today✍️</h2>
      </div>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="py-1 px-4 w-[300px] focus:outline-none focus:ring-2 ring-blue-400"
          placeholder="Enter your item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="py-1 px-4 bg-blue-600">Add Item</button>
      </form>

      <div className="mt-8 space-y-3">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className="text-center mt-12">
        <button className="bg-red-600 py-2 px-4 text-white ">Clear List</button>
      </div>
    </section>
  );
};

export default Items;
