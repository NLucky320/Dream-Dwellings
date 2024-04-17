import React, { useEffect, useState } from 'react';
import useEstatesData from '../Hooks/useEstatesData';
import Estate from './Estate';

const Estates = () => {

    const [estates, setEstates] = useState([]);
    const { data } = useEstatesData();
    useEffect(() => {
        setEstates(data)
    },[data])
    return (
        <div>
             <div className="p-4 mt-12 md:mt-[80px] text-center"> 
                <div className='max-w-[700px] mx-auto pb-6'>
                    <h2 className="font-bold text-[40px] pb-6">Estates</h2>
                <p>Discover a lifestyle of unparalleled comfort and sophistication within our meticulously designed homes, crafted to exceed the highest standards of quality and elegance. </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {
                estates.map(estate => <Estate key={estate.id} estate={estate}></Estate> )
            }
            </div>
        </div>
        </div>
    );
};

export default Estates;