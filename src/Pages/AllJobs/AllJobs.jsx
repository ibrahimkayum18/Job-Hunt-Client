import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import AllJobsBanner from "./AllJobsBanner";
import AllJobsCart from "./AllJobsCart";

const AllJobs = () => {
  const { data } = UseAllJobs();
  console.log(data);

  return (
    <div>
      <AllJobsBanner></AllJobsBanner>
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
            {data.map((jobs) => (
              <AllJobsCart key={jobs._id} jobs={jobs}></AllJobsCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
