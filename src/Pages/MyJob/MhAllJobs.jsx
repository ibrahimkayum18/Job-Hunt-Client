import axios from 'axios';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MhAllJobs = ({ jobs, handleDelete }) => {
    console.log(jobs);
    const {
        _id,
      jobPhoto,
      userName,
      category,
      applicationDeadline,
      salary,
      postingDate,
      jobTitle,
    } = jobs || {};

    

    return (
      <tr>
        <th>
          <label>
            <AiFillDelete onClick={() => handleDelete(_id)} className='text-3xl'></AiFillDelete>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={jobPhoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          {jobTitle}
          <br />
          <span className="badge badge-ghost badge-sm">{category}</span>
        </td>
        <td>{postingDate}</td>
        <td>{applicationDeadline}</td>
        <td>{salary}k</td>
        <th>
          <Link to={`/update/${_id}`}>
          <button  className="btn btn-ghost btn-xs">Update</button>
          </Link>
        </th>
      </tr>
    );
  };
  
  export default MhAllJobs;
  