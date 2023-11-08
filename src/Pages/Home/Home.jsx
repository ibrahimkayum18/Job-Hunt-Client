import { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import HomeTab from "./HomeTab";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import HomeAbout from "./HomeAbout";
import HomeJobProcess from "./HomeJobProcess";
import { Helmet } from "react-helmet";

const Home = () => {
  const [input, setInput] = useState("");
  // const [data, setData] = useState([])
  const { user } = useContext(AuthContext);
  const { data = [] } = UseAllJobs();
  // useEffect(() => {
  //     axios.get(`https://job-hub-server-six.vercel.app/allJobs?email=${user?.email}`,{withCredentials:true})
  //     .then(res => {
  //         setData(res.send)
  //     })
  // },[user?.email])
  return (
    <div className="">
      <Helmet>
        <title>Home | Job Hub</title>
      </Helmet>
      <Banner setInput={setInput} input={input}></Banner>
      <HomeTab data={data}></HomeTab>
      <HomeAbout></HomeAbout>
      <HomeJobProcess></HomeJobProcess>
    </div>
  );
};

export default Home;
