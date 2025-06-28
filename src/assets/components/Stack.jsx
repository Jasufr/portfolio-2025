import {
  siReact,
  siTailwindcss,
  siPostgresql,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siVuedotjs,
  siThreedotjs,
  siOpengl,
  siStorybook,
  siDrupal,
  siSpringboot,
  siRuby,
  siRubyonrails,
} from "simple-icons/icons";

const Icon = ({ icon }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${icon.hex}`}
      className="sm:w-[60px] sm:h-[60px]"
    >
      <title>{icon.title}</title>
      <path d={icon.path || icon.svg} />
    </svg>
  );
};

const stackList = [
  {
    icon: siHtml5,
  },
  {
    icon: siCss,
  },
  {
    icon: siTailwindcss,
  },
  {
    icon: siJavascript,
  },
  {
    icon: siTypescript,
  },
  {
    icon: siReact,
  },
  {
    icon: siVuedotjs,
  },
  {
    icon: siThreedotjs,
  },
  {
    icon: siOpengl,
  },
  {
    icon: siStorybook,
  },
  {
    icon: siDrupal,
  },
  {
    icon: siSpringboot,
  },
  {
    icon: siRuby,
  },
  {
    icon: siRubyonrails,
  },
  {
    icon: siPostgresql,
  },
];

export default function Stack() {
  return (
    <>
      <h2 className="mb-8 text-3xl">Stack.</h2>
      <div className="bg-beige -mx-5 py-10 px-5 mb-12">
        <ul className="flex flex-wrap items-center justify-center sm:w-[80%] max-w-[1024px] mx-auto gap-8">
          {stackList.map((stack, index) => (
            <li key={index}>
              <Icon icon={stack.icon} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
