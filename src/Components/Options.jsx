import React from 'react'
import { CircleUserRound } from 'lucide-react';
import { Globe } from 'lucide-react';
import { MessageCircleQuestionMark } from 'lucide-react';
import { Bell } from 'lucide-react';
const Options = () => {
    return (
        <div className='w-full flex justify-end items-center text-white text-sm px-6 py-2 gap-6'>
            <a href="#" className="flex items-center gap-1"><Bell /> Notificação</a>
            <a href="#" className="flex items-center gap-1"><MessageCircleQuestionMark /> Ajuda</a>
            <a href="#" className="flex items-center gap-1"><Globe /> Português (BR)</a>
            <a href="#" className="flex items-center gap-1"><CircleUserRound /> AlanMatheus300</a>
        </div>
    )
}

export default Options