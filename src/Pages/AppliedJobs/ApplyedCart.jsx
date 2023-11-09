import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ApplyedCart = ({ jobs, handleDelete }) => {
  const { _id, portfolio, jobPhoto, name, category, email, salary, jobTitle } =
    jobs || {};
  return (
    <tr>
      <th>
        <label>
          <AiFillDelete
            onClick={() => handleDelete(_id)}
            className="text-3xl"
          ></AiFillDelete>
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
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        {jobTitle}
        <br />
        <span className="badge badge-ghost badge-sm">{category}</span>
      </td>
      <td>{email}</td>
      <td>{portfolio}</td>
      <td>{salary}k</td>
    </tr>
  );
};

export default ApplyedCart;
