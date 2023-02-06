import React, { useEffect, useState } from 'react'
import nlwLogo from '@assets/nlw-horizontal-logo.svg'
import { Button } from './Button'
import { scrollTo } from '@/utils/scroll-to-target'

interface Props {}

export const Navbar = (props: Props) => {
  const [scrollingPage, setScrollingPage] = useState(false)
  const [showScrollNav, setShowScrollNav] = useState(false)
  const [transition, setTransition] = useState(false)
  const navHeight = 98

  useEffect(() => {
    window.addEventListener('scroll', onNavPageScroll)
    return () => {
      window.removeEventListener('scroll', onNavPageScroll)
    }
  }, [])

  const onNavPageScroll = () => {
    if (window.scrollY < 300) {
      setScrollingPage(false)
      setTransition(false)
    }

    if (window.scrollY > 300) {
      setScrollingPage(true)
      setTimeout(() => {
        setTransition(true)
      }, 500)
    }

    if (window.scrollY > 500) {
      setShowScrollNav(true)
    } else {
      setShowScrollNav(false)
    }
  }

  return (
    <nav style={style.handleWrapper(scrollingPage, transition, showScrollNav)}>
      <div className={style.contentWrapper(scrollingPage)}>
        {scrollingPage && (
          <img
            src={nlwLogo}
            alt="nlw/logo"
            className="cursor-pointer"
            onClick={() => {
              scrollTo(0, 800)
            }}
          />
        )}
        <ul className={style.contentContainer(scrollingPage)}>
          <a
            onClick={() => {
              const element: HTMLElement = document.querySelector('#about')!
              const distanceFromTop = element.offsetTop - (navHeight - 18)
              scrollTo(distanceFromTop, 500)
            }}
            className={style.list}
          >
            Sobre
          </a>
          <a
            onClick={() => {
              const element: HTMLElement = document.querySelector('#trials')!
              const distanceFromTop = element.offsetTop
              scrollTo(distanceFromTop, 500)
            }}
            className={style.list}
          >
            Trilhas de conteúdo
          </a>
          <a
            onClick={() => {
              const element: HTMLElement = document.querySelector('#project')!
              const distanceFromTop = element.offsetTop - (navHeight + 10)
              scrollTo(distanceFromTop, 500)
            }}
            className={style.list}
          >
            Projetos
          </a>
          <a
            onClick={() => {
              const element: HTMLElement = document.querySelector('#educators')!
              const distanceFromTop = element.offsetTop + 40
              scrollTo(distanceFromTop, 500)
            }}
            className={style.list}
          >
            Educadores
          </a>
          <a
            onClick={() => {
              const element: HTMLElement = document.querySelector('#faq')!
              const distanceFromTop = element.offsetTop - 120
              scrollTo(distanceFromTop, 500)
            }}
            className={style.list}
          >
            Dúvidas
          </a>
        </ul>
        <Button variant={true}>inscreva-se {!scrollingPage && 'agora'}</Button>
      </div>
    </nav>
  )
}

const style = {
  handleWrapper: (
    scrollingPage: boolean,
    transition: boolean,
    showScrollNav: boolean
  ) => {
    if (scrollingPage) {
      return {
        background: '#121214',
        position: 'fixed' as 'fixed',
        top: '0',
        zIndex: '500',
        width: '100%',
        borderBottom: '1px solid #32323890',
        transition: transition ? 'transform 1000ms' : '',
        transform: showScrollNav
          ? 'translate3d(0px, 0px, 0px)'
          : 'translate3d(0px, -100px, 0px)',
      }
    } else {
      return {
        background: 'transparent',
        zIndex: '500',
      }
    }
  },
  contentWrapper: (scrollingPage: boolean) => {
    return `${
      scrollingPage ? 'flex' : 'hidden'
    } text-[#C4C4CC] mx-auto max-w-7xl md:px-4 lg:px-14 py-4 md:flex items-center justify-center md:justify-between`
  },
  contentContainer: (scrollingPage: boolean) => {
    return `${
      scrollingPage ? 'hidden lg:flex' : 'md:flex'
    } items-center gap-x-6`
  },
  list: `hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1`,
}
