
import Card from 'react-bootstrap/Card';
import React from 'react';
import './Card.css';

function MyCard({imgSrc, title, text}) {
  return (
    <Card style={{ width: '22rem', height: '400px' }} className='cards mt-3'>
      <div className="img-container">
        <Card.Img variant="top" src={imgSrc} className="card-img-center" style={{width: '100px'}}/>
      </div>
      <Card.Body>
        <Card.Title className='text-center' style={{fontSize: '20px', fontWeight: '700', fontFamily: 'Atma'}}>{title}</Card.Title>
        <Card.Text className='text-center' style={{fontSize: '16px', color: '#000', fontFamily: 'Atma'}}>
          {text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default MyCard;