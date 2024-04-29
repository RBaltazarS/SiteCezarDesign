
export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Bem-Vindo
          <span className="bg-gradient-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            for Design
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Desperte sua criatividade e dê vida às suas ideias. Comece hoje e libere sua imaginação para criar experiências imersivas extraordinárias!
        </p>
        <div className="flex justify-center my-10">
          <a
            target="_blank"
            href="https://www.behance.net/cezarmarcal6"
            className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
          >
            Start Portfolio
          </a>
          <a
            target="_blank"
            href="https://wa.me/5571999157354?text=Transformando+ideias+em+arte%21+%F0%9F%92%A1%F0%9F%8E%A8+Deixe+sua+marca+no+mundo+com+designs+%C3%BAnicos+e+impactantes.+Entre+em+contato+para+criar+juntos+algo+incr%C3%ADvel%21+%E2%9C%A8%F0%9F%96%8C%EF%B8%8F"
            className="py-3 px-4 mx-3 rounded-md border">
            Whatsapp
          </a>
        </div>

      </div>
    </section>
  )
}