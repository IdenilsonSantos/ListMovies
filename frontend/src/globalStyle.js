import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px 'Roboto', sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }
`;

const Container = styled.div`
        width: 100%;
        max-width: 1200px;
        height: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
`;

export { GlobalStyle, Container };