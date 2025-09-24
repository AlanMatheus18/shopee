import React from 'react'
import { Search } from 'lucide-react';

const InputSearch = () => {
    return (
        <>
            {/* // Barra de pesquisa */}
            <div className='flex bg-white rounded-md'>
                <input type='text' placeholder='BUSCAR NA SHOPEE' className='  w-200  rounded-l-md p-2 outline-none' />
                <button className='cursor-pointer hover:opacity-90 h-10 w-16 bg-[#EE4D2D] rounded-md text-white font-bold flex items-center justify-center m-1.5 '>
                    <Search className='' />
                </button>
            </div>
        </>
    )
}

export default InputSearch