import arrowDown from '../../../assets/project/arrow-down.svg'
import desktopProject from '../../../assets/project/desktop-showcase.svg'
import mobileProject from '../../../assets/project/mobile-showcase.svg'
import habitsTracker from '../../../assets/project/habits-tracker.svg'
import divider from '../../../assets/divider.svg'
import arrowMotion from '../../../assets/white-arrow-motion.gif'

interface Props {}

export const Project = (props: Props) => {
  return (
    <section className="bg-[#121214] projectBackground w-screen h-fit">
      <div className="max-w-7xl mx-auto px-4 lg:px-14">
        <div className="text-center flex flex-col items-center ">
          <span className="uppercase text-sm xsm:text-base mb-4 text-[#54E694] font-medium tracking-[3px] !leading-[150%]">
            O que vamos construir
          </span>
          <h2 className="text-[#E1E1E6] text-[24px] xsm:text-[32px] md:w-[500px] font-bold !leading-[140%]">
            Dev, bora desenvolver um projeto de controle de hábitos?
          </h2>
          <p className="lg:w-[640px] mt-6 mb-4 text-[#C4C4CC]">
            O projeto que vamos criar em{' '}
            <strong className="text-[#54E694] !leading-[160%]">
              apenas 5 aulas
            </strong>{' '}
            tem tudo a ver com o início de um novo ano: habit tracker, uma
            ferramenta de acompanhamento de hábitos para o usuário colocar em
            prática suas resoluções e metas, ou seja, registrar ações e
            acompanhar a evolução dos novos hábitos que deseja colocar na sua
            rotina.
          </p>
          <img src={arrowDown} />
        </div>
        <img src={desktopProject} className="w-full h-auto" />
        <div className="flex mt-[50px] md:mt-0 flex-col md:flex-row items-center">
          <div>
            <img src={habitsTracker} />
            <p className="text-[#E1E1E6] text-lg xsm:text-2xl md:w-[370px] lg:w-auto xl:w-[594px] font-bold !leading-[140%] mt-4 mb-6">
              Essa é uma ótima oportunidade de você desenvolver um projeto que
              propõe soluções no mundo real, que vai agregar valor para o seu
              portfólio e claro, até o para o seu cotidiano.
            </p>
            <button className="uppercase w-full col-span-2 md:col-span-1 row-span-1 row-start-3 md:row-start-2 md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
              quero criar esse projeto do zero
            </button>
          </div>
          <img
            src={mobileProject}
            className="xl:align-middle w-full xl:inline-block xl:max-w-[488px]"
          />
        </div>
        <div className="mt-24 pb-4 cursor-pointer">
          <img src={divider} className="hidden md:block w-full h-full" />
          <img src={arrowMotion} className="w-10 h-10 mx-auto -mt-[80px] md:-mt-6" />
        </div>
      </div>
    </section>
  )
}
