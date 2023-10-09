import React from 'react';

export default function Loader() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
     <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-primary" />
    </div>
  );
}
