import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import SocialLogin from '../components/SocialLogin';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { signInUser } = useAuth();
    
    //navigation
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state || '/';
    // console.log(location)
    

   const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
     
   const { email, password } = data;
        // console.log(data)
        toast('logged in successfully')
    signInUser(email, password)
        .then(result => {
				if (result.user) {
					navigate(from)
				// console.log(result.user)
			}
        })
        .catch(error => {
            console.log(error.message);
        });
};

    return (
       <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 mx-auto mt-12">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center dark:text-gray-600">Do not have account? Please 
		<a href="/register" rel="noopener noreferrer" className="text-red-500 font-bold"> Register </a>
	</p>

	<div className="flex items-center w-full my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                         <Helmet>
              <title>Dream Dwellings | Login</title>  
            </Helmet>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered"  
                    {...register("email", { required: true })}
                    />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" 
                     {...register("password", { required: true })}
                    />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#23BE0A] text-white rounded">Login</button>
                    </div>
                </form>
	</div>
<SocialLogin></SocialLogin>
      
</div>
    );
};

export default Login;