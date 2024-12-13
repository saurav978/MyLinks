import { useState } from "react";
import { ValidatePassword, ValidateUsername } from "../validation";
import { NavLink } from "react-router";
import LoginInput from "../component/LoginInput";

export default function SignupPage() {
  const [userNameState, setUserNameState] = useState<"default" | "error">(
    "default"
  );
  const [passwordState, setPasswordState] = useState<"default" | "error">(
    "default"
  );

  const OnSubmitHandler = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      username: "",
      password: "",
    };
    for (let [key, value] of formData.entries()) {
      if (key === "username" || key === "password") {
        data[key] = value as string;
      }
    }
    console.log(data);
    if (!ValidateUsername(data.username)) {
      setUserNameState("error");
    } else {
      setUserNameState("default");
    }
    if (!ValidatePassword(data.password)) {
      setPasswordState("error");
    } else {
      setPasswordState("default");
    }
  };
  return (
    <div className="w-full h-svh flex justify-center items-center bg-slate-300">
      <div className="p-6 rounded drop-shadow bg-white">
        <form onSubmit={OnSubmitHandler} className="flex flex-col gap-4">
          <LoginInput
            name="username"
            id="username"
            StyleType={userNameState}
            type="text"
            placeholder="username"
          />
          <LoginInput
            name="password"
            id="password"
            StyleType={passwordState}
            type="password"
            placeholder="password"
          />
          <button
            className="bg-purple-300 p-1 rounded text-base font-bold tracking-wide uppercase hover:bg-purple-400 hover:text-gray-700 transition-all"
            type="submit"
          >
            signup
          </button>
        </form>
        <div className="font-bold text-gray-700 text-sm mt-2">
          alrady have an account{" "}
          <NavLink className={"text-green-400"} to={"/login"}>
            click here
          </NavLink>
        </div>
      </div>
    </div>
  );
}
