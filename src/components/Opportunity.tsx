import cash from '@assets/cash.svg'
import rocket from '@assets/rocket.svg'
import account from '@assets/account.svg'
import css from '@assets/css.svg'

interface Props {}

export const Opportunity = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.textAlignCenter}>
          <span className={style.titleSpan}>oportunidade</span>
          <h2 className={style.title}>
            Conquiste seus principais objetivos como dev em 2023
          </h2>
        </div>
        <div className={style.listContainer}>
          <div className={style.itemListContainer}>
            <img src={cash} alt="cash/svg" className={style.iconImg} />
            <h3 className={style.titleList}>Alta salarial</h3>
            <p className={style.paragraph}>
              Setor da tecnologia é o segmento que garantiu as maiores altas
              salariais no último ano.
            </p>
            <span className={style.sourceSpan}>
              Fonte: Guia salarial 2023 Robert Half
            </span>
          </div>
          <div className={style.itemListContainer}>
            <img src={rocket} alt="cash/svg" className={style.iconImg} />
            <h3 className={style.titleList}>Mercado aquecido</h3>
            <p className={style.paragraph}>
              Pesquisa estima 800 mil oportunidades de trabalho na área da
              tecnologia no Brasil até 2025.
            </p>
            <span className={style.sourceSpan}>Fonte: Brasscom</span>
          </div>
          <div className={style.itemListContainer}>
            <img src={account} alt="cash/svg" className={style.iconImg} />
            <h3 className={style.titleList}>Profissionais disputados</h3>
            <p className={style.paragraph}>
              Profissionais de TI recebem 84% mais convites para participar de
              processos seletivos em outra organização.
            </p>
            <span className={style.sourceSpan}>
              Fonte: Pesquisa FEEx – FIA Employee
            </span>
          </div>
          <div className={style.itemListContainer}>
            <img src={css} alt="cash/svg" className={style.iconImg} />
            <h3 className={style.titleList}>Carreira em destaque</h3>
            <p className={style.paragraph}>
              Desenvolvedor Web está entre as dez profissões mais promissoras,
              com um crescimento de 5,2% ao ano.
            </p>
            <span className={style.sourceSpan}>
              Fonte: Forbes e Robert Half
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `bg-[#202024]`,
  contentWrapper: `max-w-7xl py-[80px] md:py-[140px] mx-auto px-4 lg:px-14`,
  textAlignCenter: `text-center`,
  titleSpan: `uppercase mb-4 inline-block text-[#54E694] font-medium tracking-[3px] !leading-[150%]`,
  title: `text-[#E1E1E6] mx-auto md:w-[500px] font-bold text-[32px] !leading-[140%]`,
  listContainer: `mt-10 grid grid-cols-1 md:grid-cols-2 md:mx-4 lg:mx-0 lg:grid-cols-4 gap-8`,
  itemListContainer: `flex flex-col gap-y-2 col-span-1`,
  iconImg: `w-[40px] h-[40px]`,
  titleList: `text-[#E1E1E6] font-bold text-xl !leading-[160%]`,
  paragraph: `text-[#C4C4CC] text-sm`,
  sourceSpan: `text-[#8D8D99] text-xs !leading-[160%]`,
}
