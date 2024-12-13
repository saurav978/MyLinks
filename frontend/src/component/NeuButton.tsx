type buttonTypes = "defult" | "success";
interface NeuButtonProps {
  children: React.ReactNode;
  type: buttonTypes;
}

export default function NeuButton({ children, type }: NeuButtonProps) {
  const buttonTypeStyle = {
    defult: "bg-indigo-500",
    success: "bg-green-500",
  };
  return (
    <div className=" flex items-center justify-center">
      <button
        className={`px-6 py-2 font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${buttonTypeStyle[type]}`}
      >
        {children}
      </button>
    </div>
  );
}
