import React from 'react';
import image1 from '../../assets/gallary/image1.png'
import image2 from '../../assets/gallary/image2.png'
const Gallery = () => {
    return (
        <div className='md:w-[80%] mx-auto my-28'>
               <div className="mb-4">
                <h2 className='text-3xl font-bold text-center mt-4'>Our Gallery</h2>
               </div>
               <div className="md:grid grid-cols-2 justify-center items-center border gap-4">
                    <div className="mb-4 md:mb-0">
                        <img src={image1} alt="" className="md:h-[700px] w-full mx-auto mt-10" />
                    </div>
                    <div className="md:grid grid-cols-2 gap-2  mt-10">
                     <img src={image2} alt="" className="md:h-[350px] w-full " />
                     <img src={image2} alt="" className="md:h-[350px] w-full "/>
                     <img src={image2} alt="" className="md:h-[350px] w-full " />
                     <img src={image2} alt="" className="md:h-[350px] w-full " />
                
                    </div>
               </div>
            
        </div>
    );
};

export default Gallery;