import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from '../images/avatar.png';

const Pharmacy = () => {
  return (
    <div style={{display: 'flex',justifyContent: 'space-between'}}>
        <Card style={{ width: '12rem', border: '1px solid black', marginLeft: '2%'  }}>
            <Card.Img variant="top" src={image1} style={{width : '20%', objectFit: 'contain'}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '12rem', border: '1px solid black', marginLeft: '2%'  }}>
            <Card.Img variant="top" src={image1} style={{width : '20%', objectFit: 'contain'}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '12rem', border: '1px solid black', marginLeft: '2%'  }}>
            <Card.Img variant="top" src={image1} style={{width : '20%', objectFit: 'contain'}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Pharmacy;