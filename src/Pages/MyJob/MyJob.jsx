import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MhAllJobs from "./MhAllJobs";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";

const MyJob = () => {
  const [allCreatedJobs, setAllCreatedJobs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allJobs?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllCreatedJobs(res.data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/allJobs/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = allCreatedJobs.filter(
                (item) => item._id !== id
              );
              console.log("deleted", remaining);
              setAllCreatedJobs(remaining);
            }
          });

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>My Jobs | Job Hub</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Delete</label>
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
                handleDelete={handleDelete}
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
