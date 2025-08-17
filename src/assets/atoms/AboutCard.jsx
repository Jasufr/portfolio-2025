export default function AboutCard({
  ref,
  title,
  text,
  left,
  positionY,
  positionYsm,
}) {
  const getResponsiveTop = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches &&
      positionYsm
    ) {
      return positionYsm;
    }
    return positionY;
  };
  return (
    <div
      ref={ref}
      style={{
        top: getResponsiveTop(),
        position: "absolute",
      }}
      className={`sm:w-[35%] opacity-0 font-dmsans flex flex-col text-[12px] ${
        left
          ? "text-end items-end left-[18px] sm:left-auto right-[58%] sm:right-[55%]"
          : "text-start items-start right-[18px] sm:right-auto left-[58%] sm:left-[55%]"
      }`}
    >
      <h2 className="font-bold border-s-4 border-orange ps-1 w-fit mb-1 truncate overflow-hidden whitespace-nowrap max-w-[-webkit-fill-available]">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
