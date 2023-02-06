import rewards from '@assets/rewards.webp'
import { Button } from './integrate/Button'

interface Props {}

export const Rewards = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.flexContentContainer}>
          <div className={style.asideLeftContent}>
            <span className={style.span}>participe gratuitamente</span>
            <h2 className={style.title}>
              Inscreva-se agora, convide seus amigos e concorra a prêmios
              exclusivos!
            </h2>
            <p className={style.paragraph}>
              Já pensou em ganhar uma cadeira gamer, um teclado mecânico
              Keychron K2, camiseta exclusiva da Rocketseat e bolsas de estudos?
              Convide amigo(a)s para o evento, some pontos, ganhe recompensas e
              concorra a outros prêmios incríveis.
            </p>
            <Button>garantir ingresso gratuito</Button>
          </div>
          <img src={rewards} alt="rewards/img" className={style.img} />
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `bg-[#121214]`,
  contentWrapper: `max-w-7xl mt-[80px] lg:mt-0 mx-auto px-4 lg:px-14`,
  flexContentContainer: `flex flex-col md:flex-row md:items-center`,
  asideLeftContent: `md:w-[50%] md:pr-10`,
  span: `inline-block font-medium tracking-[3px] mb-4 uppercase !leading-[150%] text-[#54E694]`,
  title: `text-[#E1E1E6] font-bold text-[32px] !leading-[140%]`,
  paragraph: `mt-6 mb-8 text-[#C4C4CC] !leading-[160%]`,
  img: `md:w-[50%] ml-2 md:ml-0`,
}
