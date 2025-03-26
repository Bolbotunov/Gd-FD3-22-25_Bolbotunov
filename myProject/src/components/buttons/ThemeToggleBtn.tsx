import React from 'react';
import {
  SwitchWrapper,
  SwitchInput,
  Slider,
} from '../../styles/Switcher.styled';
import { useCustomTheme } from '../../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, isLight } = useCustomTheme();

  return (
    <SwitchWrapper>
      <SwitchInput type='checkbox' checked={isLight} onChange={toggleTheme} />
      <Slider />
    </SwitchWrapper>
  );
};

export default ThemeToggleButton;
