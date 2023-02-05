import arrowRight from '@assets/arrow-right.svg'
import checkList from '@assets/check-list.svg'
import { ExperienceMarquee } from './integrate/ExperienceMarquee'

interface Props {}

export const Experience = (props: Props) => {
  return (
    <section className="bg-[#121214] experienceBackground pt-[80px] md:pt-[140px] w-screen">
      <div className="max-w-7xl relative grid grid-cols-1 md:grid-cols-2 items-start justify-between mx-auto px-4 lg:px-14">
        <div className="md:sticky z-50 top-[140px] col-span-1">
          <span className="text-[#54E694] inline-block mb-4 uppercase !leading-[150%] tracking-[3px] font-medium">
            Experiência Completa
          </span>
          <h2 className="text-[#E1E1E6] text-[32px] !leading-[140%] font-bold">
            Comece do jeito certo e esteja preparado
          </h2>
          <img src={arrowRight} className="mt-10 rotate-90 md:rotate-0" />
        </div>
        <div className="md:pl-[10px] mt-8 md:mt-0 ml-[11px] pl-4 md:ml-0 border-l-[2px] border-l-[#333333] md:border-l-0 col-span-1">
          <ul className="flex md:ml-[80px] flex-col gap-y-12">
            <li>
              <img src={checkList} />
              <h3 className="text-2xl text-[#E1E1E6] mt-4 font-bold !leading-[140%]">
                Projeto completo para o seu portfólio
              </h3>
              <p className="mt-4 text-[#C4C4CC] !leading-[160%]">
                Metodologia prática para conhecer tecnologias, ferramentas e
                desenvolver suas skills técnicas. Você vai sair com um projeto
                inédito para o seu portfólio que comprova sua participação e
                conhecimento e é a porta de entrada para as melhores
                oportunidades da programação.
              </p>
            </li>
            <li>
              <img src={checkList} />
              <h3 className="text-2xl text-[#E1E1E6] mt-4 font-bold !leading-[140%]">
                Comunidade exclusiva e engajada
              </h3>
              <p className="mt-4 text-[#C4C4CC] !leading-[160%]">
                Você vai ter acesso a uma comunidade privada do evento para se
                conectar a outros devs que estão no mesmo nível que você, trocar
                experiências, estudar junto, fazer networking e evoluir em
                grupo.
              </p>
            </li>
            <li>
              <img src={checkList} />
              <h3 className="text-2xl text-[#E1E1E6] mt-4 font-bold !leading-[140%]">
                Suporte do time da Rocketseat
              </h3>
              <p className="mt-4 text-[#C4C4CC] !leading-[160%]">
                Você vai interagir de perto com o time da Rocketseat, tirar
                dúvidas sobre as aulas e contar com o suporte dos dev
                instructors para acelerar sua evolução.
              </p>
            </li>
            <li>
              <img src={checkList} />
              <h3 className="text-2xl text-[#E1E1E6] mt-4 font-bold !leading-[140%]">
                Atividades valendo prêmios
              </h3>
              <p className="mt-4 text-[#C4C4CC] !leading-[160%]">
                Dentro da comunidade você vai participar de diversas atividades
                como flash challenges, NLW API (rodas de conversa) e completar
                um desafio após cada aula, que vão te ajudar a fixar o conteúdo
                e te motivar a chegar até o final do evento com um projeto
                completo. E ao participar, você concorre a camisetas exclusivas
                do evento.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mt-[100px] text-center relative flex items-center justify-between mx-auto px-4 lg:px-14">
        <div className="w-full h-[1px] bg-[#323238]" />
        <div className="uppercase whitespace-nowrap mx-4 md:mx-14 text-[#54E694] font-medium tracking-[2.5px]">
          E ainda tem mais
        </div>
        <div className="w-full h-[1px] bg-[#323238]" />
      </div>
      <div className='pt-[32px] w-screen overflow-hidden pb-[100px]'>
        <ExperienceMarquee />
      </div>
    </section>
  )
}
