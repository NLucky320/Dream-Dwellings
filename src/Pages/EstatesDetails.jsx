import React, { useEffect, useState } from 'react';
import useEstatesData from '../Hooks/useEstatesData';
import { useParams } from "react-router-dom";
import { FaChartArea } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Helmet } from 'react-helmet-async';
import image1 from '../assets/shutterstock_1495957673.png';
import Loading from '../components/Loading';

const EstatesDetails = () => {
  const [estate, setEstate] = useState(null);
  const { data } = useEstatesData();
  const { id } = useParams();

  useEffect(() => {
    const selectedEstate = data.find(item => item.id === parseInt(id));
    setEstate(selectedEstate);
  }, [data, id]);

  if (!estate) {
    return <Loading></Loading>;
  }

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    geocode
  } = estate;

  return (
    <section className='mt-12 md:mt-[80px] mx-auto'>
      <Helmet>
        <title>Dream Dwellings | Property details</title>
      </Helmet>
      <div className='w-full '>
        <div className="bg-cover rounded-[24px]" style={{
          backgroundImage: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url("${image1}")`,
        }}>
          <div className="hero-content text-center text-neutral-content">
            <div className="md:py-[50px] lg:py-[114px] p-6">
              <h1 className="mb-5 md:text-[36px] lg:text-[44px] font-bold text-[#FFFFFF] lg:w-[897px] mx-auto">Discover a place you will love to live</h1>
              <p className="mb-10 md:text-[18px] lg:w-[933px] mx-auto text-white">A knowledgeable real estate agent can be your greatest asset. They will help you navigate the market, find suitable properties, and negotiate on your behalf.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-12 max-w-[700px] mx-auto text-center'>
        <h2 className='text-4xl pb-4'>Estate Details</h2>
        <p>Discover a lifestyle of unparalleled comfort and sophistication within our meticulously designed homes, crafted to exceed the highest standards of quality and elegance. </p>
      </div>
      <Card className="w-full flex-col items-center lg:flex-row my-[50px] gap-4 p-4">
        
     
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
      <div>
        <h2 className='text-2xl text-center py-4 font-bold'>Property Location on Map</h2>
        <div  className='h-[500px]'>
           <MapContainer center={geocode} zoom={13} className='h-full' scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={geocode}>
            <Popup>
             <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default EstatesDetails;
