"use client";
import { useState } from "react";
import Image from "next/image";
import Label from "../components/label";

const login = ({ onSubmit }) => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label text="Usuario" htmlfor="email" />
              <div className="mt-2">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-black-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
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

          <div className="flex items-center justify-center mt-11">
            <hr className="border border-gray-90 flex-grow" />
            <p className="mx-2 text-sm font-medium text-gray-900">
              Ingresar con
            </p>
            <hr className="border border-gray-90 flex-grow" />
          </div>
          <div className="bg-white flex justify-around pt-10">
            <div className="flex items-center border rounded-xl px-5 py-2 hover:outline outline-offset-2 outline-indigo-600">
              <Image
                src="/images/googleLogo.png"
                alt="google Logo"
                width={40}
                height={40}
              />
              <p className="ml-3">Google</p>
            </div>
            <div className="flex items-center border rounded-xl px-5 py-2 hover:outline outline-offset-2 outline-indigo-600">
              <Image
                src="/images/facebook_logo.png"
                alt="facebook Logo"
                width={40}
                height={40}
              />
              <p className="ml-3">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
