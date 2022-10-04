import React, { FC } from 'react'

type Props = { page: number, totalCount: number, onNext: Function, onPrevious: Function }

const Pagination: FC<Props> = ({ page, totalCount, onNext, onPrevious }) => (
  <>
    {totalCount > 0 && (
      <div className='section'>
        <nav className="pagination justify-content " role="navigation" aria-label="pagination">
          <ul className="pagination-list"></ul>

          <button className="pagination-previous button is-primary is-outlined" onClick={(_) => onPrevious()} disabled={page < 2}>Anterior</button>
          <button className="pagination-next button is-primary is-outlined" onClick={(_) => onNext()}>Siguiente</button>
        </nav>
      </div>
    )}
  </>
);

export default Pagination;