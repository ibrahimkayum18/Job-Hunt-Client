import { Link } from "react-router-dom";

const HomeCart = ({job}) => {
    const {
        _id,
        jobPhoto,
        userName,
        category,
        applicationDeadline,
        salary,
        postingDate,
        jobTitle,
      } = job || {};
    return (
        <div className="flex items-center gap-5 p-5 rounded bg-base-200">
            <img className="w-56 h-48" src={jobPhoto} alt="" />
            <div>
                <div className="flex items-center justify-center gap-3">
                <h2 className="text-2xl font-bold">{jobTitle}</h2>
                <span className="text-lg   py-1 px-2 bg-sky-300 rounded-xl">{category}</span>
                </div>
                <p className="text-xl font-medium">Author: {userName}</p>
                <p>Salary: {salary}</p>
                <p>Posted Date: {postingDate}</p>
                <p>Deadline: {applicationDeadline}</p>
                <Link to={`/details/${_id}`}><button className="btn bg-sky-200">See More..</button></Link>
            </div>
        </div>
    );
};

export default HomeCart;