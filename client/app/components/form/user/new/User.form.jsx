"use client";
import { useState } from "react";
import { useRouter } from "next/compat/router";
import Label from "@/app/components/label";

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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Formulario de Registro
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label text="Nombre" htmlfor="name" />
              <div className="mt-2">
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  autoComplete={false}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-black-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label text="Apellido" htmlfor="password" />
              </div>
              <div className="mt-2">
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div>{error.message}</div>}{" "}
      {/* Muestra el mensaje de error si existe */}
    </>
  );
};

export default UserForm;
