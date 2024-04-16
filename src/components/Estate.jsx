import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";

import { IoPricetags } from "react-icons/io5";
const Estate = ({ estate }) => {
    // console.log(estate)
    return (
    
        
      <div className="card bg-base h-full p-6 border border-solid border-[#13131326] text-left">
            <div className='text-center justify-center'>
                <figure className="pb-4 rounded-lg h-[250px] md:h-[200px] items-center text-center justify-center">
          <img src={estate.image} alt="Shoes" className="rounded-xl h-full w-full items-center text-center" />
        </figure>
        </div>
          <h2 className="text-[24px] font-bold py-2 text-nowrap overflow-hidden text-ellipsis">{estate.estate_title} </h2>
            <div className='flex justify-between'>
                <div >
                     <p className="font-medium text-[#131313CC] border-b border-dashed pb-2">Type: {estate.segment_name} </p>
                </div>
                <div className='flex justify-between gap-2 text-lg'>
                    <div className='text-md pt-1'>
                           <IoPricetags /> 
                 </div>
                    <div>
                        {estate.status}
                    </div>
                </div>
           </div>
            <div className='flex gap-2 items-start text-start pt-4 border-b border-dashed pb-2' >
                <div className='text-xl'>
                     <IoLocationSharp />
                </div>
                <div className='text-[16px] text-[
#181726]'>{ estate.location}</div>
             </div>
      
            <div className='flex justify-between pt-2 items-center'>
                 <div>
                Price: {estate.price}
                </div>
                <div>
                    <a className="btn bg-[#23BE0A] text-white rounded" href={`propertyDetails/${estate.id}`}>View Property</a>
                </div>
           </div>
        </div>
 
    );
};

export default Estate;