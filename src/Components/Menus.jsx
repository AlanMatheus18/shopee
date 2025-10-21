import React from 'react'

const Menus = ({ icon, img }) => {
    return (
        <>  <div className='flex justify-center items-center h-30'>
            <div className='h-15 w-15 bg-white flex items-center justify-center rounded-xl shadow-md hover:-translate-y-1 hover:shadow-2xl transition-shadow duration-300 group '>
                {icon}
                <img src={img} alt="" />
            </div>
        </div>
        </>
    )
}

export default Menus