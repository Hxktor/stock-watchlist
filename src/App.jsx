import SearchBar from "./components/SearchBar";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Stock Watchlist</h1>
      <SearchBar />
      <Watchlist />
    </div>
  );
}

export default App;