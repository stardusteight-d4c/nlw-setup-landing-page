import { Navbar } from './integrate/Navbar'

import backgroud from '../../assets/hero/background.webp'
import logo from '../../assets/hero/nlw-setup-logo.svg'
import calendarIcon from '../../assets/hero/calendar-icon.svg'
import desktopIcon from '../../assets/hero/desktop-icon.svg'
import divider from '../../assets/hero/divider.svg'
import arrowMotion from '../../assets/hero/white-arrow-motion.gif'
import projectCodeIcon from '../../assets/hero/project-code-icon.svg'
import networkingIcon from '../../assets/hero/networking-icon.svg'
import tabCodeIcon from '../../assets/hero/tab-code-icon.svg'
import medalIcon from '../../assets/hero/medal-icon.svg'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface Props {}

export const Hero = (props: Props) => {
  const minWith768px = useMediaQuery({
    query: '(min-width: 768px)',
  })

console.log(minWith768px);


  return (
    <header className="w-screen h-screen relative">
      <img src={backgroud} className="absolute inset-0 -z-10" />
      <div>
        <Navbar />
        <div className="flex flex-col lg:flex-row items-start pt-[82px] w-full max-w-7xl px-4 lg:pl-[46px] lg:pr-11 mx-auto">
          <div className="flex w-full mb-8 lg:mb-0 flex-col md:flex-row justify-between lg:flex-col items-center lg:w-[50%] mr-[60px]">
            <img
              src={logo}
              alt="nlw-setup/logo"
              className="min-w-[232px] max-w-[232px] md:min-w-[336px] md:max-w-[336px] h-auto"
            />
            <div className="flex items-center gap-x-8 justify-center mt-10">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
                  dias
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
                  horas
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
                  min
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold !leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] !leading-5 text-xs">
                  seg
                </span>
              </div>
            </div>
          </div>
          <div className="text-center w-full md:text-left flex-grow">
            <h2 className="text-3xl md:text-5xl !leading-[125%] font-bold">
              Você no controle pra fazer de 2023 seu{' '}
              <strong className="heroHeadingGradient bg-clip-text text-transparent">
                melhor ano em programação
              </strong>
            </h2>
            <div
              style={gridContainer()}
              className="grid gap-9 grid-rows-3 md:grid-rows-2 !w-full items-center mt-[32px]"
            >
              <span className="flex flex-col text-sm col-span-1 row-span-1 row-start-2 md:row-start-1 uppercase font-normal !leading-6 text-[#C4C4CC] font-jetBrainsMono sm:flex-row items-center gap-x-4">
                <img src={calendarIcon} />
                De 16 a 20 <br /> de janeiro
              </span>
              <span className="flex flex-col text-sm col-span-1 row-start-2 row-span-1 uppercase font-normal !leading-6 text-[#C4C4CC] font-jetBrainsMono sm:flex-row items-center gap-x-4">
                <img src={desktopIcon} />
                100% online <br /> e gratuito
              </span>
              <span className="!leading-[160%] w-full col-span-1 row-start-1 row-span-1  inline-block text-[#C4C4CC]">
                Construa um projeto inédito, domine novas tecnologias e
                prepare-se para levar seu código, habilidades e carreira para o
                próximo nível.
              </span>
              <button className="uppercase w-full col-span-1 row-span-1 row-start-3 md:row-start-2 md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
                garantir ingresso gratuito
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl relative px-14 mt-24 pb-4 cursor-pointer">
          <img src={divider} className="w-full h-full" />
          <img src={arrowMotion} className="w-10 h-10 mx-auto -mt-6" />
        </div>
      </div>
      <div className="mx-auto text-[#E1E1E6] max-w-7xl px-14 flex my-24 items-center justify-between">
        <div className="flex flex-col items-center w-[170px] text-center text-lg col-span-1">
          <img src={projectCodeIcon} className="w-10 h-10" />
          <span className="!leading-[160%] pt-4">
            Desenvolva um projeto completo
          </span>
        </div>
        <div className="flex flex-col items-center w-[170px] text-center text-lg col-span-1">
          <img src={networkingIcon} className="w-10 h-10" />
          <span className="!leading-[160%] pt-4">
            Faça networking 100% digital
          </span>
        </div>
        <div className="flex flex-col items-center w-[170px] text-center text-lg col-span-1">
          <img src={tabCodeIcon} className="w-10 h-10" />
          <span className="!leading-[160%] pt-4">
            Conteúdo prático para todos os níveis
          </span>
        </div>
        <div className="flex flex-col items-center w-[170px] text-center text-lg col-span-1">
          <img src={medalIcon} className="w-10 h-10" />
          <span className="!leading-[160%] pt-4">
            Participe de desafios e ganhe prêmios
          </span>
        </div>
      </div>
    </header>
  )
}

const gridContainer = () => {
  console.log(window.matchMedia('(min-width: 768px)').matches)

  if (window.matchMedia('(min-width: 768px)').matches) {
    return { gridTemplateColumns: '1fr 2.5fr' }
  } else {
    return { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' }
  }
}
