import React from 'react'
import { About } from './components/About'
import { Educators } from './components/Educators'
import { Experience } from './components/Experience'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Liftoff } from './components/Liftoff'
import { Opportunity } from './components/Opportunity'
import { Project } from './components/Project'
import { Rewards } from './components/Rewards'
import { Trails } from './components/Trails'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className="max-w-screen">
      <Hero />
      <About />
      <Trails />
      <Project />
      <Highlights />
      <Educators />
      <Experience />
      <Opportunity />
      <Rewards />
      <Faq />
      <Liftoff />
    </main>
  )
}
