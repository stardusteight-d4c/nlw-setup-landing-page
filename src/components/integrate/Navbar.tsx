import React, { useEffect, useState } from 'react'
import nlwLogo from '@assets/nlw-horizontal-logo.svg'

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

  const handleNavStyle = () => {
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
  }

  return (
    <nav style={{ ...handleNavStyle() }}>
      <div
        className={`${
          scrollingPage ? 'flex' : 'hidden'
        } text-[#C4C4CC] mx-auto max-w-7xl md:px-4 lg:px-14 py-4 md:flex items-center justify-center md:justify-between`}
      >
        {scrollingPage && <img src={nlwLogo} alt="nlw/logo" />}
        <ul className={`${scrollingPage && '!hidden'} md:flex items-center gap-x-6`}>
          <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
            Sobre
          </li>
          <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
            Trilhas de conteúdo
          </li>
          <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
            Projetos
          </li>
          <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
            Educadores
          </li>
          <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
            Dúvidas
          </li>
        </ul>
        <button
          type="button"
          className="uppercase hidden md:block text-sm leading-5 hover:text-[#09090a] hover:bg-[#54E694] duration-300 ease-in-out transition-colors py-3 font-bold rounded-[5px] px-6 border border-[#54E694]"
        >
          inscreva-se {!scrollingPage && 'agora'}
        </button>
      </div>
    </nav>
  )
}
