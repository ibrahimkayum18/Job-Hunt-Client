import { TypeAnimation } from "react-type-animation";
import { FaSearch } from "react-icons/fa";

const Banner = ({ input, setInput }) => {
  const handleSearch = e => {
    e.preventDefault();
    const search = e.target.search.value;
    setInput(search);
  }
  console.log(input);
  return (
    <div
    data-aos="flip-right"
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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            Find Your <span className="text-[#FF3611]">Dream Job</span>
          </h2>
          <div className="my-2">
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

          {/* <div className="relative flex items-center my-5">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="search"
              name="search"
              className="py-[11px] px-5 rounded-lg"
              placeholder="Search Your Job..."
              id=""
            />
            <FaSearch className="absolute text-gray-400 top-3 text-2xl left-[184px]"></FaSearch>
          </div> */}
          <form onSubmit={handleSearch} className="flex items-center my-5">
            <input  className="py-2 w-[80%] px-5" type="text" placeholder="Search.." name="search" />
            <button className="text-white text-2xl px-4 py-2 bg-[#FF3611]" type="submit"><FaSearch /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
