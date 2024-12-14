import LinkButton from "./LinkButton";
import Tag from "./Tag";

export default function Card() {
  return (
    <article className="max-w-72 p-4 bg-white shadow-lg border border-slate-600 rounded ">
      <h4 className="text-xl font-bold uppercase text-green-700">
        prima for bigners
      </h4>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        <Tag text="web-dev" />
        <Tag text="web-dev" />
        <Tag text="web-dev" />
      </div>
      <div className="mt-2 w-full flex justify-center">
        <a className="" href="https://google.com" target="_blank">
          <LinkButton />
        </a>
      </div>
    </article>
  );
}
