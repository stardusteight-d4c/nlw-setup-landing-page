import cash from '@assets/cash.svg'
import rocket from '@assets/rocket.svg'
import account from '@assets/account.svg'
import css from '@assets/css.svg'

interface Props {}

export const Opportunity = (props: Props) => {
  return (
    <section className="bg-[#202024]">
      <div className="max-w-7xl py-[80px] md:py-[140px] mx-auto px-4 lg:px-14">
        <div className="text-center">
          <span className="uppercase mb-4 inline-block text-[#54E694] font-medium tracking-[3px] !leading-[150%]">
            oportunidade
          </span>
          <h2 className="text-[#E1E1E6] mx-auto w-[500px] font-bold text-[32px] !leading-[140%]">
            Conquiste seus principais objetivos como dev em 2023
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:mx-4 lg:mx-0 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-y-2 col-span-1">
            <img src={cash} alt="cash/svg" className="w-[40px] h-[40px]" />
            <h3 className="text-[#E1E1E6] font-bold text-xl !leading-[160%]">
              Alta salarial
            </h3>
            <p className="text-[#C4C4CC] text-sm">
              Setor da tecnologia é o segmento que garantiu as maiores altas
              salariais no último ano.
            </p>
            <span className="text-[#8D8D99] text-xs !leading-[160%]">
              Fonte: Guia salarial 2023 Robert Half
            </span>
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <img src={rocket} alt="cash/svg" className="w-[40px] h-[40px]" />
            <h3 className="text-[#E1E1E6] font-bold text-xl !leading-[160%]">
              Mercado aquecido
            </h3>
            <p className="text-[#C4C4CC] text-sm">
              Pesquisa estima 800 mil oportunidades de trabalho na área da
              tecnologia no Brasil até 2025.
            </p>
            <span className="text-[#8D8D99] text-xs !leading-[160%]">
              Fonte: Brasscom
            </span>
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <img src={account} alt="cash/svg" className="w-[40px] h-[40px]" />
            <h3 className="text-[#E1E1E6] font-bold text-xl !leading-[160%]">
              Profissionais disputados
            </h3>
            <p className="text-[#C4C4CC] text-sm">
              Profissionais de TI recebem 84% mais convites para participar de
              processos seletivos em outra organização.
            </p>
            <span className="text-[#8D8D99] text-xs !leading-[160%]">
              Fonte: Pesquisa FEEx – FIA Employee
            </span>
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <img src={css} alt="cash/svg" className="w-[40px] h-[40px]" />
            <h3 className="text-[#E1E1E6] font-bold text-xl !leading-[160%]">
              Carreira em destaque
            </h3>
            <p className="text-[#C4C4CC] text-sm">
              Desenvolvedor Web está entre as dez profissões mais promissoras,
              com um crescimento de 5,2% ao ano.
            </p>
            <span className="text-[#8D8D99] text-xs !leading-[160%]">
              Fonte: Forbes e Robert Half
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
