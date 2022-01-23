import React from 'react';
import './Repository.css';

export default function Repository({ name, description, stars, stack, url }) {
  return (
    <div className='repository'>
      <div className='repo--header'>
        <a href={url}>{name}</a>
      </div>
      <div className='repo--description'>
        <p>{description === null ? 'No description.' : description}</p>
      </div>
      <div className='repo--footer'>
        <span>
          <i className='fab fa-stack-overflow'></i>
          {stack === null ? 'Unknown' : stack}
        </span>
        <span>
          <i className='fas fa-star'></i>
          {stars}
        </span>
      </div>
    </div>
  );
}
