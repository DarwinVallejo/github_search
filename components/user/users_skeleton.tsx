import React from 'react'
import styled from 'styled-components';
import { Skeleton } from '../shared/skeleton';

const UserSkeleton = styled(Skeleton)`
    height: 150px
`;

const UsersSkeleton = () => (
  <>
    {[...Array(10)].map((_, index) => (
      <div key={index} className='column is-three-quarters-mobile is-half-tablet is-one-quarter-desktop'>
        <UserSkeleton  />
      </div>
    ))}
  </>
);

export default UsersSkeleton;