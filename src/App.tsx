import React from 'react'
import { About } from './components/about/About'
import { Hero } from './components/hero/Hero'

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="max-w-7xl">
      <Hero />
      <About />
    </div>
  )
}
