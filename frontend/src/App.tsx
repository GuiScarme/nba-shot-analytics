import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{msg || "Carregando..."}</h1>
      <p>Frontend e backend conectados com sucesso 🏀</p>
    </div>
  );
}

export default App;
