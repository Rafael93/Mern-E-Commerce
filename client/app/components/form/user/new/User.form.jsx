"use client";
import { useState } from "react";
import Label from "@/app/components/label";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const creationFail = (errorMsg) => {
    setError(errorMsg.response.data.errors);
  };

  const creationSuccess = () => {
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      lastname: lastname,
      email: email,
      gender: gender,
      age: age,
      city: city,
      password: password,
      confirmPassword: confirmPassword,
    };
    onSubmit(data, creationSuccess, creationFail);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Formulario de Registro
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <Label text="Nombre" htmlfor="name" />
            <div className="mt-2">
              <input
                required
                id="name"
                name="name"
                type="text"
                autoComplete="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-black-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Apellido" htmlfor="lastname" />
            </div>
            <div className="mt-2">
              <input
                required
                id="lastname"
                name="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Email" htmlfor="email" />
            </div>
            <div className="mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Género" htmlfor="gender" />
            </div>
            <div className="mt-2">
              <select
                required
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                autoComplete="false"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Male">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="other">Otros</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <Label text="Edad" htmlfor="age" />
            </div>
            <div className="mt-2">
              <input
                required
                id="age"
                name="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Ciudad" htmlfor="city" />
            </div>
            <div className="mt-2">
              <input
                required
                id="city"
                name="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Contraseña" htmlfor="password" />
            </div>
            <div className="mt-2">
              <input
                required
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label text="Confirmar Contraseña" htmlfor="confirmPassword" />
            </div>
            <div className="mt-2">
              <input
                required
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
            <Button
              onClick={handleCancel}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cancelar
            </Button>
          </form>
        </div>
      </div>
      {error && <div>{error.message}</div>}{" "}
      {/* Muestra el mensaje de error si existe */}
    </>
  );
};

export default UserForm;
