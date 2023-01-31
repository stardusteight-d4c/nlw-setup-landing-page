import React from 'react'
import backgroud from '../../assets/hero/background.webp'
import logo from '../../assets/hero/nlw-setup-logo.svg'
import calendarIcon from '../../assets/hero/calendar-icon.svg'
import desktopIcon from '../../assets/hero/desktop-icon.svg'
import { Navbar } from './integrate/Navbar'

interface Props {}

export const Hero = (props: Props) => {
  return (
    <header className="w-screen h-screen relative">
      <img src={backgroud} className="absolute inset-0 -z-10" />
      <div className="mx-auto">
        <Navbar />
        <div className="flex items-start pt-[82px] w-full max-w-7xl pl-[46px] pr-11 mx-auto">
          <div className="w-[50%] mr-[60px]">
            <img src={logo} alt="nlw-setup/logo" className="min-w-[336px] max-w-[336px] h-auto" />
            <div className="flex items-center gap-x-8 justify-center mt-10">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] leading-5 text-xs">
                  dias
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] leading-5 text-xs">
                  horas
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] leading-5 text-xs">
                  min
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#121214] w-fit h-fit py-3 px-2 text-2xl tracking-[3px] rounded font-semibold leading-6">
                  00
                </div>
                <span className="mt-1 text-[#C4C4CC] uppercase font-jetBrainsMono tracking-[1.5px] leading-5 text-xs">
                  seg
                </span>
              </div>
            </div>
          </div>
          <div className="text-left flex-grow">
            <h2 className="text-5xl leading-[125%] font-bold">
              Você no controle pra fazer de 2023 seu{' '}
              <strong className="heroHeadingGradient bg-clip-text text-transparent">
                melhor ano em programação
              </strong>
            </h2>
            <div className="flex items-center mt-[32px]">
              <div className="font-jetBrainsMono mr-[35px] text-sm flex flex-col gap-y-9 w-full max-w-[200px] uppercase font-normal leading-6 text-[#C4C4CC]">
                <span className="flex items-center gap-x-4">
                  <img src={calendarIcon} />
                  De 16 a 20 <br /> de janeiro
                </span>
                <span className="flex items-center gap-x-4">
                  <img src={desktopIcon} />
                  100% online <br /> e gratuito
                </span>
              </div>
              <div className="flex flex-col items-start gap-y-9">
                <span className="leading-[160%] text-[#C4C4CC]">
                  Construa um projeto inédito, domine novas tecnologias e
                  prepare-se para levar seu código, habilidades e carreira para
                  o próximo nível.
                </span>
                <button className="uppercase -mt-[2px] text-sm leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
                  garantir ingresso gratuito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
