import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
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
                <div
                    className="divider mb-6">or</div>

                <form
                    className="w-full" onSubmit={handleLogin}>
                    <div
                        className="form-control mb-3">
                        <label
                            className="label">
                            <span className="label-text">Username or Email address *</span>
                        </label>
                        <input type="email" name='email' placeholder="Email address" className="input input-bordered " required />
                    </div>
                    <div
                        className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered " required />
                    </div>
                    {/* captcha */}
                    <div
                        className="form-control mb-3">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input type="text" ref={captchaRef} name='password' placeholder=" Type the text above " className="input input-bordered " />
                        <button
                            onClick={handleValidateCaptcha}
                            className="btn btn-outline btn-xs">validate</button>
                    </div>

                    <div
                        className="form-control mt-6">
                        <button
                            disabled={disabled}
                            className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Login</button>
                    </div>
                    <p className='text-center my-5'>Donot have an Account? <Link
                        to={'/register'} >Register </Link></p>
                </form>
            </div>
            <div className="lg:w-4/12 hidden lg:block">

            </div>
        </div>
    );
};

export default Login;