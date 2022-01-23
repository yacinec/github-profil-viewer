import React, { useState, useEffect } from 'react';
import './Searcher.css';

export default function Searcher() {
  const [user, setUser] = useState('');

  return (
    <div className='searcher'>
      <div className='searcher--content'>
        <h2>Search a Github profil</h2>
        <div className='form'>
          <input
            type='text'
            className='seacher--input'
            placeholder='Search for a github user...'
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            className='searcher--btn'
            onClick={(e) => {
              window.location = '?username=' + user;
            }}
            disabled={user === ''}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
