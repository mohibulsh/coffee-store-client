import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const AddCoffee = () => {
    const coffees =useLoaderData()
    console.log(coffees)
    return (
        <div>
            <h3>Add the Coffee </h3>
            {
                coffees.map(coffee=><CoffeeCard
                key={coffee._id}
                coffee={coffee}
                />)
            }
        </div>
    );
};

export default AddCoffee;