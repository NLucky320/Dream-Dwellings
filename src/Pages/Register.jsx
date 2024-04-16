
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const { createUser } = useAuth();
    // console.log(createUser)
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


//handle register
    const onSubmit = e => {
        toast('registered successfully')
        console.log(e)
        // e.preventDefault();
        const { email, password } = e;
        createUser(email, password)
           .then(result => {
				if (result.user) {
					navigate(from)
				// console.log(result.user)
			}
        })
         .catch(error => {
            console.log(error.message);
        });
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(e.currentTarget)
        // const form = new FormData(e.currentTarget)
        // const name = form.get('name');
        // const photo = form.get('photo');
        // const email = form.get('email');
       
        // const password = form.get('password');
        // console.log(name, photo, email, password)

    }
    return (
           <div className="card shrink-0 md:w-3/4 lg:w-1/2 mx-auto shadow-2xl bg-base-100 mt-12">
                <div>
                    <h2 className="text-2xl text-center pt-4">Please Register</h2>
                </div>
                      <Helmet>
              <title>Dream Dwellings | Register</title>  
            </Helmet>
                
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <Toaster></Toaster>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered"
                        {...register("yourName", { required: true })}
                    />
                    {errors.yourName && <span className='text-red-500'>This field is required</span>}
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"
                    {...register("photoURL", { required: true })}
                    />
                    {errors.photoURL && <span className='text-red-500 '>This field is required</span>}

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
                        <button className="btn  bg-[#23BE0A] text-white rounded">Register</button>
                    </div>
                </form>
                 <p className="text-center mb-4">Already have an account? Please <Link className="text-red-500 font-bold" to='/login'> Login</Link> </p>
            </div>
    );
};

export default Register;