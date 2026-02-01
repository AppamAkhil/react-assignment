import { useState } from "react";

const names = [
  "Amarnath",
  "Ankith", 
  "Anil",
  "Akhila",
  "Sunil",
  "Nikhil",
  "Ravi",
  "Ramesh",
  "Suresh",
  "Mahesh",
  "Kiran",
  "Harish", 
  "Sharath", 
  "Nithesh"
];

export default function SearchList() {
  const [query, setQuery] = useState("");

  const filtered = names.filter((n) =>
    n.toLowerCase().includes(query.toLowerCase())
  );

  const highlight = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <b key={i}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <div className="section">
      <h2>Live Search</h2>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <p>Matches: {filtered.length}</p>

      {filtered.length === 0 && <p>No matches found</p>}

      <ul>
        {filtered.map((n) => (
          <li key={n}>{highlight(n)}</li>
        ))}
      </ul>
    </div>
  );
}
