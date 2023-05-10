import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const UpdateCoffee = () => {
    const handlerUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addNewCoffee = {
            name,supplier,category,chef,taste,details,photo
        }
        console.log(addNewCoffee)
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addNewCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='w-50 mx-auto updateContainer p-4 mt-4 rounded'>
            <Form onSubmit={handlerUpdate}>
                <div className='updateCoffeForm'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Coffee Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Coffee Name" />   
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Control type="text" name='supplier' placeholder="Enter Coffee Supplier" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name='category' placeholder="Enter Coffee Category" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Chef</Form.Label>
                    <Form.Control type="text" name='chef' placeholder="Enter Coffee Chef" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Teste</Form.Label>
                    <Form.Control type="text" name='taste' placeholder="Enter Coffee Taste" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text" name='details' placeholder="Enter Coffee details" />
                </Form.Group>
                </div>
                <Form.Group className="mb-3 p-2 border-none " controlId="formBasicPassword">
                <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Coffee photo" /> 
                </Form.Group>
                <Form.Group className="mb-3 p-2 border-none" controlId="formBasicPassword">
                 <input className='w-100 rounded h5 mt-4' type="submit" value="Add Coffee" />   
                </Form.Group>
            </Form>
        </div>
    );
};

export default UpdateCoffee;