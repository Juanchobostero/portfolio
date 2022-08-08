import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 49%;
   bottom: 2rem;
   height: 5rem;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: green;
   margin-bottom: 2rem;
   &:hover,
   &:focus {
    opacity: 0.5;
    }
`