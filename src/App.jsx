import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Watchlist from "./components/Watchlist";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addStock = (stock) => {
    setWatchlist((prev) => [...prev, stock]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Stock Watchlist</h1>
      <SearchBar onSelect={addStock} />
      <Watchlist watchlist={watchlist} />
    </div>
  );
}

export default App;