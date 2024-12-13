import { ComponentProps } from "react";

interface LoginInputPropes extends ComponentProps<"input"> {
  StyleType: "default" | "error";
}

export default function LoginInput({ StyleType, ...props }: LoginInputPropes) {
  const styles = {
    default:
      " bg-green-300/15 border-green-300 rounded focus:outline-green-300",
    error: " bg-red-300/15 border-red-300 rounded focus:outline-red-300",
  };
  return (
    <input
      className={`w-[340px] p-1 pl-2 border rounded ${styles[StyleType]}`}
      {...props}
    />
  );
}
