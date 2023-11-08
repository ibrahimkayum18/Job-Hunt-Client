import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import { FaUser, FaVoicemail } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const Details = () => {
  const [job, setJob] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { data = [] } = UseAllJobs();
  useEffect(() => {
    if (data.length > 0) {
      const find = data.find((item) => item._id === id);
      setJob(find);
    }
  }, [data, id]);
  const {
    _id,
    email,
    jobPhoto,
    userName,
    category,
    applicationDeadline,
    salary,
    postingDate,
    jobApplicantsNumber,
    jobDescription,

    jobTitle,
  } = job || {};

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const portfolio = form.portfolio.value;
    const apply = {
      name,
      email,
      portfolio,
      jobPhoto,
      category,
      applicationDeadline,
      salary,
      postingDate,
      jobDescription,
      jobTitle,
    };

    axios.post("http://localhost:5000/applyed", apply).then((res) => {
      console.log(res.data);
      toast.success(`You have applyed this job`);
      if (res.data.acknowledged) {
        toast.success(`You have applyed this job`);
      }
    });

    emailjs
      .sendForm(
        "service_tmsqied",
        "template_7sv94ud",
        name,
        userName,
        "tMERoPQH5j-SF1xsE"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Check Email");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // const handleUpdate = ({_id}) =>{
  //   console.log(_id);
  // axios.patch(`http://localhost:5000/applyed/${_id}`,{jobApplicantsNumber: jobApplicantsNumber + 1})
  // .then(res => {
  //   console.log(res.data);
  //   // toast.success('job updated successfully')
  // })
  // }

  return (
    <div className="lg:flex justify-center items-center gap-6">
      <Helmet>
        <title>Job Details | Job Hub</title>
      </Helmet>
      <div className="lg:w-1/2">
        <img className="w-full" src={jobPhoto} alt="" />
      </div>
      <div className="lg:w-1/2 space-y-3">
        <h2 className="text-2xl font-bold ">{jobTitle}</h2>
        <button className="px-4 py-1 rounded-lg bg-sky-300">{category}</button>
        <h2 className="text-xl">
          Author: <span className="font-bold">{userName} </span>
        </h2>
        <h2 className="text-xl">
          Salary: <span className="font-bold">{salary}k</span>
        </h2>
        <p>
          Posted Date: <span className="font-bold">{postingDate}</span>
        </p>
        <p>
          Applicants Deadline:{" "}
          <span className="text-green-500">{applicationDeadline}</span>
        </p>
        <p>{jobDescription}</p>
        {user.email !== job.email ? (
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn btn-primary my-5"
          >
            Apply Now
          </button>
        ) : (
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary mt-5">Update</button>
          </Link>
        )}
      </div>

      {/* Apply Job Modal Section */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                <ImCross />
              </button>
            </form>
          </div>
          <h2 className="text-3xl font-bold text-center my-4">Apply Now</h2>
          <form onSubmit={handleApply} className="px-5">
            <div className="md:flex justify-center items-center gap-5">
              <div className="md:flex flex-col md:w-1/2 relative">
                <label className="py-3">User Name</label>
                <div>
                  <FaUser className="absolute text-primarycolor text-2xl text-gray-500"></FaUser>
                </div>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
                />
              </div>
              <div className="md:flex flex-col md:w-1/2 relative">
                <label className="py-3">User Email</label>
                <div>
                  <FaVoicemail className="absolute text-primarycolor text-2xl text-gray-500"></FaVoicemail>
                </div>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Email..."
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
                />
              </div>
            </div>
            <div className="md:flex flex-col w-full relative">
              <label className="py-3">Portfolio Link</label>
              <div>
                <FaVoicemail className="absolute text-primarycolor text-2xl text-gray-500"></FaVoicemail>
              </div>
              <input
                type="text"
                name="portfolio"
                placeholder="Portfolio Link..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
            <div className="text-center my-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
