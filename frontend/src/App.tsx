import { useEffect, useState } from "react";
import Header from "./layout/Header";
import { Routes, Route } from "react-router-dom";
import Players from './pages/Players'
import Teams from './pages/Teams'

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  function Home(){
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
        <h1>{msg || "Carregando..."}</h1>
        <p>Frontend e backend conectados com sucesso 🏀</p>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/players" element={<Players/>} />
          <Route path="/teams" element={<Teams/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
