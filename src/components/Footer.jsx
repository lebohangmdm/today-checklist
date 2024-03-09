const Footer = () => {
  const x = 1;
  return (
    <footer className="bg-red-100 w-[900px] mx-auto p-4 text-center">
      <p className="text-xl">
        {x >= 1
          ? `You have ${x} items on your list, and you already packed`
          : "Start adding some items to your packing list"}
      </p>
    </footer>
  );
};

export default Footer;
