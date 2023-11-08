import { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import HomeTab from "./HomeTab";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import HomeAbout from "./HomeAbout";
import HomeJobProcess from "./HomeJobProcess";

const Home = () => {
    const [input, setInput] = useState('');
    // const [data, setData] = useState([])
    const {user} = useContext(AuthContext)
    const {data = []} = UseAllJobs();
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/allJobs?email=${user?.email}`,{withCredentials:true})
    //     .then(res => {
    //         setData(res.send)
    //     })
    // },[user?.email])
    return (
        <div className="">
            <Banner 
            setInput={setInput} 
            input={input}
            ></Banner>
            <HomeTab data={data}></HomeTab>
            <HomeAbout></HomeAbout>
            <HomeJobProcess></HomeJobProcess>
        </div>
    );
};

export default Home;