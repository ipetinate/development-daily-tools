export function ExampleTable() {
  return (
    <div className='flex flex-col gap-5'>
      <p>Formato esperado do TXT</p>

      <ul className='p-2 border rounded max-w-xl flex flex-col gap-2'>
        <li>
          <span className='text-slate-300'>1ª linha:</span>{" "}
          <span className='text-slate-400'>
            Cabeçalhos: nomes usados como chave do objeto
          </span>
        </li>
        <li>
          <span className='text-slate-300'>2ª linha:</span>{" "}
          <span className='text-slate-400'>
            Separador: será ignorado na conversão
          </span>
        </li>
        <li>
          <span className='text-slate-200'>3ª linha em diante:</span>{" "}
          <span className='text-slate-400'>
            valores, serão <i>splitados</i> e os valores serão usados como valor
            na posição referente a chave do cabeçalho
          </span>
        </li>
      </ul>
      <div className='text-center'>👇</div>

      <code>
        <div className='bg-slate-600 whitespace-pre-wrap p-3 rounded-md'>
          {`         nome         |      banda         |   instrumento
----------------------|--------------------|---------------
Steve Harris          | Iron Maiden        | Baixo elétrico
Ian Gillan            | Deep Purple        | Voz
`}
        </div>
      </code>
    </div>
  )
}
