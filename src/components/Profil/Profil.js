import React, { useState, useEffect } from 'react';
import './Profil.css';

import axios from 'axios';
import Repository from './../Repository/Repository';

export default function Profil({ username }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const searchingProfile = () => {
    axios
      .get('https://api.github.com/users/' + username)
      .then((data) => {
        setUser({
          name: data.data.name === null ? username : data.data.name,
          avatar: data.data.avatar_url,
          location:
            data.data.location === null ? 'Unknown' : data.data.location,
          url: data.data.html_url,
          nb_repos: data.data.public_repos,
          followers: data.data.followers,
        });

        axios
          .get('https://api.github.com/users/' + username + '/repos')
          .then((data) => {
            let newArray = [...repos];

            data.data.forEach((rep) => {
              const newRepo = {
                id: rep.id,
                name: rep.name,
                url: rep.html_url,
                stack: rep.language,
                stars: rep.stargazers_count,
                description: rep.description,
              };
              newArray.push(newRepo);
            });

            setRepos(newArray);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    searchingProfile();
  }, []);

  return (
    <div className='profil'>
      {user && (
        <>
          <div className='profil--header'>
            <div className='profil--img'>
              <img src={user.avatar} alt={user.name} />
            </div>
            <div className='profil--info'>
              <h2>👤 {user.name}</h2>
              <p>📍 {user.location}</p>
            </div>
          </div>
          <div className='profil--content'>
            <div className='content--intro'>
              <div className='content--followers'>
                <p>
                  <span className='subtitle'>Followers:</span> {user.followers}
                </p>
              </div>
              <div className='content--repos'>
                <p>
                  <span className='subtitle'>Repos:</span> {user.nb_repos}
                </p>
              </div>
              <div className='content--btn'>
                <a href={user.url}>See more</a>
              </div>
            </div>
          </div>

          <div className='repositories'>
            {repos.map((rep) => {
              if (rep !== undefined) {
                return <Repository key={rep.id} {...rep} />;
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}
