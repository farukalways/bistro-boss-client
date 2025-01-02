
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const PhotoLink = form.PhotoLink.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        const terms = form.terms.checked

        // console.log(fullName,
        //     PhotoLink,
        //     email,
        //     password,
        //     rePassword,
        //     terms)

        // if (password.length < 6) {
        //     setErrorMassage("Password must be at least 6 characters long.");
        //     return;
        // }

        // if (password !== rePassword) {
        //     setErrorMassage("Passwords do't match.");
        //     return;
        // }

        // if (!/[a-z]/.test(password)) {
        //     setErrorMassage("one lowercase add")
        //     return;
        // }
        // if (!/[A-Z]/.test(password)) {
        //     setErrorMassage("one Uppercase add")
        //     return;
        // }
        // if (!terms) {
        //     setErrorMassage('accept our condistion')
        //     return;
        // }

        createUser(email, password)
        .then(result=>{
            updateUserProfile(fullName, PhotoLink)
            .then(()=>{
                console.log('user profile info updated');
            })
            navigate('/')
        })
        .catch(error=>{
           console.log(error); 
        })

    }


    return (

        <div className="mx-5 md:mx-0 flex items-center mt-10">
            <div className='lg:w-4/12'>
            </div>
            <div className="w-full sm:w-4/12 mx-auto text-center">
                <div>
                    <p className='my-7'>register</p>
                    <h1 className="font-bold text-4xl">Start for free Today</h1>
                    <p className='my-2'>Access to all features. No credit card required.</p>
                </div>
                <button
                    className='w-full flex items-center justify-center gap-2 border p-3 my-5'
                    
                >
                
                    <strong>Sign up With google</strong>
                </button>
                <div className="divider mb-6">or</div>

                <form className="w-full" onSubmit={handleRegister}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Full Name*</span>
                        </label>
                        <input type="text" name='fullName' placeholder="Full Name" className="input input-bordered " required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL*</span>
                        </label>
                        <input type="url" name='PhotoLink' placeholder="Photo url" className="input input-bordered " required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Password*</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Re-Password*</span>
                        </label>
                        <input type="password" name='rePassword' placeholder="Re-Password" className="input input-bordered" required />
                       
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <label className="cursor-pointer label">
                            <input type="checkbox" name='terms' className="checkbox checkbox-info" />
                        </label>
                        <span className="label-text">Agree and terms and policy</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Submit & Register</button>
                    </div>
                    <p className='text-center my-5'>Already have an account? <Link to={'/login'} >Login</Link></p>
                </form>
            </div>
            <div className="lg:w-4/12 hidden lg:block">
            </div>
        </div>

    );
};

export default Register;