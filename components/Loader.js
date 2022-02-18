import React from 'react';

const Loader = () => {
    return <div className='h-screen flex justify-center items-center'>
        <div className="h-10 w-10 rounded-full m-2  border-4 flex-shrink-0 animate-pulse" />
        <div className="h-10 w-10 rounded-full m-2  border-4 flex-shrink-0 animate-pulse" />
        <div className="h-10 w-10 rounded-full m-2  border-4 flex-shrink-0 animate-pulse" />
    </div>;
};

export default Loader;
