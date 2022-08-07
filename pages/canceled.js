import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagXFill color = "red" />
        </p>
        <h2>Your order has been canceled!</h2>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled;