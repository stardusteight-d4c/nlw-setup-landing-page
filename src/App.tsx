import {
  Hero,
  About,
  Trails,
  Project,
  Highlights,
  Educators,
  Experience,
  Opportunity,
  Rewards,
  Faq,
  Liftoff,
  Footer,
} from './components'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className='max-w-[100vw]'>
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
      <Footer />
    </main>
  )
}
