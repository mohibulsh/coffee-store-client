import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { Container } from 'react-bootstrap';

const AddCoffee = () => {
    const coffees =useLoaderData()
    return (
        <Container className='mx-auto'>
            <h3>Add the Coffee </h3>
              <div className='addCoffeeContainer'>
              {
                coffees.map(coffee=><CoffeeCard
                key={coffee._id}
                coffee={coffee}
                />)
            }
                </div>     
        </Container>
    );
};

export default AddCoffee;