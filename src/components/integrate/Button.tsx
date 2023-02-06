import React from 'react'

interface Props {
  variant?: boolean
  children: React.ReactNode
}

export const Button = ({ children, variant }: Props) => {
  return (
    <button className={`${variant ? style.variant : style.default}`}>
      {children}
    </button>
  )
}

const style = {
  default: `uppercase w-full md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]`,
  variant: `uppercase hidden md:block text-sm leading-5 hover:text-[#09090a] hover:bg-[#54E694] duration-300 ease-in-out transition-colors py-3 font-bold rounded-[5px] px-6 border border-[#54E694]`,
}
