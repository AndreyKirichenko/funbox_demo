import React, { Fragment } from 'react';
import classNames from 'classnames';

const CardMessage = ({isDisabled, isSelected, onLinkClickHandler, messages}) => {
  function createCardMessageInner() {
    if(isDisabled){
      return createDisabled()
    } else if(isSelected){
      return createSelected();
    }

    return createDefault();
  }

  function createDisabled() {
    return (
        <div className={classNames('cardMessage__text', 'cardMessage__text--warning')}>
          {messages.DISABLED}
        </div>
    );
  }

  function createSelected() {
    return (
        <div className='cardMessage__text'>
          {messages.SELECTED}
        </div>
    );
  }

  function createDefault() {
    return (
        <Fragment>
          <span className='cardMessage__text'>
            {messages.DEFAULT.MESSAGE}
          </span>
          {` `}
          <span className={classNames('cardMessage__link', 'link')} onClick={onLinkClickHandler}>
            {messages.DEFAULT.BUY_LINK_TEXT}
          </span>
          <div className={classNames('cardMessage__text', 'cardMessage__text--likeLink')}>.</div>
        </Fragment>
    );
  }

  return (
      <div className='cardMessage'>
        {createCardMessageInner()}
      </div>
  );
};

export default CardMessage;
