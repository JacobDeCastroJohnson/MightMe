import { createGlobalStyle } from 'styled-components';

import Walkway_Black from './Walkway_Black.woff';
import Walkway_Bold from './Walkway_Bold.woff';
import Walkway_Oblique_Black from './Walkway_Oblique_Black.woff';
import Walkway_Oblique_Bold from './Walkway_Oblique_Bold.woff';
import Walkway_Oblique_SemiBold from './Walkway_Oblique_SemiBold.woff';
import Walkway_Oblique_UltraBold from './Walkway_Oblique_UltraBold.woff';
import Walkway_Oblique from './Walkway_Oblique.woff';
import Walkway_SemiBold from './Walkway_SemiBold.woff';
import Walkway_UltraBold from './Walkway_UltraBold.woff';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Walkway_Black';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Black'), url(${Walkway_Black}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Bold'), url(${Walkway_Bold}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Oblique_Black';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Oblique_Black'), url(${Walkway_Oblique_Black}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Oblique_Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Oblique_Bold'), url(${Walkway_Oblique_Bold}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Oblique_SemiBold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Oblique_SemiBold'), url(${Walkway_Oblique_SemiBold}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Oblique_UltraBold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Oblique_UltraBold'), url(${Walkway_Oblique_UltraBold}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_Oblique';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_Oblique'), url(${Walkway_Oblique}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_SemiBold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_SemiBold'), url(${Walkway_SemiBold}) format('woff');
    }
    @font-face {
        font-family: 'Walkway_UltraBold';
        font-style: normal;
        font-weight: normal;
        src: local('Walkway_UltraBold'), url(${Walkway_UltraBold}) format('woff');
    }

    html, body {
        font-family: 'arial';
        color: rgb(34, 34, 34);
    }
`;

export default GlobalFonts;