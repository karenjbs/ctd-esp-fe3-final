import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    if (name.length <= 5) {
      setError("Por favor verifique su información nuevamente");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, te contactaremos cuanto antes vía mail`
    );
    console.log({ name, email }); 

    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        {successMessage && <p style={{ color: "#1b617c", fontWeight: "bold" }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
