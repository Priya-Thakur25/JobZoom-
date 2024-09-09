const CombineSignup = () => {
    return (
        <>
            <div className="grid place-content-center h-screen ">
            <button type="button" className="btn btn-outline-primary m-2">SignUp as Recruiter</button>
            <button type="button" className="btn btn-outline-primary m-2">SignUp as Candidate</button>
            <div>
                <span>Already have account? </span><span className="text-sky-600"><a href="#">Sign In</a></span>
            </div>
            </div>
        </>
    );
}
export default CombineSignup;