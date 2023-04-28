interface IInnerTheme {
  [key: string]: string | number;
}

interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

const globalStyles: ITheme = {
  space: [0, 2, 4, 8, 16, 32, 48, 64, 128, 256],
  fontFamily: {
    logo: 'Coolvetica',
    main: 'Inter',
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxxl: '24px',
    xxl: '28px',
    bxl: '32px',
    bxxl: '40px',
    bxxxl: '44px',
    homePageNumber: '80px',
    homePage: '104px',
    homePageLogo: '120px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    xl: 1.3,
    l: 1.25,
    m: 1.2,
    s: 1.125,
    xs: 1.1,
    xxs: 1,
  },
  colors: {
    white3: '#FFFFFF',

    lightYellow: '#FCF0D4',
    yellow: '#F3B249',
    hoverYellow: '#ffee00',

    lightPink: '#FFD2DD',
    pink: '#EA3D65',

    orange: '#FFAC33',
  },
  radii: {
    none: '0',
    small: '4px',
    normal: '8px',
    medium: '16px',
    big: '40px',
    big2: '44px',
    homePage: '100px',
    round: '50%',
  },
};

export const lightblue: ITheme = {
  ...globalStyles,
  colors: {
    ...globalStyles.colors,
    // background: '#EAEAEA',

    white: '#FFFFFF',
    white2: '#F7F6F9',

    black: '#000000',
    black2: '#111111',
    // black3: '#13151A',
    black4: '#171820',
    black5: '#343434',
    // black6: 'rgba(17, 17, 17, 0.7)',
    // black7: 'rgba(17, 17, 17, 0.9)',
    columnHeader: '#111111',

    grey: '#616161',
    grey2: '#EFEFEF',
    grey3: '#84828A',
    grey4: '#DCE3E5',
    // grey5: '#F6F6F6',
    grey6: 'rgba(220, 227, 229, 0.8)',
    // grey7: 'rgba(246, 246, 246, 1)',
    grey8: '#F7F7F7',

    blue: '#3E85F3',
    blue2: '#DCEBF7',
    blue3: '#E3F3FF',
    blue4: '#CEEEFD',
    blue5: '#72C2F8',
    // blue6: '#CAE8FF',
    blue7: '#3e85f350',
    navLink: '#3E85F3',
    currentDay: '#3E85F3',

    hoverBackground: 'gold',
    backdropBackground: 'rgba(227,243,255, 0.8)',
    modalBackground: '#FFFFFF',
    taskCardBackground: '#F7F6F9',

    colorSwitcher: '#3EB489',
    themeSwitcher: '#3E85F3',
  },

  borders: {
    none: 'none',
    avatar: '2px solid rgba(62, 133, 243, 1)',
    userInput: '1px solid rgba(17, 17, 17, 0.15)',
    review: '1px solid rgba(17, 17, 17, 0.1)',
    // addTask: '1px solid rgba(62, 133, 243, 1)',
    task: '1px solid rgba(220, 227, 229, 0.8)',
    addButton: '1px dashed #3e85f3',
    modalLink: '1px solid rgba(220, 227, 229, 0.3)',
    modalInput: 'none',
  },
  shadows: {
    button: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
    modal: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
  },
};

export const darkblue: ITheme = {
  ...globalStyles,
  colors: {
    ...globalStyles.colors,

    // background: '#EAEAEA',

    white: '#21222C',
    white2: '#FFFFFF',

    black: '#FFFFFF',
    black2: '#FFFFFF',
    // black3: '#13151A',
    black4: '#171820',
    black5: '#FFFFFF',
    // black6: 'rgba(17, 17, 17, 0.7)',
    // black7: 'rgba(17, 17, 17, 0.9)',
    columnHeader: '#FFFFFF',

    grey: '#FFFFFF',
    grey2: '#EFEFEF',
    grey3: '#FFFFFF',
    grey4: '#DCE3E5',
    // grey5: '#F6F6F6',
    grey6: 'rgba(220, 227, 229, 0.2)',
    // grey7: 'rgba(246, 246, 246, 1)',
    grey8: '#171820',

    blue: '#3E85F3',
    blue2: '#DCEBF7',
    blue3: '#3E85F3',
    blue4: '#CEEEFD',
    blue5: '#72C2F8',
    // blue6: '#CAE8FF',
    blue7: '#21222C',
    navLink: '#FFFFFF',
    currentDay: '#3E85F3',

    lightYellow: '#FCF0D4',
    yellow: '#F3B249',
    hoverYellow: '#ffee00',

    lightPink: '#FFD2DD',
    pink: '#EA3D65',

    orange: '#FFAC33',

    hoverBackground: 'gold',
    backdropBackground: 'rgba(22,24,25, 0.8)',
    modalBackground: '#171820',
    taskCardBackground: '#171820',

    colorSwitcher: '#3EB489',
    themeSwitcher: '#3E85F3',
  },

  borders: {
    none: 'none',
    avatar: '2px solid rgba(62, 133, 243, 1)',
    userInput: '1px solid rgba(255, 255, 255, 0.15)',
    review: '1px solid rgba(17, 17, 17, 0.1)',
    // addTask: '1px solid rgba(62, 133, 243, 1)',
    task: '1px solid rgba(255, 255, 255, 0.15)',
    addButton: 'none',
    modalLink: '1px solid rgba(255, 255, 255, 0.05)',
    modalInput: '1px solid rgba(255, 255, 255, 0.15)',
  },
  shadows: {
    button: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
    modal: '0px 4px 16px 0px rgba(242, 243, 245, 0.1)',
  },
};

