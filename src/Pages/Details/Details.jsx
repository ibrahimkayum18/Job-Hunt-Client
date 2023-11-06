import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";


const Details = () => {
    const {id} = useParams();
    const [singleJob, setSingleJob] = useState([]);
    const {data} = UseAllJobs();
    const {user} = useContext(AuthContext)
    useEffect(() => {
        if(data){
            const findJob = data.filter(job => job._id == id)
            setSingleJob(findJob)
        }
    } ,[data, id, user])
    console.log(singleJob)
    return (
        <div>
            <h2>Details Page</h2>
        </div>
    );
};

export default Details;