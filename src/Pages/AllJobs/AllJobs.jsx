import { FaSearch } from "react-icons/fa";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import AllJobsBanner from "./AllJobsBanner";
import AllJobsCart from "./AllJobsCart";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllJobs = () => {
  const [input, setInput] = useState('');
  const { data = [] } = UseAllJobs();
  // console.log(data)

  return (
    <div>
      <Helmet>
        <title>All Jobs | Job Hub</title>
      </Helmet>
      <AllJobsBanner></AllJobsBanner>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="text-2xl mb-4 text-center font-bold">Search Job By Name</h2>
        <div className="relative flex items-center  ">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="search" name="search" className="input pl-10 input-bordered w-full" placeholder="Search Your Job..." id="" />
            <FaSearch className="absolute text-gray-400 top-3 text-2xl left-2"></FaSearch>
          </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
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
            {data.filter(jobs => {
              return input.toLowerCase() === '' ? jobs : jobs.jobTitle.toLowerCase().includes(input);
            }).map((jobs) => (
              <AllJobsCart key={jobs._id} jobs={jobs}></AllJobsCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
