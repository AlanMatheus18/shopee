import React from 'react'
import Time from './Time'
const SectionProducts = () => {
    return (
        <>

            <div className='bg-gray-200 h-80 w-full'>
                <div className='bg-white h-15 w-full mt-5 absolute flex items-center gap-2'>
                    <p className='text-1xl font-medium text-orange-700 m-2'>OFERTAS</p>
                    <p className='text-1xl font-extrabold text-orange-700'>REL⚡ÂMPAGO</p>
                    <Time/>
                </div>
            </div>
        </>
    )
}

export default SectionProducts