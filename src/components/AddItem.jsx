import { useState } from "react";

const AddItem = ({ onAddItem }) => {
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
    onAddItem(newItem);
    setName("");
  };

  return (
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
  );
};

export default AddItem;
