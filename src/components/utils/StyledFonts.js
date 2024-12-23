import styled from "styled-components";

export const Title1 = styled.div`
  font-size: 36px;
  font-weight: 800;
`;

export const Title2 = styled.div`
  font-size: 32px;
  font-weight: 600;    
  color: ${({ isWhite }) => (isWhite ? 'white' : 'black')}; 
`;

export const Subtitle1 = styled.div`
  font-size: 28px;
  font-weight: 400;  
`;

export const Subtitle2 = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

export const TextContent = styled.div`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;