type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Breakpoints = {
  values: Record<BreakpointKeys, number>;
  min: (size: BreakpointKeys) => string;
  max: (size: BreakpointKeys) => string;
};

export const breakpoints: Breakpoints = {
  values: {
    xs: 360,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
  min(size: keyof (typeof breakpoints)['values']) {
    return `@media (min-width: ${this.values[size]}px)`;
  },
  max(size: keyof (typeof breakpoints)['values']) {
    return `@media (max-width: ${this.values[size]}px)`;
  },
};

export const appColors = {
  colors: {
    MAIN_COLOR: '#F8FC9E',
    MAIN_COLOR_30: 'rgba(248, 252, 158, 0.3)',
    SECONDARY_COLOR: '#ffffff',
    NAV_COLOR: '#ffffff',
    DICT_BTN_COLOR: '#F8FC9E',
    SECONDARY_COLOR_40: 'rgba(255, 255, 255, 0.5)',
    ADDITIONAL_COLOR: '#F8FC9E',
    PRODUCT_ROW_COLOR: '#0f0f0f',
    PROTEIN_COLOR: '#23C6E6',
    FATS_COLOR: '#F2D12A',
    CARBS_COLOR: '#DC191C',
    ERROR_COLOR: '#e83636',
    ERROR_COLOR_HOVER: '#a60000',
    OK_COLOR: '#47f647',
    DISABLED_COLOR_LIGHT: '#c9c8c8',
    DISABLED_COLOR_DARK: '#7e7e7e',
  },
  backgroundImage: "url('/bgDark.avif')",
  logoSrc: '/LogoLight.png',
  breakpoints,
};

export const lightAppColors = {
  colors: {
    MAIN_COLOR: '#333333',
    MAIN_COLOR_30: 'rgba(51, 51, 51, 0.3)',
    SECONDARY_COLOR: '#f8ff94',
    SECONDARY_COLOR_40: 'rgba(52, 52, 52, 0.5)',
    NAV_COLOR: '#989f1e',
    DICT_BTN_COLOR: '#ffffff',
    ADDITIONAL_COLOR: '#ffffff',
    PRODUCT_ROW_COLOR: '#ffffff',
    PROTEIN_COLOR: '#23C6E6',
    FATS_COLOR: '#F2D12A',
    CARBS_COLOR: '#DC191C',
    ERROR_COLOR: '#e83636',
    ERROR_COLOR_HOVER: '#a60000',
    OK_COLOR: '#47f647',
    DISABLED_COLOR_LIGHT: '#858383',
    DISABLED_COLOR_DARK: '#a4a1a1',
  },
  backgroundImage: "url('/bgLight.avif')",
  logoSrc: '/LogoBlack.png',
  breakpoints,
};
