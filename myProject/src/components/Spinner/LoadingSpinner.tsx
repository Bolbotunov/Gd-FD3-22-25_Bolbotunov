import styled from 'styled-components';
import { Spinner, SpinnerWrapper } from './Spinner.styles';

export default function LoadingSpinner() {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}
