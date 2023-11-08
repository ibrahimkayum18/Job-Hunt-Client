import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
// import Loading from "../../Components/Loading";



const UseAllJobs = () => {
    // useEffect(() => {
    //     axios.get('http://localhost:5000/allJobs', {withCredentials: true})
    //     .then(res => {
    //         const data = res.data
    //         return data;
    //     })
    // },[])
    const {data, isLoading, refetch} = useQuery({
        queryKey:["totalJobs"],
        queryFn: async() => {
            //  await axios.get('http://localhost:5000/allJobs', {withCredentials: true})
            //   .then(res => {
            //     const allJobs = res.data;
            //     return allJobs;
            //  })

            const fetchedJobs = await fetch('http://localhost:5000/allJobs',{
                method:"GET",
                
            });
            const allJobs = await fetchedJobs.json();
            return allJobs;
        }
    })

    return {data, isLoading, refetch};
};

export default UseAllJobs;