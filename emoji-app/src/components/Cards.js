
import React from 'react';
import Card from './Card';

const Cards = ({data}) => {

  return (
    <>
        {data && data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  )
}

export default Cards

///here we itarate the data//


