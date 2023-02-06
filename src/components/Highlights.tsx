import { highlightsProps } from '@/utils/data'
import { HighlightItem } from './integrate/HighlightItem'

interface Props {}

export const Highlights = (props: Props) => {
  return (
    <section id="highlights" className={style.wrapper}>
      <div className={style.contentContainer}>
        <h2 className={style.title}>
          Confira os projetos desenvolvidos <br /> nas últimas edições
        </h2>
        <div className="youtubePlayer">
          <iframe
            src="https://www.youtube.com/embed/4jUZJw3KhGg?controls=0&color=white&theme=dark&fs=0&modestbranding=0"
            title="NLW Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={style.iframe}
          />
        </div>
        <div className={style.gridContainer}>
          {highlightsProps.map((prop, index) => (
            <HighlightItem key={`${index}-${prop.data}`} {...prop} />
          ))}
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `bg-[#121214]`,
  contentContainer: `max-w-7xl mx-auto px-4 lg:px-14`,
  title: `text-2xl xsm:text-[32px] pt-16 pb-10 text-center text-[#E1E1E6] font-bold !leading-[125%]`,
  iframe: `outline-none border border-[#323238] w-full`,
  gridContainer: `grid grid-cols-2 mx-auto md:mx-0 gap-x-10 gap-y-10 md:gap-y-4 md:gap-x-4 md:flex mt-[65px] pb-[140px] items-center justify-between`,
  itemContainer: `w-full h-full lg:h-auto lg:w-[169px] col-span-1`,
}
