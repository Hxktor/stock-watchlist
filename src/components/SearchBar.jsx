import { useState } from "react";
import { searchStocks } from "../services/polygon";

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchStocks(query);
    setResults(data || []);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search stocks..."
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map((stock) => (
          <div
            key={stock.ticker}
            onClick={() => onSelect(stock)}
            style={{ cursor: "pointer" }}
          >
            {stock.ticker}
          </div>
        ))}
      </div>
    </div>
  );
}