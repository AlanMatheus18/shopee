import logo from '../assets/imgs/logo.png';
import InputSeach from './InputSearch';
import Options from './Options';
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

const Header = () => {
    const [cartCount, setCartCount] = useState(0)
    return (
        <>
            <header className='w-full bg-gradient-to-b from-[#f53d2d] to-[#ff7337]'>
                <Options />
                <div className='h-26 flex items-center justify-around align-space gap-10'>
                    {/* // Logo da Shopee */}
                    <img src={logo} alt="" className='h-26'/>

                    <InputSeach />

                    {/* // Ícone do carrinho de compras */}
                    <div className='relative'>
                        <span className='text-white font-bold absolute -top-2 -left-[-25px] bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full'>{cartCount}</span>
                        <ShoppingCart className='w-9 h-9 text-white' />
                        <button onClick={() => setCartCount(cartCount + 1)}>adicionar</button>
                    </div>
                </div>
            </header>



        </>
    )
}

export default Header