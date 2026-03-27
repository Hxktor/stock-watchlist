import { useState } from "react";
import { searchStocks } from "../services/polygon";

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return; // prevent empty search

    const data = await searchStocks(query);
    setResults(data || []);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search stocks..."
      />

      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map((stock) => (
          <div
            key={stock.ticker}
            onClick={() => onSelect(stock)}
            style={{ cursor: "pointer", marginTop: "5px" }}
          >
            {stock.ticker}
          </div>
        ))}
      </div>
    </div>
  );
}