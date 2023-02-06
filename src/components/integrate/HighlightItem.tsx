import React from 'react'

interface Props {
  spanPlus?: boolean
  data: string
  dataSpan: string
}

export const HighlightItem = ({ spanPlus, data, dataSpan }: Props) => {
  return (
    <div className={style.itemContainer}>
      <h3 className={style.itemHeading}>
        <span className={style.spanColor}>{spanPlus && '+'}</span>
        {data}
      </h3>
      <div className={style.divider} />
      <span className={style.span}>{dataSpan}</span>
    </div>
  )
}

const style = {
  itemContainer: `w-full h-full lg:h-auto lg:w-[169px] col-span-1`,
  itemHeading: `text-[30px] md:text-5xl !leading-[125%] text-white font-bold`,
  spanColor: `text-[#8257e5]`,
  divider: `bg-[#54e694] w-full h-[1px] my-4`,
  span: `text-[#C4C4CC] text-sm`,
}
