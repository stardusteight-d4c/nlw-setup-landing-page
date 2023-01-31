import React from 'react'
import backgroud from '../../assets/hero/background.webp'
import { Navbar } from './integrate/Navbar'

interface Props {}

export const Hero = (props: Props) => {
  return (
    <header className="w-screen h-screen relative">
      <img src={backgroud} className="absolute inset-0 -z-10" />
      <div className="max-w-7xl px-14 mx-auto">
        <Navbar />
      </div>
    </header>
  )
}
