import React from 'react';
import Menuitem from '../../Shared/Menuitem/Menuitem';
import { Link } from 'react-router-dom';

const Difmenu = ({item, title}) => {
   
    return (
        <div>
        <div className='grid md:grid-cols-2 gap-4 m-10'>          
             { item.map(item => <Menuitem key={item._id} item={item}></Menuitem>)}
        </div>
        <div className='flex justify-center text-center mb-6'>
               <Link to={`/order/${title}`} >
                <button className='btn btn-outline '> View Full Menu</button>
               </Link>
             </div>
        </div>
    );
};

export default Difmenu;