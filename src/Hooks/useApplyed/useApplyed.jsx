import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";


const useApplyed = () => {
    const [applyed, setApplyed]  = useState([])

    useEffect(() => {
        axios.get('https://job-hub-server-six.vercel.app/applyed', {withCredentials:true})
        .then(res => {
            console.log(res.data);
            return (res.data);
            
        })
    },[])

    // const {data, isLoading, refetch} = useQuery({
    //     queryKey:["totalJobs"],
    //     queryFn: async() => {
    //         //  await axios.get('http://localhost:5000/allJobs', {withCredentials: true})
    //         //   .then(res => {
    //         //     const allJobs = res.data;
    //         //     return allJobs;
    //         //  })

    //         const fetchedJobs = await fetch('http://localhost:5000/applyed',{
    //             method:"GET",
    //             credentials: "include",
    //         });
    //         const allJobs = await fetchedJobs.json();
    //         return allJobs;
    //     }
    // })

    // return {data, isLoading, refetch};
};

export default useApplyed;