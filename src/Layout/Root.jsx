import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div className=' mx-auto mt-4 '>
            <div className='max-w-6xl mx-auto p-4'>
                 <Nav></Nav>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;