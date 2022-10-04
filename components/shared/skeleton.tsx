import styled from 'styled-components';

export const Skeleton = styled.div`
display: inline-block;
height: 100%;
width: 100%;
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 50%, rgba(213,213,213,1) 100%);
background-size: 400% 400%;
animation: pulse 1.2s ease-in-out infinite;
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
`;