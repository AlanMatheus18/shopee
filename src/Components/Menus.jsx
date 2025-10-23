import React from 'react'

const Menus = ({ icon, img, text }) => {
    return (
        <> <div className='flex flex-col items-center justify-center '>
            <div className='flex justify-center items-center h-50'>
                <div className='h-15 w-15 bg-white flex items-center justify-center rounded-xl shadow-md hover:-translate-y-1 hover:shadow-2xl transition-shadow duration-300 group '>
                    {icon}
                    <img src={img} alt="" />
                </div>
            </div>

            <p className='text-black mb-[-100px] absolute'>
                {text}
            </p>
        </div>
        </>
    )
}

export default Menus