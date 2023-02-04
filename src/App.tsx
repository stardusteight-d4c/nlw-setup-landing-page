import React from 'react'
import { About } from './components/sections/about/About'
import { Hero } from './components/sections/hero/Hero'
import { Project } from './components/sections/project/Project'
import { Trails } from './components/sections/trails/Trails'

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="max-w-7xl">
      <Hero />
      <About />
      <Trails />
      <Project />
    </div>
  )
}
