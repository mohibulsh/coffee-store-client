import React from 'react';
import Card from 'react-bootstrap/Card';

const CoffeeCard = ({coffee}) => {
    console.log(coffee)
    const {photo}=coffee
    return (
        <Card className='d-flex' style={{ width: '18rem' }}>
        <Card.Img className='ms-0' variant="top" src={photo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default CoffeeCard;