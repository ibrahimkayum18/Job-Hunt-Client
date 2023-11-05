import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MhAllJobs from "./MhAllJobs";
// import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";

const MyJob = () => {
    const [allCreatedJobs, setAllCreatedJobs] = useState([])
    const {user} = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/allJobs?email=${user?.email}`)
        .then(res => {
            setAllCreatedJobs(res.data);
        })
    } ,[user?.email])


    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  Delete
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>See More</th>
            </tr>
          </thead>
          <tbody>
            {allCreatedJobs.map((jobs) => (
              <MhAllJobs 
              key={jobs._id} 
              jobs={jobs}
              ></MhAllJobs>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyJob;