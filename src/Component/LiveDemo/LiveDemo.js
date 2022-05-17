import React from 'react';

const LiveDemo = () => {
    return (
        <div className='p-5'>
            <h1 className='text-4xl mb-5 text-blue-500'>Live Demo</h1>
        <div className='lg:grid grid-cols-4 '>
            <iframe className='mt-5 mb-5 w-full'  src="https://www.youtube.com/embed/1oj6RL4gJcE" title="YouTube video player" allowfullscreen="allowfullscreen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='mt-5 mb-5 w-full' src="https://www.youtube.com/embed/XMX_7cwWZwI" title="YouTube video player" allowfullscreen="allowfullscreen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='mt-5 mb-5 w-full'  src="https://www.youtube.com/embed/gYPMG-8YmLU" title="YouTube video player" allowfullscreen="allowfullscreen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='mt-5 mb-5 w-full'  src="https://www.youtube.com/embed/ZRb-eY5QOv0" allowfullscreen="allowfullscreen" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    );
};

export default LiveDemo;