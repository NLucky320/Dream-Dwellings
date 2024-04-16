import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UpdaterProfile = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                  <Helmet>
              <title>Dream Dwellings | HUpdate Profile</title>  
            </Helmet>
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-2xl font-bold leading-none text-center sm:text-3xl">Update Your Profile Information</h1>
	<p>Current Information</p>
		<div className="flex justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={user.
photoURL
} />
                        <p className="text-xl font-semibold leading-tight">{user.displayName}</p>
                    </div>
                </div>
                   </div>
        </section>
    );
};

export default UpdaterProfile;