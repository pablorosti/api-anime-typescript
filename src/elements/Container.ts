import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 0 auto;

    @media(min-width:768px){
      grid-template-columns: repeat(6, 1fr);
    }
`;