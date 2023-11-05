import { useState } from "react";
import Banner from "./Banner/Banner";
import HomeTab from "./HomeTab";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";

const Home = () => {
    const [input, setInput] = useState('');
    const allJobs = UseAllJobs();
    return (
        <div className="bg-sky-200">
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