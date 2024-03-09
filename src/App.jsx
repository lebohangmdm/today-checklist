import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  // const list = [
  //   { id: 1, name: "socks", edited: true },
  //   { id: 2, name: "umbrella", edited: true },
  // ];
  return (
    <>
      <div className="h-screen bg-slate-100 flex flex-col items-center p-8 ">
        <Header />
        <Items />
        <Footer />
      </div>
      {/* <div className="h-screen flex justify-center items-center bg-slate-500">
        <div className="bg-slate-300 w-[750x] mx-aut0 h-96 p-8 flex flex-col space-y-8 rounded-lg">
          <h1 className="text-4xl font-semibold text-center">Checklist</h1>
          <form className="flex items-center justify-center space-x-4">
            <input
              type="text"
              className="py-2 px-4 bg-white w-[500px] rounded-full focus:outline-none focus:ring-1  focus:ring-slate-400 "
              placeholder="Enter an Item"
            />
            <button
              type="submit"
              className="py-2 px-6  bg-yellow-500 text-white rounded-full  "
            >
              Add Item
            </button>
          </form>

          <div className="flex flex-col gap-4">
            {list.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
