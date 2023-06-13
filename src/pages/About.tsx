export function About() {
  return (
    <div className='flex flex-col gap-40 h-full w-full items-center justify-center'>
      <div className='flex flex-col gap-10 items-center justify-center text-center'>
        <p className='text-2xl'>Obrigado por utilizar esta ferramenta.</p>

        <p className='text-xl max-w-2xl w-full text-emerald-200 whitespace-pre-line'>
          Esse projeto foi criado, a partir de necessidades diárias. Ao ver
          colegas de trabalho passando por algumas dores, e eu mesmo passando
          pelas mesmas dores, resolvi criar algo que automatizasse algumas
          tarefas diárias.
        </p>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center'>
        <a
          href='https://github.com/ipetinate/convert-txt-to-json'
          target='_blank'
        >
          <img src='./github.svg' alt='Github logo' className='h-14 w-14' />
        </a>

        <p>
          Feito com 💜 por{" "}
          <a
            target='_blank'
            className='text-emerald-500 underline'
            href='https://github.com/ipetinate'
          >
            Isac Petinate
          </a>
        </p>
      </div>
    </div>
  )
}
