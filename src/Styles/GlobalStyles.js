import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

}

:root{
    --bg: #131415;
    --color: #fff;
    --color-sec: #34d399
}


body{
    background: ${(props) => (props.isDark ? '#131415' : '#fff')};
    color: ${(props) => (props.isDark ? '#fff' : '#131415')};
    width: 100%;
    height: 100vh;
}


a{
    text-decoration: none;
    color: inherit;
}
`;
