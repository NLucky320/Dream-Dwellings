
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div className="card bg-base h-full p-6 border border-solid border-[#13131326] text-left">
            <div className='text-center justify-center'>
                <figure className="pb-4 rounded-lg h-[250px] md:h-[200px] items-center text-center justify-center">
          <img src={blog.image} alt="Shoes" className="rounded-xl h-full w-full items-center text-center" />
        </figure>
            </div>
            <p>{ blog.date}</p>
          <h2 className="text-[20px] font-bold py-2 text-nowrap overflow-hidden text-ellipsis">{blog.title} </h2>
            <div className='flex justify-between'>
                <div >
                    <p className="font-medium text-[#131313CC] border-b border-dashed pb-2">{ blog.description} </p>
                </div>
                
           </div>
         <div className="pt-4">
                    <a className="btn bg-[#23BE0A] text-white rounded" href=''>View Details</a>
                </div>
        </div>
    );
};

export default Blog;