import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div className="mx-5 md:mx-0 flex items-center mt-10">
            <div className='lg:w-4/12'>
            </div>
            <div className="w-full sm:w-4/12 mx-auto text-center">
                <div>
                    <p className='my-7'>Wellcome back</p>
                    <h1 className="font-bold text-4xl">Member Login</h1>
                    <p className='my-2'>Access to all features. No credit card required.</p>
                </div>

                <button
                    className='w-full flex items-center justify-center gap-2 border p-3 my-5'
                >
                    <strong>Sign up With google</strong>
                </button>
                <div className="divider mb-6">or</div>

                <form className="w-full" onSubmit={handleLogin}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Username or Email address *</span>
                        </label>
                        <input type="email" name='email' placeholder="Email address" className="input input-bordered " required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered " required />
                    </div>

                    <div className='flex items-center justify-between mb-3'>
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover text-sm">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Login</button>
                    </div>
                    <p className='text-center my-5'>Don't have an Account? <Link
                        to={'/register'} >Register </Link></p>
                </form>
            </div>
            <div className="lg:w-4/12 hidden lg:block">
                
            </div>
        </div>
    );
};

export default Login;