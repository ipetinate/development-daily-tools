type ProgressBar = {
  progress: number
}

export function ProgressBar({ progress }: ProgressBar) {
  return (
    <div className='relative pt-1'>
      <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200'>
        <div
          style={{
            width: progress + "%",
          }}
          className='transition-all shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-500'
        ></div>
      </div>
    </div>
  )
}
