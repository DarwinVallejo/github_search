import React, { FC } from 'react'
import { MdStar } from 'react-icons/md';
import { User } from '../../models/user'


const UserItem: FC<User> = ({ login, score, avatarUrl, htmlUrl }) => {
  const getStars = [...Array(score)].map((_, index) => <MdStar key={index} className='has-text-warning' />);

  return (
    <div className="box has-text-centered" data-testid='user-item'>
      <h1 className='title is-4'>{login}</h1>
      <figure className='image container is-64x64 is-centered'>
        <img alt={login}
          className='is-rounded '
          src={avatarUrl} />
      </figure>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">
              score
            </p>
            <div>
              {getStars}
              {score < 1 && <p className='title-is-5'>N/A</p>}
            </div>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Sitio</p>
            <a className='title is-6' href={htmlUrl} target="_blank">
              Visitar
            </a>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default UserItem;