/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaSearch,
  FaBars,
  FaUserCircle,
  FaShoppingCart,
  FaArrowCircleDown,
  FaRegHeart,
  FaTrashAlt,
  FaEdit,
  FaRegWindowClose,
  FaPlusCircle,
  FaHistory,
  FaRegStar} from "react-icons/fa";
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
  "trash" : FaTrashAlt,
  "edit" : FaEdit,
  "closed":FaRegWindowClose,
  "plus" : FaPlusCircle,
  "logout":FaHistory,
  "start":FaRegStar
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