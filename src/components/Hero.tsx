import { useEffect, useRef, useState } from 'react'
import { Navbar } from './integrate/Navbar'
import logo from '@assets/nlw-setup-logo.svg'
import calendarIcon from '@assets/calendar-icon.svg'
import desktopIcon from '@assets/desktop-icon.svg'
import projectCodeIcon from '@assets/project-code-icon.svg'
import networkingIcon from '@assets/networking-icon.svg'
import tabCodeIcon from '@assets/tab-code-icon.svg'
import medalIcon from '@assets/medal-icon.svg'
import { useMediaQuery } from 'react-responsive'
import divider from '@assets/divider.svg'
import arrowMotion from '@assets/white-arrow-motion.gif'
import { Countdown } from './integrate/Countdown'
import { Button } from './integrate/Button'

interface Props {}

export const Hero = (props: Props) => {
  const minWith768px = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const [isInView, setIsInView] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [animate1, setAnimate1] = useState(false)
  const [animate2, setAnimate2] = useState(false)
  const [animate3, setAnimate3] = useState(false)
  const [animate4, setAnimate4] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // Animate button
  setTimeout(() => {
    setIsInView(true)
  }, 800)

  // ref is in view?
  // only once
  useEffect(() => {
    if (ref !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      })
      observer.observe(ref.current!)
      return () => observer.disconnect()
    }
  }, [ref])

  // ref is in view?
  // several times
  // useEffect(() => {
  //   if (ref !== null) {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true)
  //         } else {
  //           setIsVisible(false)
  //         }
  //       })
  //     })
  //     observer.observe(ref.current!)
  //     return () => observer.disconnect()
  //   }
  // }, [ref])

  useEffect(() => {
    window.addEventListener('scroll', handleHeroItemsAnimate)
    return () => {
      window.removeEventListener('scroll', handleHeroItemsAnimate)
    }
  }, [scrollY])

  const handleHeroItemsAnimate = () => {
    setScrollY(window.scrollY)
    if (isVisible) {
      setAnimate1(true)
      setTimeout(() => {
        setAnimate2(true)
      }, 200)
      setTimeout(() => {
        setAnimate3(true)
      }, 400)
      setTimeout(() => {
        setAnimate4(true)
      }, 500)
    } else {
      setAnimate1(false)
      setTimeout(() => {
        setAnimate2(false)
      }, 200)
      setTimeout(() => {
        setAnimate3(false)
      }, 400)
      setTimeout(() => {
        setAnimate4(false)
      }, 500)
    }
  }

  return (
    <header className={style.main.wrapper}>
      <div>
        <Navbar />
        <div className={style.main.heroMainContainer}>
          <div className={style.main.logoCountdownContainer}>
            <img src={logo} alt="nlw-setup/logo" className={style.main.logo} />
            <Countdown />
          </div>
          <div className={style.main.textContent}>
            <h2 className={style.main.heading}>
              Você no controle pra fazer de 2023 seu{' '}
              <strong className={style.main.strong}>
                melhor ano em programação
              </strong>
            </h2>
            <div
              style={style.main.handleGridContainerTemplateColumns(
                minWith768px
              )}
              className={style.main.gridContainer}
            >
              <span className={style.main.when}>
                <img src={calendarIcon} />
                De 16 a 20 <br /> de janeiro
              </span>
              <span className={style.main.free}>
                <img src={desktopIcon} />
                100% online <br /> e gratuito
              </span>
              <span className={style.main.heroSpan}>
                Construa um projeto inédito, domine novas tecnologias e
                prepare-se para levar seu código, habilidades e carreira para o
                próximo nível.
              </span>
              <div className={style.main.handleButtonAnimate(isInView)}>
                <Button title="garantir ingresso gratuito" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.dividerContainer}>
          <img src={divider} className={style.divider} />
          <img src={arrowMotion} className={style.arrowDown} />
        </div>
      </div>

      <div ref={ref} className={style.aside.wrapper}>
        <div className={style.aside.handleItemContainer(animate1)}>
          <img src={projectCodeIcon} className={style.aside.icon} />
          <span className={style.aside.span}>
            Desenvolva um <br /> projeto completo
          </span>
        </div>
        <div className={style.aside.handleItemContainer(animate2)}>
          <img src={networkingIcon} className={style.aside.icon} />
          <span className={style.aside.span}>
            Faça networking <br /> 100% digital
          </span>
        </div>
        <div className={style.aside.handleItemContainer(animate3)}>
          <img src={tabCodeIcon} className={style.aside.icon} />
          <span className={style.aside.span}>
            Conteúdo prático <br /> para todos os níveis
          </span>
        </div>
        <div className={style.aside.handleItemContainer(animate4)}>
          <img src={medalIcon} className={style.aside.icon} />
          <span className={style.aside.span}>
            Participe de desafios <br /> e ganhe prêmios
          </span>
        </div>
      </div>
    </header>
  )
}

