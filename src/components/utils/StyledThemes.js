import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: rgba(169, 190, 199, 0.7);
    --secondary-color: rgba(67, 130, 177, 0.7);
    --tertiary-color: rgba(209, 214, 194, 0.7);
    --emphasis-primary-color: rgba(211, 244, 102, 0.7);
    --emphasis-secondary-color: rgba(186, 205, 101, 1);
    --text-color: rgba(0, 0, 0, 1);
  }
`;

export default GlobalStyles;