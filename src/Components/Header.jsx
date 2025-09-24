import logo from '../assets/imgs/logo.png';
import InputSeach from './InputSearch'
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

const Header = () => {
    const [cartCount, setCartCount] = useState(0)
    return (
        <>

            <header className='w-full bg-[#EE4D2D] h-35 flex items-center justify-around align-space gap-10'>
                {/* // Logo da Shopee */}
                <div>
                    <img src={logo} alt="" />
                </div>

                <InputSeach />

                {/* // Ícone do carrinho de compras */}
                <div className='relative'>
                    <span className='text-white font-bold absolute -top-2 -left-[-25px] bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full'>{cartCount}</span>
                    <ShoppingCart className='w-9 h-9 text-white' />
                    <button onClick={() => setCartCount(cartCount + 1)}>adicionar</button>
                </div>

            </header>



        </>
    )
}

export default Header