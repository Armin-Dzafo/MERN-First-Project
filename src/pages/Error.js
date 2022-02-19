import React from 'react';
import image from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={image} alt='errorPage' />
        <h3>Oh! Page not found</h3>
        <p>The page you were looking for cannot be found</p>
        {/* <a href='/'>Back Home</a> */}
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
