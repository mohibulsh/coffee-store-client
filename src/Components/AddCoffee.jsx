import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { Container } from 'react-bootstrap';

const AddCoffee = () => {
    const loadedcoffees =useLoaderData()
    const [coffees,setCoffees]=useState(loadedcoffees)
    return (
        <Container className='mx-auto'>
            <h3>Add the Coffee </h3>
              <div className='addCoffeeContainer'>
              {
                coffees.map(coffee=><CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
                />)
            }
                </div>     
        </Container>
    );
};

export default AddCoffee;