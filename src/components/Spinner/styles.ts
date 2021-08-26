import styled from "styled-components";

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: 3px;
    font-size: 32px;
    color: var(--relay-orange);
    
    svg {
        animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  /* transform: rotate(3deg); */
   /* transform: rotate(0.3rad);/ */
   /* transform: rotate(3grad); */ 
   /* transform: rotate(.03turn);  */
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
    }
`;