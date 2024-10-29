import styled from 'styled-components';
import bannerDark from '@assets/images/banner_dark.png';
import bannerLight from '@assets/images/banner_dark.png';

const StyledBanner = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) =>
    props.theme === 'dark' ? bannerDark : bannerLight});

  h1 {
    max-width: 720px;
    text-align: center;
    color: var(--light-text-color);
  }
  span {
    color: var(--dark-text-color);
    text-transform: uppercase;
  }
  h1 span {
    color: var(--text-decoration-color);
  }
  p {
    color: var(--dark-text-color);
    max-width: 678px;
    text-align: center;
    margin: 20px 0;
  }
`;

export default StyledBanner;
