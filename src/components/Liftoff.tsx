import doubleQuotes from '@assets/double-quotes.svg'

interface Props {}

export const Liftoff = (props: Props) => {
  return (
    <section className="liftoff">
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto px-4 lg:px-14">
        <div className="md:w-[39%]">
          <img src={doubleQuotes} alt="quotes/img" className="pb-[60px] mx-auto md:mx-0" />
          <h2 className="text-2xl text-[#E1E1E6] xsm:text-[32px] font-bold !leading-[140%]">
            Na programação o aprendizado é contínuo e sempre haverá um próximo
            nível.
          </h2>
          <div className="mt-6">
            <p className="text-[#C4C4CC] !leading-[160%]">
              É por isso que, ao final do NLW vamos abrir as matrículas para
              nossos programas pagos, o Ignite, para quem está na etapa de
              especialização, e o Explorer, para quem quer acessar sua primeira
              vaga em programação.
              <br />
              <br />
              Para aqueles que desejam dar o próximo passo, continuar os estudos
              através de uma metodologia completa e ainda mais aprofundada e
              seguir evoluindo na sua jornada como dev.
              <br />
              <br />
              Mas enquanto isso, você pode evoluir junto com a comunidade
              durante a semana do evento e aproveitar toda essa experiência com
              conteúdo inédito e totalmente gratuito produzido exclusivamente
              para essa edição especial do NLW, feita com a missão de capacitar
              pessoas nesse universo, independente do seu momento ou nível de
              conhecimento.
              <br />
              <br />
              <strong>
                Juntos vamos construir o futuro através da programação.{' '}
              </strong>
            </p>
          </div>
        </div>
        <div className="text-[#996DFF] pt-[60px] md:pt-0 mx-auto md:mx-0 md:mt-auto md:ml-auto text-[30px] md:text-[40px] font-bold !leading-[125%]">
          #neverstoplearning
        </div>
      </div>
    </section>
  )
}
