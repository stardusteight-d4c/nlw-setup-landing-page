import React from 'react'

interface Props {
  title: string
}

export const Button = ({title}: Props) => {
  return (
    <button className="uppercase w-full md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
      {title}
    </button>
  )
}
