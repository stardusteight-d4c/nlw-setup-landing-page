import { scrollTo } from '@/utils/scroll-to-target'
import backToTop from '@assets/back-to-top.svg'

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className={style.wrapper}>
      <div className={style.flexContentContainer}>
        <div className={style.anchorsContainer}>
          <a
            href="https://www.rocketseat.com.br/copyright"
            target="_blank"
            className={style.anchor}
          >
            Direitos autorais
          </a>
          <a
            href="https://www.rocketseat.com.br/terms"
            target="_blank"
            className={style.anchor}
          >
            Termos de uso
          </a>
          <a
            href="https://www.rocketseat.com.br/privacy"
            target="_blank"
            className={style.anchor}
          >
            Políticas de privacidade
          </a>
        </div>
        <img
          onClick={() => {
            scrollTo(0, 500)
          }}
          src={backToTop}
          alt="backToTop/img"
          className="cursor-pointer"
        />
      </div>
    </footer>
  )
}

const style = {
  wrapper: `max-w-7xl mx-auto px-4 lg:px-14 text-[#C4C4CC] py-[60px] !leading-[160%] bg-[#121214] border-t border-t-[#202024]`,
  flexContentContainer: `flex flex-col gap-y-10 md:flex-row items-center justify-center md:justify-between`,
  anchorsContainer: `flex flex-col gap-y-6 text-center md:text-left md:flex-row`,
  anchor: `md:pr-[48px] inline-block !leading-[160%]`,
}
