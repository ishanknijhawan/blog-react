import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
