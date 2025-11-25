import { useEffect, useState } from "react";
import Header from "./layout/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
        <h1>{msg || "Carregando..."}</h1>
        <p>Frontend e backend conectados com sucesso 🏀</p>
      </div>
    </div>
  );
}

export default App;
