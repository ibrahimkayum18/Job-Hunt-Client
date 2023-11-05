import { useQuery } from "@tanstack/react-query";
// import Loading from "../../Components/Loading";



const UseAllJobs = () => {
    const {data, isLoading, refetch} = useQuery({
        queryKey:['totalJobs'],
        queryFn: async() => {
            const fetchedJobs = await fetch('http://localhost:5000/allJobs');
            const allJobs = await fetchedJobs.json();
            return allJobs;
        }
    })

    return {data, isLoading, refetch};
};

export default UseAllJobs;