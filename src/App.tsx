import React from 'react'
import { About } from './components/About'
import { Educators } from './components/Educators'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Opportunity } from './components/Opportunity'
import { Project } from './components/Project'
import { Trails } from './components/Trails'

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="max-w-screen">
      <Hero />
      <About />
      <Trails />
      <Project />
      <Highlights />
      <Educators />
      <Experience />
      <Opportunity />
    </div>
  )
}
