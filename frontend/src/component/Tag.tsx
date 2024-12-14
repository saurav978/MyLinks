interface TapProps {
  text: string;
}
export default function Tag({ text }: TapProps) {
  return (
    <span className="w-fit px-2 py-0 rounded-full bg-blue-500 text-sm flex justify-center items-center text-white">
      {text}
    </span>
  );
}
