import React from 'react';
import Card from 'react-bootstrap/Card';
import { HiEye, HiPencil, HiOutlineTrash } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, photo, name, details, category, supplier, chef } = coffee;
  const handelerDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            {
             const remainigCoffee = coffees.filter(cof=>cof._id!==id)
             setCoffees(remainigCoffee)
            }
          })
      }
    })
  }
  return (
    <div className='cardContainer p-2'>
      <img style={{ width: '193px', height: '239px' }} src={photo} alt="" />
      <div>
        <h6><span className='h6'>Name</span>: {name}</h6>
        <p><span className='h6'
        >Chef</span>: {chef}</p>
        <p><span className='h6 ' >Price </span>: 890 tk</p>
      </div>
      <div>
        <p className='coffeCardIcon'> <span className='iconUpdate'><HiEye /></span></p>
        <p className='coffeCardIcon'>
          <Link to={`/updatecoffee/${_id}`}>
          <span className='iconUpdate'>< HiPencil /></span>
          </Link>
        </p>
        <p className='coffeCardIcon'>
          <span className='iconUpdate' onClick={() => handelerDelete(_id)}><HiOutlineTrash />
          </span></p>
      </div>
    </div>

  );
};

export default CoffeeCard;