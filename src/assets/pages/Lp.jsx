import Navbar from "../components/Navbar";

export default function Lp() {
  return (
    <>
      <Navbar />
      <div className="mx-5 sm:mx-16 mt-40">
        <h1 className="font-dmsans font-semibold text-center text-3xl">
          <span>Bonjour, welcome to my world.</span>
          <br />
          <span className="text-orange block mt-2">
            Crafting experiences that resonate.
          </span>
        </h1>
      </div>
      <div className="w-[110%] -translate-[5%] h-96 bg-beige rotate-5 mt-48"></div>
      <div className="-mt-[250px] z-10 relative font-dmsans font-medium text-3xl text-center">
        <h2 className="mb-12">Explore my sandbox of 3D micro-experiences.</h2>
        <div className="w-[90%] sm:w-[80%] h-58 sm:h-72 md:h-96 bg-black mx-auto rounded-full"></div>
        {/* <div className="w-[80%] h-52 bg-black mx-auto rounded-full"></div> */}
      </div>
    </>
  );
}
