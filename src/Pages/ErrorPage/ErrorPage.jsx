import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <h2>Oops! Something went Wrong</h2>
                <p>Please return to previous page</p>
                <Link to={'/'}>
                <button className="btn btn-primary">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;