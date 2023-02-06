import React from 'react'

interface Props {
  changeStateIconAnimation: boolean
}

export const PlusCloseIconAnimated = ({ changeStateIconAnimation }: Props) => {
  return (
    <div className="relative w-7 h-7 ml-3 md:ml-0">
      <div
        className={`${
          changeStateIconAnimation ? 'rotate-[135deg]' : 'rotate-0'
        } transition-all duration-500 ease-in-out w-[17px] h-[2.7px] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white absolute`}
      />
      <div
        className={`${
          changeStateIconAnimation ? 'rotate-[135deg]' : 'rotate-0'
        } transition-all duration-300 ease-in-out h-[17px] w-[2.7px] rounded-full left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2 bg-white absolute`}
      />
    </div>
  )
}
