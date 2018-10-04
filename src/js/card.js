import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';

import CardMessage from './card_message'



class Card extends PureComponent {
  state = {
    isSelected: !!this.props.IS_SELECTED,
    isDisabled: !!this.props.IS_DISABLED
  };

  isSelected() {
    return this.state.isSelected;
  }

  isDisabled() {
    return this.state.isDisabled;
  }

  cardClickHandler = () => {
    if (this.isDisabled()) {
      return;
    }

    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
  };

  getCardClassNames() {
    return classNames(
        'card',
        { 'card--disabled': this.isDisabled() },
        { 'card--active': this.isSelected() }
    );
  }

  getTagLine() {
    return this.isSelected() ? this.props.TAGLINE.SELECTED : this.props.TAGLINE.DEFAULT
  }

  getTagLineClassNames() {
    let classes = ['card__tagline'];

    if (this.isSelected()){
      classes.push('card__tagline--active');
    }

    return classNames(classes);
  }

  createDescriptionItems() {
    const descriptionData = this.props.DESCRIPTION;

    return descriptionData.map((itemData, index) => {
      return (
          <li className='card__descriptionItem' key={index}>
            {Card.processItemData(itemData)}
          </li>
      );
    });
  }

  static processItemData(itemData) {
    let words = itemData.split(' ');

    return words.map((word, index) => {
      if(Card.isNumber(word)) {
        return (
            <Fragment key={index}>
              <span className='card__number'>{word}</span>
              {` `}
            </Fragment>
        );

      } else {
        return <Fragment key={index}>
          {word}
          {` `}
        </Fragment>;
      }
    });
  }

  static isNumber(str) {
    let result = str.search(/^[0-9]*$/);
    return result !== -1;
  }

  static createBilletBackgroundParts() {
    return (
        <Fragment>
          <svg className={classNames('svg', 'card__background')}
               dangerouslySetInnerHTML={{__html: '<use xlink:href=\'#svgBillet\' />' }} />

          <svg className={classNames('svg', 'card__kitty')}
               dangerouslySetInnerHTML={{__html: '<use xlink:href=\'#svgKitty\' />' }} />
        </Fragment>
    );
  }

  createInformation() {
    const tagLine = this.getTagLine();
    const title = this.props.TITLE;
    const foodstuff = this.props.FOODSTUFF;

    return (
        <div className='card__information'>
          <span className={this.getTagLineClassNames()}>{tagLine}</span>

          <h2 className='card__title'>{title}</h2>

          <span className='card__foodstuff'>{foodstuff}</span>

          <ul className='card__description'>
            {this.createDescriptionItems()}
          </ul>

          {this.createCardWeight()}
        </div>
    );
  }

  createCardWeight() {
    const weightValue = this.props.WEIGHT;
    const weightUnit = this.props.WEIGHT_UNIT;

    return (
        <div className='card__weight'>
          <span className='card__value'>{weightValue}</span>
          <span className='card__unit'>{weightUnit}</span>
        </div>
    );
  }

  createCardMessage() {
    const messages = this.props.MESSAGES;
    const isSelected = this.isSelected();
    const isDisabled = this.isDisabled();

    return (
        <CardMessage {...messages}
                     isSelected={isSelected}
                     isDisabled={isDisabled}
                     linkClickHandler={this.cardClickHandler}
        />
    );
  }

  render() {
    return (
        <div className={this.getCardClassNames()}>
          <div className='card__billet' onClick={this.cardClickHandler}>
            {Card.createBilletBackgroundParts()}

            {this.createInformation()}
          </div>
          <div className='card__messages'>
            {this.createCardMessage()}
          </div>
        </div>
    );
  }
}

export default Card;
