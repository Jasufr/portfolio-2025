export default function AboutCard({
  ref,
  title,
  text,
  left,
  positionY,
  positionX,
}) {
  return (
    <div
      ref={ref}
      className={`absolute top-[${positionY}]  w-[35%] opacity-0 font-dmsans  flex flex-col ${
        left
          ? `text-end items-end right-[${positionX}]`
          : `text-start items-start left-[${positionX}]`
      }`}
    >
      <h2 className="font-bold border-s-4 border-orange ps-1 w-fit mb-1">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
