const light = '#B7B7B7';
const red = '#F86D6D';
const mainBronze = '#EDAC75';
export const HeaderHeight = '95px';

const updatedTheme = {
  palette: {
    common: {
      border: {
        dark: '#282828',
        light: '#363636',
        gray: '#B7B7B7',
        avatar: '#151516',
      },
      light,
      red,
      bgConnectBtn: 'rosybrown',
      gray: 'rgba(32, 33, 33, 0.2)',
      lightBlue: '#4BC6FB',
      lightGray: '#EEF0F2',
      gray2: '#B7B7B7',
      error: '#f44336',
      warning: '#ff9800',
      success: '#4caf50',
      info: '#2196f3',
      errorLight: '#e57373',
      warningLight: '#ffb74d',
      successLight: '#81c784',
      infoLight: '#64b5f6',
      yellow: '#f2a92c',
      shadows0: '0px 6px 10px rgba(255, 255, 255, 0.05)',
      shadows1: '0px 5px 10px rgba(255, 255, 255, 0.1)',
      white: '#fff',
      carosuelIndicatorGray: '#707070',
      backgroundColor: '#101010',
      gradientBackground: `linear-gradient(270deg, #1a1a1c 0%, #121213 100%)`,
      animationBg: '#080b35',
    },
    primary: {
      main: '#feefa4',
      light: 'rgba(237, 172, 117, 0.2)',
    },
    secondary: {
      main: '#080b35',
      light: '#2A2A2B',
    },
    tertiary: {
      main: '#1a1a1c',
      light: '#121213',
    },
    white: {
      main: '#ffffff',
      light: '#dddddd',
    },
    black: {
      main: '#000000',
      light: '#333333',
      light2: '#131314',
    },
    text: {
      primary: '#080b35',
      secondary: '#080b35',
      gold: '#feefa4',
      tertiary: mainBronze,
      light: '#ffffff',
      white:'#ffffff',
      gray: '#b5b6c7',
      pink: '#fff0cc',
      dark: '#000000',
      error: red,
      gray2: '#B7B7B7',
      blue: '#080b35',
    },
    selectMenu: { bg: '#fff', hover: '#EEF0F2' },
  },
  typography: {
    title1: '24px',
    title2: '28px',
    title3: '32px',
    title4: '36px',
    title5: '42px',
    title6: '52px',
    subTitle1: '20px',
    subTitle2: '22px',
    subTitle3: '24px',
    subTitle4: '26px',
    text: '14px',
    text1: '16px',
    text2: '18px',
    subText1: '11px',
    subText2: '12px',
    subText3: '13px',
    subText4: '14px',
    subText5: '15px',
  },
  navbar: {
    height: '8rem',
  },
};

export default updatedTheme;
