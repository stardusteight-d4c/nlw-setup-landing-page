import React from 'react'
import year2023 from '../../assets/about/year-2023.svg'
import firstEventOfTheYear from '../../assets/about/first-event-of-the-year-circle.svg'
import twilio from '../../assets/about/twilio-logo.svg'
import tag from '../../assets/about/tag.svg'

interface Props {}

export const About = (props: Props) => {
  return (
    <section className="h-screen relative inline-block w-screen">
      <div className="overlayAboutBackgroudEffect z-0 absolute inset-0 w-screen h-fit bg-cover bg-no-repeat">
        <div className="flex items-center justify-center mx-auto max-w-7xl py-[140px] px-14">
          <div className="gradientCircle relative flex items-center justify-center min-w-[159px] min-h-[159px] max-w-[159px] max-h-[159px] z-10">
            <img
              src={year2023}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <img src={firstEventOfTheYear} className="animate-spin-slow" />
          </div>
          <div className="flex flex-col grow pl-[72px] pr-[52px]">
            <h2 className="text-[32px] !leading-[140%] font-bold">
              O maior evento online e gratuito de programação na prática com
              muito código, desafios, networking e um único objetivo:{' '}
              <strong className="text-[#54E694]">
                te levar para o próximo nível
              </strong>
            </h2>
            <span className="flex gap-x-6 mt-4 items-center text-[#C4C4CC] !leading-[160%]">
              Patrocinador
              <img src={twilio} />
            </span>
          </div>
          <div className="text-[#E1E1E6] !leading-[160%]">
            <span className="mb-4 inline-block w-[297px]">
              Durante uma semana você terá acesso a uma metodologia eficiente
              para o seu aprendizado, uma comunidade com milhares de devs e uma
              experiência completa pra acelerar sua evolução.
            </span>
            <button className="uppercase w-full col-span-2 md:col-span-1 row-span-1 row-start-3 md:row-start-2 md:w-fit text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
              garantir ingresso gratuito
            </button>
          </div>
        </div>
        <div className="h-[92px] relative w-full bg-[#373D98] flex items-center">
          <div className="flex items-center gap-x-6 animate-marquee">
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              De 16/01 — 20/01
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              evento online
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              participe gratuitamente
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              De 16/01 — 20/01
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              evento online
            </span>
            <img src={tag} />
          </div>
          <div className="absolute flex items-center gap-x-6 animate-marquee2">
            <span className="whitespace-nowrap ml-6 text-[20px] flex items-center !leading-[140%] font-bold">
              De 16/01 — 20/01
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              evento online
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              participe gratuitamente
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              De 16/01 — 20/01
            </span>
            <img src={tag} />
            <span className="whitespace-nowrap text-[20px] flex items-center !leading-[140%] font-bold">
              evento online
            </span>
            <img src={tag} />
          </div>
        </div>
      </div>
    </section>
  )
}
