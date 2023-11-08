import { useContext, useEffect, useRef, useState } from "react";
// import useApplyed from "../../Hooks/useApplyed/useApplyed";
// import MhAllJobs from "../MyJob/MhAllJobs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ApplyedCart from "./ApplyedCart";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const [applyed, setApplyed] = useState([]);
  const [filtederApplyed, setFilteredApplyed] = useState(applyed);
  const [input, setInput] = useState('all');
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a5', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfHeight - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    })
  }


  useEffect(() => {
    if(input === 'all'){
      setFilteredApplyed(applyed)
    }
    else if(applyed.length > 0){
      const filtered = applyed.filter(item => item.category === input)
      setFilteredApplyed(filtered)
    }
  },[applyed, input])

  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://job-hub-server-six.vercel.app/applyed?email=${user?.email}`, {
        // withCredentials: true
        credentials: 'includes'
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
      {/* <form  className="text-center"> */}
      <div className="flex justify-between items-center lg:px-10">
      <div className="md:flex flex-col justify-end px-5 md:w-1/4 relative">
            <label className="py-3">Filter Job</label>
            <select
              name="filter"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="pl-2 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            >
              <option  value="all">All Jobs</option>
              <option  value="on-site">On Site</option>
              <option  value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>
          <div>
            <button onClick={downloadPDF} className="btn btn-primary">Download pdf</button>
          </div>
      </div>
      {/* </form> */}
      <div className="pt-5"><hr /></div>
      <table className="table" ref={pdfRef}>
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
          {filtederApplyed.map((jobs) => (
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
