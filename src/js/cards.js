import React from 'react';
import Card from './card';

const Cards = ({cards}) => {

  function createCards(cards) {
    return cards.map((card, index) => {
      return (
          <li className='cards__item' key={index}>
            <Card {...card} />
          </li>
      );
    });
  }

  return (
      <ul className='cards'>
        {createCards(cards)}
      </ul>
  );
};

export default Cards;
