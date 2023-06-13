import { DownloadButton } from "../components/DownloadButton"
import { ExampleTable } from "../components/ExampleTable"
import { ProgressBar } from "../components/ProgressBar"
import { useFileTools } from "../hooks/useFileTools"

export function TxtToCsv() {
  const {
    handleChangeFileInput,
    convertTxtToJson,
    resetProgress,
    handleDowloadFile,
    fileContent,
    processingStatus,
  } = useFileTools()

  return (
    <div className='flex flex-col gap-10 items-center justify-center content-center min-h-screen w-full py-5'>
      <div className='flex flex-col items-center gap-5 p-5'>
        <p className='text-xl'>
          Conversor de arquivos TXT estruturado para CSV
        </p>
      </div>

        <p className='text-2xl'>
          Em desenvolvimento
        </p>

      {/* <div className='flex flex-col gap-5'>
        <ExampleTable />

        <div className='flex flex-col gap-10 p-10 border border-violet-900 rounded-md'>
          <p className=''>Selecione seu arquivo .txt</p>

          <input
            type='file'
            name='file'
            id='file'
            accept='.txt'
            onClick={resetProgress}
            onChange={handleChangeFileInput}
          />
        </div>

        <div className='flex flex-col gap-10 p-10 border border-violet-900 rounded-md'>
          <div className='flex flex-col gap-5 w-full'>
            <h3>Enviando arquivo ({processingStatus + "%"})</h3>

            <ProgressBar progress={processingStatus} />
          </div>

          <div className='flex flex-row items-center justify-center'>
            <DownloadButton
              disabled={!processingStatus}
              handleDownload={() =>
                handleDowloadFile(convertTxtToJson(fileContent))
              }
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
