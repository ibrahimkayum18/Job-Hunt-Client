import { useContext, useState,  } from "react"; //useState
// import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const MyJob = () => { 
    const [myCreatedJobs, setMyCreatedJobs] = useState([]); 
      const {user} = useContext(AuthContext)
    axios.get(`http://localhost:5000/allJobs/?email=${user.email}`)
    .then(res => {
        setMyCreatedJobs(res.data)
    })
    .catch(err => {
        console.log(err)
    })

    
    return (
        <div>
            <h2>my cart</h2>
            <h2>{user.displayName}</h2>
            <h2>{myCreatedJobs.length}</h2>
        </div>
    );
};

export default MyJob;