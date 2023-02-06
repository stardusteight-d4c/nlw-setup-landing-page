import year2023 from '@assets/year-2023.svg'
import firstEventOfTheYear from '@assets/first-event-of-the-year-circle.svg'
import twilio from '@assets/twilio-logo.svg'
import { AboutMarquee } from './integrate/AboutMarquee'
import { useEffect, useRef, useState } from 'react'
import { Button } from './integrate/Button'

interface Props {}

export const About = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [animateHeadingContent, setAnimateHeadingContent] = useState(false)
  const [animateSponsor, setAnimateSponsor] = useState(false)
  const [animateTwilio, setAnimateTwilio] = useState(false)
  const [animateSpan, setAnimateSpan] = useState(false)
  const [animateButton, setAnimateButton] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  // ref is in view?
  // several times
  useEffect(() => {
    if (aboutRef !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      })
      observer.observe(aboutRef.current!)
      return () => observer.disconnect()
    }
  }, [aboutRef])

  useEffect(() => {
    window.addEventListener('scroll', handleAboutItemsAnimate)
    return () => {
      window.removeEventListener('scroll', handleAboutItemsAnimate)
    }
  }, [scrollY])

  const handleAboutItemsAnimate = () => {
    setScrollY(window.scrollY)
    if (isVisible) {
      setTimeout(() => {
        setAnimateHeadingContent(true)
        setAnimateTwilio(true)
        setAnimateButton(true)
      }, 300)
      setTimeout(() => {
        setAnimateSponsor(true)
        setAnimateSpan(true)
      }, 500)
    } else {
      setAnimateHeadingContent(false)
      setAnimateSponsor(false)
      setAnimateTwilio(false)
      setAnimateSpan(false)
      setAnimateButton(false)
    }
  }

  return (
    <section id="about" ref={aboutRef} className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.mainContentContainer}>
          <div className={style.circleEmblem}>
            <img src={year2023} className={style.circleEmblemContent} />
            <img
              src={firstEventOfTheYear}
              className={style.circleEmblemSpinner}
            />
          </div>
          <div className={style.handleHeadingContainer(animateHeadingContent)}>
            <h2 className={style.heading}>
              O maior evento online e gratuito de programação na prática com
              muito código, desafios, networking e um único objetivo:{' '}
              <strong className={style.headingStrong}>
                te levar para o próximo nível
              </strong>
            </h2>
            <span className={style.sponsorSpan}>
              <p className={style.handleAnimate(animateSponsor)}>
                Patrocinador
              </p>
              <img
                src={twilio}
                className={`${style.handleAnimate(animateTwilio)} -mt-[2px]`}
              />
            </span>
          </div>
          <div className={style.spanButtonContent}>
            <span className={style.handleSpan(animateSpan)}>
              Durante uma semana você terá acesso a uma metodologia eficiente
              para o seu aprendizado, uma comunidade com milhares de devs e uma
              experiência completa pra acelerar sua evolução.
            </span>
            <div className={style.handleAnimate(animateButton)}>
              <Button>garantir ingresso gratuito</Button>
            </div>
          </div>
        </div>
        <AboutMarquee />
      </div>
    </section>
  )
}

const style = {
  wrapper: `h-fit relative inline-block w-screen overflow-x-hidden`,
  contentWrapper: `overlayAboutBackgroudEffect z-0 inset-0 w-screen h-fit bg-cover bg-no-repeat`,
  mainContentContainer: `flex flex-col lg:flex-row items-start lg:items-center lg:justify-center lg:mx-auto max-w-7xl py-[140px] px-4 lg:px-14`,
  circleEmblem: `gradientCircle relative flex items-center justify-center min-w-[159px] min-h-[159px] max-w-[159px] max-h-[159px] z-10`,
  circleEmblemContent: `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`,
  circleEmblemSpinner: `animate-spin-slow`,
  handleHeadingContainer: (animate: boolean) => {
    return `${
      animate
        ? 'animate-about-final-state-from-top'
        : 'animate-about-initial-state-from-top'
    } flex flex-col mt-6 lg::mt-0 grow lg:pl-[72px] lg:pr-[52px]`
  },
  heading: `text-[32px] !leading-[140%] font-bold`,
  headingStrong: `text-[#54E694]`,
  sponsorSpan: `flex gap-x-6 mt-4 items-center text-[#C4C4CC] !leading-[160%]`,
  handleAnimate: (animate: boolean) => {
    return `${
      animate
        ? 'animate-about-final-state-from-top'
        : 'animate-about-initial-state-from-top'
    }`
  },
  spanButtonContent: `text-[#E1E1E6] !leading-[160%]`,
  handleSpan: (animate: boolean) => {
    return `${
      animate
        ? 'animate-about-final-state-from-top'
        : 'animate-about-initial-state-from-top'
    } lg:mb-4 inline-block my-6 lg:my-0 lg:w-[297px]`
  },
}
