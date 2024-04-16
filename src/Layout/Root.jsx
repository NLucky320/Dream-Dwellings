import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div className='max-w-6xl mx-auto mt-4'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;