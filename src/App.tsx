import { DownloadButton } from './components/DownloadButton'
import { ExampleTable } from './components/ExampleTable'
import { ProgressBar } from './components/ProgressBar'
import { useFileTools } from './hooks/useFileTools'

export function App() {
    const {
        handleChangeFileInput,
        convertTxtToJson,
        resetProgress,
        handleDowloadFile,
        fileContent,
        processingStatus
    } = useFileTools()

    return (
        <div className='flex flex-col gap-10 items-center justify-center content-center h-full w-full '>
            <div className='flex flex-col items-center gap-5 p-5'>
                <img src='./tools.png' alt='App logo' className='w-40 h-40' />

                <p className='text-xl'>
                    Olá, bem-vindo, converta arquivos TXT estruturado para JSON
                </p>
            </div>

            <div className='flex flex-col gap-5'>
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
                        <h3>Enviando arquivo ({processingStatus + '%'})</h3>

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
                </div>
            </div>

            <div className='flex flex-col gap-5 items-center justify-center'>
                <a
                    href='https://github.com/ipetinate/convert-txt-to-json'
                    target='_blank'
                >
                    <img
                        src='./github.svg'
                        alt='Github logo'
                        className='h-14 w-14'
                    />
                </a>

                <p>
                    Made with 💜 by{' '}
                    <a
                        target='_blank'
                        className='text-cyan-300 underline'
                        href='https://github.com/ipetinate'
                    >
                        Isac Petinate
                    </a>
                </p>
            </div>
        </div>
    )
}
