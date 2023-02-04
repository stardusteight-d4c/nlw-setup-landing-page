import React from 'react'

interface Props {}

export const Highlights = (props: Props) => {
  return (
    <section className="bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 lg:px-14">
        <h2 className="text-2xl xsm:text-[32px] pt-16 pb-10 text-center text-[#E1E1E6] font-bold !leading-[125%]">
          Confira os projetos desenvolvidos <br /> nas últimas edições
        </h2>
        <div className="youtubePlayer">
          <iframe
            src="https://www.youtube.com/embed/4jUZJw3KhGg?controls=0&color=white&theme=dark&fs=0&modestbranding=0"
            title="NLW Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="outline-none border border-[#323238] w-full"
          />
        </div>
        <div className="grid grid-cols-2 mx-auto md:mx-0 gap-x-10 gap-y-10 md:gap-y-4 md:gap-x-4 md:flex mt-[65px] pb-[140px] items-center justify-between">
          <div className="w-full h-full lg:h-auto lg:w-[169px] col-span-1">
            <h3 className="text-[30px] md:text-5xl !leading-[125%] text-white font-bold">
              <span className="text-[#8257e5]">+</span>380k
            </h3>
            <div className="bg-[#54e694] w-full h-[1px] my-4" />
            <span className="text-[#C4C4CC] text-sm">Devs impactados</span>
          </div>
          <div className="w-full h-full lg:h-auto lg:w-[169px] col-span-1">
            <h3 className="text-[30px] md:text-5xl !leading-[125%] text-white font-bold">
              <span className="text-[#8257e5]">+</span>2.4m
            </h3>
            <div className="bg-[#54e694] w-full h-[1px] my-4" />
            <span className="text-[#C4C4CC] text-sm">
              De visualizações nas aulas{' '}
            </span>
          </div>
          <div className="w-full h-full lg:h-auto lg:w-[169px] col-span-1">
            <h3 className="text-[30px] md:text-5xl !leading-[125%] text-white font-bold">
              <span className="text-[#8257e5]">+</span>500h
            </h3>
            <div className="bg-[#54e694] w-full h-[1px] my-4" />
            <span className="text-[#C4C4CC] text-sm">
              Horas de vídeo assistidas
            </span>
          </div>
          <div className="w-full h-full lg:h-auto lg:w-[169px] col-span-1">
            <h3 className="text-[30px] md:text-5xl !leading-[125%] text-white font-bold">
              10
            </h3>
            <div className="bg-[#54e694] w-full h-[1px] my-4" />
            <span className="text-[#C4C4CC] text-sm">Edições consolidadas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
