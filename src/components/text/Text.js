import styled from '@emotion/styled'

const StyleHeading = styled.h1`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  color:var(--primary-color);
`
const StyleHeading2 = styled.h2`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color:var(--purple);
  
`

const StyleHeading3 = styled.h3`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color:var(--black:);
  line-height: 29px;
`

const StyleContent = styled.p`
  font-family: var(--thirth-font);
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
  color:var(--ligth-pink);
`
const StyleContent2 = styled.p`
  font-family: var(--thirth-font);
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color:var(--black:);
  
`
const StyleContentBlue = styled.p`
  font-family: var(--thirth-font);
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color:var(--blue);


`
const StyleContentSub = styled.p`
  font-family: var(--thirth-font);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color:var(--black:);
  ${prop => prop.sub ? "text-decoration-line: line-through;":""}
`
const StyleContentSmall = styled.p`
  font-family: var(--fourth-font);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #FFDBFB
`

function Heading1 ({children}){
  return (
    <StyleHeading>{children}</StyleHeading>
  )
}

function Heading2 ({children}){
  return (
    <StyleHeading2>{children}</StyleHeading2>
  )
}

function Heading3 ({children}){
  return (
    <StyleHeading3>{children}</StyleHeading3>
  )
}
function Content ({children}){
  return (
    <StyleContent>{children}</StyleContent>
  )
}
function ContentBlue ({children}){
  return (
    <StyleContentBlue>{children}</StyleContentBlue>
  )
}
function ContentSub({children, sub}){
  return (
    <StyleContentSub sub={sub}>{children}</StyleContentSub>
  )
}
function ContentSmall ({children}){
  return (
    <StyleContentSmall>{children}</StyleContentSmall>
  )
}

function  ContentButton({children}) {
  return (
    <StyleContent2>{children}</StyleContent2>
  )
  
}
export {Heading1, Heading2 , Heading3 , Content ,ContentBlue, ContentSub, ContentSmall,ContentButton}