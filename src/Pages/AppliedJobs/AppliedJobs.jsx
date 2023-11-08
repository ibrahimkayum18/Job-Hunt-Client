import { useContext, useEffect, useState } from "react";
// import useApplyed from "../../Hooks/useApplyed/useApplyed";
// import MhAllJobs from "../MyJob/MhAllJobs";
import ApplyedCart from "./ApplyedCart";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  // const [filtederApplyed, setFilteredApplyed] = useState([]);
  const [applyed, setApplyed] = useState([]);

  const filterData = (e) => {
    e.preventDefault()
    console.log(e.target.filter.value);
    // if(items === 'all'){
    //   setFilteredApplyed(applyed)
    // }
    // const findJob = applyed.filter(item =>  item.category == items );
    // setFilteredApplyed(findJob);
  }

  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/applyed?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setApplyed(res.data));
  }, [user?.email]);

  //delete operation
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
          axios.delete(`http://localhost:5000/applyed/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.acknowledged) {
              const remaining = applyed.filter((item) => item._id !== id);
              console.log("deleted", remaining);
              setApplyed(remaining);
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
            text: "Your Application is Saved :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Applied Jobs | Job Hub</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className=" bg-[rgba(0,0,0,0.6)] absolute h-full w-full ">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h2 className="text-white font-bold text-4xl">
              Applyed <span className="text-[#FF3611]">Job</span>
            </h2>
          </div>
        </div>
      </div>
      <form onSubmit={filterData} className="text-center">
      <div className="md:flex flex-col justify-end px-5 md:w-1/4 relative">
            <label className="py-3">Filter Job</label>
            <select
              name="filter"
              className="pl-2 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            >
              <option  value="all">All Jobs</option>
              <option  value="on-site">On Site</option>
              <option  value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>
      </form>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Delete</label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Portfolio Link</th>
            <th>Salary</th>
            <th>See More</th>
          </tr>
        </thead>
        <tbody>
          {applyed.map((jobs) => (
            <ApplyedCart
              key={jobs._id}
              handleDelete={handleDelete}
              jobs={jobs}
            ></ApplyedCart>
          ))}
          <tr>{applyed.length < 1 && <td>You have not applyed any job</td>}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobs;
