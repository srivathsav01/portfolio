import './navbar.css';
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, Luggage, PlaneTakeoff, ShoppingCart, UserCheck } from 'lucide-react';

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
        <div className="navBar mt-1">
            <div className={`mx-1 ${width>1023 ? 'grid grid-cols-4 gap-2' : 'grid grid-rows-4 grid-flow-col gap-4'}`}>
                <div className='bg-[#212121] h-[80px] flex items-center justify-between p-2'>
                     <ArrowUpRight color="white" size="44px" strokeWidth="3px"/>
                     <div className='flex flex-col text-start w-[65%]'>
                        <text className="text-white airport-text font-custom">CHECK - IN</text>
                        <text className="text-[#FFCC00] sub-text font-montserrat">ABOUT ME</text>
                     </div>
                     <UserCheck fill="white" color="white" size="44px"/>
                </div>
                <div className='bg-[#212121] h-[80px] flex items-center justify-between p-2'>
                     <ArrowUpLeft color="white" size="44px" strokeWidth="3px"/>
                     <div className='flex flex-col text-start w-[65%]'>
                        <text className="text-white airport-text font-custom">DUTY FREE SHOPPING</text>
                        <text className="text-[#FFCC00] sub-text font-montserrat">PROJECTS</text>
                     </div>
                     <ShoppingCart fill="white" color="white" size="44px"/>
                </div>
                <div className='bg-[#212121] h-[80px] flex items-center justify-between p-2'>
                     <ArrowLeft color="white" size="44px" strokeWidth="3px"/>
                     <div className='flex flex-col text-start w-[65%]'>
                        <text className="text-white airport-text font-custom">DEPARTURE</text>
                        <text className="text-[#FFCC00] sub-text font-montserrat">SKILLS</text>
                     </div>
                     <PlaneTakeoff fill="white" color="white" size="44px"/>
                </div>
                <div className='bg-[#212121] h-[80px] flex items-center justify-between p-2'>
                     <ArrowRight color="white" size="44px" strokeWidth="3px"/>
                     <div className='flex flex-col text-start w-[65%]'>
                        <text className="text-white airport-text font-custom">BAGGAGE CLAIM</text>
                        <text className="text-[#FFCC00] sub-text font-montserrat">TESTIMONIALS</text>
                     </div>
                     <Luggage fill="white" color="#212121" size="44px" strokeWidth="1px"/>
                </div>
            </div>
        </div>
        </>
    );
};
 
export default NavBar;
