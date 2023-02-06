import { Accordion } from './integrate/Accordion'
import { Button } from './integrate/Button'

interface Props {}

export const Faq = (props: Props) => {
  return (
    <section id="faq" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.titleContainer}>
          <span className={style.titleSpan}>faq</span>
          <h2 className={style.title}>Perguntas e respostas mais frequentes</h2>
          <Button>garantir ingresso gratuito</Button>
        </div>

        <div>
          <Accordion title="O que é o NLW?">
            O Next Level Week é um evento totalmente online, gratuito e mão na
            massa promovido pela Rocketseat com muito código, desafios,
            networking e um único objetivo: te levar para o próximo nível, seja
            qual for o seu momento de carreira. Você vai aprender como
            desenvolver uma aplicação para colocar no seu portfólio, agregar
            mais valor para seu currículo e ter acesso a melhores oportunidades
            na programação.
          </Accordion>
          <Accordion title="Quanto custa para participar?">
            Nada. O evento é 100% gratuito!
          </Accordion>
          <Accordion title="Preciso ter conhecimento prévio para participar?">
            Não é necessário conhecimento prévio em programação para participar.
            Ao escolher a trilha Explorer, você vai aprender a dar os primeiros
            passos nesse universo e conhecer as possibilidades da profissão,
            além de aprender na prática a construir um projeto, mesmo que você
            esteja começando agora.
          </Accordion>
          <Accordion title="Onde o evento vai acontecer?">
            O NLW é totalmente online e acontece dentro da plataforma da
            Rocketseat. É lá que você vai poder assistir as aulas, baixar os
            materiais complementares e acessar os wallpapers. Assim que você
            embarcar no evento, você receberá um e-mail para concluir seu
            cadastro inicial na plataforma, que assim como o evento, é gratuito.
          </Accordion>
          <Accordion title="Onde acessar as edições passadas do NLW?">
            Essa será a edição número 11 do NLW. Todas as edições anteriores
            estão disponíveis no Rocketseat Plus, um ambiente de aprendizado
            exclusivo, que reúne eventos da Rocketseat, aulas inéditas e
            conteúdos de diversas stacks e tecnologias.
          </Accordion>
          <Accordion title="Quem é a Rocketseat?">
            Somos a maior comunidade dev da América Latina. Mais de 40 mil
            alunos já passaram pela nossa escola e a nossa missão é impulsionar
            pessoas através da educação em tecnologia. Juntos vamos construir o
            futuro através da programação.
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `bg-[#121214] pt-[40px] pb-[140px] w-screen`,
  contentWrapper: `max-w-7xl relative grid grid-cols-1 md:grid-cols-2 items-start justify-between mx-auto px-4 lg:px-14`,
  titleContainer: `md:sticky mb-[40px] md:mb-0 md:pr-[48px] z-50 top-[140px] col-span-1`,
  titleSpan: `text-[#54E694] inline-block mb-4 uppercase !leading-[150%] tracking-[3px] font-medium`,
  title: `text-[#E1E1E6] mb-6 text-[32px] !leading-[140%] font-bold`,
}
