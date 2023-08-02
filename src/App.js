import { useState } from "react";
import "./app.css";

export default function App() {
  const [color, setColor] = useState("");

  const styles = {
    border: "1px solid black",
    height: "50vh",
    width: "50vh",
    backgroundColor: color,
  };

  return (
    <div className="App">
      <div>
        {color ? (
          <div style={styles}>the background color is: {color}</div>
        ) : (
          <div>choose a background color</div>
        )}
      </div>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
