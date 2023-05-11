import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, photo, name, details, category, supplier, chef ,taste} = coffee;
    const handlerUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {
          name, supplier, category, chef, taste, details, photo
        }
        console.log(updateCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateCoffee)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'success!',
                text: 'successfully Update the coffee',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
            }
          })
      }
    return (
        <Container>
             <h3 className='text-center'>Update the coffee</h3>
             <div className='w-50 mx-auto updateContainer p-4 mt-4 rounded'>
      <Form onSubmit={handlerUpdate}>
        <div className='updateCoffeForm'>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Coffee Name</Form.Label>
            <Form.Control type="text" defaultValue={name} name='name' placeholder="Enter Coffee Name" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Supplier</Form.Label>
            <Form.Control defaultValue={supplier} type="text" name='supplier' placeholder="Enter Coffee Supplier" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" defaultValue={category} name='category' placeholder="Enter Coffee Category" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Chef</Form.Label>
            <Form.Control type="text" name='chef' defaultValue={chef} placeholder="Enter Coffee Chef" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Taste</Form.Label>
            <Form.Control type="text" defaultValue={taste} name='taste' placeholder="Enter Coffee Taste" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Details</Form.Label>
            <Form.Control type="text" name='details' defaultValue={details} placeholder="Enter Coffee details" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 p-2 border-none " controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' defaultValue={photo} placeholder="Enter Coffee photo" />
        </Form.Group>
        <Form.Group className="mb-3 p-2 border-none" controlId="formBasicPassword">
          <input className='w-100 rounded h5 mt-4' type="submit" value="Update Coffee" />
        </Form.Group>
      </Form>
    </div>
        </Container>
    );
};

export default UpdateCoffee;