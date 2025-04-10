"use client";
import UserForm from "../components/form/user/new/User.form";
import axios from "axios";
const Registration = () => {
  const createNewUser = async (data, onSuccess, onFail) => {
    try {
      const response = await axios.post("http://localhost:8000/api/user", data);
      const result = await response.data;
      onSuccess(result);
    } catch (error) {
      onFail(error);
    }
  };
  return (
    <>
      <div className="container mx-auto text-2xl/9 font-bold tracking-tight text-gray-900">
        <UserForm onSubmit={createNewUser} />
      </div>
    </>
  );
};

export default Registration;
