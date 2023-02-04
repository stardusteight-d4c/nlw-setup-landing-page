import React from 'react'
import { About } from './components/sections/about/About'
import { Hero } from './components/sections/hero/Hero'
import { Highlights } from './components/sections/highlights/Highlights'
import { Project } from './components/sections/project/Project'
import { Trails } from './components/sections/trails/Trails'

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Trails />
      <Project />
      <Highlights />
    </div>
  )
}
