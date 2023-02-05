import rewards from '@assets/rewards.webp'

interface Props {}

export const Rewards = (props: Props) => {
  return (
    <section className="bg-[#121214]">
      <div className="max-w-7xl mt-[80px] lg:mt-0 mx-auto px-4 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-[50%] md:pr-10">
            <span className="inline-block font-medium tracking-[3px] mb-4 uppercase !leading-[150%] text-[#54E694]">
              participe gratuitamente
            </span>
            <h2 className="text-[#E1E1E6] font-bold text-[32px] !leading-[140%]">
              Inscreva-se agora, convide seus amigos e concorra a prêmios
              exclusivos!
            </h2>
            <p className="mt-6 mb-8 text-[#C4C4CC] !leading-[160%]">
              Já pensou em ganhar uma cadeira gamer, um teclado mecânico
              Keychron K2, camiseta exclusiva da Rocketseat e bolsas de estudos?
              Convide amigo(a)s para o evento, some pontos, ganhe recompensas e
              concorra a outros prêmios incríveis.
            </p>
            <button className="uppercase w-full md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
              garantir ingresso gratuito
            </button>
          </div>
          <img
            src={rewards}
            alt="rewards/img"
            className="md:w-[50%] ml-2 md:ml-0"
          />
        </div>
      </div>
    </section>
  )
}
