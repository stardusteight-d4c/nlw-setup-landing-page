import jake from '@assets/jake.png'
import diego from '@assets/diego.png'
import rodrigo from '@assets/rodrigo.png'
import mayk from '@assets/mayk.png'
import host from '@assets/host-icon.svg'
import ignite from '@assets/ignite-icon.svg'
import explorer from '@assets/explorer-icon.svg'

interface Props {}

export const Educators = (props: Props) => {
  return (
    <section className="educatorsBackground py-[80px] md:py-[140px] w-screen h-fit">
      <div className="max-w-7xl mx-auto px-4 lg:px-14">
        <div className="flex flex-col md:flex-row items-center justify-between mb-[80px]">
          <h2 className="text-[#E1E1E6] mb-6 md:mb-0 text-center md:text-left md:w-[500px] font-bold text-[24px] md:text-[32px] !leading-[140%]">
            Aprenda com educadores com décadas de experiência
          </h2>
          <button className="uppercase w-full col-span-2 md:col-span-1 row-span-1 row-start-3 md:row-start-2 md:w-fit -mt-[2px] text-sm !leading-[0.30rem] text-[#09090a] bg-[#54E694] duration-200 ease-in-out transition-colors p-6 font-bold rounded-[5px] hover:bg-[#00da60]">
            garantir ingresso gratuito
          </button>
        </div>
        <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          <div className="bg-[#271A45] border-b-[2px] cursor-default border-b-transparent hover:border-b-[#996DFF] transition-all rounded col-span-1">
            <header className="educatorCardHeaderBackground bg-[#996dff] rounded-t text-center relative">
              <img src={jake} alt="Jake Gracielly" className="educator" />
              <img
                src={host}
                className="absolute -bottom-[24px] left-1/2 -translate-x-1/2"
              />
            </header>
            <div className="px-4 text-center pt-10 pb-6">
              <h3 className="text-2xl font-bold !leading-[140%] text-[#E1E1E6] mb-1">
                Jake Gracielly
              </h3>
              <span className="text-[#996DFF] text-lg !leading-[150%]">
                Host
              </span>
              <p className="mt-4 text-sm text-center text-[#E1E1E6]">
                Desenvolvedora web há mais de 10 anos reconhecida pela Microsoft
                como Microsoft Most Valuable Professional. Desenvolvedora NodeJS
                e React, DevRel na Rocketseat. Apaixonada por compartilhar
                conhecimento e impulsionar pessoas em suas trajetórias
                profissionais.
              </p>
            </div>
          </div>
          <div className="bg-[#00291D] border-b-[2px] cursor-default border-b-transparent hover:border-b-[#54E694] transition-all ease-in-out rounded col-span-1">
            <header className="educatorCardHeaderBackground bg-[#047C3F] rounded-t text-center relative">
              <img src={diego} alt="Diego Fernandes" className="educator" />
              <img
                src={ignite}
                className="absolute -bottom-[24px] left-1/2 -translate-x-1/2"
              />
            </header>
            <div className="px-4 text-center pt-10 pb-6">
              <h3 className="text-2xl font-bold !leading-[140%] text-[#E1E1E6] mb-1">
                Diego Fernandes
              </h3>
              <span className="text-[#54E694] text-lg !leading-[150%]">
                Trilha Ignite
              </span>
              <p className="mt-4 text-sm text-center text-[#E1E1E6]">
                Programador há 11 anos com foco nas melhores tecnologias de
                desenvolvimento web & mobile. Apaixonado por educação e por
                mudar a vida das pessoas através da programação. Mais de 500.000
                pessoas já passaram por um dos seus treinamentos.
              </p>
            </div>
          </div>
          <div className="bg-[#00291D] border-b-[2px] cursor-default border-b-transparent hover:border-b-[#54E694] transition-all rounded col-span-1">
            <header className="educatorCardHeaderBackground bg-[#047C3F] rounded-t text-center relative">
              <img src={rodrigo} alt="Rodrigo Gonçalves" className="educator" />
              <img
                src={ignite}
                className="absolute -bottom-[24px] left-1/2 -translate-x-1/2"
              />
            </header>
            <div className="px-4 text-center pt-10 pb-6">
              <h3 className="text-2xl font-bold !leading-[140%] text-[#E1E1E6] mb-1">
                Rodrigo Gonçalves
              </h3>
              <span className="text-[#54E694] text-lg !leading-[150%]">
                Trilha Ignite
              </span>
              <p className="mt-4 text-sm text-center text-[#E1E1E6]">
                Graduado em Sistemas, pós-graduado em Project Management PMI,
                Mestre em educação com ênfase em tecnologia e professor
                acadêmico desde 2014. Já lecionou e coordenou a graduação em
                Sistemas de Informação e a pós-graduação em Engenharia de
                Software.
              </p>
            </div>
          </div>
          <div className="bg-[#0A3442] border-b-[2px] cursor-default border-b-transparent hover:border-b-[#42d3ff] transition-all rounded col-span-1">
            <header className="educatorCardHeaderBackground rounded-t text-center bg-[#4C55D2] relative">
              <img src={mayk} alt="Mayk Brito" className="educator" />
              <img
                src={explorer}
                className="absolute -bottom-[24px] left-1/2 -translate-x-1/2"
              />
            </header>
            <div className="px-4 text-center pt-10 pb-6">
              <h3 className="text-2xl font-bold !leading-[140%] text-[#E1E1E6] mb-1">
                Mayk Brito
              </h3>
              <span className="text-[#42d3ff] text-lg !leading-[150%]">
                Trilha Explorer
              </span>
              <p className="mt-4 text-sm text-center text-[#E1E1E6]">
                Programador há mais de 14 anos, é apaixonado por ajudar quem
                está dando os primeiros passos nesse universo. Vem transformando
                milhares de devs através dos seus conteúdos e cursos. Com uma
                didática fácil de assimilar, ele vai te guiar no início da
                jornada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
