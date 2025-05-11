import React, { useState } from "react";
import "./App.css";

const tools = [
  { name: "ChatGPT", category: "Writing", link: "https://chat.openai.com" },
  { name: "Canva AI", category: "Design", link: "https://www.canva.com" },
  { name: "Runway ML", category: "Video", link: "https://runwayml.com" },
  // Add more tools here
];

function App() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Free AI Tools Hub</h1>
      <input
        type="text"
        placeholder="Search AI tools..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="tool-grid">
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-card"
          >
            <h2>{tool.name}</h2>
            <p>Category: {tool.category}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
