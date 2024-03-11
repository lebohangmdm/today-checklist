/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  const { name, packed } = item;

  return (
    <div className="flex items-center space-x-8 ">
      <p className="bg-white py-2 px-4 w-full ">{name}</p>
      <div className="flex  items-center gap-2">
        <input type="checkbox" name="checkbox" id="" />
        <button className="text-xl text-red-500">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Item;
