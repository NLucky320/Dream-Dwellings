import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const from = '/';

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, yourName, photoURL } = data;
        createUser(email, password)
            .then(() => {
                // Register successful, update user profile
                updateUserProfile(yourName, photoURL)
                    .then(() => {
                        navigate(from);
                        toast('Registered successfully');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="card shrink-0 md:w-3/4 lg:w-1/2 mx-auto shadow-2xl bg-base-100 mt-12">
            <div>
                <h2 className="text-2xl text-center pt-4">Please Register</h2>
            </div>
            <Helmet>
                <title>Dream Dwellings | Register</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <Toaster />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered"
                        {...register('yourName', { required: true })}
                    />
                    {errors.yourName && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        className="input input-bordered"
                        {...register('photoURL', { required: true })}
                    />
                    {errors.photoURL && <span className="text-red-500 ">This field is required</span>}

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            className="input input-bordered pr-12"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            })}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {errors.password && errors.password.type === 'required' && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    {errors.password && errors.password.type === 'minLength' && (
                        <span className="text-red-500">Password must be at least 6 characters long</span>
                    )}
                    {errors.password && errors.password.type === 'pattern' && (
                        <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter</span>
                    )}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#23BE0A] text-white rounded">Register</button>
                </div>
            </form>
            <p className="text-center mb-4">
                Already have an account? Please <Link className="text-red-500 font-bold" to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
