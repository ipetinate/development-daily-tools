export function Home() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center gap-20 p-5'>
      <img src='./tools.png' alt='App logo' className='w-60 h-60' />

      <p className='text-3xl'>
        Ferramentas úteis para o dia-a-dia de engenheiros de software
      </p>

      <p className='text-xl'>
        Caso queira contribuir, você pode submeter um Pull Request no{" "}
        <a
          href='https://github.com/ipetinate/development-daily-tools'
          className='text-emerald-500 underline'
        >
          GitHub
        </a>
      </p>
    </div>
  )
}