export const lightgreen: ITheme = {
  ...globalStyles,
  colors: {
    ...globalStyles.colors,

    // background: '#EAEAEA',

    white: '#FFFFFF',
    white2: '#F7F6F9',

    black: '#000000',
    black2: '#FFFFFF',
    // black3: '#13151A',
    black4: '#171820',
    black5: '#343434',
    // black6: 'rgba(17, 17, 17, 0.7)',
    // black7: 'rgba(17, 17, 17, 0.9)',
    columnHeader: '#111111',

    grey: '#616161',
    grey2: '#EFEFEF',
    grey3: '#84828A',
    grey4: '#DCE3E5',
    // grey5: '#F6F6F6',
    grey6: 'rgba(220, 227, 229, 0.8)',
    // grey7: 'rgba(246, 246, 246, 1)',
    grey8: '#F7F7F7',

    blue: '#3EB489',
    blue2: '#83D7B8',
    blue3: '#83D7B8',
    blue4: '#CEEEFD',
    blue5: '#3EB489',
    // blue6: '#CAE8FF',
    blue7: '#61C9A3',
    navLink: '#FFFFFF',
    currentDay: '#3EB489',

    hoverBackground: 'gold',
    backdropBackground: 'rgba(232, 250, 233, 0.8)',
    modalBackground: '#FFFFFF',
    taskCardBackground: '#F7F6F9',

    colorSwitcher: '#3E85F3',
    themeSwitcher: '#3EB489',
  },

  borders: {
    none: 'none',
    avatar: '2px solid #3EB489',
    userInput: '1px solid rgba(17, 17, 17, 0.15)',
    review: '1px solid rgba(17, 17, 17, 0.1)',
    addTask: '1px solid rgba(62, 133, 243, 1)',
    task: '1px solid rgba(220, 227, 229, 0.8)',
    addButton: '1px dashed #3EB489',
    modalLink: '1px solid rgba(220, 227, 229, 0.3)',
    modalInput: 'none',
  },
  shadows: {
    button: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
    modal: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
  },
};

export const darkgreen: ITheme = {
  ...globalStyles,
  colors: {
    ...globalStyles.colors,

    // background: '#EAEAEA',

    white: '#21222C',
    white2: '#FFFFFF',

    black: '#FFFFFF',
    black2: '#FFFFFF',
    // black3: '#13151A',
    black4: '#171820',
    black5: '#FFFFFF',
    // black6: 'rgba(17, 17, 17, 0.7)',
    // black7: 'rgba(17, 17, 17, 0.9)',
    columnHeader: '#FFFFFF',

    grey: '#FFFFFF',
    grey2: '#EFEFEF',
    grey3: '#FFFFFF',
    grey4: '#DCE3E5',
    // grey5: '#F6F6F6',
    grey6: 'rgba(220, 227, 229, 0.2)',
    // grey7: 'rgba(246, 246, 246, 1)',
    grey8: '#171820',

    blue: '#3EB489',
    blue2: '#83D7B8',
    blue3: '#3EB489',
    blue4: '#CEEEFD',
    blue5: '#3EB489',
    // blue6: '#CAE8FF',
    blue7: '#21222C',
    navLink: '#FFFFFF',
    currentDay: '#3EB489',

    hoverBackground: 'gold',
    backdropBackground: 'rgba(22,24,25, 0.8)',
    modalBackground: '#171820',
    taskCardBackground: '#171820',

    colorSwitcher: '#3E85F3',
    themeSwitcher: '#3EB489',
  },

  borders: {
    none: 'none',
    avatar: '2px solid #3EB489',
    userInput: '1px solid rgba(255, 255, 255, 0.15)',
    review: '1px solid rgba(17, 17, 17, 0.1)',
    // addTask: '1px solid rgba(62, 133, 243, 1)',
    task: '1px solid rgba(255, 255, 255, 0.15)',
    addButton: 'none',
    modalLink: '1px solid rgba(255, 255, 255, 0.05)',
    modalInput: '1px solid rgba(255, 255, 255, 0.15)',
  },
  shadows: {
    button: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
    modal: '0px 4px 16px 0px rgba(242, 243, 245, 0.1)',
  },
};
