import NeuButton from "../component/NeuButton";
import { NavLink } from "react-router";

export default function HomePage() {
  return (
    <div className="h-svh w-full bg-slate-100 flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          Create your secand brain to remember links
        </h2>
        <div className="flex justify-center gap-3">
          <NeuButton type="defult">
            {" "}
            <NavLink to={"/login"}>login</NavLink>{" "}
          </NeuButton>{" "}
          <NeuButton type="success">
            <NavLink to={"/signup"}>signup</NavLink>
          </NeuButton>
        </div>
      </div>
    </div>
  );
}
