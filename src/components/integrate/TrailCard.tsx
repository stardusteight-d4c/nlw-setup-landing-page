interface Props {
  animate: boolean
  trailImg: string
  trail: 'Explorer' | 'Ignite'
  trailDescription: string
  tecnologiesImg: string
}

export const TrailCard = ({
  animate,
  trail,
  trailImg,
  trailDescription,
  tecnologiesImg,
}: Props) => {
  return (
    <div className={style.handleWrapper(animate)}>
      <div className={style.flexContainer}>
        <img src={trailImg} className={style.trailImg} />
        <h3 className={style.trailName}>
          Trilha <br />{' '}
          <strong style={style.handleStrong(trail)}>{trail}</strong>
        </h3>
      </div>
      <div>
        <p className={style.paragraph}>{trailDescription}</p>
        <span className={style.span}>tecnologias e ferramentas</span>
        <img src={tecnologiesImg} />
      </div>
    </div>
  )
}

const style = {
  handleWrapper: (animate: boolean) => {
    return `${
      animate
        ? 'animate-trials-final-state-from-bottom'
        : 'animate-trials-initial-state-from-bottom'
    } col-span-2 lg:col-span-1 rounded-md p-8 bg-[#202024] border border-[#29292E]`
  },
  flexContainer: `flex items-center mt-4 mb-6 gap-x-6`,
  trailImg: `w-[68px] sm:w-auto`,
  trailName: `text-2xl sm:text-[32px] leading-[140%] font-bold text-[#E1E1E6]`,
  handleStrong: (trail: string) => ({
    color: trail === 'Ignite' ? '#00B37E' : '#42D3FF',
  }),
  paragraph: `text-[#C4C4CC]`,
  span: `uppercase cursor-pointer mr-14 md:mr-0 my-4 inline-block font-medium text-[#54E694]`,
}
