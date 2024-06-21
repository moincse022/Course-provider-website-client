import bgImg from '../../../assets/home/banner-1.jpg'

const Hero = () => {
    return (
        <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImg})`}}>
            <div className="min-h-screen flex items-center justify-start pl-10 text-white bg-black bg-opacity-60">
                 <div className="space-y-4">
                    <p className='md:text-4xl text-2xl'>We Provider</p>
                    <h1 className='md:text-5xl text-4xl font-bold '>Best Online  Platform</h1>
                   <div className="md:w-1/2">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse voluptatum optio fuga enim a atque officiis unde repudiandae ratione.</p>
                   </div>
                   <div className="flex items-center gap-5">
                     <button className="bg-secondary font-bold text-white px-5 py-2 rounded-md uppercase">Join Today</button>
                     <button className="border font-bold text-white px-5 py-2 rounded-md uppercase">View Course</button>

                   </div>
                 </div>
            </div>
        </div>
    );
};

export default Hero;