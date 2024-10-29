import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1B80A4;
    --secondary-color: #1B80A4;
    --white : #FFFFFF;
    --transparent-white: rgba(255, 255, 255, 0.1);

    --dark-text-color: #C2BFBF;
    --light-text-color: #FFFFFF;
    --text-decoration-color: #30C2E2;

  }

  [data-theme='dark'] {
    --primary-color: #1B80A4;
    --secondary-color: #1B80A4;

    --dark-text-color: #C2BFBF;
    --light-text-color: #FFFFFF;
    --text-decoration-color: #30C2E2;
  }

  [data-theme='light'] {
    --background-color: #ffffff;
    --text-color: #333333;
    --primary-color: #007bff;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: 'Poppins', sans-serif;
  }
  p, a, button{
  // TODO => Change to 16px for mobile first
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 400;
  }
  h1{
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 600;
  }
`;

export default GlobalStyle;
