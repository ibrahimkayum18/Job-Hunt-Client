import { FaBusinessTime, FaTextHeight, FaUser } from "react-icons/fa";
import { MdDescription, MdDateRange, MdNumbers } from "react-icons/md";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddJob = () => {
    const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleAddJob = e => {
    e.preventDefault();
    const form = e.target;
    const jobPhoto = form.jobPhoto.value; 
    const jobTitle = form.jobTitle.value;
    const userName = form.userName.value;
    const category = form.category.value;
    const jobDescription = form.jobDescription.value;
    const salary = form.salary.value;
    const postingDate = form.postingDate.value;
    const jobApplicantsNumber = form.jobApplicantsNumber.value;
    const email = user.email;
    const applicationDeadline = startDate;
    const job = {jobPhoto, jobTitle, userName, category, jobDescription, salary, postingDate, jobApplicantsNumber, email, applicationDeadline}

    axios.post('https://job-hub-server-six.vercel.app/allJobs', job)
    .then(res => {
        if(res.data.acknowledged){
            toast.success('Job Addeded Successfully')
        }
    })

  }


  return (
    <div className="mb-20">
      <Helmet>
        <title>Add Job | Job Hub</title>
      </Helmet>
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
              Add Your <span className="text-[#FF3611]">Job</span>
            </h2>
          </div>
        </div>
      </div>
      <form onSubmit={handleAddJob}  className="w-11/12 md:w-11/12 mx-auto space-y-5 mt-10 lg:p-10 lg:border rounded-lg">
        <h2 className="text-center text-4xl font-bold">Add Job Now</h2>
        <div className="md:flex justify-center items-center gap-5 space-y-5">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Picture URL of the Job Banner</label>
            <div>
              <FaBusinessTime className="absolute text-primarycolor text-2xl text-gray-500"></FaBusinessTime>
            </div>
            <input
              type="text"
              name="jobPhoto"
              placeholder="Picture URL..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Job Title</label>
            <div>
              <FaTextHeight className="absolute text-primarycolor text-2xl text-gray-500"></FaTextHeight>
            </div>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-5 space-y-5">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">User Name</label>
            <div>
              <FaUser className="absolute text-primarycolor text-2xl text-gray-500"></FaUser>
            </div>
            <input
              type="text"
              name="userName"
              defaultValue={user.displayName}
              placeholder="User Name..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Job Category</label>

            <select
              name="category"
              className="pl-2 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            >
              <option value="on-site">On Site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-5 space-y-5">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Job Description</label>
            <div>
              <MdDescription className="absolute text-primarycolor text-2xl text-gray-500"></MdDescription>
            </div>
            <input
              type="text"
              name="jobDescription"
              placeholder="Description..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="flex flex-col md:w-1/2 relative">
            <label className="py-3">Salary Range</label>

            <select
              name="salary"
              className="pl-2 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            >
              <option value="40">40k</option>
              <option value="50">50k</option>
              <option value="60">60k</option>
              <option value="70">70k</option>
            </select>
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-5 space-y-5">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Posting Date</label>
            <div>
              <MdDateRange className="absolute text-primarycolor text-2xl text-gray-500"></MdDateRange>
            </div>
            <input
              type="date"
              name="postingDate"
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Job Applicants Number</label>
              <div>
                <MdNumbers className="absolute text-primarycolor text-2xl text-gray-500"></MdNumbers>
              </div>
              <input
              type="number"
              name="jobApplicantsNumber"
              defaultValue={0}
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
            </div>
            
        </div>
        <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Application Deadline</label>
              
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
                />
              </div>
            </div>
            <button type="submit" className="font-bold bg-sky-300 w-full py-3 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;
