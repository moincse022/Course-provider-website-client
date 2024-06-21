import React from 'react';

const Card = ({item}) => {
    console.log(item)
    const {_id,name,image,availableSeats,price,totalEnrolled  } = item;
    return (
        <div className='shadow-lg rounded-lg p-4 flex flex-col justify-between border overflow-hidden  border-secondary m-4'>
            <img src={image} alt="" className="h-52" />
            <div className="">
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-lg font-semibold'>Available Seats: {availableSeats}</p>
                <p className='text-lg font-semibold'>Price: {price}</p>
                <p className='text-lg font-semibold'>Total Students: {totalEnrolled}</p>
                <div className="my-2">
                    <button type='btn' className='w-full rounded-xl p-1 font-bold  text-white bg-secondary'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;