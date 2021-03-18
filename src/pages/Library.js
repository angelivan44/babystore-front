import { Card, CardCategory } from './../components/containers/Card'
import { Content, ContentBlue, ContentSmall, ContentSub, Heading1, Heading2, Heading3 } from './../components/text/Text'
import { Icon } from './../components/UI/Icon'
import { Logo } from './../components/UI/Logo'
import { ListIcons } from './../components/containers/List_Icons'
import { Header } from './../components/containers/Header'
import { Footer } from './../components/containers/Footer'
import { ClothesContainer } from './../components/containers/Clothes_Container'
import { CategoriesContainer } from './../components/containers/Categories_Container'
import { GamesContainer } from './../components/containers/Games_Container'
import { ShowClothe } from './../components/containers/Card_Show_Clothe'
import { FormCategory , FormClothe, FormSignUp , FormLogin} from '../components/UI/Form_Category'
import { Modal } from '../components/UI/Modal'
import { User } from './User'
import { STORE } from './storage'
import { Burger } from '../components/containers/Burger'

function Library() {
      const user = STORE.user
  
      return (<div>
      <Heading1>Hola mundo</Heading1>
      <Heading2>Hola mundo</Heading2>
      <Heading3>Hola mundo</Heading3>
      <Burger></Burger>
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
      <Logo type="white"></Logo>
      <Card 
      url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
      price="10"
      oldPrice = "20"
      name="Baby Ropita"
      ofert = "-10%"
      edit={false}
      ></Card>

      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "blue"
      name="Baby Ropita"
      edit={true}
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "blue"
      name="Baby Ropita"
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "green"
      name="Baby Ropita"
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "yellow"
      name="Baby Ropita"
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "red"
      name="Baby Ropita"
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "purple"
      name="Baby Ropita"
      ></CardCategory>
      <CardCategory
      url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
      color = "orange"
      name="Baby Ropita"
      ></CardCategory>
      <ListIcons type="social"></ListIcons>
      <ListIcons type="header"></ListIcons>
      <Header></Header>
      <Footer></Footer>
      <ClothesContainer>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        edit={true}
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        edit={true}
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        ></Card>
        <Card 
        url="https://i.pinimg.com/originals/d5/fe/7d/d5fe7d129f178dc0eaf5028bc76cc433.jpg"
        price="10"
        oldPrice = "20"
        name="Baby Ropita"
        ofert = "-10%"
        ></Card>
      </ClothesContainer>
      <CategoriesContainer>
        <CardCategory
        url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
        color = "orange"
        name="Baby Ropita"
        edit={true}
        ></CardCategory>
        <CardCategory
        url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
        color = "orange"
        name="Baby Ropita"
        edit={true}
        ></CardCategory>
        <CardCategory
        url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
        color = "orange"
        name="Baby Ropita"
        edit={true}
        ></CardCategory>
        <CardCategory
        url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
        color = "orange"
        name="Baby Ropita"
        ></CardCategory>
        <CardCategory
        url="https://pngimg.com/uploads/baby/baby_PNG17932.png"
        color = "orange"
        name="Baby Ropita"
        ></CardCategory>
      </CategoriesContainer>
      <GamesContainer ></GamesContainer>
      <ShowClothe edit={true} src="https://pngimg.com/uploads/baby/baby_PNG17932.png"></ShowClothe>
      <FormCategory></FormCategory>
      <FormClothe></FormClothe>
      <FormSignUp></FormSignUp>
      <FormLogin></FormLogin>
      <Modal type="clothe"></Modal>
      <User user={user}></User>
      </div>)
}

export {Library}