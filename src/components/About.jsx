import img1 from "../assets/images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <>
      <div className=" relative md:flex justify-between items-center md:w-full md:py-28 py-10">
        <div className="md:w-3/5 w-full  h-auto ">
          <img src={img1} alt="" />
        </div>
        <section
          className="md:w-1/2 w-full md:text-start text-center 
        md:py-14 py-10 md:px-14 px-4 bg-White h-auto md:absolute right-0 bottom-0 "
        >
          <h1 className="sans-font text-Black uppercase md:text-4xl text-2xl font-light">
            The leader in interactive vr
          </h1>
          <p className=" text-xs  text-VeryDarkGray pt-6 md:leading-none leading-4">
            Founded in 2011, Loopstudion has been producing world-class virtual
            reality projects fpr some of the best companies around the globe.
            Our award winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
