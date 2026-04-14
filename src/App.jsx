import { useState } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = "miLlaveSecreta123";

function App() {
  const [textoPlano, setTextoPlano] = useState("");
  const [textoCifrado, setTextoCifrado] = useState("");
  const [textoDescifrado, setTextoDescifrado] = useState("");

  const cifrar = () => {
    if (!textoPlano) return;
    const cifrado = CryptoJS.AES.encrypt(textoPlano, SECRET_KEY).toString();
    setTextoCifrado(cifrado);
    setTextoDescifrado(""); // limpiar resultado anterior
  };

  const descifrar = () => {
    if (!textoCifrado) return;
    const bytes = CryptoJS.AES.decrypt(textoCifrado, SECRET_KEY);
    const original = bytes.toString(CryptoJS.enc.Utf8);
    setTextoDescifrado(original);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Lab 3 — Cipher & Decipher</h1>

      {/* Input de texto plano */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Texto plano:</label>
        <br />
        <input
          type="text"
          value={textoPlano}
          onChange={(e) => setTextoPlano(e.target.value)}
          placeholder="Escribe algo..."
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      {/* Botón cifrar */}
      <button onClick={cifrar} style={{ marginRight: "1rem" }}>
        Cifrar
      </button>

      {/* Texto cifrado */}
      {textoCifrado && (
        <div style={{ margin: "1rem 0", wordBreak: "break-all" }}>
          <strong>Texto cifrado:</strong>
          <p style={{ background: "#f0f0f0", padding: "0.5rem" }}>
            {textoCifrado}
          </p>
        </div>
      )}

      {/* Botón descifrar */}
      <button onClick={descifrar} disabled={!textoCifrado}>
        Descifrar
      </button>

      {/* Texto descifrado */}
      {textoDescifrado && (
        <div style={{ margin: "1rem 0" }}>
          <strong>Texto original recuperado:</strong>
          <p style={{ background: "#e8f5e9", padding: "0.5rem" }}>
            {textoDescifrado}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;