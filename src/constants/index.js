// constants/index.js
import { Dimensions } from 'react-native';

// Device Dimensions
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Colors
export const COLORS = {
  light: {
    primary: '#3498db',
    secondary: '#e74c3c',
    background: '#F9F9F9',
    text: '#333333',
    accent: '#FF4081',
    success: '#4CAF50',
    error: '#FF5252',
    warning: '#FFC107',
    info: '#2196F3',
  },
  dark: {
    primary: '#2ecc71',
    secondary: '#f39c12',
    background: '#121212',
    text: '#FFFFFF',
    accent: '#FF4081',
    success: '#4CAF50',
    error: '#FF5252',
    warning: '#FFC107',
    info: '#2196F3',
  },
};

// Typography
export const FONTS = {
  regular: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  italic: 'HelveticaNeue-Italic',
};

// Spacing
export const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
};

// Elevation
export const ELEVATION = {
  low: 2,
  medium: 4,
  high: 8,
};

// Responsive Design
export const RESPONSIVE = {
  smallDeviceWidth: 320,
  mediumDeviceWidth: 375,
  largeDeviceWidth: 414,
  responsiveFontSize: (percentage, baseWidth = SCREEN_WIDTH) => Math.round(baseWidth * (percentage / 100)),
  responsiveSpacing: (value) => {
    const ratio = SCREEN_WIDTH / RESPONSIVE.mediumDeviceWidth;
    return Math.round(value * ratio);
  },
};

// Animations
export const ANIMATIONS = {
  defaultDuration: 300,
};

// Theme Mode
export const THEME_MODE = {
  light: 'light',
  dark: 'dark',
};

// Other Constants...
