import React from 'react';
import Card from '../../Componetnts/Card';

const Tabpanel = ({item}) => {
    return (
        <div>
              <div className='grid md:grid-cols-3 gap-4 m-10 '>
            {
                item.map(item=> <Card key={item._id} item={item}></Card>)
            }
        </div>
        </div>
    );
};

export default Tabpanel;