import React, { FC } from 'react'
import { MdShare, MdStarBorder, MdVisibility } from 'react-icons/md';
import { Repository } from '../../models/repository'

const RepositoryItem: FC<Repository> = (
  {
    fullName,
    description,
    owner,
    language,
    stargazersCount,
    forksCount,
    watchsersCount,
    htmlUrl
  }) => (
  <div className='box' data-testid='repository-item' >
    <article className='media'>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{fullName}</strong>
            <a href={owner.htmlUrl} target={'_blank'}  rel="noreferrer">@{owner.login}</a>
            <br />
            {description}
            <br />
          </p>
          <span className='tag'>
            {language ?? 'n/a'}
          </span>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <span className="icon-text">
              <span className="icon">
                <MdStarBorder />
              </span>
              <span>{stargazersCount ?? 0}</span>
            </span>
            <span className="icon-text">
              <span className="icon">
                <MdVisibility />
              </span>
              <span>{watchsersCount ?? 0}</span>
            </span>
            <span className="icon-text">
              <span className="icon">
                <MdShare />
              </span>
              <span>{forksCount ?? 0}</span>
            </span>
          </div>
        </nav>
      </div>
      <div className='media-right is-hidden-mobile	'>
        <a className='title is-5 has-text-primary' href={htmlUrl} target={'_blank'}  rel="noreferrer">Visitar repo</a>
      </div>
    </article>
    <div className='media is-hidden-tablet'>
      <a className='title is-5 has-text-primary' href={htmlUrl} target={'_blank'}  rel="noreferrer">Visitar repo</a>
    </div>
  </div>
);

export default RepositoryItem;