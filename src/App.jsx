import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  return (
    <>
      <div className="h-screen bg-slate-100 flex flex-col items-center p-8 ">
        <Header />
        <Items />
      </div>
    </>
  );
}

export default App;
