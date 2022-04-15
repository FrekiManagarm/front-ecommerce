import { createGlobalStyle } from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import 'antd/dist/antd.css';

//-------------------------------------------------------------
//----------------Point d'entrée GlobalStyles------------------
//-------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap'); */

    * {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }

    ::selection {
        background: ${themeGet("primary.0", "#F9185B")};
        color: ${themeGet("color.1", "#ffffff")};
    }

    html {
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
    }

    html,
    html a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    li,
    dl,
    th,
    dt,
    input,
    textarea,
    span,
    div {
        /* font-family: 'Poppins', sans-serif; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: black;
        /* font-family: 'Poppins', sans-serif; */
        -webkit-tap-highlight-color: transparent; 
        //overflow-y: scroll !important;
    }
    //tes global styles et tes classes customs que tu veux modifier à l'état global de ton application
    
.ant-drawer-wrapper-body,
.ant-drawer-header,
.ant-drawer-header-close-only {
  background-color: black;
}

.ant-drawer-close:hover {
  color: red;
}

.ant-drawer-header-title {
  display: flex;
  justify-content: flex-end;
}

.drawer_navbar {
  height: 100%;
  width: 100%;
}

.description {
  padding: 5%;
  background-color: black;
  
  h2 {
    color: white;
    font-size: 75px;
    letter-spacing: 10px;
  }

  p {
    color: white;
    font-size: 25px;
  }
}

.isHeaderSticky {
  .sticky-inner-wrapper {
    .navbar {
      &.is_transparent {
        background-color: black;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
    }
    nav.transparent {
      background-color: ${themeGet('color.1', '#ffffff')};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }
}
`;

export default GlobalStyle;