import { useState } from "react";

export default function Progress() {
  const [values, setValues] = useState([0, 0, 0]);

  const total = Math.round(
    values.reduce((a, b) => a + b, 0) / values.length
  );

  const color =
    total < 40 ? "red" : total > 70 ? "green" : "orange";

  const updateValue = (i, v) => {
    const safe = Math.min(100, Math.max(0, Number(v)));
    const copy = [...values];
    copy[i] = safe;
    setValues(copy);
  };

  return (
    <div className="section">
      <h2>Progress Bar</h2>

      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={(e) => updateValue(i, e.target.value)}
        />
      ))}

      <div style={{ height: 20, background: "#ddd" }}>
        <div
          style={{
            width: `${total}%`,
            height: "100%",
            background: color,
            transition: "width 0.3s",
          }}
        />
      </div>

      {values.map((v, i) => (
        <div key={i} style={{ width: `${v}%`, background: "#999", height: 5 }} />
      ))}
    </div>
  );
}
