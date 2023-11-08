import { FaDocker, FaFile, FaSearch, FaUsers } from 'react-icons/fa';

const HomeJobProcess = () => {
    return (
        <div className="my-5">
            <h2 className="text-4xl font-bold text-center">Our Job <span className="text-[#FF3611]">Process</span></h2>
            <div className="py-6"><hr /></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 text-center">
                <div className="border-2 rounded-lg p-5 hover:bg-sky-200">
                  <div className='text-3xl font-bold p-5 rounded-full bg-gray-200  hover:bg-sky-200 inline-block'> <FaUsers />
                    </div> 
                    <h2 className='text-2xl font-bold text-[#FF3611]'>Create Account</h2>
                    <p>This feature allows users to register and create their unique profiles on your website. Users can provide essential personal information, such as their name, contact details, and a customized username and password.</p>
                </div>
                <div className="border-2 rounded-lg p-5 hover:bg-sky-200">
                   <div className='text-3xl font-bold p-5 rounded-full bg-gray-200  hover:bg-sky-200 inline-block'><FaSearch />
                    </div> 
                    <h2 className='text-2xl font-bold text-[#FF3611]'>Search Job</h2>
                    <p>The "Search Job" feature empowers users to explore a comprehensive database of job listings. Users can specify their search criteria, including job title, location, industry, or other relevant filters, to discover job opportunities that match their preferences.</p>
                </div>
                <div className="border-2 rounded-lg p-5 hover:bg-sky-200">
                 <div className='text-3xl font-bold p-5 rounded-full bg-gray-200  hover:bg-sky-200 inline-block'><FaFile />
                    </div>   
                    <h2 className='text-2xl font-bold text-[#FF3611]'>Upload Resume</h2>
                    <p> This feature streamlines the application process by allowing job seekers to attach their CVs directly to job applications, making it easier for employers to review and consider applicants. </p>
                </div>
            </div>
        </div>
    );
};

export default HomeJobProcess;