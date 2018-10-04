import React, { PureComponent } from 'react';
import Card from './card';

class Cards extends PureComponent {
  static createCards(cardsData) {
    return cardsData.map((cardData, index) => {
      return (
          <li className='cards__item' key={index}>
            <Card {...cardData} />
          </li>
      );
    });
  }

  render() {
    let cardsData = this.props.CARDS;
    return (
      <ul className='cards'>
        {Cards.createCards(cardsData)}
      </ul>
    );
  }
}

export default Cards;