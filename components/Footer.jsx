import React from 'react';
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Sound Sanity Store All rights reserved</p>
      <p className="icons">
        <AiFillInstagram className="icon-instagram"/>
        <AiFillFacebook className="icon-facebook"/>
      </p>
    </div>
  )
}

export default Footer