import { educatorsProps } from '@/utils/data'
import { useEffect, useRef, useState } from 'react'
import { Button } from './integrate/Button'
import { EducatorCard } from './integrate/EducatorCard'

interface Props {}

export const Educators = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateTitle, setAnimateTitle] = useState<boolean>(false)
  const [animateEducators, setAnimateEducators] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState(0)
  const educatorsRef = useRef<HTMLElement>(null)

  // ref is in view?
  // several times
  useEffect(() => {
    if (educatorsRef !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      })
      observer.observe(educatorsRef.current!)
      return () => observer.disconnect()
    }
  }, [educatorsRef])

  useEffect(() => {
    window.addEventListener('scroll', handleEducatorsItemsAnimate)
    return () => {
      window.removeEventListener('scroll', handleEducatorsItemsAnimate)
    }
  }, [scrollY])

  const handleEducatorsItemsAnimate = () => {
    setScrollY(window.scrollY)
    if (isVisible) {
      setTimeout(() => {
        setAnimateTitle(true)
      }, 400)
      setTimeout(() => {
        setAnimateEducators(true)
      }, 100)
    } else {
      setAnimateTitle(false)
      setAnimateEducators(false)
    }
  }

  return (
    <section id="educators" ref={educatorsRef} className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.headerWrapper}>
          <h2 className={style.handleHeading(animateTitle)}>
            Aprenda com educadores com décadas de experiência
          </h2>
          <Button>garantir ingresso gratuito</Button>
        </div>
        <div className={style.handleEducatorsContainer(animateEducators)}>
          {educatorsProps.map((educator, index) => (
            <EducatorCard key={`${index}-${educator.name}`} {...educator} />
          ))}
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `educatorsBackground py-[80px] md:py-[140px] max-w-screen h-fit`,
  contentWrapper: `max-w-7xl mx-auto px-4 lg:px-14`,
  headerWrapper: `flex flex-col md:flex-row items-center justify-between mb-[80px]`,
  handleHeading: (animate: boolean) => {
    return `${
      animate
        ? 'animate-educators-title-final-state-from-left'
        : 'animate-educators-title-initial-state-from-left '
    } text-[#E1E1E6] mb-6 md:mb-0 text-center md:text-left md:w-[500px] font-bold text-[24px] md:text-[32px] !leading-[140%]`
  },
  handleEducatorsContainer: (animate: boolean) => {
    return `${
      animate
        ? 'animate-educators-person-final-state-from-top'
        : 'animate-educators-person-initial-state-from-top'
    } grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16`
  },
}
