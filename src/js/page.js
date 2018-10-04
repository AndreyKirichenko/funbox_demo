import React, { PureComponent } from 'react';

import Cards from './cards';


class Page extends PureComponent {
  render() {
    return (
        <div className='page'>
          <div className='page__content'>
            <h1 className='page__title'>{this.props.PAGE_TITLE}</h1>
            <Cards {...this.props} />
          </div>
        </div>
    );
  }
}

export default Page;