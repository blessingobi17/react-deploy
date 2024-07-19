const Grid = () => {
  return (
    <>
      <div className="md:py-20 pb-20">
        <div className="flex items-center md:justify-between justify-center w-full md:pb-20 pb-10 ">
          <h1 className="sans-font text-Black uppercase md:text-4xl text-2xl font-light ">
            Our Creations
          </h1>
          <button
            className="md:block hidden uppercase border-2 border-Black px-10 py-2 text-xs tracking-widest
               hover:text-White hover:bg-Black hover:border-0 "
          >
            See all
          </button>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 justify-between w-full text-White">
          <div className="grid1  md:h-96 h-36 flex">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4 w-1/2 font-light ">
              Deep Earth
            </p>
          </div>
          <div className="grid2  md:h-96 h-36 flex ">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4 w-1/2 font-light ">
              Night Arcade
            </p>
          </div>
          <div className="grid3  md:h-96 h-36 flex ">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4 w-1/2 font-light ">
              Soccer Team VR
            </p>
          </div>
          <div className="grid4  md:h-96 h-36 flex ">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4  w-1/2 font-light ">
              Deep Earth
            </p>
          </div>
          <div className="grid5  md:h-96 h-36 flex">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-4/5 w-3/4 font-light ">
              From up above VR
            </p>
          </div>
          <div className="grid6  md:h-96 h-36 flex">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4  w-1/2 font-light ">
              Pocket Borealis
            </p>
          </div>
          <div className="grid7  md:h-96 h-36 flex">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4  w-1/2 font-light ">
              The Curiosity
            </p>
          </div>
          <div className="grid8  md:h-96 h-36 flex ">
            <p className="sans-font uppercase self-end p-6 text-2xl md:w-3/4  w-1/2 font-light ">
              Make it Fisheye
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
