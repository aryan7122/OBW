import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full mt-[500px] ml-[1000px]" style={{marginTop:"20%", marginLeft:"45%"}}>
      <DotLoader color="#3498db" size={60} />
    </div>
  );
};

export default Loader;
// 