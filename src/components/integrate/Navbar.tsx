import React, { useEffect, useState } from 'react'
import nlwLogo from '@assets/nlw-horizontal-logo.svg'
import { Button } from './Button'

interface Props {}

export const Navbar = (props: Props) => {
  const [scrollingPage, setScrollingPage] = useState(false)
  const [showScrollNav, setShowScrollNav] = useState(false)
  const [transition, setTransition] = useState(false)

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
        {scrollingPage && <img src={nlwLogo} alt="nlw/logo" />}
        <ul className={style.contentContainer(scrollingPage)}>
          <li className={style.list}>Sobre</li>
          <li className={style.list}>Trilhas de conteúdo</li>
          <li className={style.list}>Projetos</li>
          <li className={style.list}>Educadores</li>
          <li className={style.list}>Dúvidas</li>
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
