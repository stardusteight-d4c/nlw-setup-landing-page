import explorer from '@assets/explorer.svg'
import ignite from '@assets/ignite.svg'
import explorerTechnologies from '@assets/explorer-technologies.svg'
import igniteTechnologies from '@assets/ignite-technologies.svg'
import { useEffect, useRef, useState } from 'react'
import { TrailCard } from './integrate/TrailCard'

interface Props {}

export const Trails = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateHeading, setAnimateHeading] = useState(false)
  const [animateSpan, setAnimateSpan] = useState(false)
  const [animateCard1, setAnimateCard1] = useState(false)
  const [animateCard2, setAnimateCard2] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const trialsRef = useRef<HTMLElement>(null)

  // ref is in view?
  // several times
  useEffect(() => {
    if (trialsRef !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      })
      observer.observe(trialsRef.current!)
      return () => observer.disconnect()
    }
  }, [trialsRef])

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
        setAnimateSpan(true)
      }, 200)
      setTimeout(() => {
        setAnimateHeading(true)
      }, 400)
      setTimeout(() => {
        setAnimateCard1(true)
      }, 800)
      setTimeout(() => {
        setAnimateCard2(true)
      }, 1000)
    } else {
      setAnimateHeading(false)
      setAnimateSpan(false)
      setAnimateCard1(false)
      setAnimateCard2(false)
    }
  }

  const trailCard1Props = {
    animate: animateCard1,
    trail: 'Explorer' as 'Explorer',
    trailImg: explorer,
    trailDescription: `Para você que está no início da jornada, começando em programação,
    tem pouco tempo de estudos, quer dominar as bases, criar seu
    primeiro site e iniciar na área.`,
    tecnologiesImg: explorerTechnologies,
  }
  const trailCard2Props = {
    animate: animateCard2,
    trail: 'Ignite' as 'Ignite',
    trailImg: ignite,
    trailDescription: `Para você que já tem conhecimento em programação, já domina os
    fundamentos, quer desenvolver uma aplicação ponta a ponta e
    encarar desafios maiores.`,
    tecnologiesImg: igniteTechnologies,
  }

  return (
    <section ref={trialsRef} id="trials" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <h2 className={style.handleHeading(animateHeading)}>
          Para diferentes objetivos, diferentes trilhas de conteúdo
        </h2>
        <span className={style.handleSpan(animateSpan)}>
          O NLW foi desenhado para te levar ao próximo nível, independente do
          caminho que você escolher. Ao fazer a sua inscrição, você poderá
          embarcar na missão que está mais alinhada com o seu momento e objetivo
          e acelerar na direção certa.
        </span>
        <TrailCard {...trailCard1Props} />
        <TrailCard {...trailCard2Props} />
        <div className={style.divider} />
      </div>
    </section>
  )
}

const style = {
  wrapper: `bg-[#121214] w-screen h-fit`,
  contentWrapper: `max-w-7xl flex flex-col md:grid md:gap-x-8 gap-y-8 lg:gap-y-[60px] pt-[80px] md:pt-[140px] items-center justify-center grid-cols-1 md:grid-cols-2 mx-auto px-4 lg:px-14`,
  handleHeading: (animate: boolean) => {
    return `${
      animate
        ? 'animate-trials-final-state-from-bottom'
        : 'animate-trials-initial-state-from-bottom'
    } text-[32px] text-center md:text-left  col-span-1 font-bold leading-[140%] text-[#E1E1E6]`
  },
  handleSpan: (animate: boolean) => {
    return `${
      animate
        ? 'animate-trials-final-state-from-bottom'
        : 'animate-trials-initial-state-from-bottom'
    } text-[#C4C4CC] mb-[40px] md:mb-0 text-center md:text-left inline-block md:-mx-[10px] col-span-1 leading-[160%]`
  },
  divider: `w-full col-span-2 h-[1px] bg-[#323238] mt-[40px] mb-[100px]`,
}
