/* eslint-disable react/prop-types */
const Item = ({ item, onDeleteItem, onPackItem }) => {
  const { id, name, packed } = item;

  return (
    <div className="flex items-center space-x-8 ">
      <p
        className={`bg-white py-2 px-4 w-full text-xl ${
          item.packed === true ? "line-through decoration-2" : ""
        }`}
      >
        {name}
      </p>
      <div className="flex  items-center gap-2">
        <input
          type="checkbox"
          name="checkbox"
          value={item.packed}
          onChange={() => onPackItem(id)}
        />
        <button
          className="text-xl text-red-500"
          onClick={() => onDeleteItem(id)}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Item;
