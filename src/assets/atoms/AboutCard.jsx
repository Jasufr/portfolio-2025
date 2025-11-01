export default function AboutCard({ ref, title, text, left }) {
  return (
    <div
      ref={ref}
      className={`w-[85%] xs:w-[75%] xl:w-[50%] opacity-0 font-dmsans flex flex-col text-[12px] ${
        left
          ? "text-end items-end left-[18px] sm:left-auto right-[58%] sm:right-[55%] self-end"
          : "text-start items-start right-[18px] sm:right-auto left-[58%] sm:left-[55%] justify-self-end"
      }`}
    >
      <h2 className="font-bold border-s-4 border-orange ps-1 w-fit mb-1 truncate overflow-hidden whitespace-nowrap max-w-[-webkit-fill-available]">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
