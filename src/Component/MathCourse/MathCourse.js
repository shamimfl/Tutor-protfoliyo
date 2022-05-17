import React from 'react';

const MathCourse = () => {
    return (
        <div className='lg:flex justify-between items-center p-5'>
            <div className='lg:w-2/4'>
                <img className=' h-96' src="https://img.freepik.com/free-vector/formula-concept-illustration_114360-9040.jpg?t=st=1652808833~exp=1652809433~hmac=bcc0888d2a62418e8c4ea07da970ee45009f1ee1815b44d6a2c82c2115ed0679&w=740" alt="" />
            </div>
            <div>
                <h1 className='text-3xl text-blue-500 font-bold'>Class  6 to 10 Full Math Course</h1>
                <div className='text-xl text-slate-400 font-bold'>
                    <li>According to the syllabus.</li>
                    <li>With real examples.</li>
                    <li>in a Simple language.</li>
                    <li>Explained with animation video examples.</li>
                    <button className='btn bg-blue-600 mt-5 border-0 shadow-xl'>Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default MathCourse;