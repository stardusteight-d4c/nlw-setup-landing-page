import arrowDown from '@assets/arrow-down.svg'
import desktopProject from '@assets/desktop-showcase.svg'
import mobileProject from '@assets/mobile-showcase.svg'
import habitsTracker from '@assets/habits-tracker.svg'
import divider from '@assets/divider.svg'
import arrowMotion from '@assets/white-arrow-motion.gif'
import { useEffect, useRef, useState } from 'react'
import { Button } from './integrate/Button'
import { scrollTo } from '@/utils/scroll-to-target'

interface Props {}

export const Project = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateParagraph, setAnimateParagraph] = useState(false)
  const [animateMobileProjectImg, setAnimateMobileProjectImg] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const secondSectionRef = useRef<HTMLElement>(null)

  // ref is in view?
  // several times
  useEffect(() => {
    if (secondSectionRef !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      })
      observer.observe(secondSectionRef.current!)
      return () => observer.disconnect()
    }
  }, [secondSectionRef])

  useEffect(() => {
    window.addEventListener('scroll', handleTrialsItemsAnimate)
    return () => {
      window.removeEventListener('scroll', handleTrialsItemsAnimate)
    }
  }, [scrollY])

  const handleTrialsItemsAnimate = () => {
    setScrollY(window.scrollY)
    if (isVisible) {
      setTimeout(() => {
        setAnimateParagraph(true)
        setAnimateMobileProjectImg(true)
      }, 400)
    } else {
      setAnimateParagraph(false)
      setAnimateMobileProjectImg(false)
    }
  }

  return (
    <section id="project" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <section className={style.flexContainerFirstSection}>
          <span className={style.span}>O que vamos construir</span>
          <h2 className={style.heading}>
            Dev, bora desenvolver um projeto de controle de hábitos?
          </h2>
          <p className={style.paragraph}>
            O projeto que vamos criar em{' '}
            <strong className={style.strong}>apenas 5 aulas</strong> tem tudo a
            ver com o início de um novo ano: habit tracker, uma ferramenta de
            acompanhamento de hábitos para o usuário colocar em prática suas
            resoluções e metas, ou seja, registrar ações e acompanhar a evolução
            dos novos hábitos que deseja colocar na sua rotina.
          </p>
          <img src={arrowDown} />
        </section>
        <img src={desktopProject} className={style.desktopProjectImg} />

        <section
          ref={secondSectionRef}
          className={style.flexContainerSecondSection}
        >
          <div className={style.handleParagraph(animateParagraph)}>
            <img src={habitsTracker} />
            <p className={style.secondSectionParagraph}>
              Essa é uma ótima oportunidade de você desenvolver um projeto que
              propõe soluções no mundo real, que vai agregar valor para o seu
              portfólio e claro, até o para o seu cotidiano.
            </p>
            <Button>quero criar esse projeto do zero</Button>
          </div>
          <img
            src={mobileProject}
            className={style.handleMoileProjectImg(animateMobileProjectImg)}
          />
        </section>
        <div
          onClick={() => {
            const element: HTMLElement = document.querySelector('#highlights')!
            const distanceFromTop = element.offsetTop - 40 
            scrollTo(distanceFromTop, 500)
          }}
          className={style.dividerContainer}
        >
          <img src={divider} className={style.divider} />
          <img src={arrowMotion} className={style.arrowDown} />
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `projectBackground bg-[#121214] max-w-screen overflow-hidden h-fit`,
  contentWrapper: `max-w-7xl mx-auto px-4 lg:px-14`,
  flexContainerFirstSection: `text-center flex flex-col items-center`,
  span: `uppercase text-sm xsm:text-base mb-4 text-[#54E694] font-medium tracking-[3px] !leading-[150%]`,
  heading: `text-[#E1E1E6] text-[24px] xsm:text-[32px] md:w-[500px] font-bold !leading-[140%]`,
  paragraph: `lg:w-[640px] mt-6 mb-4 text-[#C4C4CC]`,
  strong: `text-[#54E694] !leading-[160%]`,
  desktopProjectImg: `w-full h-auto`,
  flexContainerSecondSection: `flex pt-[60px] md:mt-0 flex-col md:flex-row items-center`,
  handleParagraph: (animate: boolean) => {
    return `${
      animate
        ? 'animate-project-paragraph-final-state-from-left'
        : 'animate-project-paragraph-initial-state-from-left'
    }`
  },
  secondSectionParagraph: `text-[#E1E1E6] text-lg xsm:text-2xl md:w-[370px] lg:w-auto xl:w-[594px] font-bold !leading-[140%] mt-4 mb-6`,
  handleMoileProjectImg: (animate: boolean) => {
    return `${
      animate
        ? 'animate-project-img-final-state-from-right'
        : 'animate-project-img-initial-state-from-right'
    } xl:align-middle md:ml-auto w-full xl:inline-block xl:max-w-[488px]`
  },
  dividerContainer: `mt-24 pb-4 cursor-pointer`,
  divider: `hidden md:block w-full h-full`,
  arrowDown: `w-10 h-10 mx-auto -mt-[80px] md:-mt-6`,
}
