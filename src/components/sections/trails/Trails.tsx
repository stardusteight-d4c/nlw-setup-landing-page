import explorer from '../../../assets/trails/explorer.svg'
import ignite from '../../../assets/trails/ignite.svg'
import explorerTechnologies from '../../../assets/trails/explorer-technologies.svg'
import igniteTechnologies from '../../../assets/trails/ignite-technologies.svg'

interface Props {}

export const Trails = (props: Props) => {
  return (
    <section className="bg-[#121214] w-screen h-fit inline-block">
      <div className="max-w-7xl flex flex-col md:grid md:gap-x-8 gap-y-8 lg:gap-y-[60px] mt-[80px] md:mt-[140px] items-center justify-center grid-cols-1 md:grid-cols-2 mx-auto px-4 lg:pl-14 lg:pr-12">
        <h2 className="text-[32px] text-center md:text-left  col-span-1 font-bold leading-[140%] text-[#E1E1E6]">
          Para diferentes objetivos, diferentes trilhas de conteúdo
        </h2>
        <span className="text-[#C4C4CC] mb-[40px] md:mb-0 text-center md:text-left inline-block md:-mx-[10px] col-span-1 leading-[160%]">
          O NLW foi desenhado para te levar ao próximo nível, independente do
          caminho que você escolher. Ao fazer a sua inscrição, você poderá
          embarcar na missão que está mais alinhada com o seu momento e objetivo
          e acelerar na direção certa.
        </span>
        <div className="col-span-2 lg:col-span-1 rounded-md p-8 bg-[#202024] border border-[#29292E]">
          <div className="flex items-center mt-4 mb-6 gap-x-6">
            <img src={explorer} className="w-[68px] sm:w-auto" />
            <h3 className="text-2xl sm:text-[32px] leading-[140%] font-bold text-[#E1E1E6]">
              Trilha <br /> <strong className="text-[#42D3FF]">Explorer</strong>
            </h3>
          </div>
          <div>
            <p className="text-[#C4C4CC]">
              Para você que está no início da jornada, começando em programação,
              tem pouco tempo de estudos, quer dominar as bases, criar seu
              primeiro site e iniciar na área.
            </p>
            <span className="uppercase cursor-pointer mr-14 md:mr-0 my-4 inline-block font-medium text-[#54E694]">
              tecnologias e ferramentas
            </span>
            <img src={explorerTechnologies} />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-md p-8 bg-[#202024] border border-[#29292E]">
          <div className="flex items-center mt-4 mb-6 gap-x-6">
            <img src={ignite} className="w-[68px] sm:w-auto" />
            <h3 className="text-2xl sm:text-[32px] leading-[140%] font-bold text-[#E1E1E6]">
              Trilha <br /> <strong className="text-[#00B37E]">Iginite</strong>
            </h3>
          </div>
          <div>
            <p className="text-[#C4C4CC]">
              Para você que já tem conhecimento em programação, já domina os
              fundamentos, quer desenvolver uma aplicação ponta a ponta e
              encarar desafios maiores.
            </p>
            <span className="uppercase cursor-pointer mr-14 md:mr-0 my-4 inline-block font-medium text-[#54E694]">
              tecnologias e ferramentas
            </span>
            <img src={igniteTechnologies} />
          </div>
        </div>
        <div className="w-full col-span-2 h-[1px] bg-[#323238] mt-[40px] mb-[100px]" />
      </div>
    </section>
  )
}
