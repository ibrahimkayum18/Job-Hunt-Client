import { useQuery } from "@tanstack/react-query";


const useApplyed = () => {
    const {data, isLoading, refetch} = useQuery({
        queryKey:["totalJobs"],
        queryFn: async() => {
            const fetchedJobs = await fetch('http://localhost:5000/applyed');
            const allJobs = await fetchedJobs.json();
            return allJobs;
        }
    })

    return {data, isLoading, refetch};
};

export default useApplyed;