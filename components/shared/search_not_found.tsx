import React, { FC } from 'react'

type Props = { isVisible: boolean }

const SearchNotFound: FC<Props> = ({ isVisible }) => (
  <>
    {
      isVisible &&
      <div className='section has-text-centered'>
        <h2 className='title'>Lo sentimos no encontramos resultados</h2>
      </div>
    }
  </>
);

export default SearchNotFound