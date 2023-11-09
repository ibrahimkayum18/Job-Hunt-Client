

const HomeAbout = () => {
    return (
        <div  data-aos="fade-up">
            <h2 className="text-center text-4xl font-bold my-6">About Us</h2>
            <div className="py-5"><hr /></div>
            <div className="lg:flex items-center justify-center">
            <div className="lg:w-1/2">
                <img className="w-full p-5" src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="lg:w-1/2 p-5">
                <h2 className="text-2xl mt-6 lg:text-3xl pl-5 border-l-8 border-sky-300 font-bold">Why Choose Us?</h2>
                <div className="py-6">
                <hr />
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold">1. Find Your Dream Job or Perfect Candidate with Us</h2>
                <p>Our platform is a place where job seekers can discover the ideal job and employers can find the perfect candidate. It's all about connecting people with their dream opportunities.</p>
                <h2 className="text-xl lg:text-2xl font-semibold">2. Effortless Job Matching</h2>
                <p>Our  platform simplifies the job search and hiring process by matching the right candidates with the right jobs through advanced algorithms and filters.</p>
                <h2 className="text-xl lg:text-2xl font-semibold">2. Endless Job Opportunities</h2>
                <p>We have the vast number of job listings available on your platform, showing that users have a wide range of choices, whether they're job seekers or employers.</p>
            </div>
        </div>
        </div>
    );
};

export default HomeAbout;