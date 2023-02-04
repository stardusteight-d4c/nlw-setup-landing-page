import React from 'react'
import { About } from './components/About'
import { Educators } from './components/Educators'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Project } from './components/Project'
import { Trails } from './components/Trails'

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="w-screen overflow-hidden">
      <Hero />
      <About />
      <Trails />
      <Project />
      <Highlights />
      <Educators />
      <Experience />
    </div>
  )
}
