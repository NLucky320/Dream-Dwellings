import React, { useEffect, useState } from 'react';
import useEstatesData from '../Hooks/useEstatesData';
import { useParams } from "react-router-dom";
import { FaChartArea } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Helmet } from 'react-helmet-async';

const EstatesDetails = () => {
     const [estate, setEstate] = useState([]);
    const { data } = useEstatesData();
      const { id } = useParams();
    useEffect(() => {
         const estate = data.find((item) => item.id == id);
        setEstate(estate)
    },[data, id])
// console.log(data)
   const {
    image,
   estate_title,
       segment_name,
       description,
       price,
       status,
       area,
       location,
       facilities
   
  } = estate|| {};
    return (
         <Card className="w-full flex-col items-center lg:flex-row my-[50px] gap-4 p-4  mt-[80px]">
    <Helmet>
              <title>Dream Dwellings | Property details</title>  
            </Helmet>
     
            <CardHeader
        shadow={false}
        floated={false}
        className="m-0  w-full md:w-4/5 lg:w-2/5 shrink-0 rounded-[30px]"
      >
                
                    <img
          src={image}
          className="h-full w-full object-cover p-8 rounded-xl"
        />
        
      </CardHeader>
      <CardBody className="space-y-2 p-4">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          { estate_title}
        </Typography>

        <Typography
          color="gray"
          className=" border-b border-dashed p-2 w-full flex justify-between"
        >
                    <div className='text-gray-800 font-bold'>
                         Type: <span>{segment_name}</span>
                   </div>
                      <div className='flex justify-between gap-2 text-lg'>
                    <div className='text-md pt-1'>
                           <IoPricetags /> 
                 </div>
                    <div>
                        {status}
                    </div>
                </div>
        </Typography>
        <Typography
          color="gray"
          className="font-medium border-b border-dashed p-2 text-gray-800"
        >
        Description: <span> {description}</span>
        </Typography>
        <div className="font-normal border-b border-dashed p-2">
          <div className="flex flex-col gap-4">
            <span className="text-gray-800 font-bold">Facilities: </span>
            { facilities &&
              facilities.map(( facility, index) => (
                <p
                  className=""
                  key={index}
                >
                
                      <div className='flex gap-2 items-center'> 
                          <div className='text-[#23BE0A]'>
                               <FaCheckCircle />
                          </div>
                          
                          <div>
                                {facility}
                          </div>
                          </div>
                </p>
                         
                      
              ))}
          </div>
        </div>
        <Typography color="gray" className="font-normal text-[#131313] flex justify-between py-2">
       <div className="flex gap-2">
            <div className='text-xl'>
             <FaChartArea />
            </div>
            <div className="">
                         <div>{area} </div>
            
                        </div> 
                    </div>   
                    <div className='flex gap-2'>
                     <div className='text-xl'>
                     <IoLocationSharp />
                </div>
                <div className='text-[16px] text-[
#181726]'>{location}</div> </div>        
        </Typography>
        <Typography color="gray" className="font-normal text-[#131313]">
           <div>
                Price: {price}
                </div>
     
        </Typography>
    
      </CardBody>
    </Card>
    );
};

export default EstatesDetails;