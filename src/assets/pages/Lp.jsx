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
      <div className="bg-beige w-[120%] relative left-1/2 -translate-x-1/2 h-70  mt-48 -mb-28 rotate-5"></div>
      <div className="w-full h-[400px] sm:h-[600px] bg-beige flex items-center">
        <div className="relative z-10 flex-1 font-dmsans font-medium text-3xl text-center">
          <h2 className="text-center mb-10 mx-5">
            Explore my sandbox of 3D micro-experiences.
          </h2>
          <div className="w-[90%] sm:w-[70%] aspect-[1/0.7] sm:aspect-[1/0.55] max-w-[1024px] bg-black mx-auto rounded-full"></div>
        </div>
      </div>
      <div className="bg-beige w-[120%] relative left-1/2 -translate-x-1/2 h-70 -mt-28 mb-48 rotate-5"></div>

      {/* <div className="-mt-[700px] z-10 relative font-dmsans font-medium text-3xl text-center mb-48">
        <h2 className="mb-12">Explore my sandbox of 3D micro-experiences.</h2>
        <div className="w-[90%] sm:w-[80%] h-58 sm:h-72 md:h-96 bg-black mx-auto rounded-full"></div>
      </div> */}
    </>
  );
}
