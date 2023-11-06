import { useState } from "react";
import Banner from "./Banner/Banner";
import HomeTab from "./HomeTab";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";

const Home = () => {
    const [input, setInput] = useState('');
    const {data} = UseAllJobs();
    console.log(data)
    return (
        <div className="">
            <Banner 
            setInput={setInput} 
            input={input}
            ></Banner>
            
            <HomeTab></HomeTab>
            <div className="h-screen"></div>
        </div>
    );
};

export default Home;