import React from 'react';

const Menuitem = ({item}) => {
    const {image,price,name,recipe} = item;
    return (
        <div>
        <div className='flex space-x-4 mb-5'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h1 className='text-2xl text-yellow-700'>{name}----------</h1>
                <p className='text-l text-yellow-400'>{recipe}</p>
            </div>
            <h1 className='text-2xl text-yellow-700'> ${price}</h1>
        </div>
             
        </div>
    );
};

export default Menuitem;