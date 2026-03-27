export default function Watchlist({ watchlist }) {
  return (
    <div>
      <h2>Watchlist</h2>

      {watchlist.map((stock) => (
        <div key={stock.ticker}>{stock.ticker}</div>
      ))}
    </div>
  );
}