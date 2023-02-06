import React, { useEffect, useRef, useState } from 'react'
import { PlusCloseIconAnimated } from './PlusCloseIconAnimated'

interface Props {
  title: string
  children: React.ReactNode
}

export const Accordion = ({ title, children }: Props) => {
  const [changeStateIconAnimation, setChangeStateIconAnimation] =
    useState<boolean>(false)

  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeight(ref.current!.offsetHeight)
  }, [])

  return (
    <div className="mb-6">
      <div
        onClick={() => setChangeStateIconAnimation(!changeStateIconAnimation)}
        className="rounded cursor-pointer flex h-[80px] px-5 items-center justify-between bg-[#202024]"
      >
        <h3 className="text-[#E1E1E6] font-semibold">{title}</h3>
        <PlusCloseIconAnimated
          changeStateIconAnimation={changeStateIconAnimation}
        />
      </div>
      <div
        style={{
          maxHeight: changeStateIconAnimation ? `${height}px` : '0px',
          overflow: 'hidden',
        }}
        className="transition-all cursor-default ease-in-out duration-1000 rounded-b bg-[#20202480]"
      >
        <p ref={ref} className="mb-6 text-sm md:text-base text-[#C4C4CC] p-[30px] !leading-[32px]">
          {children}
        </p>
      </div>
    </div>
  )
}
