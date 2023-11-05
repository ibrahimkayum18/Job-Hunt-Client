import { TypeAnimation } from "react-type-animation";
import { FaSearch } from 'react-icons/fa';


const Banner = ({input,setInput}) => {

  return (
    <div
    data-aos="fade-down"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/LN09PkL/pexels-fauxels-3184291.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="h-screen w-full"
    >
      <div className="bg-[rgba(0,0,0,0.6)] w-full  h-full flex  items-center">
        <div className="text-left px-5 md:px-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">Find Your <span className="text-[#FF3611]">Dream Job</span></h2>
          <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "We Provide On Site Jobs",
              1000,
              "We Provide Remote Jobs",
              1000,
              "We Provide Hybrid Jobs",
              1000,
              "We Provide Part-time Jobs",
              1000,
            ]}
            speed={50}
            // style={{ fontSize: "2em", color:'white', textAlign:'left'}}
            repeat={Infinity}
            className="text-2xl lg:text-5xl font-bold text-left text-white"
          />
          </div>
          <div className="relative flex items-center my-5">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="search" name="search" className="py-[11px] px-5 rounded-lg" placeholder="Search Your Job..." id="" />
            <FaSearch className="absolute text-gray-400 top-3 text-2xl left-[184px]"></FaSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
