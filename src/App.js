import {Global,css} from '@emotion/react'
import { Content, ContentBlue, ContentSmall, ContentSub, Heading1, Heading2, Heading3 } from './components/text/Text'
import { Button } from './components/UI/Button'
import { Icon } from './components/UI/Icon'
function App() {
  return (
    <div>
      hola mundo
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
          background: #f2f2f2;
        }
      `}
    />
      <Heading1>Hola mundo</Heading1>
      <Heading2>Hola mundo</Heading2>
      <Heading3>Hola mundo</Heading3>
      <Content>Hola mindo</Content>
      <ContentBlue>Hola mundo</ContentBlue>
      <ContentSub>Hola mundo</ContentSub>
      <ContentSmall>Hola mundo</ContentSmall>
      <Icon type="instagram" fill={"blue"} size={50}/>
      <Icon type="facebook" fill={"blue"} size={50}/>
      <Icon type="seach" fill={"red"} size={50}/>
      <Icon type="burger" fill={"green"} size={50}/>
      <Icon type="user" fill={"red"} size={50}/>
      <Icon type="cart" fill={"black"} size={50}/>
      <Icon type="arrow" fill={"blue"} size={50}/>
      <Icon type="heart" fill={"purple"} size={50}/>
      <Icon type="whatsapp" fill={"green"} size={50}/>
      <Button type={"add"}></Button>
      <Button type={"buy"}></Button>
    </div>
  );
}

export default App;
