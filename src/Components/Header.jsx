import React from 'react'
import logo from '../assets/logo.png'
import lupa from '../assets/lupa.png'
import carrinho from '../assets/carrinho.png'
const Header = () => {
    return (
        <>
            <header className='w-full bg-[#EE4D2D] h-35 flex items-center justify-around align-space gap-10'>
                {/* // Logo da Shopee */}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* // Barra de pesquisa */}
                <div className='flex bg-white rounded-md'>
                    <input type='text' placeholder='BUSCAR NA SHOPEE' className='  w-200  rounded-l-md p-2 outline-none' />
                    <button className='cursor-pointer hover:opacity-90 h-10 w-16 bg-[#EE4D2D] rounded-md text-white font-bold flex items-center justify-center m-1.5 '>
                        <img src={lupa} alt="" className='' />
                    </button>
                </div>

                {/* // Ícone do carrinho de compras */}
                <div>
                    <img src={carrinho} alt="" className='w-9 h-9' />
                </div>

            </header>
        </>
    )
}

export default Header