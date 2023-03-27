import { useState, useCallback, ChangeEvent, useMemo } from 'react'

export function useFileTools() {
    const [file, setFile] = useState<File>()
    const [fileContent, setFileContent] = useState<string>('')
    const [processingStatus, setProcessingStatus] = useState<number>(0)

    const handleChangeFileInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (!event.currentTarget.files) return

            if (!(event.currentTarget.files[0] === file)) resetProgress()

            setFile(event.currentTarget.files[0])
            readFile(event.currentTarget.files[0])
        },
        [setFile]
    )

    const reader = useMemo(() => new FileReader(), [])

    const readFile = useCallback(
        (file: File) => {
            reader.addEventListener('load', () =>
                setFileContent(reader?.result as any)
            )

            reader.addEventListener('progress', (event) =>
                setProcessingStatus((event.loaded * 100) / file.size)
            )

            reader.readAsText(file)
        },
        [setFileContent]
    )

    const convertTxtToJson = useCallback((text: string) => {
        const firstLine = text.split('\n')[0]
        const allLines = text.split('\n')

        delete allLines[0] // Remove headers
        delete allLines[1] // Remove separator

        const headers = firstLine.split('|').map((x) => x.trim())
        const convertedData = allLines.map((x) =>
            x
                .split('|')
                .map((_, i) => ({ [headers[i]]: x.split('|')[i].trim() }))
        )

        const formatedData = convertedData.filter(Boolean).map((item) => {
            let data = {}

            item.forEach((x) => {
                data = { ...data, ...x }
            })

            return data
        })

        return formatedData
    }, [])

    const handleDowloadFile = useCallback((content: any) => {
        const anchorEl = document.createElement('a')

        anchorEl.setAttribute('href', makeJsonFile(content))
        anchorEl.setAttribute(
            'download',
            `file-converted-${makeFileName()}.json`
        )

        anchorEl.click()
    }, [])

    const makeFileName = useCallback(() => new Date().toISOString(), [])

    const makeJsonFile = useCallback((content: any) => {
        const data =
            'data:text/json;charset=utf8,' +
            encodeURIComponent(JSON.stringify(content))

        return data
    }, [])

    const resetProgress = useCallback(() => setProcessingStatus(0), [])

    return {
        readFile,
        resetProgress,
        convertTxtToJson,
        handleDowloadFile,
        handleChangeFileInput,
        file,
        fileContent,
        processingStatus
    }
}