const style = {
  main: {
    wrapper: `bg-hero w-screen h-fit pb-[100px] md:max-h-fit bg-cover bg-no-repeat`,
    heroMainContainer: `flex flex-col lg:flex-row items-start pt-[82px] w-full max-w-7xl px-4 lg:pl-4 lg:pr-10 mx-auto`,
    logoCountdownContainer: `flex w-full mb-8 lg:mb-0 flex-col md:flex-row justify-between lg:flex-col items-center lg:w-[50%] mr-[30px]`,
    logo: `min-w-[232px] max-w-[232px] md:min-w-[336px] md:max-w-[336px] h-auto`,
    textContent: `text-center w-full md:text-left flex-grow`,
    heading: `text-3xl md:text-5xl !leading-[125%] font-bold`,
    strong: `heroHeadingGradient bg-clip-text text-transparent`,
    handleGridContainerTemplateColumns: (isMinWidth768px: boolean) => {
      if (isMinWidth768px) {
        return { gridTemplateColumns: '1fr 2.5fr' }
      } else {
        return { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }
      }
    },
    gridContainer: `grid gap-x-0 gap-y-9 grid-rows-3 md:grid-rows-2 !w-full justify-center md:justify-start items-center mt-[32px]`,
    when: `flex flex-col sm:mx-auto md:mx-0 text-sm col-span-1 row-span-1 row-start-2 md:row-start-1 uppercase font-sm !leading-6 text-[#C4C4CC] font-jetBrainsMono sm:flex-row items-center gap-x-4`,
    free: `flex flex-col sm:mx-auto md:mx-0 text-sm col-span-1 row-span-1 row-start-2 uppercase font-sm !leading-6 text-[#C4C4CC] font-jetBrainsMono sm:flex-row items-center gap-x-4`,
    heroSpan: `!leading-[160%] w-fit mx-auto col-span-2 md:col-span-1 row-start-1 row-span-1  inline-block text-[#C4C4CC]`,
    handleButtonAnimate: (startAnimation: boolean) => {
      return `${
        startAnimation
          ? 'animate-button-final-state-from-top'
          : 'animate-button-initial-state-from-top'
      } col-span-2 md:col-span-1 row-span-1 row-start-3 md:row-start-2`
    },
  },
  dividerContainer: `mx-auto max-w-7xl relative px-14 mt-24 pb-4 cursor-pointer`,
  divider: `hidden md:block w-full h-full`,
  arrowDown: `w-10 h-10 mx-auto -mt-24 md:-mt-6`,
  aside: {
    wrapper: `mx-auto text-[#E1E1E6] gap-4 md:gap-y-12 lg:gap-0 w-full max-w-7xl px-6 md:px-14 grid grid-cols-2 grid-rows-2 md:flex mt-24 items-center justify-between`,
    handleItemContainer: (animate: boolean) => {
      return `${
        animate
          ? 'animate-hero-item-final-state-from-top'
          : 'animate-hero-item-initial-state-from-top'
      } flex flex-col mx-auto my-auto lg:mx-0 md:my-0 col-span-1 row-span-1 items-center md:w-[170px] text-center text-sm xsm:text-lg mb-10`
    },
    icon: `w-10 h-10`,
    span: `!leading-[160%] pt-4`,
  },
}
