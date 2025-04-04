"use client";
import { useState } from "react";
import { useRouter } from "next/router";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
  };

  const createdFail = (errorMsg) => {
    setError(errorMsg.response.data.errors);
  };

  const createdOk = () => {
    const data = {
      name,
      lastname,
      gender,
      age,
      city,
      email,
      password,
    };
    onSubmit(data, createdOk, createdFail);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createdOk();
        }}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Agrega otros campos de entrada aquí */}
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button type="submit">Enviar</button>
      </form>
      {error && <div>{error.message}</div>}{" "}
      {/* Muestra el mensaje de error si existe */}
    </>
  );
};

export default UserForm;
