/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsapp, 
  FaSearch,
  FaBars,
  FaUserCircle,
  FaShoppingCart,
  FaArrowCircleDown,
  FaRegHeart} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
const iconSet ={
  "instagram" : FaInstagramSquare,
  "facebook" : FaFacebookSquare,
  "seach" : FaSearch,
  "burger" : FaBars,
  "user" : FaUserCircle,
  "cart" : FaShoppingCart,
  "arrow" : FaArrowCircleDown,
  "heart" : FaRegHeart,
  "whatsapp" : IoLogoWhatsapp,
}

function Icon({ type, fill, size, onClick }) {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      onClick={onClick}
      css={css`
          fill: ${fill};
          font-size: ${size}px;
          background: transparent;
        `}
      />
    );
}

export {Icon}