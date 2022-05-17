import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='div md:flex justify-between items-center bg-blue-500'>

            <div className='flex justify-between p-5'>
                <h1>Home</h1>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>

                    <div>
                        <div className='bg-white w-5 h-1'></div>
                        <div className='bg-white w-5 h-1 mt-1'></div>
                        <div className='bg-white  w-5 h-1 mt-1'></div>
                    </div>
                </div>
            </div>
            <ul className={`md:flex justify-end  bg-blue-500 opacity-95 absolute p-5 md:static  w-full duration-500 ease-in ${open ? 'top-10' : 'top-[-120px]'}`}>
                <div className='bg-white w-full h-1 md:hidden'></div>
                <li className='md:mr-10 font-bold   text-white  '>About</li>
                <li className='md:mr-10 font-bold   text-white  '>Contact</li>
                <li className='md:mr-10 font-bold   text-white  '>Service</li>
                <li className='md:mr-10 font-bold   text-white  '>my account</li>
            </ul>
        </div>
    );
};

export default Header;