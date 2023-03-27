type DownloadButton = {
    handleDownload: () => void
    disabled: boolean
}

export function DownloadButton({ handleDownload, disabled }: DownloadButton) {
    return (
        <button
            disabled={disabled}
            onClick={handleDownload}
            className='rounded border border-violet-300 p-3 hover:bg-violet-300 hover:text-violet-900 disabled:pointer-events-none disabled:border-slate-700 disabled:text-slate-600'
        >
            Baixar JSON
        </button>
    )
}
