

const AllJobsBanner = () => {
    return (
        <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/J78K8BD/pexels-moose-photos-1037995.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className=" bg-[rgba(0,0,0,0.4)] absolute h-full w-full ">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h2 className="text-white font-bold text-4xl">
              All <span className="text-[#FF3611]">Job</span>
            </h2>
          </div>
        </div>
      </div>
    );
};

export default AllJobsBanner;