import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
	return (
	
		<section className="flex items-center h-full p-16 dark:bg-gray-50 text-black">
				<Helmet>
              <title>Dream Dwellings | Error Page</title>  
            </Helmet>
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/' className="text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]">Back to homepage</Link>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;