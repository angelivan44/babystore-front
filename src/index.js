import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { css, Global } from '@emotion/react';


ReactDOM.render(
  <React.StrictMode>
    <>
    <Global
      styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Open+Sans&family=Oswald&family=Roboto:wght@500&display=swap');

      :root {
        --primary-font: 'Montserrat', sans-serif;
        --secondary-font: 'Open Sans', sans-serif;
        --thirth-font: 'Oswald', sans-serif;
        --fourth-font: 'Roboto', sans-serif;
        --primary-color: #F2749A;
        --purple: #9FA3F2;
        --black: ##000000;
        --ligth-pink: #F283A6;
        --primary-color: #F2749A;
        --primary-color: #F2749A;
        --blue: #1854EE;
        --aqua: #00FFF0;
        --yellow:#FFEC00;
        --submit:#1DA1F2;
        --main-background:#FEF2F2;
      }
      
      
      * {
          color: #000000;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #FEF2F2;
        }
      `}
    />
    <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
