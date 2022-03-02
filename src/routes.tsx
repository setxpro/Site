import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import About from './pages/About/AboutPage';
import Tecnology from './pages/Tecnology/Tecnology';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

export default function RouteArea() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/tecnology' element={<Tecnology/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
}