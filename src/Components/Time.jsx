import React from 'react'
import { useState, useEffect } from 'react'
const Time = () => {
  const [timeLeft, setTimeLeft] = useState(1 * 3600 + 24 + 60 + 13)
  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000)

    return () => clearInterval(interval);

  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600)/60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0')
    return {hours, mins, secs};
  };
  const {hours, mins, secs} = formatTime(timeLeft)
  return (
    <>
      <div className='flex items-center gap-1'>
        <span className='bg-black text-white font-bold text-sm px-2 py-1 rounded'>{hours}</span>
        <span className='text-black font-bold'>:</span>
        <span className='bg-black text-white font-bold text-sm px-2 py-1 rounded'>{mins}</span>
        <span className='text-black font-bold'>:</span>
        <span className='bg-black text-white font-bold text-sm px-2 py-1 rounded'>{secs}</span>
      </div>
    </>
  )
}

export default Time