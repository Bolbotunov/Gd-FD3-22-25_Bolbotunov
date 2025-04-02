import styled from 'styled-components';

export const SpinnerWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled('div')`
  background-image: url('/favicon.png');
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  animation: spin 1.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const Logo = styled('img')`
  max-width: 250px;
  animation: fadeIn 1.5s ease-in-out infinite;

  @keyframes fadeIn {
    0%,
    100% {
      opacity: 0.3;
      scale: 0.9;
    }
    50% {
      opacity: 1;
      scale: 1.1;
    }
  }
`;
