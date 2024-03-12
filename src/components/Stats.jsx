const Stats = ({ items }) => {
  const numItems = items.length;
  const packed = items.filter((item) => item.packed === true).length;

  if (!numItems) {
    <footer className="bg-red-100 w-[900px] mx-auto p-4 text-center">
      <p className="text-xl font-semibold">Start adding items for today</p>
    </footer>;
  }

  return (
    <footer className="bg-red-100 w-[900px] mx-auto p-8 text-center">
      <p className="text-xl font-semibold ">
        {numItems === packed
          ? "You have packed everything you need for today"
          : `You have ${numItems} items on your list, and you already packed (${packed}/${numItems})`}
      </p>
    </footer>
  );
};

export default Stats;
