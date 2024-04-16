import React, { useState, useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UpdaterProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const [formData, setFormData] = useState({
        name: user.displayName || '',
        photoURL: user.photoURL || '',
    });

    useEffect(() => {
        setFormData({
            name: user.displayName || '',
            photoURL: user.photoURL || '',
        });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserProfile(formData.name, formData.photoURL)
            .then(() => {
                console.log('Profile updated successfully');
                // Optionally, you can navigate the user to a different page or show a success message here
            })
            .catch((error) => {
                console.error('Error updating profile:', error.message);
                // Optionally, you can show an error message to the user
            });
    };

    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>Dream Dwellings | Update Profile</title>
            </Helmet>
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-2xl font-bold leading-none text-center sm:text-3xl">Update Your Profile Information</h1>
                <p>Current Information</p>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={user.photoURL}
                        />
                        <p className="text-xl font-semibold leading-tight">{user.displayName}</p>
                        <p className="dark:text-gray-600">{user.email}</p>
                    </div>
                </div>
                <div>
                    <h2>Please Update the information</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                className="input input-bordered"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="photoURL"
                                className="input input-bordered"
                                value={formData.photoURL}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#23BE0A] text-white rounded">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdaterProfile;
