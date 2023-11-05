const AllJobsCart = ({ jobs }) => {
  console.log(jobs);
  const {
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
          <input type="checkbox" className="checkbox" />
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllJobsCart;
