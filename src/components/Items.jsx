import Item from "./Item";

const Items = () => {
  const list = [
    {
      id: 1,
      name: "umbrella",
      packed: false,
    },
    {
      id: 2,
      name: "hat",
      packed: false,
    },
    {
      id: 1,
      name: "cap",
      packed: true,
    },
  ];

  return (
    <section className="bg-blue-200 w-[900px] px-8 py-4">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl text-center">Add your items for today✍️</h2>
      </div>
      <form className="flex justify-center">
        <input
          type="text"
          className="py-1 px-4 w-[300px] focus:outline-none focus:ring-2 ring-blue-400 "
          placeholder="Enter your item"
        />
        <button className="py-1 px-4 bg-blue-600">Add Item</button>
      </form>

      <div className="mt-8 space-y-4">
        {list.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Items;
