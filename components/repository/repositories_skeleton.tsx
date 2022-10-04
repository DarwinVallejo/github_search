import React from 'react'
import styled from 'styled-components';
import { Skeleton } from '../shared/skeleton';

const RepositorySkeleton = styled(Skeleton)`
  height: 150px
`;

const RepositoriesSkeleton = () => (
  <>
    {[...Array(6)].map((_, index) => {
      return (
        <div key={index} className='column is-three-quarters-mobile is-half-tablet is-half-desktop'>
          <RepositorySkeleton />
        </div>
      )
    })}
  </>
);

export default RepositoriesSkeleton;