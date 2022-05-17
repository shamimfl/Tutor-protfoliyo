import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center p-5'>
            <div className='lg:w-2/4'>
               <h1 className='text-5xl font-bold text-blue-500'>Hello World,</h1>
                <p className='text-xl mt-5 text-slate-500'>I am <span className='text-3xl text-blue-500 font-bold'> Abdul Ahad</span> I am a senior teacher at Dalua High School and College
                I am a genius teacher of mathematics and Islam ,Besides, I have enough ideas about "ICT".I teach all the work of Microsoft, and video editing, photo editing etc...</p>
            </div>
            <div className='flex justify-end bg-blue-500 rounded-full mt-10'>
                <img className=' h-96 w-96' src="https://pngimg.com/uploads/teacher/teacher_PNG56.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;