import React from 'react';

import Cards from './cards';

function Page(props) {
  return (
      <div className='page'>
        <div className='page__content'>
          <h1 className='page__title'>{props.PAGE_TITLE}</h1>
          <Cards cards={props.CARDS} />
        </div>
      </div>
  );
}

export default Page;
