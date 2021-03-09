import {Global,css} from '@emotion/react'
import { Main } from './pages/Main'
import {Category} from './pages/Category'
import { Clothe } from './pages/Clothe'
function App() {
  const arr = ["uno" , "dosdasdasdasdasdsas"]
  return (
    <div>
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
      <Main></Main>
    </div>
  );
  
}

export default App;