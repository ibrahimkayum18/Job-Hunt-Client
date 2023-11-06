import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";


const Details = () => {
    const [job, setJob] = useState([])
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const {data = []} = UseAllJobs()
    useEffect(() => {
        if(data.length > 0){
            const find = data.find(item => item._id === id)
            setJob(find);
        }
    },[data, id])
    const {
        _id,
        jobPhoto,
        userName,
        category,
        applicationDeadline,
        salary,
        postingDate,
        jobDescription,
        jobTitle,
      } = job || {};
    return (
        <div className="lg:flex justify-center items-center gap-6">
            <div className="lg:w-1/2">
                <img className="w-full" src={jobPhoto} alt="" />
            </div>
            <div className="lg:w-1/2 space-y-3">
                <h2 className="text-2xl font-bold ">{jobTitle}</h2>
                <button className="px-4 py-1 rounded-lg bg-sky-300">{category}</button>
                <h2 className="text-xl">Author: <span className="font-bold">{userName} </span></h2>
                <h2 className="text-xl">Salary: <span className="font-bold">{salary}k</span></h2>
                <p>Posted Date: <span className="font-bold">{postingDate}</span></p>
                <p>Applicants Deadline: <span className="text-green-500">{applicationDeadline}</span></p>
                <p>{jobDescription}</p>
                <button className="btn btn-primary my-5">Apply Now</button>
            </div>
        </div>
    );
};

export default Details;