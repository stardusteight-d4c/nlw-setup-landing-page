import React, { useEffect, useState } from 'react'
import { countDown } from '../utils/countdown'

interface Props {}

export const Countdown = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState(countDown())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(countDown())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex items-center gap-x-4 md:gap-x-8 justify-center mt-8 md:mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
          dias
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
          horas
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
          min
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
          seg
        </span>
      </div>
    </div>
  )
}
