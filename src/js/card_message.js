import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';

class CardMessage extends PureComponent {

  createCardMessageInner() {
    if(this.props.isDisabled){
      return this.createDisabled()
    } else if(this.props.isSelected){
      return this.createSelected();
    }

    return this.createDefault();
  }

  createDisabled() {
    return (
        <div className={classNames('cardMessage__text', 'cardMessage__text--warning')}>
          {this.props.DISABLED}
        </div>
    );
  }

  createSelected() {
    return (
        <div className='cardMessage__text'>
          {this.props.SELECTED}
        </div>
    );
  }

  createDefault() {
    const clickHandler = this.props.linkClickHandler;

    return (
        <Fragment>
          <span className='cardMessage__text'>
            {this.props.DEFAULT.MESSAGE}
          </span>
          {` `}
          <span className={classNames('cardMessage__link', 'link')} onClick={clickHandler}>
            {this.props.DEFAULT.BUY_LINK_TEXT}
          </span>
          <div className={classNames('cardMessage__text', 'cardMessage__text--likeLink')}>.</div>
        </Fragment>
    );
  }

  render() {
    return (
        <div className='cardMessage'>
          {this.createCardMessageInner()}
        </div>
    );
  }
}

export default CardMessage;
