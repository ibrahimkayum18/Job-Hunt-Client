import { useContext, useEffect, useState } from "react";
import useApplyed from "../../Hooks/useApplyed/useApplyed";
import MhAllJobs from "../MyJob/MhAllJobs";
import ApplyedCart from "./ApplyedCart";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AppliedJobs = () => {
    const [applyed, setApplyed] = useState([])
    console.log(applyed);
    const {user} = useContext(AuthContext)
  useEffect(() => {
    axios.get(`http://localhost:5000/applyed?email=${user?.email}`,{withCredentials:true})
    .then(res => setApplyed(res.data))
  } ,[user?.email])
  const handleDelete = id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`http://localhost:5000/applyed/${id}`)
        .then(res => {
            console.log(res.data);
          if(res.data.acknowledged){
            const remaining = applyed.filter(item => item._id !== id);
            console.log('deleted', remaining);
            setApplyed(remaining);
          }
        })

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Application is Saved :)",
          icon: "error"
        });
      }
    });
  }
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8rnFQ7b/pexels-moose-photos-1037999.jpg)",
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
            <tr>
                {
                    applyed.length < 1 && <td>You have not applyed any job</td>
                }
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default AppliedJobs;
